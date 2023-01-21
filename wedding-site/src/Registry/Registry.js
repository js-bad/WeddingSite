import targetLogo from '../images/Target_logo.png';
import westElmLogo from "../images/west-elm-logo.svg";
import crateAndBarrelLogo from "../images/crate-and-barrel-logo.png";
import venmoLogo from "../images/venmo_logo.png";
import { useState } from 'react';

export default function Registry (props) {
    const isDesktop = props.rootCtrl.isDesktop;

    const [registryData, setRegistryData] = useState([
        {
            key: 'target',
            link: "https://www.target.com/gift-registry/gift/jessi-kaleb-wedding",
            image: targetLogo
        },
        // {
        //     key: 'westelm',
        //     link: "",
        //     image: westElmLogo
        // },
        // {
        //     key: 'crateandbarrel',
        //     link: "",
        //     image: crateAndBarrelLogo
        // }
    ]);

    const uiLinks = registryData.map((entry) => 
        <a href={entry.link} key={entry.key}
        target="_blank"
        className={`reg-link`}>
            <div className="img-wrapper">
                <img src={entry.image} />
            </div>
        </a>
    );

    return (
    <div>
        <div className="flex" style={{justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
            {uiLinks}
        </div>
        <div id="registryDivider" className="divider"></div>
        <div style={{display:'flex'}}><img style={{margin: 'auto',width:330}} src={venmoLogo} /> </div>
        <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',lineHeight:'0.1em',maxWidth:`${isDesktop?'80%':''}`,marginLeft:'auto',marginRight:'auto'}} className="straight-font">
            <h3 className='curvy-font' style={{fontSize:'1.5em'}}>Jessi: <span style={{fontSize:'.75em'}} className='mono-font'>@deliahhh</span></h3>
            <h3 className='curvy-font' style={{fontSize:'1.5em'}}>Kaleb: <span style={{fontSize:'.75em'}} className='mono-font'>@Kaleb-Olson-1</span></h3>
        </div>

    </div>
    );
}