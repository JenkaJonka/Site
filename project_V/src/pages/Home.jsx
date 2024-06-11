import React, { useState } from 'react';
import main_photo from '../img/banner.jpg';
import './Home.css';
import 'animate.css';
import emailjs from 'emailjs-com';




function App1() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      emailjs.sendForm('service_xa32rtk', 'template_828olir', e.target, '4k4jWQQBGjtDqn9dW')
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
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="home_block">
        <img className='banner' src={main_photo} alt="banner" />
        <h3 className="banner_title">Авторские туры на<br /><span className='ural'>УРАЛ</span></h3>
      </div>
      <div className='title2'>
        <h2 className='tour_2024'>Туры и путешествия по Уралу 2024</h2>
        <p className='desc'>Урал — это уникальное место, где горы встречаются с густыми лесами, создавая сказочные пейзажи.
          Здесь можно совершить увлекательные походы и насладиться чистым воздухом, наполненным ароматами хвои.
          Величественные водопады и прозрачные озёра дарят умиротворение и вдохновение каждому путнику.
          Путешествуя по Уралу, вы откроете для себя неизведанные уголки России, которые навсегда останутся в вашем
          сердце!</p>
      </div >
      <form className='form_submit' onSubmit={handleSubmit}>
        <h3 className='animate__animated animate__pulse title_form'>Получать эксклюзивные предложения первыми!</h3>
        <div className='form_field'>
          <input className='field' type="text" id="name" placeholder="Имя" name="name" value={formData.name} onChange={handleChange} onBlur={checkName} required />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          <input className='field' type="email" id="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} onBlur={checkMail} required />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          <button className='bch' type="submit" id='f_bch'>Отправить</button>
        </div>
      </form>
    </>
  );
}

export default App1;

function checkName() {
  let name = document.getElementById("name").value;
  let regex = /^[a-zA-Z\s]{2,15}$/;

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




