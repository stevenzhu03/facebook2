import { useSession } from "next-auth/client"
import {
    ChevronDownIcon,
} from "@heroicons/react/solid";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
    UserGroupIcon,
    ShoppingBagIcon
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
    const [session, loading] = useSession();

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            {/* TO_REPLACE session.user.image session.user.name*/}
            <SidebarRow src={"https://tinyurl.com/kzwjktaf"} title="Steven Zhu" />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar;