import tabContentBinding from '../../tabContentBinding'
import Tab from './Tab/Tab'
import logo from '../../images/logo.svg'

export default function DesktopNav({tabContents}) {
    const tabs = Object.entries(tabContents).map(([key, value]) => <Tab key={ key } title={ key } route={ value.route }/>)

    return (
        <div className='desktop-header'>
                <div className='desktop-navbar'>
                    <div className='desktop-navbar-tab-container'>
                        {tabs}
                    </ div>
                
            </div>
        </div>

    )
}