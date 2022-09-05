</div>
<script type="text/javascript" src="js/script.js">
    var myDeck = new deck();
console.log(myDeck);

window.onload = function() {

for(var i=0; i < myDeck.length; i++){
    div = document.createElement('div');
    div.className = 'card';

    if(myDeck[i].suit == 'Diamonds'){
        var ascii_char = '♦';
    } else {
        var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
    }

    div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
    document.body.appendChild(div);
}

}
</script>
</body>
</html>

