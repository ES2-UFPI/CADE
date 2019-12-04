export interface StorageInterface {
    save(chave:string, obj: any): void
    load(chave:string): any
}