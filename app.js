const body = document.body;

setInterval(rainFall, 10);

function rainFall () {
    const waterFall = document.createElement('i');

    waterFall.classList.add('fa-solid');
    waterFall.classList.add('fa-droplet');
    waterFall.style.fontSize = Math.random() * 10 + 'px';
    waterFall.style.animationDuration = Math.random() * 2 + 's';
    waterFall.style.left = Math.random() * window.innerWidth + 'px';
    
    body.appendChild(waterFall);

   setTimeout(() => {
       waterFall.remove();
   }, 6000);
   

}

