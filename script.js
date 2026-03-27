// Nexo Laburo - Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Optional: Add simple interactions, like simulating progress animation on load
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        // Animation is handled by CSS, but we could dynamically set the stroke-dasharray here
        // based on user data fetched from a backend in the future.
    });

    // Handle 'Not implemented' buttons
    const primaryBtns = document.querySelectorAll('.btn-primary');
    primaryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.innerHTML = '<i class="ph ph-spinner-gap fa-spin"></i> Cargando...';
            setTimeout(() => {
                alert("Simulación de curso: Esta función interactuará con el módulo de microlearning.");
                btn.innerHTML = 'Continuar cápsula';
            }, 800);
        });
    });

    const notifBtn = document.querySelector('.notif-btn');
    notifBtn.addEventListener('click', () => {
        alert("No tienes nuevas notificaciones en Nexo Laburo.");
    });
});
