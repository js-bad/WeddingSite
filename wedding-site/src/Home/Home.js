export default function Home(props) {
    const rootCtrl = props.rootCtrl;
    
    const desktopClasses = {
        tagline: 'tagline curvy-font',
        headline: 'headline',
        kaleb: 'headline-item',
        and: 'headline-item-and',
        jessi: 'headline-item',
                sprehn: 'headline-lastname curvy-font',
        olson: 'headline-lastname curvy-font',
        date: 'home-date straight-font',
        time: 'home-time',
        dateTime: 'home-datetime', 
        location: 'home-location',
        locationName: 'home-location-name straight-font',
        locationStreet: 'home-location-street straight-font',
        locationCity: 'home-location-city straight-font'
    }
    const mobileClasses = {
        tagline: 'tagline-mobile curvy-font',
        headline: 'headline-mobile',
        kaleb: 'headline-item-mobile',
        and: 'headline-item-and-mobile',
        jessi: 'headline-item-mobile',
        date: 'home-date-mobile straight-font',
        time: 'home-time-mobile straight-font',
        dateTime: 'home-datetime-mobile',
        location: 'home-location-mobile',
        locationName: 'home-location-name straight-font',
        locationStreet: 'home-location-street straight-font',
        locationCity: 'home-location-city straight-font'
    }

    const classes = rootCtrl.isDesktop ? desktopClasses : mobileClasses;

    return (
        <div className="home-page">
            <span className={classes.tagline}>please join us in celebrating<br />the marriage of</span>
            <div className={classes.headline}>
                <div style={{textAlign:"center"}}>
                    <h2 className={classes.jessi}>JESSI</h2>
                    {props.rootCtrl.isDesktop && <span className={classes.sprehn}>sprehn</span> }
                </div>
                {/* <span className='headline-item headline-item-line'></span> */}
                <h2 className={classes.and}>and</h2>
                {/* <span className='headline-item headline-item-line'></span> */}
                <div style={{textAlign:"center"}}>
                    <h2 className={classes.kaleb}>KALEB</h2>
                    {props.rootCtrl.isDesktop && <span className={classes.olson}>olson</span> }
                </div>
            </div>

            {props.rootCtrl.isDesktop && <div className="divider"></div>}
            <div className={classes.dateTime}>
                <span className={classes.date}>4.22.2023</span>
                <span className={classes.time}>three o'clock</span>
            </div>

            <div className={classes.location}>
                <span className={classes.locationName}>northern stacks events</span>
                <span className={classes.locationStreet}>38 northern stacks drive</span>
                <span className={classes.locationCity}>fridley, mn</span>
            </div>
        </div>
    )
}