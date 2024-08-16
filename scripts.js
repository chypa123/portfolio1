
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.grid-item img').forEach(img => {
        img.addEventListener('click', (e) => {
            const content = e.target.getAttribute('data-content');
            document.getElementById('popup').style.display = 'flex';
            document.getElementById('popup-inner-content').innerHTML = content;
            document.body.classList.add('modal-open'); // Блокируем прокрутку
        });
    });

    const closeModal = () => {
        document.getElementById('popup').style.display = 'none';
        document.body.classList.remove('modal-open'); // Включаем прокрутку
    };

    document.getElementById('close-btn').addEventListener('click', closeModal);

    document.getElementById('popup').addEventListener('click', (e) => {
        if (e.target === document.getElementById('popup')) {
            closeModal();
        }
    });

    const images = document.querySelectorAll('.grid-item img');
    popup.addEventListener('click', (e) => {
        const popupImages = document.querySelectorAll('.popup-img');
        let clickInsideImage = false;

        popupImages.forEach(image => {
            if (image.contains(e.target)) {
                clickInsideImage = true;
            }
        });

        if (!clickInsideImage) {
            popup.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
    

});

