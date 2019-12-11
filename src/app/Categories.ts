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
    
    public static criarCategorias() {
      return new Categories();
    }

    static getInstance(): Categories {
      if (!Categories.instance) {
        Categories.instance = Categories.criarCategorias();
      }
  
      return Categories.instance;
    }
  

    public getLista(){
      return this.list
  }
  
  }