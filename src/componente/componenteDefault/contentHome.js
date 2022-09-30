import React from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import '../css/content.css'

export default function ContentHome(){

    const cookie = new Cookies()

    if(cookie.get('loggedIn')){

        return(
            <div>
                
            </div>
        )

    }
    else{
        return(
           <div className="content">
               <div className="left">
                    <h1>Ligi</h1>
                    <ul>
                        <Link to='/superliga' className="Link"><li>Superliga</li></Link>
                        <Link to='/la-liga' className="Link"><li>La Liga</li></Link>
                        <Link to='/peremier-league' className="Link"><li>Premier League</li></Link>
                    </ul>
               </div>
               <div className="center">
                        <div>
                            <h1>Next Fixtures</h1>
                            <div className="xscroll">
                                <div className="nextFixuture">
                                        <h3>Real - Barca</h3>
                                        <p>28.09.2022</p>
                                </div>
                                <div className="nextFixuture">
                                        <h3>Real - Barca</h3>
                                        <p>28.09.2022</p>
                                </div>
                                <div className="nextFixuture">
                                        <h3>Real - Barca</h3>
                                        <p>28.09.2022</p>
                                </div>
                                <div className="nextFixuture">
                                        <h3>Real - Barca</h3>
                                        <p>28.09.2022</p>
                                </div>
                                <div className="nextFixuture">
                                        <h3>Real - Barca</h3>
                                        <p>28.09.2022</p>
                                </div>
                                <div className="nextFixuture">
                                        <h3>Real - Barca</h3>
                                        <p>28.09.2022</p>
                                </div>
                                <div className="nextFixuture">
                                        <h3>Real - Barca</h3>
                                        <p>28.09.2022</p>
                                </div>
                            </div>

                        </div>
                        <br></br>
                        <div>
                            <h1>Top Bets:</h1>
                            <div className="topBets">
                                <div className="TopBetsFixuture">
                                    <h3>Real  Barca</h3>
                                    <p>28.09.2022</p>
                                    <p><b>Tip:</b> x2</p>
                                </div>
                                <div className="TopBetsFixuture">
                                    <h3>Real  Barca</h3>
                                    <p>28.09.2022</p>
                                    <p><b>Tip:</b> x2</p>
                                </div><div className="TopBetsFixuture">
                                    <h3>Real  Barca</h3>
                                    <p>28.09.2022</p>
                                    <p><b>Tip:</b> x2</p>
                                </div>
                                <div className="TopBetsFixuture">
                                    <h3>Real  Barca</h3>
                                    <p>28.09.2022</p>
                                    <p><b>Tip:</b> x2</p>
                                </div>
                                <div className="TopBetsFixuture">
                                    <h3>Real  Barca</h3>
                                    <p>28.09.2022</p>
                                    <p><b>Tip:</b> x2</p>
                                </div>
                                <div className="TopBetsFixuture">
                                    <h3>Real  Barca</h3>
                                    <p>28.09.2022</p>
                                    <p><b>Tip:</b> x2</p>
                                </div><div className="TopBetsFixuture">
                                    <h3>Real  Barca</h3>
                                    <p>28.09.2022</p>
                                    <p><b>Tip:</b> x2</p>
                                </div>

                                <div className="TopBetsFixuture">
                                    <h3>Real  Barca</h3>
                                    <p>28.09.2022</p>
                                    <p><b>Tip:</b> x2</p>
                                </div>
                            </div>

                        </div>
               </div>
               <div className="right">
                    <h1>Past Fixtures</h1>
                    <div className="listFixuresRight">
                        <div className="fixuture">
                            <h2> 0  - 2</h2>
                            <h3>Real  Barca</h3>
                            <p>28.09.2022</p>
                            <p><b>Tip:</b> x2</p>
                            <p>Status: WON</p>
                        </div>
                        <div className="fixuture">
                            <h2> 0  - 2</h2>
                            <h3>Real  Barca</h3>
                            <p>28.09.2022</p>
                            <p><b>Tip:</b> x2</p>
                            <p>Status: WON</p>
                        </div>
                        <div className="fixuture">
                            <h2> 0  - 2</h2>
                            <h3>Real  Barca</h3>
                            <p>28.09.2022</p>
                            <p><b>Tip:</b> x2</p>
                            <p>Status: WON</p>
                            <p>Status: WON</p>
                        </div>
                        <div className="fixuture">
                            <h2> 0  - 2</h2>
                            <h3>Real  Barca</h3>
                            <p>28.09.2022</p>
                            <p><b>Tip:</b> x2</p>
                        </div>
                        <div className="fixuture">
                            <h2> 0  - 2</h2>
                            <h3>Real  Barca</h3>
                            <p>28.09.2022</p>
                            <p><b>Tip:</b> x2</p>
                        </div>
                         <div className="fixuture">
                            <h2> 0  - 2</h2>
                            <h3>Real  Barca</h3>
                            <p>28.09.2022</p>
                            <p><b>Tip:</b> x2</p>
                        </div>
                         <div className="fixuture">
                            <h2> 0  - 2</h2>
                            <h3>Real  Barca</h3>
                            <p>28.09.2022</p>
                            <p><b>Tip:</b> x2</p>
                        </div>
                         <div className="fixuture">
                            <h2> 0  - 2</h2>
                            <h3>Real  Barca</h3>
                            <p>28.09.2022</p>
                            <p><b>Tip:</b> x2</p>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}