const images = document.querySelectorAll('.gallery-item');
const overlayer = document.querySelector('.overlayer');
const imgPreview = document.querySelector('.img-preview');

const closeBtn = document.querySelector('.close-btn');
const backBtn = document.querySelector('.back-btn');
const nextBtn = document.querySelector('.next-btn');

images.forEach(function(img, index){
    img.addEventListener('click', ()=>{
        imgPreview.innerHTML = '';
        const html = `<img src="assets/images/img-${index + 1}.jpg" alt="original-image" class="image">`;
        imgPreview.insertAdjacentHTML("afterbegin", html);
        overlayer.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', ()=>overlayer.classList.add('hidden'));