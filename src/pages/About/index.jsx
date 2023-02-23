import Banner from '../../components/Banner';
import aboutBanner from '../../assets/about-banner.png';
import abouts from '../../datas/about.json';
import Collapse from '../../components/Collapse';

function About() {
  return (
    <div>
      <Banner url={aboutBanner} />
      {abouts.map(({ id, title, text }) => (
        <Collapse key={id} title={title} text={text} />
      ))}
    </div>
  );
}

export default About;
