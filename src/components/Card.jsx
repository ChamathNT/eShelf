import React from 'react'

const Card = ({ book }) => {
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
                                <div className='card'>
                                    <img src={thumbnail} alt="" />
                                    <div className='bottom'>
                                        <h3 className='title'>{item.volumeInfo.title}</h3>
                                        <p className='price'>{saleability}</p>

                                    </div>

                                </div>
                            </>

                        )

                    }

                })
            }


        </>
    )

}

export default Card