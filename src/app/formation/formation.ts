export class Formation {
    // @ts-ignore
    logo: string;
    // @ts-ignore
    ecole: string;
    // @ts-ignore
    diplome: string;
    // @ts-ignore
    emplacement: string;
    // @ts-ignore
    annee_debut: number;
    // @ts-ignore
    annee_fin: number;
    // @ts-ignore
    description: string;

    constructor(obj?: Partial<Formation>) {
        Object.assign(this, obj);
    }

}