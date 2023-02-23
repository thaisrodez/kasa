import { useState } from 'react';
import '../styles/Components/Collapse.css';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="collapse">
      <div onClick={() => setIsOpen(!isOpen)} className="collapse-title">
        <h4>{title}</h4>
        {isOpen ? (
          <ChevronUpIcon className="chevron" />
        ) : (
          <ChevronDownIcon className="chevron" />
        )}
      </div>
      {isOpen ? (
        <div className="collapse-text">
          <p>{text}</p>
        </div>
      ) : null}
    </article>
  );
}

export default Collapse;
