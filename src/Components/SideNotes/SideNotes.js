import React, {useEffect, useState} from 'react';
import './SideNotes.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Note from './Note/Note';



export default function SideNotes() {
    const {notes} = useSelector(state => state.notesReducer);
    const [notesList, setNotesList] = useState(notes);
    const dispatch = useDispatch();

    useEffect(() => {
        setNotesList(notes)
    }, [notes]);

    const preventForm = e => e.preventDefault();

    const handleFilter = e => {
        const stateCopy = [...notes];
        const filteredArr = stateCopy.filter((item) => item.title.toLowerCase().includes(e.target.value));
        setNotesList(filteredArr)
    }


  return (
    <div className='notes-display'>
        
        <h2>Mes Notes</h2>

        <form onSubmit={preventForm}>
            <input type="text" name="" id="search-notes" placeholder='Rechercher' onChange={handleFilter} />
        </form>
        <ul className='notes-list'>

        {notesList.map(item => {
            
            return <Note  key={item.id} id={item.id} title={item.title} subtitle={item.subtitle} body={item.body} />
        })}
        </ul>

    </div>
  )
}
