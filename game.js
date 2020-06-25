const wrapper = document.getElementById("wrapper")
const towers = document.querySelectorAll(".towers")
const tower3 = document.getElementById("tower3")
let moves = document.getElementById("moves")


for (let i = 0; i < towers.length; i++) {
    towers[i].addEventListener("dragstart", function (ev) {
        if (ev.target === towers[i].lastElementChild) {
            ev.target.classList.remove('no-drop')
            ev.target.classList.add('grab')
            ev.dataTransfer.setData("disc", ev.target.id)
            
        } else {
            ev.target.classList.add('no-drop')
            draggable = false
        }
    })  
}

wrapper.addEventListener("dragover", function (ev){
    ev.preventDefault();
});


wrapper.addEventListener("drop", function(ev) {
  ev.preventDefault();
  ev.target.classList.add('grab')
  let target = ev.target; 
  let disc = ev.dataTransfer.getData("disc")
  let discWidth = document.getElementById(disc).dataset.width
  
  let droppable = target.classList.contains("towers");

    if (droppable) {
        if (target.childElementCount > 0) {
            let targetLastChild = target.lastElementChild
            // console.log(targetLastChild.dataset.width)
            if (discWidth < targetLastChild.dataset.width) {
                target.appendChild(document.getElementById(disc))
            } else {
                // document.getElementById(disc).classList.add('no-drop')
            }
        } else {
        target.appendChild(document.getElementById(disc)) 
        }
    }
    if (target.childElementCount === 4 && target === tower3) {
        setTimeout( function() {
            let bannerOverlay = document.createElement("div")
            bannerOverlay.className = "win"
            bannerOverlay.innerHTML = 
                `<div class="text">
                <h2>Perfect!</h2>
                <p>You won the game</p>
                <div><a href="game.html">Play again</a></div>
                <div><a href="index.html">Home</a></div>
                </div>`
            document.body.append(bannerOverlay)
        }, 300)
    }
})













//tower.lastElementChild
//tower.appendChild(disc) 