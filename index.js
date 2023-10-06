function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_2y6jxn7',
        'template_s58o7xp',
        event.target,
        'Qe3mzqfLxCAhBnh6A'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on fabiocorrales30@gmail.com"
            );

        })


    }