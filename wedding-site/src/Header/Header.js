import DesktopNav from "./DesktopNav/DesktopNav"
import MobileNav from "./MobileNav/MobileNav"

export default function Header(props) {


    return (
        <nav className='header-section'>
            <div style={{position: "fixed", width: '100%'}}>

            </div>
            { props.rootCtrl.isDesktop
                ? <DesktopNav tabContents={props.tabContents} />
                : <MobileNav tabContents={props.tabContents} />
            }
        </nav>
    )
}