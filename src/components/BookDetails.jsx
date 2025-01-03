import React from 'react'

// BookDetails component to display detailed information about a selected book
const BookDetails = ({ show, item, onClose }) => {
    // If 'show'is false, return null to prevent rendering the modal
    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3><br />
                            <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h4><br />
                            <a href={item.volumeInfo.previewLink}><button>Read More</button></a>

                        </div>

                    </div>
                    <h4 className='desc'>{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}

export default BookDetails