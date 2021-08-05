// Si le local storage existe, récupérer les produits du panier
// Afficher le nombre d'article dans le panier
let paniers=[];
if (localStorage.getItem("paniers")!=null){
	paniers=JSON.parse(localStorage.getItem("paniers"));
	let total=0;
	for (var i = 0; i<paniers.length; i++) {
		total=total+paniers[i].quantite;
		document.getElementById("total_article").innerText=total;
		mon_panier.onclick=()=> {
		document.location.href="panier.html"
	};
};
// Si local storage est vide, mettre le panier à 0		
} else {
	let total=0;
	mon_panier.onclick=()=> {
	alert("Votre panier est vide !")
	};
};

// Récupération de l'API via l'id

// Retourner la partie de l'URL qui suit le symbole?
const lienId=window.location.search;

// Retourne la partie de l'URL sans le symbole ? 
const idLien=lienId.slice(1);

// Construire la nouvelle URL du produit sélectionné
let api="http://localhost:3000/api/teddies"
let api2=api+"/"+idLien

// Récupération des informations du produit sélectionné
fetch(api2)		
	.then((res)=>res.json())
	.then((data)=>{

		//Création des éléments html de la carte produit 
		
		const carte            =document.createElement("div");
		const image_produit    =document.createElement("img");
		const nomEtprix_produit=document.createElement("div");
		const nom_produit      =document.createElement("p");
		const prix_produit     =document.createElement("p");
		const lien             =document.createElement("a");
				
		// Insérer les éléments en HTML
		document.getElementById("produit_selectionne")
		.textContent=data.name;
		
		// Insérer la div carte et le lien
		let carte_produit=document.getElementById('nos-produits');
		carte_produit.appendChild(lien).href="#";
		lien.appendChild(carte).classList.add("carte_produit");
		
		// Insérer l'image dans la carte
		carte.appendChild(image_produit).classList.add("image_produit2");
		image_produit.src=data.imageUrl;
		
		// Insérer le nom  et le prix
		carte.appendChild(nomEtprix_produit).classList.add("nomEtprix_produit2")
		nomEtprix_produit.appendChild(nom_produit).classList.add("nom_produit")
		nom_produit.textContent=data.name;
		nomEtprix_produit.appendChild(prix_produit).classList.add("prix_produit")
		prix_produit.textContent=data.price/100+",00 €"
		
		// Insérer les options choix de couleurs
		for (var couleur = 0; couleur <data.colors.length; couleur++) {
			const choix=document.createElement("option");
			let choix_couleur=document.getElementById("choix_couleur");
			choix_couleur.appendChild(choix).textContent=data.colors[couleur];
		}
		
		// Insérer la quantité choisie
		let quantite_choisie=document.getElementById("quantite_commandee");
		quantite_commandee.addEventListener("input", function(){
			let quant=document.getElementById('quantite_commandee').value;
			let quantite=parseInt(quant);
							
			if(quantite<=0){
			alert('Merci de saisir une quantité supérieure à 0 !');
			quantite_choisie.value=0;
			}else{

				document.getElementById('quant_com').innerText=quantite;

			// Insérer le prix total des produits choisis	
			prix_total=data.price/100*quantite;
			document.getElementById('prix_total').innerText=prix_total+" €";
			
	// Au clic sur ajouter au panier
	// Créer un objet du produit
	// Pousser l'objet dans le tableau paniers
	// Stocker le tableau dans le localStorage
 		
 		panier.onclick=()=> {
 			document.getElementById('total_article').innerText;
 			let total=document.getElementById('total_article').textContent;
 			total    =parseInt(total)+quantite;
 			document.getElementById('total_article').innerHTML=total;
 			
 		let couleur =document.getElementById("choix_couleur").value;
 		let imageUrl=data.imageUrl;
 		let nom     =data.name;
 		
 		let votrePanier={
    		nom:nom,
			couleur:couleur,
			quantite:quantite,
			prix_unitaire:data.price/100,
			prix:prix_total,
			url:imageUrl,
			id_:data._id
		   } 	

paniers.push(votrePanier);

localStorage.setItem("paniers",JSON.stringify(paniers));

// Continuer les achats: Retour à la page d'accueil
// Non: Aller à la page panier

if (confirm(quantite+ "  produit(s) ajouté(s) au panier. \nContinuer les achats?\n\nOK: Continuer       Annuler: Voir mon panier")){
	document.location.href="index.html";
}else{
	document.location.href="panier.html";
	};
};

// Possibilité de vider le panier et renoncer aux achats

vider_panier.onclick=()=> {
    localStorage.clear();
    document.location.reload();
};
};
});
});
