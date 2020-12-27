import {
    Home,
    Anchor,
    Headphones
} from 'react-feather';

export const MENUITEMS = [
    {
        title: 'Dashboard', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/userdashboard/default', title: 'Home', type: 'link' },
            { path: '/userdashboard/registercase', title: 'Register your case', type: 'link' },
            { path: '/userdashboard/securecontract', title: 'Secure your contracts', type: 'link' },
        ]
    },
    {
        title: 'View Case Detail', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/userdashboard/accesscasedetail', title: 'CASE1', type: 'link' },
        ]
    },
    {
        title: 'View Case Timeline', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/userdashboard/timeline', title: 'VIEW CALENDER', type: 'link' },
        ]
    },
    {
        title: 'Contact', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/userdashboard/contact', title: 'SETTLEMENT TABLE', type: 'link' },
            { path: '/userdashboard/contact', title: ' THE NEUTRAL', type: 'link'},
            { path: '/userdashboard/contact', title: ' WRITE TO US', type: 'link'},
        ]
    },
    {
        title: 'Support Ticket', icon: Anchor, type: 'link', path: '/support-ticket/supportTicket', active: false
    },
    {
        path: 'http://support.pixelstrap.com/help-center', title: 'Raise Support', icon: Headphones, type: 'exteral_link', active: false
    },
    {
        title:'Mailid'
    },
    {
        title:'123456789'
    }
]


export const NEWMENUITEMS = [

    {
        title: 'YOUR CASES', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/', title: 'CASE1', type: 'link' },
        ]
    },
    {
        title: 'SCHEDULE HEARING', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/', title: 'VIEW CALENDER', type: 'link' },
        ]
    },
    {
        title: 'REMARKS', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/', title: 'CASE1', type: 'link' },
        ]
    },
    {
        title: 'CONTACT THE COORDINATOR', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/', title: 'VIEW CALENDER', type: 'link' },
        ]
    },

]

