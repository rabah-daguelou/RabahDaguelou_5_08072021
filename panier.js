let paniers=JSON.parse(localStorage.getItem('paniers'));
console.log(paniers);
let total=0;
for (var i = 0; i<paniers.length; i++) {
		total=total+paniers[i].quantite;
	}
	console.log(total);
	document.getElementById("total_article").innerText=total;



//vider le panier
confirmer_commande.onclick=()=> {
    localStorage.clear();
    document.location.reload();

}


