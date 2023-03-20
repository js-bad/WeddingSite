
export default function ConfirmVaccination({ rootCtrl, show, name, updateVaccination }) {
    if (!show) return <></>;
    return (
        <div className="splash-guard">
            <div className={
                `confirm-vacc-content 
                ${rootCtrl.isMobile ? 'confirm-vacc-content-mobile' : ''} 
                straight-font`}>
                <span style={{ fontSize: "0.9em"}}>
                    To ensure the safety of all wedding guests, the Bride and Groom respectfully request 
                    that all attendees are vaccinated for COVID-19.
                </span><br/><br/>
                <span style={{ fontSize: "1.3em", fontWeight: "bold"}}>
                    Please confirm that '{name}' has been vaccinated for COVID-19, or will be by 4/22/23:
                </span><br/>
                <button className="vacc-btn vacc-btn-yes" onClick={() => updateVaccination(true)}>Yes</button>
                <button className="vacc-btn" onClick={() => updateVaccination(false)}>No</button>
                <br/>
                <span style={{ fontSize: "0.9em"}}>
                    If you are unable to be vaccinated or have any concerns, please contact Jessi or Kaleb.
                </span><br/>
                <a 
                    target="_blank"
                    className="cdc-hyperlink"
                    href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/stay-up-to-date.html">
                        Learn more about COVID-19 vaccines
                </a>

            </div>
        </div>
    )
}