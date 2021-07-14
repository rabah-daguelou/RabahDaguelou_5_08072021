

// Récupération du panier et du formulaire
let paniers=JSON.parse(localStorage.getItem('paniers'));
let commande=JSON.parse(localStorage.getItem('commande'));

console.log(paniers);
console.log(commande);

// Insérer le nombre d'articles dans le panier
let total=0;
for (var i = 0; i<paniers.length; i++) {
		total=total+paniers[i].quantite;
	}

document.getElementById("total_article").innerText=total;


// Récupérer le prix total à payer
var prix_a_payer=0;
for (var i = 0; i<paniers.length; i++) {
		prix_a_payer=prix_a_payer+paniers[i].prix;
	}
console.log('prix:'+ prix_a_payer);

// Récupération du nom du client et l'afficher
document.getElementById('nom')
.textContent=commande.nom+'   '+ commande.prenom;

// Afficher le prix total
document.getElementById('total_commande')
.textContent=prix_a_payer + '  €'

// Récupérer un id aléatoire et l'afficher

let id= Math.random().toString(36).substr(2, 5);
document.getElementById('identifiant')
.textContent=id;

	// Envoyer les données fetch post

// Vider Local storage
accueil.onclick=()=> {
    localStorage.clear();
    document.location.href="index.html";

}

