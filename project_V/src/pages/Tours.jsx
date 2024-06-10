import React from 'react';
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import './Tours.css'
import { Link } from 'react-router-dom';
import 'animate.css'

const Tours = () => {
    return (
        <>
        <div className='container'>
            <div className="main_block">
                <div className="blocks">

                    <img className="list_image_item" src={img1} alt="pic"></img>
                    <p className='text_on_photo'>Лучшее в Башкирии за 10 дней</p>
                    <h3 className='data'>20.06.2024 - 29.06.2024</h3>
                    <p className='pic_desc'>Незабываемое путешествие по Башкирии, прогулки по коралловым
                        горам и загадочным пещерам, купание в озёрах и знакомство с
                        древним городом Аркаим.</p>
                </div>

                <div className="blocks">
                    <img className="list_image_item" src={img2} alt="pic"></img>
                    <p className='text_on_photo'>Знакомство с Башкирией за 6 дней</p>
                    <h3 className='data'>30.06.2024 - 05.07.2024</h3>
                    <p className='pic_desc'>Насыщенный и комфортный тур с посещением заповедников, храмов и музеев,
                     отдыхом на водохранилище и дегустацией башкирского мёда.
                      И всё это — за 6 дней</p>
                </div>

                <div className="blocks">
                    <img className="list_image_item" src={img3} alt="pic"></img>
                    <p className='text_on_photo'>Активный тур по Южному Уралу без палаток</p>
                    <h3 className='data'>15.06.2024 - 20.06.2024</h3>
                    <p className='pic_desc'>Активный тур с 2 восхождениями и 3 нац.парками! Пройдём живописными горными 
                        тропами, отдохнём на озере и услышим таинственные легенды.</p>
                </div>
            </div>

            <div className="main2_block">
                <div className="blocks">
                    <img className="list_image_item" src={img4} alt="pic"></img>
                    <p className='text_on_photo'>Лайт-тур по зимнему Уралу: природа и экскурсии</p>
                    <h3 className='data'>18.06.2024 - 27.06.2024</h3>
                    <p className='pic_desc'>Налегке гуляем по заповедникам, наслаждаемся тишиной в волшебном зимнем лесу, 
                        изучаем тайны истории и многовековые предания народов Урала.</p>
                </div>

                <div className="blocks">
                    
                    <img className="list_image_item" src={img5} alt="pic"></img>
                    <p className='text_on_photo'>Этнотур в Башкирию: люди и традиции</p>
                    <Link to="/" className='reminder'><h3 className='rem'>Сообщить о появлении новых дат</h3></Link>
                    <p className='pic_desc'>Едем в башкирские сёла и заповедники за национальным колоритом: ночуем
                         в юрте, ездим на конях, сплавляемся по реке,
                          играем на курае и готовим баурсак</p>
                </div>

                <div className="blocks">
                    <img className="list_image_item" src={img6} alt="pic"></img>
                    <p className='text_on_photo'>Южный Урал: треккинги и культура</p>
                    <Link to="/" className='reminder'><h3 className='rem'>Сообщить о появлении новых дат</h3></Link>
                    <p className='pic_desc'>Нас ждут треккинги по трём знаменитым национальным паркам, восхождение на
                         гору Большой Иремель и знакомство с уральскими традициями.</p>
                </div>
            </div>
        </div>

        <section class="form_main">
        <h3 class="main_title2">
            Форма для заказа тура и уточнения деталей</h3>
        <div class="form_field">
            <input class="field" type="text" name="name" placeholder="Имя" required />
            <input class="field" type="text" name="email" placeholder="Введите свой E-mail" required />
            <input class="field" type="text" name="tel" placeholder="Телефон" required />
            <input class="field" type="text" name="web" placeholder="Какой тур Вас интересует?" required /> 
            </div>
            <button type="submit" class="bch">Отправить!</button>
    </section>
        </>
    )
}


export default Tours; 