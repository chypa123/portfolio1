document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.grid-item img').forEach(img => {
        img.addEventListener('click', (e) => {
            const content = e.target.getAttribute('data-content');
            document.getElementById('popup').style.display = 'flex';
            document.getElementById('popup-inner-content').innerHTML = content;
        });
    });

    document.getElementById('close-btn').addEventListener('click', () => {
        document.getElementById('popup').style.display = 'none';
    });

    document.getElementById('popup').addEventListener('click', (e) => {
        if (e.target === document.getElementById('popup')) {
            document.getElementById('popup').style.display = 'none';
        }
    });
});
