// ProjectCard.tsx

import Image from 'next/image';
import React from 'react';
import { ProjectCardProps, TextFragment } from 'src/types';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, links }) => {
  const renderTextFragment = (fragment: TextFragment, index: number) => {
    switch (fragment.type) {
      case 'text':
        return <span key={index}>{fragment.content}</span>;
      case 'highlight':
        return <span key={index} className="font-bold">{fragment.content}</span>;
      case 'italic':
        return <i key={index}>{fragment.content}</i>;
      case 'link':
        return (
          <a key={index} href={fragment.url} className="underline font-bold" target="_blank" rel="noopener noreferrer">
            {fragment.content}
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col bg-tertiary p-4 rounded-lg shadow-md">
      {/* <Image src={imageUrl} alt={title} className="rounded-lg mb-4" /> */}
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="mb-4 text-secondary">
        {description.map((fragment, index) => renderTextFragment(fragment, index))}
      </p>
      <ul className="flex flex-wrap gap-2 mt-auto">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-secondary font-bold underline" target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
