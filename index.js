const drums = document.querySelectorAll('.drum').length;

    for (let i = 0; i < drums; i++) {
        document.querySelectorAll('.drum')[i].addEventListener('click', function (e) {
            let selectInnerhtml = this.innerHTML;
            sounds(selectInnerhtml);
            addAnimation(selectInnerhtml);
        })
    }

document.addEventListener('keydown', function (e) {
 
    sounds(e.key);
    addAnimation(e.key);

})


function addAnimation(currentkey) {
    let key = document.querySelector('.' + currentkey);
    key.classList.add('pressed');
    if (key.classList.contains('pressed')) {
        setTimeout(() => {
            key.classList.remove('pressed');
        }, 100);
    }
};


function sounds(keys) {
    switch (keys) {
        case "w":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            // console.log(selectInnerhtml);
            break;
    }
    }