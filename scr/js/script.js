
function Descrevendoletra () {

}
// Função para animar o texto dentro de um elemento como efeito de digitação
function escrevendoLetra() {
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i)
        })
    }
    
    const titulo = document.querySelector('.digitando')
    ativaLetra(titulo);

}

escrevendoLetra()

// Função para lidar com o menu móvel
function MenuMobol() {

    const ativaMenu = document.querySelector('.fa-bars');  
    const navMenu = document.querySelector('header .navegacao-primaria')

    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}

// Função para lidar com o efeito de apresentação de slides para experiências e educação

function sobreMim() {
    
    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');

    divExperiencia[0].classList.add('ativo')
    divEducation[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    liEducation[0].classList.add('ativo')

    function slideShowExperiencia(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShowEducation(index) {
        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }

    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShowExperiencia(index);
        });
    });

    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShowEducation(index);
        });
    });
}
sobreMim();


const listaAll = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonAll = document.querySelectorAll('.projects_models .all');


function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('.ativo');
    });
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        removeClick(index)
    })
    
})  


function showLista(lista, buttom = "all"){
    lista.forEach((item) =>{
        item.classList.remove('ativo')
    });
    if(buttom == 'design'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
    }
    if(buttom == 'graphic'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }
    if(buttom == 'website'){
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
    if(buttom == 'all'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target
        if(currentButton.classList.contains('all')){
            showLista(listaAll)
        }
        if(currentButton.classList.contains('design')){
            showLista(listaAll, "design")
        }
        if(currentButton.classList.contains('graphic')){
            showLista(listaAll, "graphic")
        }
        if(currentButton.classList.contains('website')){
            showLista(listaAll, "website")
        }
        if(currentButton.classList.contains('all')){
            showLista(listaAll, "all")
        }
    })
})