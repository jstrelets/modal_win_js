function closeModal () {        // ф-я закрытия модального окна
    const modal = document.querySelector('.modal');

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal() {      // ф-я окрытия модального окна
    const modal = document.querySelector('.modal');

    modal.classList.add('show'); 
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

}

function modal() {
    
    const btnModal = document.querySelectorAll('.btn'), // получение всех элементов со страницы
          modal = document.querySelector('.modal');

    modal.addEventListener('click', (e) => {  // закрытие модального окна при клике на подушку
        if(e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {     // закрытие модального окна при нажатии Escape
        if(e.code === 'Escape' && modal.classList.contains('show')) {   
            closeModal();
        }
    });

}

openModal();
closeModal();
modal();