import targetLogo from '../images/Target_logo.png';
import westElmLogo from "../images/west-elm-logo.svg";
import crateAndBarrelLogo from "../images/crate-and-barrel-logo.png";
import williamsSonomaLogo from "../images/williams-sonoma-logo.svg"
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
        //     key: 'williamssonoma',
        //     link: "https://www.williams-sonoma.com/registry/lxp8tgv67g/registry-list.html",
        //     image: williamsSonomaLogo
        // },
        {
            key: 'crateandbarrel',
            link: "https://www.crateandbarrel.com/gift-registry/jessi-sprehn-and-kaleb-olson/r6657481",
            image: crateAndBarrelLogo
        }
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
        <div id="venmoNote" class="curvy-font" style={{textAlign:"center", fontSize:"1.3em"}}><span>All Cash/Venmo gifts will contribute towards maintenance and renovations for our beautiful home! 😄</span></div>
        <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',lineHeight:'0.1em',maxWidth:`${isDesktop?'80%':''}`,marginLeft:'auto',marginRight:'auto'}} className="straight-font">
            <h3 className='curvy-font' style={{fontSize:'1.5em'}}>Jessi: <span style={{fontSize:'.75em'}} className='mono-font'>@deliahhh</span></h3>
            <h3 className='curvy-font' style={{fontSize:'1.5em'}}>Kaleb: <span style={{fontSize:'.75em'}} className='mono-font'>@Kaleb-Olson-1</span></h3>
        </div>

    </div>
    );
}