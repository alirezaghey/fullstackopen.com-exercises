import React, { useState } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Numbers from './Numbers';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '45-7-45762234' },
    {name: 'Joe Nevermind', phone: '66-6-66666'},
    {name: 'z zola', phone: '65-7-7945867'},
    {name: 'Jack Javid', phone: '76-8765-56566'}
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');

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
      <Numbers numbers={filteredPersons} />
    </div>
  )
}

export default App
