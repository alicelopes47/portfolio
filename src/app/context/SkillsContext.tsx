'use client';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { SkillsType } from '../Domain';
import { fetchSkills } from '../api/datocms';
import { useUserPreferences } from './UserPreferencesProvider.tsx';

interface SkillsContextProps {
  skills: SkillsType[];
  loading: boolean;
  error: string | null;
}

const SkillsContext = createContext<SkillsContextProps | undefined>(undefined);

export const SkillsProvider = ({ children }: { children: ReactNode }) => {
  const [skills, setSkills] = useState<SkillsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { isEnUs } = useUserPreferences();

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        setLoading(true);
        const skillsData = await fetchSkills(isEnUs);
        setSkills(skillsData);
        setError(null);
      } catch (err) {
        setError('Error fetching career data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkillsData();
  }, [isEnUs]);

  return (
    <SkillsContext.Provider value={{ skills, loading, error }}>
      {children}
    </SkillsContext.Provider>
  );
};

export const useSkills = () => {
  const context = useContext(SkillsContext);
  if (context === undefined) {
    throw new Error('useCareer must be used within a CareerProvider');
  }
  return context;
};
