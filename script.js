const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionBox = document.getElementById('question-box');
const successBox = document.getElementById('success-box');

yesBtn.addEventListener('click', () => {
    questionBox.classList.add('hidden');
    successBox.classList.remove('hidden');
    createConfetti();
});

noBtn.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

noBtn.addEventListener('click', () => {
    alert('Zkus to znovu!');
});

function animateHeart(heart) {
    const moveHeart = () => {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        heart.style.left = randomX + 'px';
        heart.style.top = randomY + 'px';
    };
    
    heart.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    heart.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    heart.style.transition = 'all 4s ease-in-out';
    
    setTimeout(moveHeart, 100);
    setInterval(moveHeart, 4000);
}

document.querySelectorAll('.heart').forEach(heart => {
    animateHeart(heart);
});

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.backgroundColor = ['#ff69b4', '#ff1493', '#ff69b4', '#ffb6c1'][Math.floor(Math.random() * 4)];
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 10000);
        }, i * 30);
    }
}