import CustomLink from "../CustomLink/CustomLink"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__content container">
                <div className="navbar__primary">
                    <CustomLink
                        addClassName = 'navbar__link--primary'
                        linkTo='/'
                        content='Anthony Chablov'
                    ></CustomLink>
                </div>
                <div className="navbar__secondary">
                    <CustomLink
                        addClassName = 'navbar__link--secondary'
                        linkTo='/projects'
                        content='Projects'
                    ></CustomLink>
                    <CustomLink
                        addClassName = 'navbar__link--secondary'
                        linkTo='/about'
                        content='About'
                    ></CustomLink>
                    <CustomLink
                        addClassName = 'navbar__link--secondary'
                        linkTo='/contact'
                        content='contact'
                    ></CustomLink>
                    <CustomLink
                        addClassName = 'navbar__link--secondary'
                        linkTo='/skills'
                        content='skills'
                    ></CustomLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar