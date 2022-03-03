import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../store/people.slice.js';

function People() {

  let dispatch = useDispatch();
  let people = useSelector(state => state.people);

  function handleAddPerson() {
    dispatch(add('test'));
  }
  function handleRemovePerson(name) {
    dispatch(remove(name));
  }

  return (
    <>
      {people.map((person, idx) => (
        <p key={idx} onClick={() => handleRemovePerson(person.name)}>{person.name}</p>
      ))}
      <button onClick={handleAddPerson}>Add Person</button>
    </>
  )
}

export default People;
