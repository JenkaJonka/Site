import React from 'react';
import './Contact.css'


function Contacts() {
  // document.querySelectorAll('.accordion').forEach((el) => {
  //     el.addEventListener('click', () => {


  //         let content = el.nextElementSibling;

  //         if (content.style.maxHeight) {
  //             document.querySelectorAll('.content').forEach((el) =>
  //                 el.style.maxHeight = null)
  //         } else {
  //             document.querySelectorAll('.content').forEach((el) =>
  //                 el.style.maxHeight = null)
  //             content.style.maxHeight = content.scrollHeight + 'px'
  //         }
  //     })
  // })


  return (
    <>
      <div className='contact_title'><h2>Ответы на вопросы</h2></div>

      <div className='accordion'>
        <h3 className='quest_title'>Вернут ли мне предоплату, если я передумаю ехать в тур или регион закроют?</h3>
        </div>
        <div className='content'>
        <p>У нас действует система&nbsp;<strong>&laquo;Безопасное бронирование&raquo;:</strong> предоплата за тур всего 10% и отмена брони без штрафа. Если до путешествия осталось менее 90 дней, то предоплата составит 30%.</p>
        <p>
          <strong>Если позже вы решите не ехать &mdash; мы вернём оплату полностью в течение 3 рабочих дней.</strong></p>
        <p>
          Вы без рисков можете забронировать путешествие на любые открытые даты. Если направление будет закрыто из-за эпидемиологической ситуации или вы просто передумаете &mdash; мы вернём вам все деньги.</p>
      </div>

      <div className='accordion'><h3 className='quest_title'>Что будет с моей предоплатой/оплатой, если тур не состоится или отменится?</h3>
        </div>
        <div className='content'>
          <p>Самое главное &mdash; ваши деньги никуда не пропадут.</p>
                Можно будет поехать в более поздние сроки или выбрать любое другое путешествие нашего Клуба, а также перенести внесенную вами сумму на бессрочный депозит в ООО&nbsp;&laquo;Клуб Путник&raquo;, который гарантирует право:&nbsp;
            <p>
              &mdash; пользоваться внесенными средствами для оплаты любого путешествия Клуба;</p>
            <p>
              &mdash; получить возврат денежных средств в полном объёме (сроки возврата можно уточнить, написав нам на почту).</p>
        </div>

      <div className='accordion'><h3 className="quest_title">Можно ли поехать в путешествие с собакой?</h3>
        </div>
        <div className='content'>
        <p>К сожалению, в наши путешествия <strong>нельзя</strong> с домашними животными.</p>
        <p>
          Некоторые туристы могут боятся собак, у кого-то может быть аллергия. А мы хотим, чтобы программы проходили комфортно абсолютно для всех участников. 
          К тому же, если на маршрут приедет несколько питомцев, то они могут начать конфликтовать между собой.</p>
          <p>Просим отнестись с пониманием.</p>
      </div>
    </>
  );
}

export default Contacts; 