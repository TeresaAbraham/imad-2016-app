console.log('Loaded!');

// Change the text of the main-text div

var element = document.getElementById('main-text');

element.innerHTML = "Teresa Abraham" ;

// Move the image

var img = document.getElementById('img');

img.onclick = function () {
   img.margin.left = '100px'; 
    
};

