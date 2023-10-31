export interface TextFragment {
  type: "text" | "highlight" | "italic" | "link";
  content: string;
  url?: string;
}

export interface ProjectLink {
  url: string;
  text: string;
}

export interface ProjectCardProps {
  title: string;
  description: TextFragment[];
  imageUrl: string;
  links: ProjectLink[];
}
