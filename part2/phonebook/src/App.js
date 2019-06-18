import React, { useState, useEffect} from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Numbers from './Numbers';
import NumbersService from './Services/Numbers';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');

  useEffect( () => {
    NumbersService
      .getAll()
      .then(numbers => setPersons(numbers));
  }, []);

  const filteredPersons = filter === '' ? persons :
    persons.filter(person => person.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()));
  const handleNameChange = event => setNewName(event.target.value);
  const handlePhoneChange = event => setNewPhone(event.target.value);
  const handleFilterChange = event => setFilter(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    if (persons.some(person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase())) {
      if(window.confirm(`${newName} is already in the phonebook! Update it?`)) {
        const updatedPerson = persons.find(p => p.name.toLocaleLowerCase() === newName.toLocaleLowerCase())
        NumbersService
          .update(updatedPerson.id, {...updatedPerson, number: newPhone})
          .then(res => {
            setPersons(persons.map(person => person.id !== updatedPerson.id ? person : res));
            setNewName('');
            setNewPhone('');
          })
      }
    }
    else {
      const newPerson = {name: newName, number: newPhone};
      NumbersService
        .create(newPerson)
        .then((res) => {
          setPersons(persons.concat(res));
          setNewName('');
          setNewPhone('');
        })
    }
  }
  const handleDelete = id => {
    NumbersService
      .remove(id)
      .then((res) => {
        if (res.status === 200) {
          setPersons(persons.filter(person => person.id !== id));
        }
      })
  }
  return (
    <div>
      <h1>Phonebook</h1>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>Add new</h2>
      <PersonForm
        handleNameChange={handleNameChange}
        handleSubmit={handleSubmit}
        handlePhoneChange={handlePhoneChange}
        newName={newName} newPhone={newPhone}/>

      <h2>Numbers</h2>
      <Numbers persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App
