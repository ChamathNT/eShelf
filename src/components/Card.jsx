import React, { useState } from 'react'
import BookDetails from './BookDetails'

// Card component to display book information as a list of cards
const Card = ({ book }) => {
    const [show, setShow] = useState(false);// State to manage the visibility of the BookDetails modal
    const [bookItem, setItem] = useState();// State to store the selected book item for detailed view
    console.log(book)


    return (
        <>
            {   /* Map through the list of books and render each book as a card */
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;// Get the book thumbnail image if available
                    let saleability = item.saleInfo && item.saleInfo.saleability;// Get the saleability status of the book
                    if (thumbnail != undefined)// Show only the books with thumbnails
                    {

                        return (
                            <>
                                <div className='card' onClick={() => { setShow(true); setItem(item) }}>
                                    <img src={thumbnail} alt="" />
                                    <div className='bottom'>
                                        <h3 className='title'>{item.volumeInfo.title}</h3>
                                        <p className='sale'>{saleability}</p>

                                    </div>

                                </div>
                                <BookDetails show={show} item={bookItem} onClose={() => setShow(false)} />
                            </>

                        )

                    }

                })
            }


        </>
    )

}

export default Card