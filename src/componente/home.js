import React from "react";
import Cookies from 'universal-cookie'
import Bar from "./componenteDefault/bar";
import ContentHome from "./componenteDefault/contentHome";
import './css/body.css'


export default function Home(){

    const cookies = new Cookies()

    if(cookies.get('loggedIn')){

        return(
            <section>
                <Bar/>
                
            </section>
        )

    }
    else{
        return(
            
            <section>
                <Bar/>
                <ContentHome/>
            </section>
        )
    }



}