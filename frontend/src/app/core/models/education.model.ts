export interface Education {
  _id?: string;
  title: string;
  institution: string;
  date: string;
  desc?: string;
  type: 'university' | 'course';
  link?: string;
  imageUrl?: string;
  skillsLearned?: string[];
  createdAt?: string;
}
