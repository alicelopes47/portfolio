'use client';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { CareerType } from '../Domain';
import { fetchCareer } from '../api/datocms';
import { useUserPreferences } from './UserPreferencesProvider.tsx';

interface CareerContextProps {
  career: CareerType[];
  loading: boolean;
  error: string | null;
}

const CareerContext = createContext<CareerContextProps | undefined>(undefined);

export const CareerProvider = ({ children }: { children: ReactNode }) => {
  const [career, setCareer] = useState<CareerType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { isEnUs } = useUserPreferences();

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        setLoading(true);
        const careerData = await fetchCareer(isEnUs);
        setCareer(careerData);
        setError(null);
      } catch (err) {
        setError('Error fetching career data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCareerData();
  }, [isEnUs]);

  return (
    <CareerContext.Provider value={{ career, loading, error }}>
      {children}
    </CareerContext.Provider>
  );
};

export const useCareer = () => {
  const context = useContext(CareerContext);
  if (context === undefined) {
    throw new Error('useCareer must be used within a CareerProvider');
  }
  return context;
};
