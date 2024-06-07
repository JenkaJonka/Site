import React from 'react';
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import './Tours.css'

const Tours = () => {
    return (
        <div className='container'>
        <div className="main_block">
                <div className="blocks">
                    <img className="list_image_item" src={img1} alt="pic"></img>
                    <h3>Первый блок</h3>
                    <p>Lorem, ipsum dolor, sit amet conseclelur adipisicing elit?</p>
                </div>

                <div className="blocks">
                    <img className="list_image_item" src={img2} alt="pic"></img>
                    <h3>Второй блок</h3>
                    <p>Lorem, ipsum dolor, sit amet conseclelur adipisicing elit?</p>
                </div>

                <div className="blocks">
                    <img className="list_image_item" src={img3}  alt="pic"></img>
                    <h3>Третий блок</h3>
                    <p>Lorem, ipsum dolor, sit amet conseclelur adipisicing elit?</p>
                </div>
            </div>

            <div className="main2_block">
                <div className="blocks">
                    <img className="list_image_item" src={img4}  alt="pic"></img>
                    <h3>Первый блок</h3>
                    <p>Lorem, ipsum dolor, sit amet conseclelur adipisicing elit?</p>
                </div>

                <div className="blocks">
                    <img className="list_image_item" src={img5}  alt="pic"></img>
                    <h3>Второй блок</h3>
                    <p>Lorem, ipsum dolor, sit amet conseclelur adipisicing elit?</p>
                </div>

                <div className="blocks">
                    <img className="list_image_item" src={img6}  alt="pic"></img>
                    <h3>Третий блок</h3>
                    <p>Lorem, ipsum dolor, sit amet conseclelur adipisicing elit?</p>
                </div>
            </div>
            </div>
    )
}



export default Tours; 