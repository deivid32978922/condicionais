// Efeito de clique nos cards

document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', function() {
        // Efeito de ripple
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Adicionar animação de ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Efeito de digitação no título
const title = document.querySelector('.header h1');
const originalText = title.textContent;
title.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < originalText.length) {
        title.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Iniciar efeito de digitação após 1 segundo
setTimeout(typeWriter, 1000);

// Adicionar contador de visitantes (simulado)
let visitCount = Math.floor(Math.random() * 1000) + 500;
setInterval(() => {
    visitCount++;
    document.querySelector('.stat-number').textContent = visitCount;
}, 5000); 