
// commom funtion

function getElementidName(idName){
    const getidName = document.getElementById(idName);
    const getIdSting = getidName.value;
    const getIdNumber = Number(getIdSting);
    return getIdNumber;
}

// single function

const totalSelectPlayer = []

function dispaly(PlayerAllNmae){
    const getEnlment =  document.getElementById('cerat-tag');
    const getEnlmentTag = document.createElement('li');
    if(PlayerAllNmae.length < 6){
        for (let i = 0; i < PlayerAllNmae.length; i++) {
            const element = PlayerAllNmae[i];
            getEnlmentTag.innerText = element
            getEnlment.appendChild(getEnlmentTag);
        }
        
    }

    document.getElementById('Calculate').addEventListener('click', function(){
        const player = PlayerAllNmae.length

        const totalAmount =  getElementidName('per-player') * player
        
        const playerCostTag = document.getElementById('player-cost');
        playerCostTag.innerText = totalAmount;
    });

    document.getElementById('Calculate-total').addEventListener('click', function(){
        const player = PlayerAllNmae.length;
        const totalAmount =  getElementidName('per-player') * player
        const managerMoney =  getElementidName('manager');
        const coachMoney =  getElementidName('coach');
        const total = totalAmount + managerMoney + coachMoney;
        const amount = document.getElementById('amount');
        amount.innerText = total
      
    })
    
}

function seceltName(element){
    if(totalSelectPlayer.length <= 4){
        element.setAttribute('disabled', '');
        const secletPlayer = element.parentNode.children[0].innerText
        totalSelectPlayer.push(secletPlayer)
        console.log(totalSelectPlayer);
        dispaly(totalSelectPlayer)
    }else{
        alert('You do not add player');
    }
    
}




