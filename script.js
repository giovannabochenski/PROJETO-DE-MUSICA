let audios = [
    {caminho:'aliança.mp3', legenda:'Aliança-Tribalistas'},
    {caminho:'diewithasmile.mp3', legenda:'Dia-With-A-Smile'},
    {caminho:'experience.mp3', legenda:'experience'},
    {caminho:'foreveryoung.mp3', legenda:'forever-young'},
    {caminho:'neverenough.mp3', legenda:'neverenough'},
    {caminho:'shallow.mp3', legenda:'shallow'},
    {caminho:'tempoperdido.mp3', legenda:'tempo-perdido'},
    {caminho:'wildflower.mp3', legenda:'wildflower'},
    {caminho:'justgivemeareason.mp3', legenda:'just-give-me-a-reason'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
