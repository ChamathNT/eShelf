import React, {useState} from "react";
import Card from "./Card";
import axios from "axios";


const Home = () => {

    const[search, setSearch] = useState("");
    const[bookData, setData] = useState([]);
    const searchBook = (e) => {
        if(e.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCXLaygillx5_smS2_KnWogTIH-7wmb4Pk'+'&maxResults=40')
           .then(res=>setData(res.data.items))
           .catch(err=>console.log(err))
        }
    }

    return (
        <>
    <div className="header"> 
        <div className="container1">
            <h1>A room without book is like <br/> a body without a soul.</h1>
        </div>

        <div className="container2">
            <h2>Find Your Book</h2>
            <div className="search">
                <input type="text" placeholder="Search Your Book Here" 
                value={search} onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBook}/>
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <img src= "./images/bg2.png" alt=""/>
        </div>
            
    </div>
    <div className="container">
       {
        <Card book={bookData}/>
       }
    </div>
    </>
    )
}

export default Home