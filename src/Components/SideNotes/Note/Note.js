import React from 'react';
import './Note.css';
import bin from './remove.svg';
import edit from './edit.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Note = (props) => {

    const dispatch = useDispatch()

    const deleteNote = () => {
        dispatch({
            type: 'DELETENOTE',
            payload: props.id
        })
    }

    const updateNote = () => {
        dispatch({
            type: 'UPDATENOTE',
            payload: props
        })
    }

    return (
        <li className='txt-note-prev'>
            <Link to={{
                pathname: `displayNote/${props.title}`
            }} >

                <div className="bloc-note-left">
                    <p>{props.title}</p>
                    <p>{props.subtitle}</p>
                </div>
            </Link>
            <div className="bloc-note-right" >
                <button onClick={deleteNote}>
                    <img src={bin} alt="delete icon" />
                </button>
                <Link to="/edit">
                    <button onClick={updateNote}>
                        <img src={edit} alt="edit icon" />
                    </button>
                </Link>
            </div>
        </li >
    );
}

export default Note;
