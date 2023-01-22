import useRSVPCtrl from './useRSVPCtrl';
import { useState } from 'react';

export default function RSVP({ rootCtrl }) {
    var ctrl = useRSVPCtrl(rootCtrl);
    const [name, setName] = useState();

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            ctrl.nameLookup(name);
        }
    }

    return (
        <div style={{position:"relative"}}>
            <div className='init-rsvp-section straight-font'>
                <label className="init-rsvp-text straight-font" htmlFor='init-rsvp-name'>Enter name as it appears on invitation</label>
                <div className='init-rsvp-input-section'>
                    <input className='init-rsvp-name straight-font' id='init-rsvp-name' type='text' placeholder='Your Name' 
                    onChange={e => setName(e.target.value)} onKeyUp={e => handleKeyUp(e)} />
                    <button className='init-rsvp-enter curvy-font' onClick={e => ctrl.nameLookup(name)}>Submit</button>
                </div>
                { rootCtrl.isDesktop && <span className='init-rsvp-note'>(Please limit attendees to the guests specified below)</span>}
            </div>
            { rootCtrl.isDesktop?
            <div id="rsvp-disclaimers" className='straight-font'>
                <span style={{display: 'block'}}>*Event is 21+</span>
                <span style={{display: 'block'}}>*COVID-19 Vaccination Required</span>
            </div>
            :
            <div id="rsvp-disclaimers-mobile" className='straight-font'>
                <span style={{display: 'block'}}>*Event is 21+</span>
                <span style={{display: 'block'}}>*COVID-19 Vaccination Required</span>
                <span style={{display: 'block'}}>*Please limit attendees to the guests specified below</span>
            </div>
            }
            
            <div className='guest-rsvps'>
                {ctrl.guestRSVPs}
            </div>
        </div>
    )
}