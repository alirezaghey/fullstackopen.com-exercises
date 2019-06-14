import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Numbers from './Numbers';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');

  useEffect( () => {
    axios
      .get('http://localhost:3001/persons')
      .then( res => {
        console.log(res);
        setPersons(res.data);
      })
  }, []);

  const filteredPersons = filter === '' ? persons :
    persons.filter(person => person.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()));
  const handleNameChange = event => setNewName(event.target.value);
  const handlePhoneChange = event => setNewPhone(event.target.value);
  const handleFilterChange = event => setFilter(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    if (persons.some(person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase())) {
      alert(`${newName} is already added to the phonebook!`);
      return;
    }
    setPersons(persons.concat({name: newName, phone: newPhone}));
    setNewName('');
    setNewPhone('');
  }
  return (
    <div>
      <h1>Phonebook</h1>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>Add new</h2>
      <PersonForm handleNameChange={handleNameChange} handleSubmit={handleSubmit} handlePhoneChange={handlePhoneChange} newName={newName} newPhone={newPhone}/>

      <h2>Numbers</h2>
      <Numbers persons={filteredPersons} />
    </div>
  )
}

export default App
