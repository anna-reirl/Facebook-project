import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';



function Sidebar() {
    return (
        <div className="sidebar">
        <SidebarRow src="https://avatars2.githubusercontent.com/u/50011128?s=460&u=8cffea945a62d8933139f2b00460454466d35da8&v=4" 
        title="Anna Agabekyan" />
        <SidebarRow 
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messender" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" 
        />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" /> 
        <SidebarRow Icon={ExpandMoreOutlined}
        title="Marketplace" /> 
        </div>
    )
}

export default Sidebar