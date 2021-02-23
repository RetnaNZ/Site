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

    if(searchInput.value == 'BSA626'){
        document.open('.\\zSites\\BSA626\\BSA626.html','', 'noopener=true')
    }

    if(searchInput.value == "BSA726"){
        document.open('.\\zSites\\BSA726\\BSA726.html','', 'noopener=true')

    }

    if(searchInput.value == "BVA615"){
        document.open('.\\zSites\\BVA615\\BVA615.html','', 'noopener=true')
    }
});
