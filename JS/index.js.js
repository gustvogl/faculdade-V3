document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    searchInput.addEventListener('input', () => {
        const hasValue = searchInput.value.trim().length > 0;
        
        searchBtn.classList.toggle('active', hasValue);
        searchBtn.disabled = !hasValue;
    });

    searchBtn.addEventListener('click', () => {
        // Efeito visual simples de "carregando"
        const originalText = searchBtn.innerText;
        searchBtn.innerText = "Buscando...";
        
        setTimeout(() => {
            alert(`🔍 Buscando cursos relacionados a: ${searchInput.value}`);
            searchBtn.innerText = originalText;
        }, 600);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    // Abre o menu
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    // Fecha o menu
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Fecha ao clicar em um link
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (seu código do menu mobile anterior continua aqui) ...

    // Lógica do Dark Mode
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    // 1. Verifica se o usuário já havia escolhido o modo escuro antes
    const savedTheme = localStorage.getItem('playtime-theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    // 2. Ação ao clicar no botão
    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            // Volta para o modo claro
            body.removeAttribute('data-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('playtime-theme', 'light');
        } else {
            // Ativa o modo escuro
            body.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('playtime-theme', 'dark');
        }
    });
});

const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');

searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 0) {
        searchBtn.classList.add('active');
        searchBtn.disabled = false;
    } else {
        searchBtn.classList.remove('active');
        searchBtn.disabled = true;
    }
});

