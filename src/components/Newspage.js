import React, { useState } from 'react';
import Modal from "react-modal";
import './Newspage.css';
import '../index.css';
//import image1 from '../images/cloris-ying-qgilLzDv0w0-unsplash.jpg';

const Newspage = ({ title, description, url, publishedAt, content, image }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <div className="newspage-divtag">
                <h1 style={{ fontFamily : 'Lobster Two' }}>{title}</h1>
                <h2 className="descrip">{description}</h2>
                <main>
                    <span><a href={url}>Visit the page for knowing more</a></span>
                </main>
                <h6>{publishedAt}</h6>
                <p>{content}</p>
                <button id="detailsbutton" onClick={() => setModalIsOpen(true)}> Details </button>
                <Modal isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={false}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={{
                        overlay: {
                            backgroundColor: 'transparent'
                        },
                        content: {
                            color: 'black',
                            lineHeight: '0.5em'
                        }
                    }}>
                    <div>
                        <button id="modalclosebutton" onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>
                    <h1 id="titlemodal">{title}</h1>
                    <h2 className="descrip">{description}</h2>
                    <main>
                        <span><a href={url}>Visit the page for knowing more</a></span>
                    </main>
                    <h6>{publishedAt}</h6>
                    <img src={ image } style={{width: "100%", height: "50%" }} alt="Image" />
                    <p style={{ overflow: "visible"}}>{content}</p>
                    <main>
                        <span><a href={url}>Visit the page for knowing more</a></span>
                    </main>
                    
                </Modal>

            </div>
         
            {/*
                
                   <div className="newspage-divtag">
                <h1>{title2}</h1>
                <h2>{description2}</h2>
                <a href={url2}>Visit the page for knowing moore</a>
                <h6>{publishedAt2}</h6>
                <p>{content2}</p>
                <button onClick={() => setModalIsOpen(true)}>See the whole report</button>
                <Modals modelisOpen={modalIsOpen}
                        title2={title2}
                        description2={description2}
                        url2={url2}
                        publishedAt2={publishedAt2}
                        content2={content2} >

                </Modals>
            </div>
            
            
            */ }
        </div>
    )
};

export default Newspage;