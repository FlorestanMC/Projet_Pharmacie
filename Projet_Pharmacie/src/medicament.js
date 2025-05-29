// un médicament 
export class Medicament {

    constructor(medicamentJSON) { // en paramètre un médicament au format JSON 

        this._id = medicamentJSON.id;

        this._denomination = medicamentJSON.denomination;

        this._formepharmaceutique = medicamentJSON.formepharmaceutique;

        this._photo = medicamentJSON.photo ?? "";

        this._quantite = medicamentJSON.qte;


    }

    get id() { return this._id };

    get denomination() { return this._denomination };

    get formepharmaceutique() { return this._formepharmaceutique };

    get photo() { return this._photo };

    get quantite() { return this._quantite };


}