'use strict';
function pobierzImie(event) {
    
    event.preventDefault();
//    console.log('działa');
    var form = document.getElementById('formularz');
//    console.log('działa');
    for (var i = 0; i < form.length; i++) {
//        console.log(form.elements[i].value);
        if (form.elements[i].value !='Submit') {
//            console.log(form.elements[i].value);
        }
    }
}
