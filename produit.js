const lienId=window.location.search;
console.log(lienId);
const idLien=lienId.slice(1);
console.log(idLien);

let api="http://localhost:3000/api/teddies"
let api2=api+"/"+idLien
console.log(api2);

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
		// Insérer les éléments

		//insérer la div carte

		let carte_produit=document.getElementById('nos-produits');
		carte_produit.appendChild(lien).href="prduit.html?";

		lien.appendChild(carte).classList.add("carte_produit");

		
		// Insérer l'image
		carte.appendChild(image_produit).classList.add("image_produit");
		image_produit.src=data.imageUrl;
		
		// Insérer le nom  et le prix
		carte.appendChild(nomEtprix_produit).classList.add("nomEtprix_produit")
		nomEtprix_produit.appendChild(nom_produit).classList.add("nom_produit")
		nom_produit.textContent=data.name;
		nomEtprix_produit.appendChild(prix_produit).classList.add("prix_produit")
		prix_produit.textContent=data.price/100+",00 €"

		// Insérer le nom du produit

		let produit_selectionne=document.getElementById('produit_selectionne')
		.textContent=data.name;
		
	});

