function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.png" alt="bandeira da ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.png" alt="bandeira de ${player2}" />
  </li>  
  `
}

function createCard(date, day, games) {
  return `

  <div class="card">
      <h2>${date} <span>${day}</span></h2>

      <ul>
      ${games}            
      </ul>
    </div>
  `
}


document.querySelector('#cards').innerHTML =

  createCard("24/11", "quinta", createGame('brazil', '16:00', 'serbia')) +
  createCard("28/11", "segunda", createGame('brazil', '13:00', 'switzerland')) +
  createCard("02/12", "sexta", createGame('brazil', '16:00', 'cameroon'))


