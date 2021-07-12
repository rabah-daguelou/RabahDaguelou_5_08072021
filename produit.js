// Récupération du nombre de produits s'il existent 


	
	
// Récupération de l'API via l'id
const lienId=window.location.search;
const idLien=lienId.slice(1);

let api="http://localhost:3000/api/teddies"
let api2=api+"/"+idLien

fetch(api2)		
	.then((res)=>res.json())
	
	.then((data)=>{

		//Création des éléments html de la carte produit 
		
		const carte=document.createElement("div");
		const image_produit=document.createElement("img");
		const nomEtprix_produit=document.createElement("div");
		const nom_produit=document.createElement("p");
		const prix_produit=document.createElement("p");
		const lien=document.createElement("a");
		
		
		// Insérer les éléments en HTML

		//insérer la div carte
		// Insérer le lien qui entoure la div carte
		let carte_produit=document.getElementById('nos-produits');
		carte_produit.appendChild(lien).href="#";

		// insérer la carte dans le lien
		lien.appendChild(carte).classList.add("carte_produit");

		
		// Insérer l'image dans la carte
		carte.appendChild(image_produit).classList.add("image_produit");
		image_produit.src=data.imageUrl;
		
		// Insérer le nom  du produit dans la carte
		carte.appendChild(nomEtprix_produit).classList.add("nomEtprix_produit")
		nomEtprix_produit.appendChild(nom_produit).classList.add("nom_produit")
		nom_produit.textContent=data.name;

		// Récupérer le nom du produit
		let produit_selectionne=document.getElementById('produit_selectionne')
		.textContent=data.name;

		// Insérer le prix du produit
		nomEtprix_produit.appendChild(prix_produit).classList.add("prix_produit")
		prix_produit.textContent=data.price/100+",00 €"

		// Insérer les options choix de couleurs
		for (var couleur = 0; couleur <data.colors.length; couleur++) {
			const choix=document.createElement("option");
			let choix_couleur=document.getElementById("choix_couleur");
			choix_couleur.appendChild(choix).textContent=data.colors[couleur];
		}
			
		// Récupérer la quantité choisie
		
		/*let quant=document.getElementById('quantite_commandee').value;
		document.getElementById('quant_com').innerText=quant;	*/
		//	Insérer le prix	

		// Insérer la quantité choisie
		const quantite_choisie=document.getElementById("quantite_commandee");
		quantite_commandee.addEventListener("input", function(){
				let quant=document.getElementById('quantite_commandee').value;
				let quantite=parseInt(quant);
				document.getElementById('quant_com').innerText=quantite;
		
		// Insérer le prix total	
		prix_total=data.price/100*quantite;
		document.getElementById('prix_total').innerText=prix_total+" €";


// Local storage

let paniers=[];

//Si local storage existe, récupérer
/*if (localStorage.getItem("paniers")!=null){
	paniers=JSON.parse(localStorage.getItem("paniers"));
	total=paniers[0];
	}*/

// Si local vide, créer et ajouter le panier	
let total=0;
if (localStorage.getItem("paniers")!=null){
	paniers=JSON.parse(localStorage.getItem("paniers"));
	
	for (var i = 0; i<paniers.length; i++) {
		total=total+paniers[i].quantite;
	}
	console.log(total);
	document.getElementById("total_article").innerText=total;
	} 		
 		// Au clic sur ajouter au panier
 		panier.onclick=()=> {	
 		let couleur=document.getElementById("choix_couleur").value;
 		let votrePanier={

    		nom:produit_selectionne,
			couleur:couleur,
			quantite:quantite,
			prix_unitaire:data.price/100,
			prix:prix_total,
		   } 			
 		
   
// Ajouter le nombre de produit

total=total+quantite;
document.getElementById("total_article").innerText=total;

// Mettre les achats dans le panier
 
 
  paniers.push(votrePanier);
      		
// transforme l'objet en format json
    localStorage.setItem("paniers",JSON.stringify(paniers));
    console.log(paniers);
// Continuer les achats ou non

confirm("Voulez-vous continuer les achats?");
if (confirm()){
	document.location.href="index.html"
}
else {
	document.location.href="panier.html"
};
	

// fin confirm
  }

// Fin local storage

// Vider le cache

vider_panier.onclick=()=> {
    localStorage.clear();
    document.location.reload();

}


});

})
	
		


