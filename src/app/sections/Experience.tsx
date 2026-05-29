import { useUserPreferences } from '../context/UserPreferencesProvider.tsx';
import { useWorkExperience } from '../context/WorkExperienceContext';
import { ExperienceCard } from '../components/ExperienceCard/ExperienceCard';
import { LinksUS, LinksPT, hrefs } from '../Domain';

function Experience() {
  const { isEnUs } = useUserPreferences();
  const { experiences, loading, error } = useWorkExperience();

  return (
    <div id={hrefs.EXPERIENCE} className="md:px-24 px-4 scroll-mt-[10rem]">
      <h1 className="md:text-[2.5rem] text-3xl text-primaryBold md:text-start text-center md:mb-12 mb-8">
        {isEnUs ? LinksUS.EXPERIENCE.toLowerCase() : LinksPT.EXPERIENCE.toLowerCase()}
      </h1>

      {loading && (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
        </div>
      )}
      {error && <div className="text-red-500 text-center">{error}</div>}

      {!loading && !error && experiences?.length > 0 && (
        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              isEnUs={isEnUs}
              index={idx}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Experience;
