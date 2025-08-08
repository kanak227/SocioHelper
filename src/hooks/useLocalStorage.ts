import { useState, useEffect } from 'react';
import { CommunityData } from '../types';
import { defaultData } from '../data/defaultData';

const STORAGE_KEY = 'community-notice-board';

export function useLocalStorage() {
  const [data, setData] = useState<CommunityData>(defaultData);

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
        setData(defaultData);
      }
    }
  }, []);

  const saveData = (newData: CommunityData) => {
    const updatedData = {
      ...newData,
      lastUpdated: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    setData(updatedData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  };

  return { data, saveData };
}