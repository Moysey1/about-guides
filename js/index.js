const basketButton = document.querySelector('.header_button_item');
const cards = document.querySelectorAll('.best_sellers_button');
const  buttonFeedback = document.querySelector('.btn_feedback');
const  nameOne = document.querySelector('.name_one');
const  nameTwo = document.querySelector('.name_two')
const  email = document.querySelector('.email')
const  nameOneForm = document.querySelector('.feedback_name');
const  nameTwoForm = document.querySelector('.feedback_last_name');
const  emailForm = document.querySelector('.feedback_mail')
let cart = []

for ( let card of cards) {
    card.addEventListener('click',function (e){
        const parent = e.target.parentElement;
        const name = parent.querySelector('.caption').innerText.replace(/\s*\n\s*/g," ");
        const price = parent.querySelector('.best_sellers_price').innerText
        cart.push({name,price})
        alert('Товар добавлен в корзину');
    })

}
basketButton.addEventListener('click',function (){
    if (cart.length === 0) {
        console.log('Вы ничего не добавили в корзину')
    }else {
        console.log(cart)
    }

})

buttonFeedback.onclick = function(e) {
    e.preventDefault();
    nameOne.textContent = nameOneForm.value;
    nameTwo.textContent = nameTwoForm.value;
    email.textContent = emailForm.value;
};
