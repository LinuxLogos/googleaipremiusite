export interface Plan {
  id: number;
  title: string;
  category: 'Villa' | 'Immeuble' | 'Commercial' | 'Rénovation';
  description: string;
  imageUrl: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  imageUrl: string;
}

export enum PlanCategory {
    ALL = "Tous",
    VILLA = "Villa",
    BUILDING = "Immeuble",
    COMMERCIAL = "Commercial",
    RENOVATION = "Rénovation",
}
