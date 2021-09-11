let viewBtns = document.querySelectorAll('.view__btn'),
    profileModals = document.querySelectorAll('.profile__modal'),
    closeBtns = document.querySelectorAll('.close__btn');


viewBtns.forEach(function(button, index){
    button.addEventListener('click', function(e){
        profileModals[index].style.display = 'flex';
    })
})

closeBtns.forEach(function(button){
    button.addEventListener('click', (e) =>{
        profileModals.forEach(function(modal){
            modal.style.display = 'none';
        })
    })
})