interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  sortOrder: number;
  isActive: boolean;

  updatedAt: string;
  createdAt: string;
}

interface Service {
  id: string;
  url: string;
  title: string;
  description: string;
  code: string;
  updatedAt: string;
  createdAt: string;
}

export type { ServiceCategory, Service };
