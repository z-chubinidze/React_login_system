import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./components/Form";
import MeinPage from "./components/MeinPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"

class App extends React.Component {
    render() {
        return (

            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Form />}/>
                    <Route  path="/meinPage" element={<MeinPage />} />
                </Routes>

            </BrowserRouter>
            
           
        )
    }

}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <App />

)