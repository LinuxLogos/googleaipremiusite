import { Plan, Service, Testimonial, PlanCategory } from './types';

export const SERVICES_DATA: Service[] = [
  {
    icon: 'building-office-2',
    title: 'Plans Architecturaux sur Mesure',
    description: 'Nous concevons des plans uniques qui reflètent vos désirs, votre style de vie et votre budget, en optimisant chaque mètre carré.',
  },
  {
    icon: 'clipboard-document-check',
    title: 'Études Techniques & Génie Civil',
    description: 'Nos ingénieurs assurent la solidité et la durabilité de votre projet avec des études de sol, de structure et de béton armé rigoureuses.',
  },
  {
    icon: 'user-group',
    title: 'Suivi et Coordination de Chantier',
    description: 'Nous gérons votre chantier de A à Z, en coordonnant les artisans et en veillant au respect des délais, de la qualité et des normes.',
  },
  {
    icon: 'home-modern',
    title: 'Rénovation et Extension',
    description: 'Transformez votre espace existant. Nous apportons une expertise moderne pour rénover ou agrandir votre bien avec créativité et efficacité.',
  },
];

export const PLANS_DATA: Plan[] = [
  {
    id: 1,
    title: 'Villa Duplex Prestige',
    category: 'Villa',
    description: 'Une villa spacieuse R+1 avec 4 chambres, piscine et jardin. Confort moderne et design épuré.',
    imageUrl: 'https://picsum.photos/seed/villa1/600/400',
  },
  {
    id: 2,
    title: 'Immeuble de Bureaux "Le Carrefour"',
    category: 'Immeuble',
    description: 'Un immeuble R+5 moderne conçu pour des espaces de travail collaboratifs et lumineux.',
    imageUrl: 'https://picsum.photos/seed/building1/600/400',
  },
  {
    id: 3,
    title: 'Boutique de Luxe "Éclat"',
    category: 'Commercial',
    description: 'Aménagement d\'un espace commercial haut de gamme, alliant élégance et fonctionnalité.',
    imageUrl: 'https://picsum.photos/seed/shop1/600/400',
  },
    {
    id: 4,
    title: 'Villa contemporaine "Oasis"',
    category: 'Villa',
    description: 'Villa de plain-pied avec 3 chambres et un patio central, optimisée pour la ventilation naturelle.',
    imageUrl: 'https://picsum.photos/seed/villa2/600/400',
  },
  {
    id: 5,
    title: 'Résidence "Les Manguiers"',
    category: 'Immeuble',
    description: 'Immeuble résidentiel R+4 offrant des appartements de standing avec balcons et vue dégagée.',
    imageUrl: 'https://picsum.photos/seed/building2/600/400',
  },
  {
    id: 6,
    title: 'Rénovation d\'une maison coloniale',
    category: 'Rénovation',
    description: 'Restauration et modernisation d\'une bâtisse historique en préservant son cachet d\'origine.',
    imageUrl: 'https://picsum.photos/seed/renov1/600/400',
  },
  {
    id: 7,
    title: 'Restaurant "Le Zéphyr"',
    category: 'Commercial',
    description: 'Conception d\'un restaurant avec terrasse panoramique, mêlant matériaux locaux et design contemporain.',
    imageUrl: 'https://picsum.photos/seed/shop2/600/400',
  },
    {
    id: 8,
    title: 'Villa Minimaliste',
    category: 'Villa',
    description: 'Une conception épurée et fonctionnelle pour un style de vie simple et élégant.',
    imageUrl: 'https://picsum.photos/seed/villa3/600/400',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: 'M. et Mme Lawson',
    location: 'Lomé, Togo',
    quote: "Koneksi a transformé notre rêve en réalité. L'écoute, le professionnalisme et le respect des délais ont été exceptionnels. Notre maison est plus belle que nous l'imaginions.",
    imageUrl: 'https://picsum.photos/seed/person1/100/100',
  },
  {
    id: 2,
    name: 'Amina K.',
    location: 'Kara, Togo',
    quote: "J'avais peur des coûts et des complications, mais l'équipe a été transparente et m'a guidée à chaque étape. Je me sens en sécurité dans ma nouvelle maison, et c'est inestimable.",
    imageUrl: 'https://picsum.photos/seed/person2/100/100',
  },
  {
    id: 3,
    name: 'David G., Entrepreneur',
    location: 'Lomé, Togo',
    quote: "Pour la construction de nos nouveaux bureaux, la rigueur technique et la créativité de Koneksi ont fait toute la différence. Un partenaire de confiance pour tout projet d'envergure.",
    imageUrl: 'https://picsum.photos/seed/person3/100/100',
  },
];

export const PLAN_CATEGORIES: PlanCategory[] = [
    PlanCategory.ALL,
    PlanCategory.VILLA,
    PlanCategory.BUILDING,
    PlanCategory.COMMERCIAL,
    PlanCategory.RENOVATION,
];
