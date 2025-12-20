// types/commodities.ts

export interface Product {
  name: string;
  imageSrc: string; // URL path relative to /public
  description?: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  overlayColor?: string;
  products: Product[];
}

export const PRODUCT_DATA: ProductCategory[] = [
  {
    id: 'cement',
    title: 'Cementiteous Products',
    subtitle: 'Essential materials for cement production and construction projects worldwide',
    overlayColor: 'rgba(0, 78, 235, 0.82)',
    products: [
      {
        name: 'CLINKER',
        imageSrc: '/assets/images/clinker.png',
        description: 'Clinker is the backbone of cement production. It is essentially a mix of limestone and minerals that have been heated in a kiln and have been transformed by this heat. Providing OPC and SRC-grade clinker in bulk to various cement manufacturing companies in India.'
      },
      {
        name: 'GYPSUM',
        imageSrc: '/assets/images/gypsum.png',
        description: 'Gypsum is a soft sulphate mineral composed of calcium sulphate dehydrate, with the chemicalformula CaSO4·2H2O. The major consumers of gypsum at present are the cement industry. OmanOrigin natural gypsum with specifications of 90–92% is delivered in bulk through vessels, containers,and barges to end users like cement, plasterboard, fertilizer manufacturing factories.'
      },
      {
        name: 'LIMESTONE',
        imageSrc: '/assets/images/limestone.png',
        description: 'Limestone is a natural sedimentary rock composed mainly of calcium carbonate. It is widely used in construction for producing cement, blocks, and aggregates. Known for its durability and versatility, limestone provides a strong base material for various building applications.'
      },
      {
        name: 'GREY CEMENT',
        imageSrc: '/assets/images/grey-cement.png',
        description: 'Grey cement is the most commonly used type of cement in construction. Made from limestone, clay, and other minerals, it is known for its strength, quick setting time, and versatility. It is ideal for concrete works, block molding, plastering, and general structural applications.'
      },
      {
        name: 'WHITE CEMENT',
        imageSrc: '/assets/images/white-cement.png',
        description: 'White cement is similar to ordinary cement in all aspects except for its high degree of whiteness. Obtaining this colour requires substantial modification to the method of manufacture. We influence the Indian market with Middle East-origin white cement in 25 kg or 50 kg PP bags, also in jumbo and in bulk.'
      },
      {
        name: 'GGBFS',
        imageSrc: '/assets/images/ggbfs.png',
        description: 'Ground Granulated Blast-furnace Slag is a cementitious material whose main use is in concrete and is a by-product from the blast furnaces used to make iron. We are exporting Indian-origin GGBS to most of the cement manufacturing companies in the UAE, Kuwait, Oman, Qatar, and KSA in bulk by incorporating well-defined vessel management.'
      },
    ],
  },
  {
    id: 'metals',
    title: 'Metals & industrial raw materials',
    subtitle: 'High-quality essential inputs used for efficient metal production and advanced industrial manufacturing.',
    overlayColor: 'rgba(19, 22, 28, 0.88)',
    products: [
      {
        name: 'IRON ORE PELLETS',
        imageSrc: '/assets/images/KfMScQyK4kB4fQbMRGvcT8IX4Q.jpeg',
        description: 'Iron ore pellets are refined, compacted balls of iron ore used as a primary raw material in steel production. With high iron content and consistent quality, they provide efficient furnace performance, reduced impurities, and improved productivity in steelmaking.'
      },
      {
        name: 'STEEL BILLETS',
        imageSrc: '/assets/images/qldEWTqkXvzIKUUIMz95akYUcYM.jpeg',
        description: 'Steel billets are semi-finished solid steel bars that serve as the foundational material for producing various steel products such as rods, bars, and structural components. Known for their strength, purity, and workability, billets are essential in manufacturing and construction industries.'
      },
      {
        name: 'HBI',
        imageSrc: '/assets/images/75fAGeqLA3kcfNphgJqq6H4HaWA.jpeg',
        description: 'HBI is a compacted form of direct reduced iron, created to make DRI safer and easier to transport. Its dense structure minimizes oxidation and provides a stable, high-quality input for electric arc furnaces in steel production.'
      },
      {
        name: 'DRI',
        imageSrc: '/assets/images/FZw1IfY34xPF3L8itPpt3KSP8.jpeg',
        description: 'DRI is produced by removing oxygen from iron ore without melting the material. It offers a clean, high-grade iron source for steelmaking, helping reduce energy consumption and improve control over the final steel composition.'
      },
      {
        name: 'BAUXITE',
        imageSrc: '/assets/images/tboh4pAslB7ZSrzej91QPJnoZ1A.jpeg',
        description: 'Bauxite is the primary ore used in the production of alumina and aluminum. Rich in aluminum oxide, it is a crucial industrial raw material used in metal production, refractories, abrasives, and various chemical processes.'
      },
    ],
  },
  {
    id: 'fertilizer',
    title: 'Fertilizer',
    subtitle: 'Essential components for agricultural fertilizer production',
    overlayColor: 'rgba(19, 22, 28, 0.88)',
    products: [
      {
        name: 'UREA',
        imageSrc: '/assets/images/dGM8XZU2IalySi8lk8Tm7ELxfI.jpeg',
        description: 'Urea is a highly concentrated nitrogen fertilizer that helps crops grow faster and greener. It dissolves quickly in soil and promotes strong leaf and stem development.'
      },
      {
        name: 'DAP',
        imageSrc: '/assets/images/PyUXj0xHTaXGCNOmjzH3aXX3QQ.jpeg',
        description: 'DAP is a widely used fertilizer that provides both phosphorus and nitrogen. It supports early root development, seedling strength, and overall plant health.'
      },
      {
        name: 'SULFUR',
        imageSrc: '/assets/images/vOWSm9eGrhLjuBx1omyU2ssZ8.jpeg',
        description: 'Sulfur is an essential nutrient that improves protein formation, chlorophyll production, and overall crop quality. It also helps enhance soil health and correct sulfur deficiencies.'
      },
      {
        name: 'AMMONIA',
        imageSrc: '/assets/images/eJgswC40QHbDAJlzR0dg57UQOVc.jpeg',
        description: 'Ammonia is a powerful nitrogen-rich fertilizer injected directly into the soil. It boosts vigorous plant growth and is commonly used for large-scale farming to increase yield.'
      },
    ],
  },
];