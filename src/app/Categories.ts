// export enum Categories2 {
//     Noticias = "Noticias",
//     Roupas = "Roupas",
//     Automoveis = "Automóveis",
//     Eletronicos = "Eletrônicos",
//     Moveis = "Móveis",
//     Imoveis = "Imóveis",
//     Sapatos = "Sapatos",
//     Acessorios = "Acessórios",
//     Livros = "Livros",
//     Supermercado = "Supermercado",
//     Comes_E_Bebes = "Comes e Bebes",
//     Transporte = "Transporte",
//     Outros = "Outros",
// }

export class Categories {
    private static instance: Categories;
    
    private list:string[] = [
            "Noticias",
            "Roupas",
            "Automóveis",
            "Eletrônicos",
            "Móveis",
            "Imóveis",
            "Sapatos",
            "Acessórios",
            "Livros",
            "Supermercado",
            "Comes e Bebes",
            "Transporte",
            "Outros",
    ]
  
    private constructor() {
    }
  
    static getInstance(): Categories {
      if (!Categories.instance) {
        Categories.instance = new Categories();
      }
  
      return Categories.instance;
    }

    public getLista(){
        return this.list
    }
  
  }