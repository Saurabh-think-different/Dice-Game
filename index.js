let btn = document.querySelector('button');


const onRoll = () => {
    
    let rand1 = Math.floor(Math.random()*6 + 1);
    let rand2 = Math.floor(Math.random()*6 + 1);

    const img1 = `images/dice${rand1}.png`;
    const img2 = `images/dice${rand2}.png`;


    const image1 = document.querySelector('.img1');
    const image2 = document.querySelector('.img2');
    const winner = document.querySelector('h1');

    image1.setAttribute('src', img1);
    image2.setAttribute('src', img2);
    console.log(rand1+rand2);

    if(rand1 > rand2){
        winner.innerHTML = `🚩  Player 1 wins!`;
    }
    else if(rand1 < rand2){
        winner.innerHTML = `Player 2 wins!  🚩`;
    }
    else{
        winner.innerHTML = `🚩 Its a tie, losers 🚩`;
    }

}

btn.addEventListener('click', onRoll);
