'use strict'
//zmienne do checkboxów
var wszystkieZgody = document.getElementById('wszystkie-zgody');
//console.log('ostatniCheckbox');
var allCheckbox = document.querySelectorAll('input[type=checkbox]');
//console.log('allCheckbox');
var zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1')
var zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2')

// zmienna submit
var wyslijBtn = document.getElementById('wyslij')

//zmienne do inputów
var inputImie = document.getElementById('name');
var inputEmail = document.getElementById('email');

//zmienne do komunikatorów
var wiadomosc = document.getElementById('wiadomosc');

//funkcja zaznaczania wszystkich checkboxow
function stanCheckboxa() {
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
    
    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;
}

wszystkieZgody.onchange = stanCheckboxa;