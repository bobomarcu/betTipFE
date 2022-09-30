import React from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import '../css/bar.css'

export default function Bar(){

    const cookie = new Cookies()

    if(cookie.get('loggedIn')){

        return(
            <div className="bar">
                 <div className="barLeft">
                    <Link to='/'><button>Home</button></Link>
                </div>
                <div className="barRight">
                    <Link to='/login'><button>Log in</button></Link>
                </div>
            </div>
        )

    }
    else{
        return(
            <div className="bar">
                <div className="barLeft">
                    <Link to='/'><button>Home</button></Link>
                </div>
                <div className="barRight">
                    <Link to='/login'><button>Log in</button></Link>
                </div>
             
            </div>
        )
    }
}