import Banner from '../../components/Banner';
import aboutBanner from '../../assets/about-banner.png';
import abouts from '../../datas/about.json';
import Collapse from '../../components/Collapse';
import Layout from '../../components/Layout';

function About() {
  return (
    <Layout>
      <Banner url={aboutBanner} />
      {abouts.map(({ id, title, text }) => (
        <Collapse key={id} title={title} text={text} />
      ))}
    </Layout>
  );
}

export default About;
