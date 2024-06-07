import React from 'react';
import main_photo from '../img/banner.jpg'
import styles_home from './Home.css'
import tourist from '../img/tourists.jpg'


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
      <div className={styles_home.text}>
           <img src={main_photo} alt="banner" />
           <h3 className={styles_home.banner_title}>Авторские туры на УРАЛ</h3>

           <h2 className={styles_home.title2}>Туры и путешествия по Уралу 2024</h2>
           Урал — это уникальное место, где горы встречаются с густыми лесами, создавая сказочные пейзажи.
            Здесь можно совершить увлекательные походы и насладиться чистым воздухом, наполненным ароматами хвои.
            Величественные водопады и прозрачные озёра дарят умиротворение и вдохновение каждому путнику.
            Путешествуя по Уралу, вы откроете для себя неизведанные уголки России, которые навсегда останутся в вашем
            сердце!
         </div >

         <div>
          <img src={tourist} alt="" />
         </div>
         <div>
          <p>Почему стоит <span className=''>Забронировать сейчас</span></p>
         </div>

         <div>
          <ul>
            <li>Приобрести тур по скидке раннего бронирования</li>
            <li>Забронировать авиа и ж/д билеты дешевле, чем в сезон</li>
            <li>Успеть на свободные места в тур. Число место на каждую дату ограничено</li>
          </ul>
         </div>

         <div>
          <h3>Получать эксклюзивные предложения первыми!</h3>
         </div>
        <form className='form_submit' onSubmit={onSubmit}>
          <input type="text" name="name"/>
          <input type="email" name="email"/>
          <textarea name="message"></textarea>
          <button type="submit">Submit Form</button>
        </form>
        </>
  );
}

export default App1;