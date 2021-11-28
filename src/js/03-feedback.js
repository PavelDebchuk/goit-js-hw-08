
//Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и password,

import { each } from "lodash";

// в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
const feedbackForm = document.querySelector('.feedback-form');

 feedbackForm.addEventListener('input', formText);
let infoForm;
 function formText(event){
    const {
           elements: { email, message }
          } = event.currentTarget;
    infoForm = {
        email: `${email.value}`,
        message: `${message.value}`,
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(infoForm));
}
    const formStorage = localStorage.getItem('feedback-form-state');
    
//При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.

document.addEventListener("DOMContentLoaded", function() { // событие загрузки страницы
    if(formStorage != '') {
        const jsonFormStorage = JSON.parse(formStorage);
        document.getElementsByName('email').forEach(function(feedbackForm) {
            if(feedbackForm.value === ''){
                feedbackForm.value = jsonFormStorage.email
            } 
        })
        document.getElementsByName('message').forEach(function(feedbackForm) {
            if(feedbackForm.value === ''){
                feedbackForm.value = jsonFormStorage.message
            } 
        })
    }
});
//При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями
// email, password и текущими их значениями в консоль.

const submitForm = document.querySelector('button');
submitForm.addEventListener('click', handleSubmit);

function handleSubmit(value) {
    localStorage.removeItem('feedback-form-state');
        console.log('tttt');
    console.log(formStorage);
    
    
  }

//Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// Для этого добавь в проект и используй библиотеку lodash.throttle