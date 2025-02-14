window.onload = () => {
    const startDate = new Date('2024-06-15T18:17:20');
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const carouselImages = document.querySelector('.carousel-images');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 400; // Largura de cada imagem
        carouselImages.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    setInterval(() => {
        nextBtn.click();
    }, 10000); // Troca de imagem a cada 10 segundos

    function updateCounter() {
        const now = new Date();
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();
        let hours = now.getHours() - startDate.getHours();
        let minutes = now.getMinutes() - startDate.getMinutes();
        let seconds = now.getSeconds() - startDate.getSeconds();

        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += previousMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        document.getElementById('years').textContent = years;
        document.getElementById('months').textContent = months;
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    setInterval(updateCounter, 1000);
};

function toggleFlip(card) {
    card.classList.toggle("flipped");

    // Pega a galeria
    const gallery = document.querySelector(".gallery");

    // Se algum card estiver virado, aumenta o espaçamento da galeria
    if (document.querySelector(".flip-card.flipped")) {
        gallery.classList.add("flipped");
    } else {
        gallery.classList.remove("flipped");
    }
}
