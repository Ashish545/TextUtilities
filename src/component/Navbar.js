import React from 'react'
import PropTypes from 'prop-types'

// import { a } from 'react-router-dom'

export default function Navbar(props) {
    
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
            <a className="navbar-brand"href="#">{props.tittle}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        <a className="nav-a"href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-a"href="#">{props.aboutText} <span className="sr-only">(current)</span></a>
                    </li>

                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" id="searchTxt" type="search" placeholder="" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                {/* <form className={`form-inline my-2 my-lg-0 text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-control mr-sm-2" id="searchTxt" type="search" placeholder="" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 mx-3" type="submit" onClick={props.C_mode}>C-Mode</button>
                </form> */}



                    <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.D_mode}/>
                    <label class="form-check-label " htmlFor="flexSwitchCheckDefault"> Enable Dark Mode </label>
                    </div>

                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault mx-2"  onClick={props.B_mode}/>
                    <label className="form-check-label " htmlFor="flexSwitchCheckDefault"> Enable Blue Mode </label>
                    </div>



            </div>
        </nav>
    )
}  

Navbar.propTypes ={
 tittle: PropTypes.string,
 aboutText :PropTypes.string
  }
// Navbar.defaultProps ={
//  tittle: 'Home',
//  aboutText :'About is here'
//   }