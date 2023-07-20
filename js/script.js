const rating = document.querySelector('#rating');
const ratingNumbers = document.querySelectorAll('#rating-numbers span');
const ratingSubmit = document.querySelector('#rating-submit');
const rateSelected = document.querySelector('#rate-selected');
const thankState= document.querySelector('.thank-state');

let rateNumber = null;

ratingNumbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        const active = document.querySelector('.checked');
        if (active) {
            active.classList.remove('checked')
        } 
        const card = e.target;
        card.classList.add('checked');
        rateNumber = e.target.innerText;
    });
});

ratingSubmit.addEventListener('click', () => {
    if (rateNumber) {
        rateSelected.innerText = rateNumber;

        rating.classList.add('hidden');
        thankState.classList.remove('hidden');
    }

})
