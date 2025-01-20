import { LiaSchoolSolid } from 'react-icons/lia';
import { FontIcon } from '../FontIcon';
import './styles.css';
import { CareerType, hrefs } from '@/app/Domain';

export interface TimelineDataProps {
  text: string;
  date: string;
  categoryIcon: string;
  finalDescription: string;
  index: number;
}

export const TimelineItem = ({
  text,
  date,
  categoryIcon,
  finalDescription,
  index,
}: TimelineDataProps) => (
  <div className="timeline-item" id={hrefs.CAREER}>
    <div
      className="timeline-item-content"
      key={index}
      data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
    >
      <span className="icon">
        <FontIcon iconType={categoryIcon} />
      </span>
      <time>{date}</time>
      <p>{text}</p>
      <a>{finalDescription}</a>
      <span className="circle" />
    </div>
  </div>
);

interface TimelineProps {
  career: CareerType[];
  isEnUs: boolean;
}
