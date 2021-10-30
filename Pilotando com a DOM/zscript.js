


const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')


buttonOpenModal.onclick = function(){
    modalWrapper.classList.remove('invisible')
}

buttonOpenModal.onkeydown = function(){
    modalWrapper.classList.add('invisible')
}


 


