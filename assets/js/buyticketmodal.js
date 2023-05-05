const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showBuyTicketModal() {
    modal.classList.add('open');
}

function closeBuyTicketModal() {
    modal.classList.remove('open')
} 

//Buy ticket open
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicketModal)
}

//Buy ticket close
modalClose.addEventListener('click', closeBuyTicketModal)
modal.addEventListener('click', closeBuyTicketModal)

//Bubbling and capturing event
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})