// redes.js
document.getElementById('toggleButton').addEventListener('click', function() {
    var panel = document.getElementById('socialPanel');
    if (panel.style.display === 'none' || panel.style.display === '') {
        panel.style.display = 'block';
        this.textContent = 'Ocultar Redes Sociales';
    } else {
        panel.style.display = 'none';
        this.textContent = 'Mostrar Redes Sociales';
    }
});
