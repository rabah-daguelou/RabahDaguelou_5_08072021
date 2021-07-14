var prix_a_payer=0;

// Récupération des achats


let paniers=JSON.parse(localStorage.getItem('paniers'));
console.log(paniers);
let total=0;
for (var i = 0; i<paniers.length; i++) {
		total=total+paniers[i].quantite;
	}

document.getElementById("total_article").innerText=total;

// Afficher le nombre d'article
document.getElementById("votre_panier").textContent=total+"  article(s)";

// Afficher les articles du panier en détail

		//Création des éléments html de la carte produit 
	for (let i in paniers) {	
		let lien=document.createElement("a");
		let carte=document.createElement("div");
		let image_produit=document.createElement("img");
		let nombre_produit=document.createElement("span");
		let nomEtprix_produit=document.createElement("div");
		let nom_produit=document.createElement("p");
		let prix_produit=document.createElement("p");
		let prix_total=document.createElement("p");
				
		// Récupérer les articles dans le panier

		let carte_produit=document.getElementById('nos-produits');
		carte_produit.appendChild(lien).href="#";

		// insérer la carte dans le lien
		lien.appendChild(carte).classList.add("carte_produit_mini");
		
		// Insérer l'image dans la carte
		carte.appendChild(image_produit).classList.add("image_produit_mini");
		image_produit.src=paniers[i].url;
		carte.appendChild(nombre_produit)
		.classList.add("nombre_article");
		nombre_produit.textContent=paniers[i].quantite;
		
		// Insérer le nom  du produit dans la carte
		carte.appendChild(nomEtprix_produit).classList.add("nomEtprix_produit_mini");
		nomEtprix_produit.appendChild(nom_produit).classList.add("nom_produit");
		nom_produit.textContent=paniers[i].nom;

		// Insérer le prix du produit
		nomEtprix_produit.appendChild(prix_produit).classList.add("prix_produit")
		prix_produit.textContent='Prix/u: '+ paniers[i].prix_unitaire+'€';

		// Insérer le prix total du produit
		carte.appendChild(prix_total)
		.textContent='Prix total: '+ paniers[i].prix+'€'
		prix_total.classList.add("prix_total");

		prix_a_payer=prix_a_payer+paniers[i].prix;

}		
// fin de création des éléments html

document.getElementById("toal_a_payer")
.textContent=prix_a_payer+ ' €';

// Récupérer les données du formulaire


// Ecouter le clic
document.querySelector('#confirmer_commande')
.addEventListener("click",(f)=>{
f.preventDefault();

let nom=document.querySelector('#nom').value;
let prenom=document.querySelector('#prenom').value;
let adresse=document.querySelector('#adresse').value;
let ville=document.querySelector('#ville').value;
let code_postal=document.querySelector('#code_postal').value;
let mail=document.querySelector('#mail').value;
let tel=document.querySelector('#tel').value;

console.log(nom);
let commande={
		nom:nom,
		prenom:prenom,
		adresse:adresse,
		ville:ville,
		code_postal:code_postal,
		mail:mail,
		tel:tel,
	}

console.log(commande);

//local storage
localStorage.setItem("commande",JSON.stringify(commande));
})

// Aller sur la page commande

confirmer_commande.onclick=()=>{
	document.location.href="commande.html";
}

