import { useQuery } from '../../Fetch/useQuery';

export const useReferences = (referencesId) => {
  const endpoint = referencesId ? `references/${referencesId}` : 'references';

  const { loading, payload, error, refetch } = useQuery({ endpoint });

  console.log('useReferences - payload:', payload); // Logowanie danych

  return {
    loading,
    payload,
    error,
    refetch
  };
};