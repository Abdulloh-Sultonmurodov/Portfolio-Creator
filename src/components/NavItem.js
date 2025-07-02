const NavItem = ({item}) => {
    return(
        <a href="/">
            <span>{item.title}</span>
            {item.icon}
        </a>
    )
}

export default NavItem