export interface ProjectItem {
  id: string;
  year: string;
  title: string;
  category: string;
  duration: string;
  badge: string;
  description: string;
  role: string;
  imageKey: string;
  client: string;
  equipment: string;
  colorGrade: string;
  stills: string[];
}

export interface ImageSlot {
  key: string;
  label: string;
  section: string;
  currentUrl: string;
  defaultUrl: string;
  altText: string;
  aspectRatio: string;
  notes: string;
}

export interface SoftwareItem {
  name: string;
  abbr: string;
  subtitle: string;
  level: string;
  icon?: string;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  location: string;
  description: string;
  tags: string[];
}
