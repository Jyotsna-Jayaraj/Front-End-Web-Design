const panels = document.querySelectorAll('.panel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currActive = 1;

panels.forEach((panel, idx) => {
    panel.addEventListener('click', () =>{
        removeActiveClasses();
        panel.classList.add('active');
        if(idx === 0){
            currActive = 1;
        }
        else if(idx === 1){
            currActive = 2;
        }
        else if(idx === 2){
            currActive = 3;
        }
        else if(idx === 3){
            currActive = 4;
        }
        else if(idx === 4){
            currActive = 5;
        }
        update();
    })
});

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

next.addEventListener('click', ()=>{
    currActive++;
    if(currActive>panels.length) {
        currActive = panels.length;
    }
    update();
});

prev.addEventListener('click', ()=> {
    currActive--;
    if(currActive<1) {
        currActive = 1;
    }
    update ();
});

function update() {
    panels.forEach((panel, indx) => {
        if(indx < currActive) {
            removeActiveClasses();
            panel.classList.add('active');
        }
        else {
            panel.classList.remove('active');
        }
    });
    
    if(currActive===1){
        prev.disabled = true;
    }
    else if (currActive === panels.length){
        next.disabled = true;
    }
    else {
        next.disabled = false;
        prev.disabled = false;
    }
}