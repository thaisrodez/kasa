import './../styles/Components/Banner.css';

function Banner({ url, title }) {
  return (
    <section
      className="banner-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${url})`,
      }}
    >
      {title ? <p className="banner-text">{title}</p> : null}
    </section>
  );
}

export default Banner;
