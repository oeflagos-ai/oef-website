export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  status: 'Ongoing' | 'Completed' | 'Planned';
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}