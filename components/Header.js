import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    FlagIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    ShoppingCartIcon,
    PlayIcon
} from "@heroicons/react/solid";
import {
    SearchIcon
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useState } from "react";

const Header = () => {
    const [activeState, setActiveState] = useState({
        states: {
            home: true,
            flag: false,
            play: false,
            shopping: false,
            userGroup: false,
        },
        lastActive: "home"
    });

    const handleActiveStateChange = (id) => {
        const icon = id;
        const lastActive = activeState.lastActive;

        setActiveState({
            states: {
                ...activeState.states,
                [lastActive]: false,
                [icon]: true
            },
            lastActive: icon
        });
    }

    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div flex items-center>
                <Image
                    src="http://links.papareact.com/5me"
                    alt="Facebook-logo"
                    width={40}
                    height={40}
                    layout="fixed"
                />
            </div>
            <div className="flex ml-2 rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600" />
                <input
                    className="hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink"
                    type="text"
                    placeholder="Search Facebook"
                />
            </div>

            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon name="home" Icon={HomeIcon} active={activeState.states.home} handleActiveStateChange={handleActiveStateChange} />
                    <HeaderIcon name="flag" Icon={FlagIcon} active={activeState.states.flag} handleActiveStateChange={handleActiveStateChange} />
                    <HeaderIcon name="play" Icon={PlayIcon} active={activeState.states.play} handleActiveStateChange={handleActiveStateChange} />
                    <HeaderIcon name="shopping" Icon={ShoppingCartIcon} active={activeState.states.shopping} handleActiveStateChange={handleActiveStateChange} />
                    <HeaderIcon name="userGroup" Icon={UserGroupIcon} active={activeState.states.userGroup} handleActiveStateChange={handleActiveStateChange} />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center justify-end sm:space-x-2">
                {/* Profile Pic */}
                {/* TO_REPLACE session.user.name */}
                <p className="whitespace-nowrap font-semibold pr-3">Steven Zhu</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    );
};

export default Header;
