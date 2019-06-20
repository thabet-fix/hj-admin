export class Profil {
    public $key: any;
    public nom_utilisateur: string;
    public email: string;
    public password: string;
    public id: number;
    public nom: string;
    public prenom: string;
    public image: string;
    public sexe: string;
    public date_naissance: Date;
    public lieu_naissance: string;
    public telephone : string;
    public nationalite : string;
    public pays : string;
    public ville :string;
    public poste : string;
    public secteur : string;
    public type_contrat: string;
    public resume: string;
    public axe_motivation: string;
    public sivp : boolean;
    public duree_sivp: number;
    public cv : boolean;
    public status : boolean;
    /* Données spécifiques pour les entreprises */
    public type: string;
    public nom_entreprise: string;
    public desc_entreprise: string;
    public emplacement_entreprise: string;
    public site_entreprise: string;
    /* Données spécifiques pour les entreprises */
  
    constructor(
      $key: any, nom_utilisateur: string, id: number, password: string, type: string, nom: string, prenom: string, image: string, 
      sexe: string, date_naissance: Date, telephone: string, email: string,
      nationalite: string, pays: string, ville: string,
      poste: string, secteur: string, type_contrat: string, resume: string, 
      axe_motivation: string, sivp: boolean, duree_sivp: number, cv: boolean, status: boolean,
      /* Données spécifiques pour les entreprises */
      nom_entreprise: string, desc_entreprise: string, emplacement_entreprise: string, site_entreprise: string
      /* Données spécifiques pour les entreprises */
      ) {
    this.$key = $key;
    this.nom_utilisateur = nom_utilisateur;
    this.id = id;
    this.password = password;
    this.type = type;
    this.image = image;
    this.nom = nom;
    this.prenom = prenom;
    this.sexe = sexe;
    this.date_naissance = date_naissance;
    this.telephone = telephone;
    this.email = email;
    this.nationalite = nationalite;
    this.pays = pays;
    this.ville = ville;
    this.poste = poste;
    this.secteur = secteur;
    this.type_contrat = type_contrat;
    this.resume = resume;
    this.axe_motivation = axe_motivation;
    this.sivp = sivp;
    this.duree_sivp = duree_sivp;
    this.cv = cv;
    this.status = status;
    /* Données spécifiques pour les entreprises */
    this.nom_entreprise = nom_entreprise;
    this.desc_entreprise = desc_entreprise;
    this.emplacement_entreprise = emplacement_entreprise;
    this.site_entreprise = site_entreprise;
    /* Données spécifiques pour les entreprises */
    }
  }
  