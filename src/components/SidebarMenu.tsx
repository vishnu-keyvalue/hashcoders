import { FC } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Icon from './Icon';
import Link from 'next/link';

const SidebarMenu: FC = () => {
    const menuItemArray = [
        {name: 'Dashboard', icon: '/icons/dashboard.png', page: '/username', width: 30, height: 30},
        {name: 'Create Listing', icon: '/icons/create-listing.png', page: '/username'},
        {name: 'View Listing', icon: '/icons/view-listing.png', page: '/username'},
        {name: 'Analysis', icon: '/icons/analysis.png', page: '/username'},
        {name: 'Logout', icon: '/icons/logout.png', page: '/username', width: 30, height: 30}
    ];
    return (
        <Sidebar rootStyles={{minHeight: '89vh', position: 'fixed', bottom: 0, top: 0,
        boxShadow: '0px 0px 32px 0px rgba(136, 152, 170, 0.15)'}}>
            <h4 style={{margin: 20}}>Ad Deck</h4>
            <Menu>
                {menuItemArray?.map(((item, index) => (
                    <MenuItem 
                        key={index}
                        icon={(<Icon url={item?.icon} width={item?.width} height={item?.height} />)}
                    >
                        <Link href={item?.page} style={{ textDecoration: 'none', color: 'black' }}>{item?.name}</Link>
                    </MenuItem>
                )))}
            </Menu>
        </Sidebar>
    );
};

export default SidebarMenu;
