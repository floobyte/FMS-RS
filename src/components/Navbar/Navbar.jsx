 import './Navbar.css'
 import PersonIcon from '@mui/icons-material/Person'; import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
 import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Navbar() {
  return (
    <>
    {/* navba  */}
    <div className="main-navbar-class">
        <div className="navbar-left-div">
            <div className="navbar-icon"><i>FMS-LOGO</i></div>
            <div className="extract-loaction">
                <i></i>
            </div>
        </div>
        <div className="navbar-mid-div"></div>
        <div className="navbar-right-div">
            <PersonIcon/>
        </div>
    </div>


    {/* blue nav  */}

    <div className="blue-main-div">
        <div className="blue-left-div">
            <PersonPinCircleIcon style={{paddingRight: '10px'}}/>
            <i>Share Your Loction</i>
        </div>
        <div className="blue-right-div">
            {/* <div className="blue-right-losction-detect">Detect Loaction</div> */}
            <div className="blue-detect-loction-true">INDORE <KeyboardArrowDownIcon/> </div>
        </div>
    </div>
    </>
  )
}

export default Navbar