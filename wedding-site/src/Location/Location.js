import NSElogo from '../images/northernstackslogo.png';
import embassyLogo from '../images/embassy-suites.svg';
import livInnLogo from '../images/livinn-hotels.png';

export default function Location(props) {
    const nseMapsLink = "https://www.google.com/maps/place/Northern+Stacks+Events/@45.0558776,-93.2756185,17z/data=!3m1!4b1!4m5!3m4!1s0x52b33160c9e85d05:0xace3695f6d9e08b7!8m2!3d45.0558738!4d-93.2734298";
    const hiltonBookLink = "https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=MSPBRES&arrivalDate=2023-04-22&departureDate=2023-04-23&room1NumAdults=2&inputModule=HOTEL_SEARCH&viewPackagesAndPromotionsRate=true&WT.mc_id=zLADA0WW1XX2OLX3DA4MS5MS6_MSPBRES7_298227037_&adType=FL&dsclid=49474429285597184&dclid=COju9Nmju_sCFUbF9gIdUcYPNA&hmGUID=775743f1-d5ea-44b8-9a37-a2a19e17158a&bm-verify=AAQAAAAG_____61dsnZwmCD9YupC5atprLvSuXflFG-qR6W60yC5x36gymoLZF7Pcb7G3L7YKVbIbkNRamR86tKRFoFDn_vXJb0Wqx4Zfl2ggJS-mq5kCuE2SUpd-nnNWfLk8IRVWFp7fg-YNQZOgOKyfyYFE2WbujX3HMhzIkyRcLX9UAXvnGNtFnXY6kuppPJytn50WdwcFcYMfVsK9NafnuAbKxfgM2YA0Vx5w5A4-yuQgjpnwgm9wNklF0B1f5xPJvIhNvZagK0-iUDMkbRTJbUn_3H6mFI7sOyNSwtihE41vg5JsurSPgyc5Lp9J9gBwSxAgIYOypKdGrgeFxylJz8gru4OS5s8wUnY_Px19uTc7gwswzlHkQYLsmiflUVYr1dTrskvO2XLU5yvQLjJDxmdvQsBYz9LfffxRPBINw0wozglpkXeKXD3fZl-ylidLUwGCKtiHAGFHdDYTnsWMoinaqfp48i7PWe5NlssyXJSq_-d-1Rn6CoyhQauzjFSSTdw8TXdm53JXDzafU8SXoUP_Qv8Jes06fxNjtC_Wim0YWuOU0l6Q55HE-PjzMK66lziwxY-IqP7VUw8ylhHKVwgluETwXpC9W3MfA7TbqaJ6is_Oy13ArOuS1flLYG2aB0LNmujPPfCq4hOHnzxkz4-bT3BrScy5gqjogPRg3CK5JTaEWiWxZkk1qCxvC2HliOcQpuCgpVAMh6xg3yEFUpLar21b3VDCxdrRNaKX4CwdXeJgFyiU2gB9pjoy29ctIDat3x52GYH8s6pHARDThz1rNiHKqSkCn2U3CmND2QyS8iZpxNrAmc06ezo2mO3BHXaEM1Rg-l3pFXtXPlh3_pb9txqh75mfMGzMFiGtT_gX3QiP8yQbys-KHxitl_mXzjxhwOLVL9Q146oRRNQWYc9eDXOAtA5_27h_InbQpY75-mvWJoTCVq-Jw";
    const liveINNBookLink = "https://be.synxis.com/?adult=2&arrive=2023-04-22&chain=15693&child=0&currency=USD&depart=2023-04-23&filter=META&hotel=60020&level=hotel&locale=en-US&rooms=1&src=goog_organic&start=availresults&utm_campaign=google-hpa-60020&utm_content=mapresults_19-02-2023_1_60020_US_desktop_default___organic&utm_medium=channel_connect&utm_source=google-hpa";
    const isMobile = props.rootCtrl.isMobile;

    return(
        <div className="straight-font">
            <div>
                <h3 className='curvy-font' style={{fontSize: '2em'}}>Ceremony + Reception:</h3>
                <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <div style={{display: 'flex', flexDirection: 'column', fontSize: '1.2em'}}>
                        <div style={{fontWeight: 'bold', fontSize: '1.1em'}}>Northern Stacks Events</div>
                        <a href={nseMapsLink}
                            className="hyperlink">
                                <div>38 Northern Stacks Drive</div>
                                <div>Fridley, MN</div>
                        </a>
                        
                        <span style={{marginTop: '15px'}}>Parking: Free Onsite</span>
                        <span>The ceremony will begin at 3:00PM</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: isMobile ? '100%' : '30%', marginTop: isMobile && '10px'}}>
                        <div style={{textAlign: 'center'}}>
                            Northern Stacks Events is connected to Forgotten Star Brewery+Taproom, guests are 
                            welcome to come and go between the two areas!
                        </div>

                    </div>
                    <div ><img src={NSElogo} /></div>

                </div>

            </div>
            <div className="divider"></div>
            <div>
                <h3 className='curvy-font' style={{fontSize: '2em'}}>Lodging:</h3>
                <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-around'}}>
                    <a 
                        href={hiltonBookLink} 
                        className={`hotel-button${isMobile ? ' hotel-button-mobile' : ''}`}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{fontWeight: 'bold'}}>Embassy Suites by Hilton - Minneapolis North</div>
                            <div className='divider' style={{margin: '3px 0'}}></div>
                            <div>6300 Earle Brown Dr</div>
                            <div>Brooklyn Center, MN 55430</div>
                        </div>
                        <img src={embassyLogo} id="embassyLogo" />
                    </a>
                    <a 
                        href={liveINNBookLink} 
                        className={`hotel-button${isMobile ? ' hotel-button-mobile' : ''}`}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>

                            <div style={{fontWeight: 'bold'}}>LivINN Hotel Minneapolis North/Fridley</div>
                            <div className='divider' style={{margin: '3px 0'}}></div>
                            <div>5201 NE Central Ave</div>
                            <div>Fridley, MN 55421</div>
                        </div>
                        <img src={livInnLogo} id="livInnLogo" />
                    </a>
                </div>
            </div>
        </div>
    )
}