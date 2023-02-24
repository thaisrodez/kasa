import { useState } from 'react';
import '../styles/Components/Collapse.css';

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="collapse">
      <div onClick={() => setIsOpen(!isOpen)} className="collapse-title">
        <h4>{title}</h4>
        {isOpen ? (
          <i className="fa-solid fa-chevron-up chevron"></i>
        ) : (
          <i className="fa-solid fa-chevron-down chevron"></i>
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
