let counter = document.querySelector('h1');
let count = 1;

setInterval(()=>{

    counter.innerText = count;
    count++
    
    if(count > 5) location.replace('https://adityachandra.notion.site/Aditya-Chandra-727eb31f4d54434493c0998bc06a23a0')
    
},1000)
