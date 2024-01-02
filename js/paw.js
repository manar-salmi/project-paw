// Simuler l'ajout d'un patient
document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Récupérer les valeurs du formulaire
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
  
    // Créer un nouvel élément pour afficher les informations du patient
    let nouveauPatient = document.createElement('div');
    nouveauPatient.innerHTML = `<p><strong>Nom:</strong> ${nom}</p><p><strong>Prénom:</strong> ${prenom}</p><hr>`;
  
    // Ajouter le nouvel élément au div des dossiers médicaux
    document.getElementById('dossiersMedicaux').appendChild(nouveauPatient);
  
    // Effacer les champs du formulaire après l'ajout
    document.getElementById('patientForm').reset();
  });
// Fonction pour créer un nouveau dossier médical patient
function creerDossierPatient(nom, prenom) {
    let dossierPatient = document.createElement('div');
    dossierPatient.classList.add('patient-record');
    dossierPatient.innerHTML = `
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Prénom:</strong> ${prenom}</p>
      <button class="btn-supprimer">Supprimer</button>
      <hr>
    `;
    return dossierPatient;
  }
  
  // Événement lors de la soumission du formulaire
  document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Récupérer les valeurs du formulaire
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
  
    // Créer un nouveau dossier médical patient
    let nouveauPatient = creerDossierPatient(nom, prenom);
  
    // Ajouter le nouvel élément au div des dossiers médicaux
    document.getElementById('dossiersMedicaux').appendChild(nouveauPatient);
  
    // Effacer les champs du formulaire après l'ajout
    document.getElementById('patientForm').reset();
  });
  
  // Événement pour supprimer un dossier médical patient
  document.getElementById('dossiersMedicaux').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-supprimer')) {
      let dossierASupprimer = event.target.parentElement;
      dossierASupprimer.remove();
    }
  });
    