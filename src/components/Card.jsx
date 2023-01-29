import './../styles/Components/Card.css';

function Card({ title, cover }) {
  return (
    <article
      className="card-article"
      style={{
        backgroundImage: `linear-gradient(rgba(250, 250, 250, 0), rgba(0, 0, 0, 0.5)), url(${cover})`,
      }}
    >
      <p className="card-title">{title}</p>
    </article>
  );
}

export default Card;
