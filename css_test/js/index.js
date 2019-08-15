var checkbox = document.getElementById("enable-squiggly");
var avatar = document.getElementById("avatar");

checkbox.addEventListener("click", function(){
	if(this.checked){
		avatar.classList.add("enable-squiggly");
	} else {
		avatar.classList.remove("enable-squiggly");
	}
}, false);