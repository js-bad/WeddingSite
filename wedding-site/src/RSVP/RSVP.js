import useRSVPCtrl from './useRSVPCtrl';
import { useState } from 'react';

export default function RSVP() {
    var ctrl = useRSVPCtrl();
    const [name, setName] = useState();

    const handleKeyUp = (e) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            console.log('in if')
            ctrl.nameLookup(name);
        }
    }

    return (
        <>
            <div className='init-rsvp-section straight-font'>
                <label className="init-rsvp-text straight-font" htmlFor='init-rsvp-name'>Enter name as it appears on invitation:</label>
                <div className='init-rsvp-input-section'>
                    <input className='init-rsvp-name straight-font' id='init-rsvp-name' type='text' placeholder='Your Name' 
                    onChange={e => setName(e.target.value)} onKeyUp={e => handleKeyUp(e)} />
                    <button className='init-rsvp-enter curvy-font' onClick={e => ctrl.nameLookup(name)}>Submit</button>
                </div>
            </div>
            
            
            <div className='guest-rsvps'>
                {ctrl.guestRSVPs}
            </div>
        </>
    )
}