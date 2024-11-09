import { SidebarWeb } from '../SidebarWeb/SidebarWeb';
import { SidebarMob } from '../SidebarMob/SidebarMob';


export const Sidebar = (): JSX.Element => {
    return (
        <>
            <SidebarWeb />
            <SidebarMob />
        </>
    );
};
