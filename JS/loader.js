document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('page-loader');

    // 1. Esconde a tela de carregamento quando a página terminar de carregar
    // Usamos 'pageshow' em vez de 'load' para garantir que funcione se o usuário usar o botão de "Voltar" do navegador
    window.addEventListener('pageshow', () => {
        // Um pequeno atraso de 400ms para a animação ser vista
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 400); 
    });

    // 2. Intercepta os cliques nos links para mostrar o loader antes de sair
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const destino = link.getAttribute('href');
            const target = link.getAttribute('target');

            // Ignora links que são só "#" (âncoras na mesma página) ou abrem em nova aba
            if (destino === '#' || destino.startsWith('#') || target === '_blank' || destino.startsWith('javascript')) {
                return; 
            }

            e.preventDefault(); // Impede o navegador de trocar de página imediatamente
            
            // Mostra a tela de carregamento novamente
            loader.classList.remove('hidden');

            // Espera a tela de carregamento aparecer (500ms) e então muda a página
            setTimeout(() => {
                window.location.href = destino;
            }, 500); 
        });
    });
});