import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Overview',
    path: '/',
    },

    {
    label: 'Why?',
    path: '/why'
    },

    {
        label: 'Skills',
        path: '/skills' 
    },

    {
        label: 'Submit Email',
        path: '/submitemail'
    },


]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem key={item.label} label={item.label} path={item.path} />
                ))
            }
        </ul>
    )
}