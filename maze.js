window.onload = function(){

	document.querySelectorAll(".boundary").forEach(function(bnd){
		bnd.onmouseover = function(){
			document.getElementById("status").innerHTML = "You lose";
			bnd.classList.add("youlose");
		}
	});

	document.getElementById("boundary1").onmouseover = function(){
			document.getElementById("boundary1").classList.add("youlose");
	}
	
	let play = false;
	
	document.getElementById("start").onclick = function(){
		play = true;
		document.querySelectorAll(".boundary").forEach(function(bnd){
				bnd.classList.remove("youlose");
		});
		document.getElementById("status").innerHTML = "Click your mouse on the 'S' to begin";
	};
	

	document.getElementById("end").onmouseover = function(){
		if (play === true){
			flag = false;
			document.querySelectorAll(".boundary").forEach(function(bnd){
					if (bnd.classList.contains("youlose")){
						flag = true;
					}
				});
			if(flag === false){
				alert("YOU WIN!");
				document.getElementById("status").innerHTML = "YOU WIN";
			}
		}
	}
	
	document.getElementById("maze").onmouseleave = function(){
			play = false;
		}
};