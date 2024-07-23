document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('button[type="submit"]');

    submitButton.addEventListener('mouseover', function () {
        submitButton.style.backgroundColor = '#00337A';
    });

    submitButton.addEventListener('mouseout', function () {
        submitButton.style.backgroundColor = '#004AAD';
    });

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        submitButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            submitButton.style.transform = 'scale(1)';
        }, 100);
    });

    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseover', function () {
        dropdownContent.style.opacity = '1';
    });

    dropdown.addEventListener('mouseout', function () {
        dropdownContent.style.opacity = '0';
    });
});
