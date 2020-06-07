const player    =      document.getElementById('player');
const rock      =      document.getElementById('rock');
const button    =      document.getElementById('start');
const modal     =      document.getElementById('modal');
const paper     =      document.getElementById('paper');
const spock     =      document.getElementById('spock');
const lizard    =      document.getElementById('lizard');
const scissors  =      document.getElementById('scissors');
const computer  =      document.getElementById('computer');
const player_icons  =      document.getElementById('player_icons');

const modal_title = document.getElementById('modal_title');
const modal_subtitle = document.getElementById('modal_subtitle');
const modal_content = document.getElementById('modal_content');

const nameImages     = ['rock','paper','spock','lizard', 'scissors'];
const rockImg     = 'rock';
const paperImg    = 'paper';
const spockImg    = 'spock';
const lizardImg   = 'lizard';
const scissorsImg = 'scissors';
const computerImg = 'computer';
const onboarding = ['Lizard_devours_paper', 'Lizard_poisons_spock','Paper_cover_stone', 'Paper_disallows_Spock','Paper_cover_stone', 'Scissors_decapitate_lizard','Spock_break_scissors', 'Spock_vaporizess_stone', 'Stone_crushes_lizard', 'Stone_crushes_scissors'  ]

const navOnboarding = `<nav class="navOnboarding">
                            <ul class="navOnboarding_ul">
                                ${
                                    onboarding.map( (onboard , index)   => `<li><a href="#slide${ index }">${ index + 1 }</a></li>` ) 
                                }
                            </ul>
                        </nav>`


const windowWelcome = ` <div class="modal__div-steps">
                            <h4>You have 10 choices to win</h4>
                            <ul class="onboarding">
                                ${
                                    onboarding.map( (  onboard, index ) => `<li id="slide${ index }" ><img  class="selected" src="/assets/img/onboarding/${ onboard }.jpg" alt="${ onboard }"></li>` ) 
                                }
                            </ul>
                            ${navOnboarding}
                        </div>`;

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        rock.innerHTML      = `<img  class="selected" src="/assets/img/${ rockImg }.png" alt="rock">`;
        paper.innerHTML     = `<img  class="selected" src="/assets/img/${ paperImg }.png" alt="paper">`;
        spock.innerHTML     = `<img  class="selected" src="/assets/img/${ spockImg }.png" alt="spock">`;
        lizard.innerHTML    = `<img  class="selected" src="/assets/img/${ lizardImg }.png" alt="lizard">`;
        scissors.innerHTML  = `<img  class="selected" src="/assets/img/${ scissorsImg }.png" alt="scissors">`;
        modal_title.innerText = `Welcome!`;
        modal_subtitle.innerText= `How to play?`;
        modal_content.innerHTML =  windowWelcome;
        button.innerText = 'start';

        button.addEventListener( 'click', () => modal.style.display = 'none' );

        rock.addEventListener('click', ()=> {
        rock.classList.add('ease-out')
        comparison(1);
        })
        paper.addEventListener('click', ()=> {
        paper.classList.add('ease-out')
        comparison(2);
        })
        spock.addEventListener('click', ()=> {
        spock.classList.add('ease-out')
        comparison(3);
        })
        lizard.addEventListener('click', ()=> {
        lizard.classList.add('ease-out')
        comparison(4);
        })
        scissors.addEventListener('click', ()=> {
        scissors.classList.add('ease-out')
        comparison(5);
        })
    }
};

function comparison ( numPlayer ) {
    let numPlayer2 = Math.floor(Math.random() * ( 1 , 5 ) + 1);
    let win = ['14','15','52','54','21','23','35','31','42','43'];
    let mergeNumber = win.includes( `${numPlayer}${numPlayer2}` );

    showPlayer( numPlayer , '' );
    showComputer( numPlayer2 , '_computer' );

    if ( numPlayer === numPlayer2 ) {
        show( 'Draw', 'orange' );

    } else if ( mergeNumber ) {
        show( `great, you win!`, 'green' );
        }
    else {
        show( 'Sorry, you loose' , 'red' );
    }
}

function showPlayer( number , propertyUrl ) {
    switch( number ) {
        case 1:  addImgplayer( rockImg, propertyUrl )
            break;
        case 2: addImgplayer( paperImg, propertyUrl ) 
            break;
        case 3: addImgplayer( spockImg, propertyUrl )
            break;
        case 4: addImgplayer( spockImg, propertyUrl )
            break;
        case 5: addImgplayer( spockImg, propertyUrl )
            break;
    }
}
//muestra resultado de computadora
function showComputer( number , propertyUrl ) {
    switch( number ) {
        case 1:  addImgComputer( rockImg, propertyUrl )
            break;
        case 2:  addImgComputer( paperImg, propertyUrl )  
            break;
        case 3:  addImgComputer( spockImg, propertyUrl )  
            break;
        case 4:  addImgComputer( lizardImg, propertyUrl )
            break;
        case 5:  addImgComputer( scissorsImg, propertyUrl )
            break;
    }
}

function addImgplayer ( nameImg, propertyUrl ) {
    return player.innerHTML= `<img  class="selected ease-in" src="/assets/img/${ nameImg }${propertyUrl}.png" alt="${ nameImg }"></img>`
}

function addImgComputer ( nameImg, propertyUrl ) {
    return computer.innerHTML= `<img  class="selected ease-in-right " src="/assets/img/${ nameImg }${propertyUrl}.png" alt="${ nameImg }"></img>`
}

function show( message , classVar ) {
   let element = document.getElementsByClassName('container__icons-img ease-out');
   
   result( message , classVar );
   setTimeout(()=>{
       for ( let i = 0; i < element.length; i++){
           element[i].classList.add('ease-in');
           element[i].classList.remove('ease-out');
       }

   },500)
}

function result( message , classVar ) {
    setTimeout(()=>{
        modal_title.innerText = '';
        modal_subtitle.innerText = '';
        modal_content.innerHTML = `<h1 class="text-result ${classVar}">${message}</h1>`;
        button.innerText = 'try again!';
        modal.style.display = 'flex'
        clearScreen();
    }, 1000

    )
}

function clearScreen() {
    let element2 = document.getElementsByClassName('container__icons-img ease-in');
        for ( let i = 0; i < element2.length; i++){
            element2[i].classList.remove('ease-in');
        }
        player.innerHTML ='';
        computer.innerHTML ='';
    
}

    











