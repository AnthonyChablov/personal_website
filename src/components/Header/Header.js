
const Header = ({title}) => {
  return (
    <div className="header">
      <div className="header__wrapper ">
        <div className="header__content container">
          <h1 className="header__title ">{title}</h1>
        </div>
      </div>
        
    </div>
  )
}

export default Header