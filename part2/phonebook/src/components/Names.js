const Names = ({persons, setPersons, clickHandler}) => {
           
    return (
        <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.number} <button value={person.id} name={person.name} onClick={clickHandler}>delete</button></li>)}
        </ul>
    )
}

export default Names