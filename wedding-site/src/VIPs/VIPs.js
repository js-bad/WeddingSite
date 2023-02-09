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
            name: "Allyson Koehler",
            imgUrl: "https://wedding-site-uploads.s3.us-east-2.amazonaws.com/allyson.jpg"
        },
        {
            name: "Micah Saugen"
        },
        {
            name: "Zach Farmer",
            imgUrl: "https://wedding-site-uploads.s3.us-east-2.amazonaws.com/farmer.jpg"
        },
        {
            name: "Kyle Homstad",
            imgUrl: "https://wedding-site-uploads.s3.us-east-2.amazonaws.com/kyle.jpg"
        }
    ];

    const weddingPartyIcons = _.map(weddingPartyMembers, (member) => {
        return (
            <div key={ member.name } className="vip-icon">
                
                { member.title ? <span className="curvy-font">{ member.title }</span> : '' }
                <span className="straight-font">{ member.name }</span>
                <div className="img-box"><img src={member.imgUrl} /></div>
            </div>
        );
    });

    const inMemoriamMembers = [
        {
            name: "Tanya Eisner",
            title: "Mother of the Bride",
            imgUrl: "https://wedding-site-uploads.s3.us-east-2.amazonaws.com/tanya.png"
        }
    ];

    const inMemoriamIcons = _.map(inMemoriamMembers, (member) => {
        return (
            <div key={ member.name } className="vip-icon">
                { member.title ? <span className="curvy-font">{ member.title }</span> : '' }
                <span className="straight-font">{ member.name }</span>
                <div className="img-box"><img src={member.imgUrl} /></div>
            </div>
        );
    });

    return (
        <div>
            <h2 className="vips-header curvy-font">In Loving Memory:</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
                {inMemoriamIcons}
            </div>
            
            <div className="divider"></div>
            <h2 className="vips-header curvy-font">The Wedding Party:</h2>
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