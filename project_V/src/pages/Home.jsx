import React from 'react';
import main_photo from '../img/banner.jpg';
import './Home.css';
import 'animate.css';

function App1() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ecd9bf96-7ddd-4621-87dd-c2bf1c695827");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
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
      <form className='form_submit' onSubmit={onSubmit}>
        <h3 className='animate__animated animate__pulse title_form'>Получать эксклюзивные предложения первыми!</h3>
        <div className='form_field'>
          <input className='field' type="text" name="name" placeholder="Имя" required />
          <input className='field' type="email" name="email" placeholder="email" required />
          <button className='bch' type="submit">Отправить</button>
        </div>
      </form>
    </>
  );
}

export default App1;