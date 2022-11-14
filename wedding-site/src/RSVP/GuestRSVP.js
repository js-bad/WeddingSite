import { useState } from 'react'
import services from '../services'
import ConfirmVaccination from './ConfirmVaccination';

export default function GuestRSVP(props) {
    const s = services();

    const [rsvp, setRSVP] = useState(props.rsvp);
    const [name, setName] = useState(getNameFromRSVP());
    const [attending, setAttending] = useState();
    const [attendingNotClicked, setAttendingNotClicked] = useState(!rsvp.completed);
    const [notes, setNotes] = useState(getNotesFromRSVP());
    const [submitted, setSubmitted] = useState(false);
    const [isVaccinated, setIsVaccinated] = useState();
    const [confirmVaccinationOpen, setConfirmVaccinationOpen] = useState(false);


    if (rsvp.completed && attending === undefined) {
        setAttending(rsvp.attending);
    }

    function getNameFromRSVP() {
        return (rsvp.guestName !== '(Placeholder)') ? rsvp.guestName : '';
    }
    function getNotesFromRSVP() {
        if (!rsvp.notes && rsvp.isPlusOne){
            return '\"Plus One\" guest \n'
        }
        return rsvp.notes;
    }
    

    const submitDisabled = () => {
        if (!name || name === '' || attendingNotClicked) return true;
        else return false;
    }


    const attendingChanged = (value) => {
        setAttendingNotClicked(false);
        if (value) {
            setConfirmVaccinationOpen(true);
        }
        setAttending(value);
    }

    const updateVaccination = (vaccStatus) => {
        if (!vaccStatus) {
            setAttending(false);
        }
        setIsVaccinated(vaccStatus);
        setConfirmVaccinationOpen(false);
    }

    const handleSubmit = (event) => {
        const updateRSVP = {
            _id: rsvp._id,
            guestName: name,
            groupID: rsvp.groupID,
            completed: true,
            isPlusOne: rsvp.isPlusOne,
            isVaccinated: isVaccinated,
            notes: notes,
            attending: attending
        };
        if (props.send(updateRSVP)){
            setSubmitted(true);
        } 
        else
        {
            s.publishError("An unknown error has occurred");
        }
        setRSVP(updateRSVP)
    }

    return (
        !submitted
        ?
        <div className='guest-rsvp'>
            <div className='guest-rsvp-field'>
                {rsvp.isPlusOne 
                ? <input placeholder='Enter Guest Name' id={`name-${rsvp._id}`} type="text" value={name}
                    onChange={e => setName(e.target.value)} className='guest-rsvp-field-plusone-input'
                    style={{display: 'block'}}></input>
                : <h3>{name}</h3>
                }
                
            </div>
            <div className='guest-rsvp-field'>
                <label htmlFor={`attending-${rsvp._id}`}>Attending:</label>
                    <label htmlFor={`yes-attending-${rsvp._id}`} className='radio-btn-label'>Yes</label>
                    <input name={`attending-${rsvp._id}`} id={`yes-attending-${rsvp._id}`} type="radio" onClick={e => attendingChanged(true)} 
                        className='add-space' checked={attending} readOnly></input>
                    <label htmlFor={`no-attending-${rsvp._id}`} className='radio-btn-label'>No</label>
                    <input name={`attending-${rsvp._id}`} id={`no-attending-${rsvp._id}`} type="radio" onClick={e => attendingChanged(false)}
                        checked={attending === false} readOnly></input>
            </div>
            <div className='guest-rsvp-field'>
                <label htmlFor='notes'>Notes / Dietary Restrictions:</label><br/>
                <textarea name='notes' type="text" onChange={e => setNotes(e.target.value)}
                    defaultValue={notes}></textarea>
            </div>
            <div className='guest-rsvp-field'>
                <button disabled={submitDisabled()} onClick={e => handleSubmit(e)}>RSVP</button>
            </div>
            <ConfirmVaccination rootCtrl={props.rootCtrl} show={confirmVaccinationOpen} name={name} updateVaccination={updateVaccination} />
        </div>
        :
        <div className='guest-rsvp thx-rsvp-container'>
            <h3 className='thx-rsvp'>Thank You!</h3>
        </div>
    )
}