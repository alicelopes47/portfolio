import { WorkExperienceType } from '@/app/Domain';

interface ExperienceCardProps {
  experience: WorkExperienceType;
  isEnUs: boolean;
  index: number;
}

export const ExperienceCard = ({ experience, isEnUs, index }: ExperienceCardProps) => {
  const role = isEnUs ? experience.roleus : experience.role;
  const period = isEnUs ? experience.periodus : experience.period;
  const responsibilities = isEnUs
    ? experience.responsibilitieus
    : experience.responsibilities;

  return (
    <div
      className="rounded-2xl border border-primaryBold bg-bgHover p-6 flex flex-col gap-4 hover:border-primary transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
        <div>
          <h3 className="text-primaryBold text-xl font-semibold">{experience.company}</h3>
          <p className="text-primaryBold text-sm mt-0.5">{role}</p>
        </div>
        <span className="text-primary text-sm whitespace-nowrap">{period}</span>
      </div>

      {responsibilities?.length > 0 && (
        <ul className="flex flex-col gap-2">
          {responsibilities.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-darkText leading-relaxed">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-primaryBold" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {experience.techstack && experience.techstack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1">
          {experience.techstack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full text-xs border border-primaryBold text-primaryBold"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
