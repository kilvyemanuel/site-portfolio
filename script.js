// Smooth scrolling para navbar e para o link "veja meus projetos"
document.querySelectorAll('.nav-links a[href^="#"], a[href^="#projects"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});