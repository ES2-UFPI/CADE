export interface Anuncio {
    id?: string;
    geolocalizacao?: {lat:number, lng:number};
    titulo?: string;
    descricao?: string;
    categoria?: string;
    dataInicial?: Date;
    dataFinal?: Date;
}
