import { useQuery } from '../../Fetch/useQuery';

export const useReferences =(referencesId) => {

  const endpoint = referencesId ? `references/${referencesId}` : 'references';

  const { loading, payload, refetch } = useQuery({ endpoint });

  return(
    loading,
    payload,
    refetch
  )

}