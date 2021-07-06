const HeaderIcon = ({ name, Icon, active, handleActiveStateChange }) => {
    return (
        <div id={name} onClick={() => handleActiveStateChange(name)} className={`flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl group`}>
            <Icon className={`text-gray-500 h-5 sm:h-7 mx-auto group-hover:text-blue-500 ${active && "text-blue-600"}`} />
        </div>
    )
}

export default HeaderIcon;