export interface ProjectLink {
  url: string;
  text: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  links: ProjectLink[];
}

export interface ListItem {
  content: (string | { text: string; url: string })[];
}
