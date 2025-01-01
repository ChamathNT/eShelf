import React, {useState} from 'react'
import BookDetails from './BookDetails'

const Card = ({ book }) => {
    const[show, setShow] = useState(false);
    const[bookItem,setItem] = useState();
    console.log(book)


    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let saleability = item.saleInfo && item.saleInfo.saleability;
                    if (thumbnail != undefined) {

                        return (
                            <>
                                <div className='card' onClick={() =>{setShow(true);setItem(item)}}>
                                    <img src={thumbnail} alt="" />
                                    <div className='bottom'>
                                        <h3 className='title'>{item.volumeInfo.title}</h3>
                                        <p className='price'>{saleability}</p>

                                    </div>

                                </div>
                                <BookDetails show ={show} item={bookItem} onClose={()=> setShow(false)}/>
                            </>

                        )

                    }

                })
            }


        </>
    )

}

export default Card