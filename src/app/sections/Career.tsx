import { TimelineItem } from '../components/Timeline/TimeLine';
import { useUserPreferences } from '../context/UserPreferencesProvider.tsx';
import { useCareer } from '../context/CareerContext';
import { LinksUS, LinksPT, hrefs } from '../Domain';
import '../components/Timeline/styles.css';

function Career() {
  const { isEnUs } = useUserPreferences();
  const { career, loading, error } = useCareer();

  return (
    <div id={hrefs.CAREER} className="md:px-24 px-4 scroll-mt-[10rem]">
      <h1
        className={`md:text-[2.5rem] text-3xl text-primaryBold md:text-start text-center md:mb-12 mb-8`}
      >
        {isEnUs ? LinksUS.CAREER.toLowerCase() : LinksPT.CAREER.toLowerCase()}
      </h1>

      {loading && (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
        </div>
      )}
      {error && <div className="text-red-500 text-center">{error}</div>}

      {!loading && !error && career?.length > 0 && (
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
