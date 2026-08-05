export interface Project {
  _id?: string;
  title: string;
  description: string;
  link: string;
  technologies: string[];
  imageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}
