'use client';
import { Kodchasan } from 'next/font/google';
const kodchasan = Kodchasan({ subsets: ['latin'], weight: ['200'] });
import Projects from './sections/Projects';
import { Menu } from './components/Menu';
import Career from './sections/Career';
import Experience from './sections/Experience';
import { useEffect, useState } from 'react';
import { linksPtArray, linksUsArray, hrefsArray } from './Domain';
import { SocialLinks } from './components/SocialLinks';
import SkillsPage from './sections/skills';
import AOS from 'aos';
import useIsMobile from './utils/UseIsMobile';
import DropDown from './components/DropDown';
import 'rsuite/Toggle/styles/index.css';
import Hero from './sections/Hero';
import { Divider } from './ui/Divider';
import { useLoading } from './context/LoadingProvider';
import Loading from './loading';
import { useUserPreferences } from './context/UserPreferencesProvider.tsx';
import About from './sections/About';
import { useAmplitudeContext } from '../app/context/AmplitudeContext';

export default function Home() {
  const isMobile = useIsMobile();
  const { trackAmplitudeEvent } = useAmplitudeContext();
  const { theme, setTheme, isEnUs } = useUserPreferences();
  const { loading } = useLoading();
  const [activeSection, setActiveSection] = useState('home');
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    AOS.init();
    trackAmplitudeEvent('viewed', {
      text: 'Um usuário visualizou a página inicial',
    });
  }, []);

  useEffect(() => {
    const sections = hrefsArray.map((link) => document.getElementById(link));
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [isEnUs]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <main
        className={`${kodchasan.className} bg-hexagonPattern relative md:pt-[10rem] pt-[5em] pb-[5em] ${theme}`}
      >
        {isMobile ? (
          <DropDown
            links={isEnUs ? linksUsArray : linksPtArray}
            activeSection={activeSection}
            onClickTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        ) : (
          <Menu
            onClickTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            activeSection={activeSection}
            links={isEnUs ? linksUsArray : linksPtArray}
          />
        )}
        <SocialLinks showPdf={showPdf} setShowPdf={setShowPdf} />
        <Hero isEnUs={isEnUs} onOpenCurriculum={() => {
          setShowPdf(true);
          trackAmplitudeEvent('clicked', { text: 'Um usuário clicou para ver o currículo!' });
        }} />
        <Divider />
        <Experience />
        <Divider />
        <SkillsPage isEnUs={isEnUs} />
        <Divider />
        <Career />
        <Divider />
        <Projects isEnUs={isEnUs} />
        {/* <Divider />
        <About isEnUs={isEnUs} /> */}
      </main>
    </>
  );
}
