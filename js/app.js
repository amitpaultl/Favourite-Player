
// commom funtion

function getElementidName(idName){
    const getidName = document.getElementById(idName); // input fild
    const getIdSting = getidName.value;
    const getIdNumber = Number(getIdSting); // input fild number
    return getIdNumber;
}

// single function

const totalSelectPlayer = []  //select player list 

function dispaly(PlayerAllNmae){
    const getEnlment =  document.getElementById('cerat-tag');
    const getEnlmentTag = document.createElement('li'); // child create tag li 
    if(PlayerAllNmae.length < 6){
        for (let i = 0; i < PlayerAllNmae.length; i++) {
            const element = PlayerAllNmae[i];
            getEnlmentTag.innerText = element // set player name
            getEnlment.appendChild(getEnlmentTag); //append tag 
        }
        
    }

    // playre budget

    document.getElementById('Calculate').addEventListener('click', function(){
        const player = PlayerAllNmae.length //select player list

        const totalAmount =  getElementidName('per-player') * player // select player budget amount
        
        const playerCostTag = document.getElementById('player-cost');
        playerCostTag.innerText = totalAmount; // finial player cost set
    });

    document.getElementById('Calculate-total').addEventListener('click', function(){
        const player = PlayerAllNmae.length; //select player list
        const totalAmount =  getElementidName('per-player') * player // select player budget amount
        const managerMoney =  getElementidName('manager'); // manager budget
        const coachMoney =  getElementidName('coach'); // coach budget
        const total = totalAmount + managerMoney + coachMoney;
        const amount = document.getElementById('amount');
        amount.innerText = total //all total budget set
      
    })
    
}

// one click function in html

function seceltName(element){
    if(totalSelectPlayer.length <= 4){ 
        element.setAttribute('disabled', '');  // set disable buttom
        const secletPlayer = element.parentNode.children[0].innerText // Player name
        totalSelectPlayer.push(secletPlayer);
        console.log(totalSelectPlayer);
        dispaly(totalSelectPlayer); //display function call
    }else{
        alert('You do not add player'); //out of 5 player select alert 
    }
    
}




