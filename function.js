const searchInput = document.getElementById('searchinput');
const searchButton = document.getElementById('submitbutton');

let clicked = 0;

// searchInput.addEventListener('click', function(){
    
//     if(clicked === 0){
//         searchInput.value = '' ;
//         console.log("YOU CLICKED ME");
//         clicked = 1;
//     }
//     else{
//         console.log(clicked);
//     }
        
// });

searchButton.addEventListener('click', function(){
    
    if(searchInput.value == 'Whananaki'){
        document.open('.\\Whananki_Lodge\\index.html','', 'noopener=true')
    }else if(searchInput.value == 'js'){
        document.open('.\\js-playground\\index.html','', 'noopener=true')
    }else if(searchInput.value == 'exp'){
        document.open('.\\Expense Tracker\\index.html','', 'noopener=true')
    }else if(searchInput.value == 'scroll'){
        document.open('.\\Scrolling\\index.html','', 'noopener=true')
    }
});