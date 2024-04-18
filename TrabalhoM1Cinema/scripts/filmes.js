// Função para armazenar o filme selecionado e redirecionar para a página de assentos
function selectMovieAndRedirect(movie) {
    // Armazena o filme selecionado no localStorage
    localStorage.setItem('selectedMovie', movie);
    // Redireciona para a página de assentos
    window.location.href = './assentos.html';
}

// Funções para confirmar seleção de filme e redirecionar para a página de assentos
function confirmAndRedirect() {
    selectMovieAndRedirect('Ghostbusters: Frozen Empire');
}

function confirmAndRedirect1() {
    selectMovieAndRedirect('Godzilla e Kong: O Novo Império');
}

function confirmAndRedirect2() {
    selectMovieAndRedirect('Kung Fu Panda 4');
}

function confirmAndRedirect3() {
    selectMovieAndRedirect('Um Gato de Sorte');
}
