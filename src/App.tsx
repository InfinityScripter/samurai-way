import React from 'react';
import "./App.css"
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";


//This is component APP

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <Profile/>
            <Footer/>
        </div>
    );
}


export default App;
