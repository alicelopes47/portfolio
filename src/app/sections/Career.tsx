import { useState, useEffect } from 'react';
import { fetchCareer } from '../api/datocms';
import { TimelineItem } from '../components/Timeline/TimeLine';
import { useUserPreferences } from '../context/UserPreferencesProvider.tsx';
import { LinksUS, LinksPT, hrefs, CareerType } from '../Domain';
import '../components/Timeline/styles.css';

function Career() {
  const { isEnUs } = useUserPreferences();
  const [career, setCareer] = useState<CareerType[]>([]);

  useEffect(() => {
    const fetchCareerData = async () => {
      const career = await fetchCareer(isEnUs);
      setCareer(career);
    };
    fetchCareerData();
  }, [isEnUs]);

  return (
    <div id={hrefs.CAREER} className="md:px-24 px-4 scroll-mt-[10rem]">
      <h1
        className={`md:text-[2.5rem] text-3xl text-primaryBold md:text-start text-center md:mb-12 mb-8`}
      >
        {isEnUs ? LinksUS.CAREER.toLowerCase() : LinksPT.CAREER.toLowerCase()}
      </h1>
      {career?.length > 0 && (
        <div
          className="timeline-container"
          id={hrefs.CAREER}
          data-aos="fade-up"
        >
          {career?.map((career, idx) => (
            <TimelineItem
              text={isEnUs ? career.textUs : career.text}
              date={isEnUs ? career.dateUs : career.date}
              finalDescription={
                isEnUs ? career.finaldescriptionUs : career.finaldescription
              }
              categoryIcon={career.categoryicon}
              index={idx}
              key={idx}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Career;
