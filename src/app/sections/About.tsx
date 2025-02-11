import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { hrefs, SectionProps } from '../Domain';
import './styles.css';

function About({ isEnUs }: SectionProps) {
  return (
    <div className="md:px-24 px-4 scroll-mt-[10rem]" id={hrefs.ABOUT}>
      <h1
        className={`md:text-[2.5rem] text-3xl text-primaryBold md:text-start text-center md:mb-12 mb-8`}
      >
        {isEnUs ? 'about me' : 'sobre mim'}
      </h1>
      <ImgComparisonSlider>
        <img
          slot="first"
          width={350}
          src="https://www.datocms-assets.com/133495/1739124342-imagem-do-whatsapp-de-2025-02-08-a-s-13-43-13_d23deae1.jpg"
        />
        <img
          slot="second"
          width={350}
          src="https://www.datocms-assets.com/133495/1739124342-imagem-do-whatsapp-de-2025-02-08-a-s-13-45-32_4df4fa47.jpg"
        />
      </ImgComparisonSlider>
    </div>
  );
}

export default About;
