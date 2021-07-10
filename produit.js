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
		
		
		// Insérer les éléments

		//insérer la div carte

		let carte_produit=document.getElementById('nos-produits');
		carte_produit.appendChild(lien).href="#";

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

		// Insérer les options choix de couleurs
		for (var couleur = 0; couleur <data.colors.length; couleur++) {
			const choix=document.createElement("option");
			let choix_couleur=document.getElementById("choix_couleur");
			choix_couleur.appendChild(choix).textContent=data.colors[couleur];
			}
			
		// Gérer la quantité choisie
		

		let quant=document.getElementById('quantite_commandee').value;
		document.getElementById('quant_com').innerText=quant;	
		
		let prix_total=0;
			document.getElementById('prix_total').innerText=prix_total+" €";
		const quantite_choisie=document.getElementById("quantite_commandee");
		quantite_commandee.addEventListener("input", function(){
				let quant=document.getElementById('quantite_commandee').value;
				document.getElementById('quant_com').innerText=quant;
		
		prix_total=data.price/100*quant;
		document.getElementById('prix_total').innerText=prix_total+" €";


// Local storage
panier.onclick=()=> {
    const panier={
    	nom:produit_selectionne,
			couleur:data.colors[couleur],
			quantite:parseInt(quant),
			prix_unitaire:data.price/100,
			prix:prix_total
        
    }
    // transforme l'objet en format json
    localStorage.setItem("Panier",JSON.stringify(Panier));
    // Rafrichir la page
    document.location.reload();
}
			
});



	});
	
		


