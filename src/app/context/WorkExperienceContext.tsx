'use client';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { WorkExperienceType } from '../Domain';
import { fetchWorkExperience } from '../api/datocms';

interface WorkExperienceContextProps {
  experiences: WorkExperienceType[];
  loading: boolean;
  error: string | null;
}

const WorkExperienceContext = createContext<WorkExperienceContextProps | undefined>(undefined);

export const WorkExperienceProvider = ({ children }: { children: ReactNode }) => {
  const [experiences, setExperiences] = useState<WorkExperienceType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchWorkExperience();
        setExperiences(data);
        setError(null);
      } catch (err) {
        setError('Error fetching work experience data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <WorkExperienceContext.Provider value={{ experiences, loading, error }}>
      {children}
    </WorkExperienceContext.Provider>
  );
};

export const useWorkExperience = () => {
  const context = useContext(WorkExperienceContext);
  if (context === undefined) {
    throw new Error('useWorkExperience must be used within a WorkExperienceProvider');
  }
  return context;
};
