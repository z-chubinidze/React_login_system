import React from "react";
import "./Form.css";
import { Navigate } from "react-router-dom";

class Form extends React.Component {

    constructor() {
        super()

        this.state = {
            username: "",
            password: ""
        }
    }
    setUsename = (e) => {
        this.setState({
            username: e.target.value
        })

    }
    setPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    shenaxva(e) {

        if (this.state.username === "") {
            e.preventDefault()
            window.alert("შეიყვანეთ სახელი")
            document.getElementById("usinput").style.border = "2px solid red"
        } else if (this.state.password === "") {
            e.preventDefault()
            document.getElementById("usinput").style.border = "2px solid green"
            document.getElementById("pasinput").style.border = "2px solid red"
            window.alert("შეიყვანეთ პაროლი")
        } else {
            document.getElementById("pasinput").style.border = "2px solid green"

            window.localStorage.setItem("username", this.state.username)
            window.localStorage.setItem("password", this.state.password)

            window.localStorage.setItem("loggedin", true)
        }

    }
    render() {
        return (
            <div>
                <div className="container ps-4 pe-4">
                    <div className="row justify-content-center align-items-center ">
                        <div className=" col-12 col-md-6">
                            <div className="form-box">
                                <form onSubmit={(e) => this.shenaxva(e)} className="pt-4 pb-4 ps-3 ps-md-5 pe-3 pe-md-5" >
                                    <h1 className="text-center text-light">SIGN IN HERE</h1>
                                    <div>
                                        <label for="text">username</label>
                                        <input type="text" className="w-100 mt-1 input1" id="usinput" value={this.state.username} placeholder="enter your username"
                                            onChange={(e) => this.setUsename(e)} />
                                    </div>
                                    <div>
                                        <label for="password" className="mt-4">password</label>
                                        <input type="password" className="w-100 mt-1 input1" id="pasinput" value={this.state.password} placeholder="enter your name"
                                            onChange={(e) => this.setPassword(e)} />
                                    </div>
                                    <input type="submit" className="btn btn-1 btn-success mt-4" value={"SIGN IN"} />

                                </form>
                                {
                                    window.localStorage.getItem("loggedin") === "true" ? <Navigate to={"/MeinPage"} /> : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form