const submitBtn = document.getElementById('submit');
const rating = document.querySelectorAll('.rating');
const card = document.getElementById('card')
const submitPage = document.getElementById('submit-page')
const successPage = document.getElementById('succss-page');
const submittedRating = document.getElementById('submitted-rating');

let ratingValue;
submitBtn.addEventListener('click', e =>{
    const checked = document.querySelector('input[name="ratings"]:checked');

    if(checked == null){
        console.log('null');
    } else{
        ratingValue = checked.ariaValueMax;
        submitPage.classList.add('hidden');
        successPage.classList.remove('hidden');
        submittedRating.innerText = ratingValue;
    };
    return ratingValue
})