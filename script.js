// Função para pausar vídeos quando o mouse sai do card
function playerDevideo(){
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('mouseleave', () => {
            const iframe = card.querySelector('iframe');
            if (iframe) {
                const iframeSrc = iframe.src; // Salva o src atual
                iframe.src = iframeSrc; // Recarrega o iframe para pausar o vídeo
            }
        });
    });
}
