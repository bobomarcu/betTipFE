import React from "react";
import { Link } from "react-router-dom";
import '../css/login.css'

export default function Login(){


    return(
        <section className="section">

                <div className="main">
                    <Link to='/' className = 'home'> Home</Link>
                    <form>
                        <p>Username</p>
                        <input
                        >
                        </input>
                        <br></br>
                        <p>Password</p>
                        <input
                        >
                        </input>
                        <br></br>
                        <br></br>
                        <button>Log In</button>
                        <br></br>
                        <br></br>
                        <Link to='/register'><button>Register</button></Link>
                    </form>
                   
                </div>  

        </section>
    )


}