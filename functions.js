const background = () => {
    document.title = "Loaded"
}
const main = () => {
    const boxes = document.querySelectorAll('td.unclicked');
    const winconditions =
        [document.querySelectorAll('.row1'), document.querySelectorAll('.row2'), document.querySelectorAll('.row3'), document.querySelectorAll('.col1'),
            document.querySelectorAll('.col2'), document.querySelectorAll('.col3'), document.querySelectorAll('.diag1'), document.querySelectorAll('.diag2')];
    const subtitle = document.getElementById('subtitle')
    const modal = document.getElementById('modal')
    const overlay = document.getElementById('overlay')
    const dialog = document.getElementById('dialog')
    const main = document.getElementsByTagName('main')
    const replay = document.getElementById('replay')
    let currentTurn = "X";

    for (let i = 0; i < boxes.length; i++) {
        // Make filled-in boxes unchangeable on every turn.
        boxes[i].addEventListener('click', () => {
            if (boxes[i].classList.contains('unclicked')) {
                boxes[i].textContent = currentTurn
                if (currentTurn === "X") {
                    currentTurn = "O"
                }
                else {
                    currentTurn = "X"
                }
            }
            boxes[i].classList.remove('unclicked')
        })
        // Check for wins on every turn, when theres a winner introduce the modal.
        boxes[i].addEventListener('click', () => {
            for (var x = 0; x < winconditions.length; x++) {
                const currentlist = winconditions[x];
                if (currentlist[0].textContent === "O" && currentlist[1].textContent === "O" && currentlist[2].textContent === "O") {
                    modal.style.display = "block"
                    overlay.id = "winnersoverlay"
                    main[0].style = "filter:blur(5px)"
                    dialog.firstElementChild.textContent = "Player O wins!"
                }
                else if (currentlist[0].textContent === "X" && currentlist[1].textContent === "X" && currentlist[2].textContent === "X") {
                    modal.style.display = "block"
                    overlay.id = "winnersoverlay"
                    main[0].style = "filter:blur(5px)"
                    dialog.firstElementChild.textContent = "Player X wins!"
                }
                else { }
            }
        })
        // Change the subtitle on every turn.
        boxes[i].addEventListener('click', () => {
            if (currentTurn === "X") {
                subtitle.textContent = "Make a move Player X!"
            }
            else {
                subtitle.textContent = "Make a move Player O!"
            }
        })
    }
    // Restart the game, clearing the boxes and removing the modal.
    replay.addEventListener('click', () => {
        modal.style.display = "none"
        overlay.id = "overlay"
        main[0].style = ""
        dialog.firstElementChild.textContent = ""
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = " ";
            boxes[i].classList.add("unclicked")
        }
    })
}
document.addEventListener('DOMContentLoaded', main);
