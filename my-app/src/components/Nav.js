import whiteLogo from '../images/tinder_logo_white.png'
import colorLogo from '../images/color-logo-tinder.png'


function Nav({minimal, authToken, setShowModal, showModal}) {

   const handleClick = () =>{
    setShowModal(true)
   }

    return (
      <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? colorLogo : whiteLogo}
        />
      </div>

      {!authToken && !minimal && 
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
        }
    </nav>
    );
  }
  
  export default Nav;
  