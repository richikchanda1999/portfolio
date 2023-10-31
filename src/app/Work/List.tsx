import React from 'react';
import { ListItem } from 'src/types';
import { data } from '../constants';

const List: React.FC<{ items: ListItem[] }> = ({ items }) => (
  <ul className="list-disc text-secondary">
    {items.map((item, idx) => (
      <li key={idx} className="mb-2">
        {item.content.map((part, idx) => {
          if (typeof part === 'string') {
            return <span key={idx}>{part}</span>;
          } else if (part.url === '') {
            return (
                <span key={idx} rel="noopener noreferrer" className="underline text-secondary font-bold inline-block">
                  {part.text}
                </span>
              );
          } else {
            return (
                <a key={idx} href={part.url} target="_blank" rel="noopener noreferrer" className="underline text-secondary font-bold">
                  {part.text}
                </a>
              );
          }
          
        })}
      </li>
    ))}
  </ul>
);

const App: React.FC = () => {
  return (
    <div className="p-4">
      <List items={data} />
    </div>
  );
};

export default App;
