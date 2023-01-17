var orbit = document.getElementById('orbit');
var atom = document.getElementById('atom');
var counter;
counter = 1;
list = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N' ,'O', 'F', 'Ne', 'Li', 'Mg'];
var main = document.getElementById("atom-section");

main.addEventListener('click', function(){
	if(counter < 12){
		if(counter >= 4){
			var two = document.createElement('div');
			two.className = 'two';
			orbit.appendChild(two);
			var elec = document.createElement('div');
			elec.className = 'electron';
			two.appendChild(elec); 
		}
		if(counter < 4){
			var one = document.createElement('div');
			one.className = 'one';
			orbit.appendChild(one);
			var elec = document.createElement('div');
			elec.className = 'electron';
			one.appendChild(elec); 
		}
		counter = counter + 1;
		atom.innerHTML = list[counter-1];
	}
});


var cont = document.getElementById('top-section');

(function(n) {
    for (var i = 0; i < n; i++) {
        var elec = document.createElement('div');
        var r = Math.floor(Math.random() * 3);

        elec.className = i % 20 == 0 ? 'star star--big' : i % 9 == 0 ? 'star star--medium' : 'star';
        
        elec.setAttribute('style' , 'top: ' + Math.floor(Math.random() * cont.clientHeight) + 'px; left: ' + Math.floor(Math.random() * window.innerWidth) + 'px; animation-duration:' + (Math.floor(Math.random() * 3000) + 3000) + 'ms; animation-delay:' + (Math.floor(Math.random() * 3000) + 3000) +'ms;');
        cont.appendChild(elec);

    }
})(500);