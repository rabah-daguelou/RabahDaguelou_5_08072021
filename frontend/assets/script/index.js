
// Si le local storage existe, récupérer les produits du panier
// Insérer la quantité de produit dans le panier
// Possibilité d'accéder à la page panier directement en cliquant sur Panier
if (localStorage.getItem("paniers")!=null){
	paniers		=JSON.parse(localStorage.getItem("paniers"));
	let total   =0;

	for (var i = 0; i<paniers.length; i++) {
		total=total+paniers[i].quantite;
		document.getElementById("total_article").innerText=total;
		mon_panier.onclick		=()=> {
		document.location.href	="../../html/panier.html"
	};
};

// Si local storage est vide, mettre le panier à 0 
// Si l'utilisateur clique sur le panier, on affiche un message		
	
} else {
	let total=0;
	mon_panier.onclick=()=> {
	alert("Votre panier est vide !");
	};
};
	
// Récupération de tous les produits de l'API via Fetch avec la méthode GET
let api="http://localhost:3000/api/teddies"

fetch(api)		
	.then((res)=>res.json())
	
	// Si la requête échoue, on affiche un message
	.catch((err)=>{
		let erreur=document.getElementById("nos-produits")
		.textContent="Erreur: Accès au serveur impossible ! Le contenu de la page ne peut pas être affiché!"
	})

	// Si la requête réussit
	.then((data)=>{

//Création des éléments html de la carte produit 
		
for (var i = 0; i <data.length; i++) {
						
	const carte 		   =document.createElement("div");
	const image_produit	   =document.createElement("img");
	const nomEtprix_produit=document.createElement("div");
	const nom_produit 	   =document.createElement("p");
	const prix_produit     =document.createElement("p");
	const lien 			   =document.createElement("a");
	let description        =document.createElement("p");

	// Insérer les éléments HTML et leur contenu

	//insérer la div carte
	let carte_produit=document.getElementById('nos-produits');
	carte_produit.appendChild(lien).href="produit.html?"+data[i]._id;
	lien.appendChild(carte).classList.add("carte_produit");
	
	// Insérer le nom  et le prix
	carte.appendChild(nomEtprix_produit).classList.add("nomEtprix_produit")
	nomEtprix_produit.appendChild(nom_produit).classList.add("nom_produit")
	nom_produit.textContent=data[i].name;
	nomEtprix_produit.appendChild(prix_produit).classList.add("prix_produit")
	prix_produit.textContent=data[i].price/100+",00 €"
		
	// Insérer l'image
	carte.appendChild(image_produit).classList.add("image_produit");
	image_produit.src=data[i].imageUrl;

	// Insérer la description du produit
	carte.appendChild(description).classList.add("description");
	description.textContent=data[i].description;
		
	
};
});

	



 