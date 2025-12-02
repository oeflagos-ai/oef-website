
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  status: 'Ongoing' | 'Completed' | 'Planned';
  hideDetailsLink?: boolean;
  embedUrl?: string;
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
  almaMater?: string;
}