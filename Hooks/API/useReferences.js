import { useQuery } from '../../src/Fetch/useQuery'

export const useReferences = (referencesId) => {
  const endpoint = referencesId ? `references/${referencesId}` : 'references';

  const { loading, payload, error, refetch } = useQuery({ endpoint });

  return {
    loading,
    payload,
    error,
    refetch
  };
};