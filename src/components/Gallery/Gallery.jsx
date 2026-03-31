import { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
    const [activeTab,setActiveTab]=useState("fiction")
    // const handleTabe=
    return (
        <section className='GalleryTab'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="GalleryTabs">
                            <button >Fiction (26)</button>
                            <button>Non Fiction (8)</button>
                            <button>Biography (19)</button>
                            <button>Children Book (11)</button>
                            <button>Autobiography (09)</button>
                            <button>Business Books (08)</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 col-lg-9">
                        <div className="gallery">
                            <div className="card">
                                <img className='img-fluid' src="./src/assets/images/tab1.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Gallery
