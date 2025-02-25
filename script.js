const StartBtn = document.querySelector("#start")
const EndBtn = document.querySelector("#end")
const Display = document.querySelector(".Display")
const body = document.body;
const toast = document.getElementById('toast');
let Disco = null
let color = "#000000";
StartBtn.addEventListener('click',
    (e) => {
        if (Disco === null) {
            Disco = setInterval(setRandomColor, 10);
        }
        StartBtn.style.backgroundColor = "grey";
        EndBtn.style.backgroundColor = "blue";
    }
);
EndBtn.addEventListener('click',
    (e) => {
        clearInterval(Disco);
        Disco = null;
        StartBtn.style.backgroundColor = "blue";
        EndBtn.style.backgroundColor = "grey";
    }
);
Display.addEventListener('click',
    (e) => {
        const textArea = document.createElement('textarea');
        textArea.value = e.target.innerHTML;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        console.log('Text copied to clipboard!');
        toast.textContent = `Copied color: ${e.target.innerHTML}`;
        toast.style.display = 'block';
        toast.style.opacity = 100;

        // Hide the toast after 3 seconds
        setTimeout(function(){
            // toast.style.display = 'none';
            toast.style.opacity = 0;
        }, 2000);
    }
);
function setRandomColor() {
    const hex = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i < 6; i++) {
        let randomhex = parseInt(Math.random() * 16);
        color = color + hex[randomhex];
    }
    console.log(color);
    body.style.backgroundColor = color;
    Display.innerHTML = color;
}