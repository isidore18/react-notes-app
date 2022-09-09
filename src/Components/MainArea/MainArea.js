import React, { useEffect, useState, useRef } from 'react';
import './MainArea.css';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";

const MainArea = () => {

    const [noteInfo, setNoteInfo] = useState({
        title: '',
        subtitle: '',
        body: ''
    })

    const [noteInfoModify, setNoteInfoModify] = useState({
        title: '',
        subtitle: '',
        body: ''
    })

    const [validation, setValidation] = useState(true);

    const selected = useSelector(state => state.selectedReducer.selectedNote);


    useEffect(() => {
        setNoteInfoModify(selected)
        console.log(selected);
    }, [selected])

    useEffect(() => {
        console.log(noteInfoModify );
    }, [noteInfoModify])
    


    const dispatch = useDispatch();

    const handleForm = e => {
        e.preventDefault();

        if (selected.toggle) {
            if (selected.title.length < 1) {
                setValidation(false)
                return
            }
            setValidation(true)

            dispatch({
                type: 'UPDATENOTE',
                payload: noteInfoModify
            })
            dispatch({
                type: 'RESETNOTE'
            })
            setNoteInfoModify({
                title: '',
                subtitle: '',
                body: ''
            })
            setValidation(true)
        } else if (!selected.toggle) {
            dispatch({
                type: 'ADDNOTE',
                payload: {
                    ...noteInfo,
                    id: uuidv4
                }
            })
            setNoteInfo({
                title: '',
                subtitle: '',
                body: ''
            })
        }

        if (noteInfo.title.length < 1) {
            setValidation(false);
            return
        }


    }

    const updateInputs = e => {
        const actualInp = e.target.getAttribute('id');

        if (selected.toggle) {
            const newObjState = { ...noteInfoModify, [actualInp]: e.target.value }
            setNoteInfoModify(newObjState)
        } else if (selected.toggle === false) {
            const newObjState = { ...noteInfo, [actualInp]: e.target.value }

            setNoteInfo(newObjState)
        }
    }

    return (
        <div className='container-content'>
            <h2>Votre plume</h2>

            <form onSubmit={handleForm}>
                <label htmlFor="title"></label>
                <input
                    type="text"
                    id="title"
                    onChange={updateInputs}
                    value={noteInfoModify.toggle ? noteInfoModify.title : noteInfo.title} />
                {
                    !validation && (
                        <span className="info-validation">Veuillez enregistrer un titre</span>
                    )
                }
                <label htmlFor="subtitle"></label>
                <input
                    type="text"
                    id="subtitle" onChange={updateInputs}
                    value={noteInfoModify.toggle ? noteInfoModify.subtitle : noteInfo.subtitle} />

                <label htmlFor='body'>Votre texte</label>
                <textarea
                    id="body"
                    placeholder='Votre texte...'
                    onChange={updateInputs}
                    value={noteInfoModify.toggle ? noteInfoModify.body : noteInfo.body} />
                <button type='submit'>Enregistrer</button>
            </form>
        </div>
    );
}

export default MainArea;
