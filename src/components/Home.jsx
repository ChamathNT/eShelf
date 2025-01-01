import React from "react";
const Home = () => {
    return (
        <div className="header"> 
        <div className="container1">
            <h1>A room without book is like <br/> a body without a soul.</h1>
        </div>

        <div className="container2">
            <h2>Find Your Book</h2>
            <div className="search">
                <input type="text" placeholder="Search Your Book Here" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <img src= "./images/bg2.png" alt=""/>
            </div>
            <div className="container">
                
            </div>
        </div>
    )
}

export default Home