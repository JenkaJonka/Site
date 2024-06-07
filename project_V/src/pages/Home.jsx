import React from 'react';
import main_photo from '../img/banner.jpg'
import styles_home from './Home.css'




// const Home = () => {
//     return (

//         <div className={styles_home.text}>



//             <img src={main_photo} alt="banner" />
//             <h3 className={styles_home.banner_title}>УРАЛ</h3>

//             <h2 className={styles_home.title2}>Туры и путешествия по Уралу 2024</h2>
//             Урал — это уникальное место, где горы встречаются с густыми лесами, создавая сказочные пейзажи.
//             Здесь можно совершить увлекательные походы и насладиться чистым воздухом, наполненным ароматами хвои.
//             Величественные водопады и прозрачные озёра дарят умиротворение и вдохновение каждому путнику.
//             Путешествуя по Уралу, вы откроете для себя неизведанные уголки России, которые навсегда останутся в вашем
//             сердце!

//             <form className={styles_home.form_order}>
//                 <h3 className={styles_home.main_title2}>
//                     Получайте эксклюзивные предложения первыми!</h3>
//                 <div class={styles_home.form_field}>
//                     <input className={styles_home.field} type="text" name="name" placeholder="Имя" required />
//                     <input className={styles_home.field} type="text" name="last_name" placeholder="Фамилия" required />
//                     <input className={styles_home.field} type="text" name="email" placeholder="Почта" required />
//                 </div>
//                 <button type="submit" className={styles_home.bch}>Отправить!</button>

//             </form >
//         </div >

//     )
// }

// export default Home; 

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
      
        <form className='form_submit' onSubmit={onSubmit}>
          <input type="text" name="name"/>
          <input type="email" name="email"/>
          <textarea name="message"></textarea>
          <button type="submit">Submit Form</button>
        </form>
        
    );
  }
  
  export default App1;