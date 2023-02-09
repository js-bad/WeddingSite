import Home from './Home/Home'
import VIPs from './VIPs/VIPs'
import Gallery from './Gallery/Gallery'
import Location from './Location/Location'
import RSVP from './RSVP/RSVP'
import Registry from './Registry/Registry'

function tabContentBinding(args) {

    return {
        'Home': {
            path: 'Home/Home.js',
            component: <Home rootCtrl={args.rootCtrl} />,
            route: '/'
        },
        'Details': {
            path: 'Location/Location.js',
            component: <Location rootCtrl={args.rootCtrl} />,
            route: '/location'
        },
        'VIPs': {
            path: 'VIPs/VIPs.js',
            component: <VIPs rootCtrl={args.rootCtrl} />,
            route: '/VIPs'
        },
        'RSVP': {
            path: 'RSVP/RSVP.js',
            component: <RSVP rootCtrl={args.rootCtrl} />,
            route: '/rsvp'
        },
        'Gallery': {
            path: 'Gallery/Gallery.js',
            component: <Gallery rootCtrl={args.rootCtrl} />,
            route: '/gallery'
        },
        'Registry': {
            path: 'Registry/Registry.js',
            component: <Registry rootCtrl={args.rootCtrl} />,
            route: '/registry'
        }
    }
} 

export default tabContentBinding