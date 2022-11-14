import _ from "lodash";
export default function VIPs(props) {

    const weddingPartyMembers = [
        { 
            name: "Hannah Crossno", 
            title: "Maid of Honor"
        },
        {
            name: "Nate Olson",
            title: "Best Man"
        },
        {
            name: "Casey Henricksen"
        },
        {
            name: "Zach Aune"
        },
        {
            name: "Allyson Koehler"
        },
        {
            name: "Micah Saugen"
        },
        {
            name: "Zach Farmer"
        },
        {
            name: "Kyle Homstad"
        }
    ];

    const weddingPartyIcons = _.map(weddingPartyMembers, (member) => {
        return (
            <div key={ member.name } className="vip-icon">
                { member.title ? <span>{ member.title }</span> : '' }
                <span className="straight-font">{ member.name }</span>
                
            </div>
        );
    });

    const inMemoriamMembers = [
        {
            name: "Tanya Eisner",
            title: "Mother of the Bride"
        }
    ];

    const inMemoriamIcons = _.map(inMemoriamMembers, (member) => {
        return (
            <div key={ member.name } className="vip-icon">
                { member.title ? <span>{ member.title }</span> : '' }
                <span className="straight-font">{ member.name }</span>
                
            </div>
        );
    });

    return (
        <div>
            <h2 className="vips-header">In Loving Memory</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
                {inMemoriamIcons}
            </div>
            
            <div className="divider"></div>
            <h2 className="vips-header">Wedding Party!</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: ''
            }}>
                {weddingPartyIcons}
            </div>
        </div>

    );
}