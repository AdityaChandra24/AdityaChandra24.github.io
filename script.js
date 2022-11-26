let counter = document.querySelector('h1');
let count = 1;

setInterval(()=>{

    counter.innerText = count;
    count++
    
    if(count > 5) location.replace('https://adityachandraa.notion.site/Projects-e1577b3170734a969a73e7f1e961404b')
    
},1000)