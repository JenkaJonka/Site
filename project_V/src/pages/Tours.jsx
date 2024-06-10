import React, { useState } from 'react';
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import './Tours.css'
import { Link } from 'react-router-dom';
import 'animate.css'
import emailjs from 'emailjs-com';

const Tours = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        tour: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Введите имя';
        } else if (checkName() === false) {
            newErrors.name = 'Имя введено некорректно';
        }

        if (!formData.email) {
            newErrors.email = 'Введите почту';
        } else if (checkMail() === false) {
            newErrors.email = 'Адрес введен некорректно';
        }

        if (!formData.tel) {
            newErrors.tel = 'Введите номер телефона';
        } else if (checkTel() === false) {
            newErrors.tel = 'Номер введен некорректно';
        }

        if (!formData.tour) {
            newErrors.tour = 'Введите название тура';
        } else if (checkTour() === false) {
            newErrors.Tour = 'Тур введен некорректно';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            emailjs.sendForm('service_xa32rtk', 'template_t0zjlsl', e.target, '4k4jWQQBGjtDqn9dW')
                .then((result) => {
                    console.log(result.text);
                    alert('Сообщение успешно отправлено!');
                }, (error) => {
                    console.log(error.text);
                    alert('Не удалось отправить сообщение. Попробуйте позднее.');
                });

            setFormData({
                name: '',
                email: '',
                tel: '',
                tour: '',
            });
            setErrors({});
        } else {
            setErrors(newErrors);
        }
    };



    return (
        <>
            <div className='container'>
                <div className="main_block">
                    <div className="blocks">

                        <img className="list_image_item" src={img1} alt="pic"></img>
                        <p className='text_on_photo'>Лучшее в Башкирии за 10 дней</p>
                        <h3 className='data'>20.06.2024 - 29.06.2024</h3>
                        <p>Незабываемое путешествие по Башкирии, прогулки по коралловым
                            горам и загадочным пещерам, купание в озёрах и знакомство с
                            древним городом Аркаим.</p>
                    </div>

                    <div className="blocks">
                        <img className="list_image_item" src={img2} alt="pic"></img>
                        <p className='text_on_photo'>Знакомство с Башкирией за 6 дней</p>
                        <h3 className='data'>30.06.2024 - 05.07.2024</h3>
                        <p>Насыщенный и комфортный тур с посещением заповедников, храмов и музеев,
                            отдыхом на водохранилище и дегустацией башкирского мёда.
                            И всё это — за 6 дней</p>
                    </div>

                    <div className="blocks">
                        <img className="list_image_item" src={img3} alt="pic"></img>
                        <p className='text_on_photo'>Активный тур по Южному Уралу без палаток</p>
                        <h3 className='data'>15.06.2024 - 20.06.2024</h3>
                        <p>Активный тур с 2 восхождениями и 3 нац.парками! Пройдём живописными горными
                            тропами, отдохнём на озере и услышим таинственные легенды.</p>
                    </div>
                </div>

                <div className="main2_block">
                    <div className="blocks">
                        <img className="list_image_item" src={img4} alt="pic"></img>
                        <p className='text_on_photo'>Лайт-тур по зимнему Уралу: природа и экскурсии</p>
                        <h3 className='data'>18.06.2024 - 27.06.2024</h3>
                        <p>Налегке гуляем по заповедникам, наслаждаемся тишиной в волшебном зимнем лесу,
                            изучаем тайны истории и многовековые предания народов Урала.</p>
                    </div>

                    <div className="blocks">

                        <img className="list_image_item" src={img5} alt="pic"></img>
                        <p className='text_on_photo'>Этнотур в Башкирию: люди и традиции</p>
                        <Link to="/" className='reminder'><h3 className='rem'>Сообщить о появлении новых дат</h3></Link>
                        <p>Едем в башкирские сёла и заповедники за национальным колоритом: ночуем
                            в юрте, ездим на конях, сплавляемся по реке,
                            играем на курае и готовим баурсак</p>
                    </div>

                    <div className="blocks">
                        <img className="list_image_item" src={img6} alt="pic"></img>
                        <p className='text_on_photo'>Южный Урал: треккинги и культура</p>
                        <Link to="/" className='reminder'><h3 className='rem'>Сообщить о появлении новых дат</h3></Link>
                        <p>Нас ждут треккинги по трём знаменитым национальным паркам, восхождение на
                            гору Большой Иремель и знакомство с уральскими традициями.</p>
                    </div>
                </div>
            </div>

            <form class="form_main" onSubmit={handleSubmit}>
                <h3 class="main_title2">
                    Форма для заказа тура и уточнения деталей</h3>
                <div class="form_field">
                    <input class="field" type="text" id='name' name="name" placeholder="Имя" value={formData.name} onChange={handleChange} onBlur={checkName} required />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    <input class="field" type="email" id='email' name="email" placeholder="Введите свой E-mail" value={formData.email} onChange={handleChange} onBlur={checkMail} required />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    <input class="field" type="text" id='tel' name="tel" placeholder="Телефон с +7" value={formData.tel} onChange={handleChange} onBlur={checkTel} required />
                    {errors.tel && <p style={{ color: 'red' }}>{errors.tel}</p>}
                    <input class="field" type="text" id='tour' name="tour" placeholder="Какой тур Вас интересует?" value={formData.tour} onChange={handleChange} onBlur={checkTour} required />
                    {errors.tour && <p style={{ color: 'red' }}>{errors.tour}</p>}
                </div>
                <button type="submit" class="bch">Отправить!</button>
            </form>
        </>
    )
}


export default Tours;


function checkName() {
    let name = document.getElementById("name").value;
    let regex = /^[A-Za-zА-яЁё\s]{2,15}$/;

    if (regex.test(name)) {
        document.getElementById("name").style.boxShadow = "0 0 10px #00FF00";
        return true;
    }

    else {
        document.getElementById("name").style.boxShadow = "0 0 10px #FF0000";
        return false;
    }
}

function checkMail() {
    let mail = document.getElementById("email").value;
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;

    if (regex.test(mail)) {
        document.getElementById("email").style.boxShadow = "0 0 10px #00FF00";
        return true;
    }
    else {
        document.getElementById("email").style.boxShadow = "0 0 10px #FF0000";
        return false;
    }
}

function checkTel() {
    let tel = document.getElementById("tel").value;
    let regex = /^\+7?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (regex.test(tel)) {
        document.getElementById("tel").style.boxShadow = "0 0 10px #00FF00";
        return true;
    }

    else {
        document.getElementById("tel").style.boxShadow = "0 0 10px #FF0000";
        return false;
    }
}

function checkTour() {
    let tour = document.getElementById("tour").value;
    let regex = /^[A-Za-zА-яЁё\s]{2,50}$/;

    if (regex.test(tour)) {
        document.getElementById("tour").style.boxShadow = "0 0 10px #00FF00";
        return true;
    }

    else {
        document.getElementById("tour").style.boxShadow = "0 0 10px #FF0000";
        return false;
    }
}

