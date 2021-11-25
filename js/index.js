const basketButton = document.querySelector('.header_button_item');
const cards = document.querySelectorAll('.best_sellers_button')
let cart = []








for ( let card of cards) {
    card.addEventListener('click',function (e){
        const parent = e.target.parentElement
        const name = parent.querySelector('.caption').innerText
        const price = parent.querySelector('.best_sellers_price').innerText
        cart.push({name,price})

    })


}
basketButton.addEventListener('click',function (){
    if (cart.length === 0) {
        console.log('корзина пуста')
    }else {
        console.log(cart)
    }

})


