export interface Activity {
  _id?: string;
  title: string;
  organization: string;
  role?: string;
  date: string;
  desc?: string;
  link?: string;
  imageUrl?: string;
  category: 'volunteering' | 'event' | 'activity';
  createdAt?: string;
}
