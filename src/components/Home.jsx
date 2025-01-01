import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
    // State for search input value
    const [search, setSearch] = useState("");
    // State to store the fetched book data
    const [bookData, setData] = useState([]);

    // Function to fetch books from Google Books API
    const fetchBooks = () => {
        if (search.trim() !== "") { // Ensure the search input is not empty
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyCXLaygillx5_smS2_KnWogTIH-7wmb4Pk' + '&maxResults=40')
                .then(res => setData(res.data.items)) // Storing the fetched data in the state
                .catch(err => console.log(err)); // Logging errors to the console
        }
    };

    // Function to trigger search when the Enter key is pressed
    const searchBook = (e) => {
        if (e.key === "Enter") {
            fetchBooks(); // Call the fetchBooks function
        }
    };

    return (
        <>

            <div className="header">

                <div className="container1">
                    <h1>A reader lives a thousand lives <br /> before he dies.</h1>
                    <h2>-George R.R. Martin-</h2>
                </div>


                <div className="container2">
                    <h2>Find Your Book</h2>
                    <div className="search">

                        <input
                            type="text"
                            placeholder="Search Your Book Here"
                            value={search} // Controlled input value
                            onChange={(e) => setSearch(e.target.value)} // Update search state on change
                            onKeyPress={searchBook} // Trigger search on Enter key press
                        />

                        <button onClick={fetchBooks}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>


            <div className="container">
                {
                    // Passing the fetched book data to the Card component
                    <Card book={bookData} />
                }
            </div>


            <div className="bcontainer">
                <h5>eSHELF.com</h5>
                <h6>Powered by Google Books API</h6>
            </div>
        </>
    );
};

export default Home;
