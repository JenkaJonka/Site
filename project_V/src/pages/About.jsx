import React from 'react';
import vlad from '../img/20240602_161113.jpg'
import './About.css'
import user from '../img/user.png'


const About = () => {
    return (
        <>
            <div className='wrapper'>
              <figure>               
              <img className='vlad' src={vlad} alt="vlad"/>
              <figcaption className='job_title'>Ваулин Владислав<br /><span className='post'>Руководитель Клуба Путешественников "Путник"</span></figcaption>
              </figure>
                <p className='text_about_club'>Путешествия — это не отдых, это стиль жизни. Горы дают ни с чем не сравнимое чувство свободы и силы, учат преодолевать себя, быть в гармонии с окружающим миром.
                    Захватывающие дух пейзажи, новые впечатления, а главное — люди, разделяющие с тобой этот восторг – вот ради чего мы проводим наши путешествия.
                    <br /><p>С каждым годом «путников» становится все больше, и что особенно приятно, многие, сходив с нами в поход однажды, вскоре вновь присылают заявку
                    на следующее путешествие и вливаются в жизнь Клуба. Мы постоянно изучаем новые направления и доказываем, что нет ничего невозможного,
                    даже в том, чтобы отправиться на другой конец света. Впереди много новых маршрутов, ведь не вся карта мира еще освоена :) <br /><p>Присоединяйтесь и исследуйте этот мир вместе с нами!</p></p></p>
            </div>

            <div><h3 className='reviews_title'>Отзывы путешественников</h3></div>

            <div className="wrapper">
                <div>
                  <img className='pic_user' src={user} alt="user" />
                </div>
                <div className='inform'>
                <span className='name_user'>Лобанова Светлана</span>
                <strong>Маршрут: <span className='description'>Этнотур в Башкирию: люди и традиции</span></strong>    
                <strong>Сроки путешествия: <span className='description'>21.07.2024 - 26.07.2024</span></strong>  
                <strong>Оценка: <span className='description'>10 из 10</span></strong>
                    
                    <strong>Гид путешествия: <span className='description'>Ваулин Владислав
                    </span></strong>
                <span class="description2">Выбрала "Путник" по самому интересному и многообразному маршруту по Уралу! Отличная и интересная еда в национальных традициях, удобный транспорт, всегда вода в дороге! 
                  Всё грамотно продумано и организовано для посещения объектов и отдыха, любая помощь по маршруту. Берите эту программу, точно не пожалеете о своём выборе!</span>
            </div>
            </div>

            <div className="wrapper">
                <div>
                  <img className='pic_user' src={user} alt="user" />
                </div>
                <div className='inform'>
                <span className='name_user'>Верташова Елена</span>
                <strong>Маршрут: <span className='description'>Активный тур по Южному Уралу без палаток</span></strong>    
                <strong>Сроки путешествия: <span className='description'>15.06.2024 - 20.06.2024</span></strong>  
                <strong>Оценка: <span className='description'>10 из 10</span></strong>
                    
                    <strong>Гид путешествия: <span className='description'>Ваулин Владислав
                    </span></strong>
                <span class="description2">Это замечательное путешествие. Полная перезагрузка! Единение с природой, красотой невозможно было насладиться, не хотелось останавливаться. Все маршруты были прекрасны и уникальны по своему. Спасибо большое за незабываемые эмоции!</span>
            </div>
            </div>

            <div className="wrapper">
                <div>
                  <img className='pic_user' src={user} alt="user" />
                </div>
                <div className='inform'>
                <span className='name_user'>Ларионова Наталья</span>
                <strong>Маршрут: <span className='description'>Лучшее в Башкирии за 10 дней</span></strong>    
                <strong>Сроки путешествия: <span className='description'>20.06.2024 - 29.06.2024</span></strong>  
                <strong>Оценка: <span className='description'>10 из 10</span></strong>
                    
                    <strong>Гид путешествия: <span className='description'>Малявко Евгения
                    </span></strong>
                <span class="description2">Всё было замечательно, ни одного замечания, ещё раз хотела бы отметить нашего гида, лучшего гида я еще не встречала! 
                  Спасибо за прекрасное путешествие!!! Так держать, уважаемый Путник!!!</span>
            </div>
            </div>
        </>
    )
}

export default About; 