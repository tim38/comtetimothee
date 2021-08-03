export class Experience {
    // @ts-ignore
    logo: string;
    // @ts-ignore
    poste: string;
    // @ts-ignore
    entreprise: string;
    // @ts-ignore
    emplacement: string;
    // @ts-ignore
    contrat: string;
    // @ts-ignore
    annee_debut: number;
    // @ts-ignore
    annee_fin: number;
    // @ts-ignore
    description: string;

    constructor(obj?: Partial<Experience>) {
        Object.assign(this, obj);
    }

}