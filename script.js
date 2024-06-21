document.getElementById('easteregg').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim().toLowerCase();

    if (nome == 'goku') {
        document.getElementById('gokugif').style.display = 'block';
    } else {
        alert('Digite "Goku" para ver a imagem.');
        document.getElementById('gokugif').style.display = 'none';
    }

});