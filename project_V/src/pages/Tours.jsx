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
                    <p className='text_on_photo'>Лучшее в Башкирии за 10 дней</p>
                    <h3>23.06/24 - 29.06/24 + 7 заездов</h3>
                    <p>Незабываемое путешествие по Башкирии, прогулки по коралловым
                        горам и загадочным пещерам, купание в озёрах и знакомство с
                        древним городом Аркаим.</p>
                </div>

                <div className="blocks">
                    <img className="list_image_item" src={img2} alt="pic"></img>
                    <p className='text_on_photo'>Знакомство с Башкирией за 6 дней</p>
                    <h3>30.06/24 - 06.07/24 + 9 заездов</h3>
                    <p>Насыщенный и комфортный тур с посещением заповедников, храмов и музеев,
                     отдыхом на водохранилище и дегустацией башкирского мёда.
                      И всё это — за 6 дней</p>
                </div>

                <div className="blocks">
                    <img className="list_image_item" src={img3} alt="pic"></img>
                    <p className='text_on_photo'>Активный тур по Южному Уралу без палаток</p>
                    <h3>15.06/24 - 20.06/24 + 2 заезда</h3>
                    <p>Активный тур с 2 восхождениями и 3 нац.парками! Пройдём живописными горными 
                        тропами, отдохнём на озере и услышим таинственные легенды.</p>
                </div>
            </div>

            <div className="main2_block">
                <div className="blocks">
                    <img className="list_image_item" src={img4} alt="pic"></img>
                    <p className='text_on_photo'>Лайт-тур по зимнему Уралу: природа и экскурсии</p>
                    <h3>18.06/24 - 27.06/24 + 14 заездов</h3>
                    <p>Налегке гуляем по заповедникам, наслаждаемся тишиной в волшебном зимнем лесу, 
                        изучаем тайны истории и многовековые предания народов Урала.</p>
                </div>

                <div className="blocks">
                    
                    <img className="list_image_item" src={img5} alt="pic"></img>
                    <p className='text_on_photo'>Этнотур в Башкирию: люди и традиции</p>
                    <h3>Сообщить о появлении новых дат</h3>
                    <p>Едем в башкирские сёла и заповедники за национальным колоритом: ночуем
                         в юрте, ездим на конях, сплавляемся по реке,
                          играем на курае и готовим баурсак</p>
                </div>

                <div className="blocks">
                    <img className="list_image_item" src={img6} alt="pic"></img>
                    <p className='text_on_photo'>Южный Урал: треккинги и культура</p>
                    <h3>Сообщить о появлении новых дат</h3>
                    <p>Нас ждут треккинги по трём знаменитым национальным паркам, восхождение на
                         гору Большой Иремель и знакомство с уральскими традициями.</p>
                </div>
            </div>
        </div>
    )
}


export default Tours; 