import React, {useEffect} from "react";
import "./MeinPage.css"
import { useNavigate } from "react-router-dom";



function MeinPage (){

    const LogOut = ()=> {
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("password")

        window.localStorage.setItem("loggedin", false)
    }

    const navigate = useNavigate();

    useEffect( ()=> {
        const log = window.localStorage.getItem("loggedin")

        if(log == "true"){
            navigate("/MeinPage")
        }else{
            navigate("/")
        }
    })
    
        return (
            <div className="mein_div">
                <div className="container d-flex justify-content-center pt-5">
                    <button className="btn logout-btn text-danger mt-5"
                        onClick={LogOut}>
                        LOG OUT
                    </button>
                </div>
            </div>
        )
    


}

export default MeinPage