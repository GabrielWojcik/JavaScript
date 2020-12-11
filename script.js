function gritar(){
		alert("AHHHHHHHHHHHHHHHHHHHHH!");
}
function perguntar(){
		var nome;
		nome = prompt("Qual é o seu nome? ");
		alert("Olá "+ nome);
}
function mudar_texto(){
	var h1 = document.getElementsByTagName("h1");

	alert(h1[0].innerText.val());
		if(h1[0].innerText =="geek university"){
			h1[0].innerText ="Evolua seu lado geek";
		}else{
			h1[0].innerText = "geek";
		}

	h1[0].innerText = "Evolua seu lado geek!";
}
function incrementar(){
	var p1 = document.getElementsById("p1");

	p1.innerText = parseInt(p1.innerText) +1;
}