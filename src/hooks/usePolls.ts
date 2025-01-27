import { useState, useEffect } from 'react';
import { fetchPolls, createPoll as apiCreatePoll } from '../utils/api';

export const usePolls = () => {
  const [polls, setPolls] = useState<any[]>([]);

  useEffect(() => {
    const loadPolls = async () => {
      const fetchedPolls = await fetchPolls();
      setPolls(fetchedPolls);
    };

    loadPolls();
  }, []);

  const createPoll = async (question: string, options: string[]) => {
    await apiCreatePoll(question, options);
    const fetchedPolls = await fetchPolls();
    setPolls(fetchedPolls);
  };

  return { polls, createPoll };
};