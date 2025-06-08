import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

interface Item {
  id: number;
  name: string;
  itemUrl: string;
  img: string;
  category: string;
  price: string;
  country: string;
  desc: string;
}

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de importar FormsModule
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  // Array de artículos
  items: Item[] = [
    {
      id: 1,
      name: 'Pendiente Suelto Sleek Plata Baño Oro',
      itemUrl:
        'https://singularu.com/products/pendiente-suelto-sleek-plata-oro',
      img: 'https://singularu.com/cdn/shop/files/ZPSSLEE925A00XX.jpg?crop=center&height=1309&v=1726586193&width=984',
      category: 'accesorios',
      price: '7.99€',
      country: 'spain',
      desc: 'Pendiente suelto en oro, solo 1, no el par.',
    },
    {
      id: 2,
      name: 'Pendiente Suelto Mini Moon Spark Plata Baño Oro',
      itemUrl:
        'https://singularu.com/products/pendiente-suelto-mini-moon-spark-oro',
      img: 'https://singularu.com/cdn/shop/products/ZPSMMOS925A00XX_9604af61-59ee-468a-9ab4-f66e452d5de6.jpg?crop=center&height=655&v=1670601903&width=492',
      category: 'accesorios',
      price: '15.99€',
      country: 'spain',
      desc: 'Pendiente suelto en oro, solo 1, no el par.',
    },
    {
      id: 3,
      name: 'Cómic - Chiikawa (tomos del 1 al 3)',
      itemUrl: 'https://www.fnac.es/a10397652/Ken-Nagano-Chiikawa-num-1',
      img: 'https://static.fnac-static.com/multimedia/Images/ES/NR/dd/87/82/8554461/1540-1.jpg',
      category: 'libros',
      price: '12.30€',
      country: 'spain',
      desc: 'Los prefiero si es posible en inglés, pero están imposibles de encontrar. En español en Fnac los tienen hasta el tomo nº3. La serie en español está cancelada, pero me haría ilusión tener los 3 tomos de todas formas.',
    },
    {
      id: 4,
      name: 'Pijama largo algodón Lilo & Stitch',
      itemUrl:
        'https://womensecret.com/es/es/mujer/dormir-y-homewear/pijamas/pijama-largo-algodon-lilo-stitch/3139903.html?dwvar_3139903_color=96',
      img: 'https://womensecret.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-ws-master-catalog/default/dwea909e4d/images/hi-res/P_313990396D1.jpg?sw=800&sh=1200&sm=fit&q=90',
      category: 'ropa',
      price: '17.99€',
      country: 'spain',
      desc: 'Talla M o L, mejor la L.',
    },
    {
      id: 5,
      name: 'Pijama Capri Lilo & Stitch algodón',
      itemUrl:
        'https://womensecret.com/es/es/mujer/dormir-y-homewear/pijamas/pijama-capri-lilo-stitch-algodon/3139906.html?dwvar_3139906_color=96',
      img: 'https://womensecret.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-ws-master-catalog/default/dw3491224b/images/hi-res/P_313990696FM.jpg?sw=800&sh=1200&sm=fit&q=90',
      category: 'ropa',
      price: '20.99€',
      country: 'spain',
      desc: 'Talla M o L, mejor la L.',
    },
    {
      id: 6,
      name: 'mofusand UT Camiseta',
      itemUrl:
        'https://www.uniqlo.com/es/es/products/E476464-000/00?colorDisplayCode=10&sizeDisplayCode=003',
      img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/476464/sub/goods_476464_sub17_3x4.jpg?width=400',
      category: 'ropa',
      price: '19.90€',
      country: 'spain',
      desc: 'Talla L o XL, mejor la L.',
    },

    {
      id: 7,
      name: 'mofusand UT Camiseta',
      itemUrl:
        'https://www.uniqlo.com/es/es/products/E476568-000/00?colorDisplayCode=00&sizeDisplayCode=003',
      img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/476568/sub/goods_476568_sub17_3x4.jpg?width=400',
      category: 'ropa',
      price: '19.90€',
      country: 'spain',
      desc: 'Talla L o XL, mejor la L.',
    },

    {
      id: 8,
      name: 'mofusand UT Camiseta',
      itemUrl:
        'https://www.uniqlo.com/es/es/products/E476465-000/00?colorDisplayCode=60&sizeDisplayCode=003',
      img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/476465/sub/goods_476465_sub17_3x4.jpg?width=400',
      category: 'ropa',
      price: '19.90€',
      country: 'spain',
      desc: 'Talla L o XL, mejor la L.',
    },

    {
      id: 9,
      name: 'Sanrio Characters UT Camiseta',
      itemUrl:
        'https://www.uniqlo.com/es/es/products/E477942-000/00?colorDisplayCode=60&sizeDisplayCode=003',
      img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/477942/sub/goods_477942_sub18_3x4.jpg?width=400',
      category: 'ropa',
      price: '19.90€',
      country: 'spain',
      desc: 'Talla L o XL, mejor la L.',
    },

    {
      id: 10,
      name: 'Sanrio Characters UT Camiseta',
      itemUrl:
        'https://www.uniqlo.com/es/es/products/E477458-000/00?colorDisplayCode=10&sizeDisplayCode=003',
      img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/477458/sub/goods_477458_sub18_3x4.jpg?width=400',
      category: 'ropa',
      price: '19.90€',
      country: 'spain',
      desc: 'Talla L o XL, mejor la L.',
    },

    {
      id: 11,
      name: 'Cafetera Cold Brew',
      itemUrl:
        'https://www.amazon.es/Iegefirm-Cafetera-cafetera-inoxidable-densidad/dp/B0CJDX6FM2/ref=sr_1_14?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3BOXNAQ3UGH1S&dib=eyJ2IjoiMSJ9.5U7D3u4ZQ6VYEvc5_qYsvCt0SeIKkt28wOnrMYynM57015BuOnJ9-BFV1CRBhTKl5Aa753YPK-ocFVY9YEPxj-dqj3vng_Dyq9yW8fA0lNws64SMun32whdU4IViwXKgLpO1Rsnhfo-lROcpwzXLzysWEReygdvRO8E9qhYANsrbGEGrAWgCnJlWK_OkJDGz18LfDGJNNx0vVsOC7NTlMv8eah_lEx02LsNRwMZhnXkiIF99px9bRvaRA53Tlgo5ASoiTV5EX8bxUMOn6OJ2kmbYIde2V4U2tDx0NwxJ15E.f-2BGjZXpbBDQYQ0HnqME0Q0_8YUIekZQOP-i52Ayi4&dib_tag=se&keywords=cold+brew&qid=1749325893&sprefix=cold+brew%2Caps%2C108&sr=8-14',
      img: 'https://m.media-amazon.com/images/I/51bYDnUE8QL._AC_SL1001_.jpg',
      category: 'hogar',
      price: '19.83€',
      country: 'spain',
      desc: 'Una jarra con filtro muy fino para preparar té o café frío, si la encontráis más barata en otro sitio me vale, con que no sea muy pequeña.',
    },

    {
      id: 12,
      name: 'Té Verde Jasmine Dragon Pearls',
      itemUrl:
        'https://teashop.com/products/te-verde-jasmine-dragon-pearls?_pos=13&_fid=6cfe24cd0&_ss=c&_gl=1*1739zmp*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwxo_CBhDbARIsADWpDH4JdtsmWjKbMwgXhQzQeTbuHg3oHusQ24TtIG8-yMELgi-YK-9HNR4aAuApEALw_wcB&gbraid=0AAAAADxz2z2BjwOhf6SDeha3E8YCTHWig',
      img: 'https://teashop.com/cdn/shop/files/13008_JasmineDragonPearls_1000x1000_l-1.jpg?v=1724053724&width=1000',
      category: 'hogar',
      price: '14.23€',
      country: 'spain',
      desc: 'Un té verde sencha o un gracia blend también me valen. Y si alguien encuentra un chai aromatizado a la vainilla, me muero.',
    },

    {
      id: 13,
      name: 'Camiseta Hachiware / Momonga',
      itemUrl:
        'https://item.rakuten.co.jp/honeys-online/6190139492/?l-id=shoptop_widget_item_list',
      img: 'https://image.rakuten.co.jp/honeys-online/cabinet/goods/6190139492/6190139492.jpg',
      category: 'ropa',
      price: '1780yen',
      country: 'japan',
      desc: 'Camiseta talla M o L, motivo Hachiware (azul) o Momonga (lila). Chiikawa ya la tengo, y Usagi no la quiero. Hay que pedirla via Buyee, es tienda de Rakuten.',
    },

    {
      id: 14,
      name: 'Caja de sobres de cartas Ave Mujica x MyGO',
      itemUrl:
        'https://www.board-game.co.uk/product/weiss-schwarz-booster-box-mygo-x-ave-mujica/',
      img: 'https://toysonejapan.com/cdn/shop/files/2025-02-13T142328.084_489x489.jpg?v=1739424229',
      category: 'juegos',
      price: '£38.69',
      country: 'uk',
      desc: 'Caja con 12 sobres de cartas de MyGO x Ave Mujica. A la venta el 18 de julio. Vienen de UK, pero envían rápido y sin aduanas.',
    },

    {
      id: 15,
      name: 'Sobre de cartas Ave Mujica x MyGO',
      itemUrl:
        'https://www.board-game.co.uk/product/weiss-schwarz-booster-pack-mygo-x-ave-mujica/',
      img: 'https://www.japan2uk.com/cdn/shop/files/Weiss_Schwarz_BanG_Dream_MyGO_x_Ave_Mujica_Japanese_Booster_Pack_700x700.png?v=1744281929',
      category: 'juegos',
      price: '£3.39',
      country: 'uk',
      desc: '1 sobre de cartas de MyGO x Ave Mujica. A la venta el 18 de julio. Viene de UK, pero envían rápido y sin aduanas.',
    },
    {
      id: 16,
      name: 'Mazo de cartas Ave Mujica',
      itemUrl:
        'https://www.board-game.co.uk/product/weiss-schwarz-trial-deck-bang-dream-ave-mujica/',
      img: 'https://i.ebayimg.com/images/g/ks8AAOSwIpJnh648/s-l1200.jpg',
      category: 'juegos',
      price: '£13.69',
      country: 'uk',
      desc: 'Mazo preconstruido de cartas de Ave Mujica. A la venta el 18 de julio. Viene de UK, pero envían rápido y sin aduanas.',
    },

    {
      id: 17,
      name: 'Camiseta Hachiware / Momonga / Chiikawa',
      itemUrl:
        'https://item.rakuten.co.jp/honeys-online/6190139493/?s-id=pc_shop_recommend&rtg=9841a2121bb4ca4f1a9388343983d54e',
      img: 'https://image.rakuten.co.jp/honeys-online/cabinet/goods/6190139493/6190139493.jpg',
      category: 'ropa',
      price: '1780yen',
      country: 'japan',
      desc: 'Camiseta talla M o L, motivo Hachiware (azul), Chiikawa (rosa) o Momonga (gris). Usagi no la quiero. Hay que pedirla via Buyee, es tienda de Rakuten.',
    },

    {
      id: 18,
      name: 'Sudadera Momonga / Chiikawa',
      itemUrl:
        'https://item.rakuten.co.jp/honeys-online/6190119132/?s-id=pc_shop_recommend&rtg=9841a2121bb4ca4f1a9388343983d54e',
      img: 'https://image.rakuten.co.jp/honeys-online/cabinet/goods/6190119132/6190119132.jpg',
      category: 'ropa',
      price: '2480yen',
      country: 'japan',
      desc: 'Sudadera talla M o L, motivo Chiikawa (rosa) o Momonga (lila). Hachiware ya la tengo, y Usagi no la quiero. Hay que pedirla via Buyee, es tienda de Rakuten.',
    },

    {
      id: 19,
      name: 'Peluche charm evil Momonga',
      itemUrl:
        'https://chiikawamarket.jp/en/collections/magicalchiikawa/products/4571609356639',
      img: 'https://chiikawamarket.jp/cdn/shop/files/4571609356639_1.jpg?v=1747737404&width=493',
      category: 'accesorios',
      price: '1870yen',
      country: 'japan',
      desc: 'El único peluche de Momonga sin cara de mala persona! Se puede comprar directo en la tienda de Chiikawa, sale el carrito de WorldShopping para compras internacionales cuando entras.',
    },

    {
      id: 20,
      name: 'Camiseta Tokyo Chiikawa',
      itemUrl:
        'https://chiikawamarket.jp/en/collections/apparel/products/4570189193511',
      img: 'https://chiikawamarket.jp/cdn/shop/files/4570189193511_1.jpg?v=1745389184&width=493',
      category: 'ropa',
      price: '3190yen',
      country: 'japan',
      desc: 'Talla L o XL. Se agotará, pero realmente me vale cualquier cosa de esa tienda. Se puede comprar directo, sale el carrito de WorldShopping para compras internacionales cuando entras.',
    },

    {
      id: 21,
      name: 'Camiseta Magical Chiikawa',
      itemUrl:
        'https://chiikawamarket.jp/en/collections/apparel/products/4570189195195?_pos=4&_fid=5160016fe&_ss=c&variant=46149759205617',
      img: 'https://chiikawamarket.jp/cdn/shop/files/4570189195195_1.jpg?v=1747730490&width=493',
      category: 'ropa',
      price: '3190yen',
      country: 'japan',
      desc: 'Talla L o XL. Se agotará, pero realmente me vale cualquier cosa de esa tienda. Se puede comprar directo, sale el carrito de WorldShopping para compras internacionales cuando entras.',
    },

    {
      id: 22,
      name: 'Peluche charm magical Momonga',
      itemUrl:
        'https://chiikawamarket.jp/en/collections/nuigurumi-mascot/products/4582662958524?_pos=32&_fid=6aa00b300&_ss=c',
      img: 'https://chiikawamarket.jp/cdn/shop/files/4582662958524_1.jpg?v=1721616448&width=493',
      category: 'accesorios',
      price: '1870yen',
      country: 'japan',
      desc: 'Peluche de Momonga con cara de mala persona. Se puede comprar directo en la tienda de Chiikawa, sale el carrito de WorldShopping para compras internacionales cuando entras.',
    },

    {
      id: 23,
      name: 'Peluche charm Kurimanju',
      itemUrl:
        'https://chiikawamarket.jp/en/collections/nuigurumi-mascot/products/4582662919471?_pos=53&_fid=cb27b0ee7&_ss=c',
      img: 'https://chiikawamarket.jp/cdn/shop/files/4582662919471_1.jpg?v=1709014211&width=493',
      category: 'accesorios',
      price: '1870yen',
      country: 'japan',
      desc: 'Tiene esa cara porque se acaba de tomar una cerveza y le ha sentado fenomenal. Se puede comprar directo en la tienda de Chiikawa, sale el carrito de WorldShopping para compras internacionales cuando entras.',
    },

    {
      id: 24,
      name: 'Peluche charm Magical Momonga (Power-Up)',
      itemUrl: 'https://chiikawamarket.jp/en/products/4582662970465',
      img: 'https://chiikawamarket.jp/cdn/shop/files/4582662970465_1.jpg?v=1693909659&width=493',
      category: 'accesorios',
      price: '1760yen',
      country: 'japan',
      desc: 'Peluche de Momonga con cara de satisfacción malvada. Se puede comprar directo en la tienda de Chiikawa, sale el carrito de WorldShopping para compras internacionales cuando entras.',
    },

    {
      id: 25,
      name: 'Peluche charm Umigame Hachiware',
      itemUrl:
        'https://chiikawamarket.jp/en/collections/nuigurumi-mascot/products/4582662929241?_pos=81&_fid=cb27b0ee7&_ss=c',
      img: 'https://chiikawamarket.jp/cdn/shop/files/4582662929241_1.jpg?v=1687318260&width=493',
      category: 'accesorios',
      price: '1650yen',
      country: 'japan',
      desc: 'Es Hachiware vestido de tortuga, no se puede pedir más a la vida. Se puede comprar directo en la tienda de Chiikawa, sale el carrito de WorldShopping para compras internacionales cuando entras.',
    },

    {
      id: 25,
      name: 'Peluche charm Shisa',
      itemUrl:
        'https://chiikawamarket.jp/en/collections/nuigurumi-mascot/products/4582662919921?_pos=94&_fid=cb27b0ee7&_ss=c',
      img: 'https://chiikawamarket.jp/cdn/shop/products/4582662919921_1.jpg?v=1665977545&width=493',
      category: 'accesorios',
      price: '1320yen',
      country: 'japan',
      desc: 'Peluche del tenaz cocinero Shisa. Se puede comprar directo en la tienda de Chiikawa, sale el carrito de WorldShopping para compras internacionales cuando entras.',
    },
  ];

  // Lista de artículos filtrados
  filteredItems: Item[] = [...this.items]; // Inicialmente mostramos todos los artículos

  // Lista de categorías y países disponibles para el filtro
  categories: string[] = [];
  countries: string[] = [];

  selectedCategory: string = ''; // Variable para guardar la categoría seleccionada
  selectedCountry: string = ''; // Variable para guardar el país seleccionado

  // Método para inicializar las categorías y países únicos
  ngOnInit(): void {
    // Obtener las categorías únicas de los artículos
    const categoriesSet = new Set(this.items.map((item) => item.category));
    this.categories = Array.from(categoriesSet);

    // Obtener los países únicos de los artículos
    const countriesSet = new Set(this.items.map((item) => item.country));
    this.countries = Array.from(countriesSet);
  }

  // Función que se ejecuta cuando se cambia la categoría o el país en el filtro
  onFilterChange(): void {
    this.filterItems();
  }

  // Función que filtra los artículos según la categoría y el país
  filterItems(): void {
    this.filteredItems = this.items.filter((item) => {
      const matchesCategory = this.selectedCategory
        ? item.category === this.selectedCategory
        : true;
      const matchesCountry = this.selectedCountry
        ? item.country === this.selectedCountry
        : true;
      return matchesCategory && matchesCountry;
    });
  }

  // Función para filtrar por categoría al hacer clic en el nombre de la categoría
  filterByCategory(category: string): void {
    this.selectedCategory = category; // Establece la categoría seleccionada
    this.filterItems(); // Llama a la función para aplicar los filtros
  }

  // Función trackBy para optimizar el rendimiento de la lista
  trackById(index: number, item: Item): number {
    return item.id;
  }
}
