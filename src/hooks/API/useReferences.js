import { useQuery } from '../../Fetch/useQuery';
import { returnFetch } from '../../Fetch/returnFetch'

export const useReferences = (referencesId) => {
  const endpoint = referencesId ? `references/${referencesId}` : 'references';

  const { loading, payload, error, refetch } = useQuery({ endpoint });

  const save = async ( body ) => {

    const transformedBody = {
      nazwa: body.name,
      projekt: body.projectName,
      od: body.startDate,
      do: body.endDate,
      firma: body.company,
      tematyka: body.thema,
      beneficjent:body.beneficiary,
      img_name: body.imgName
    }

    const data = await returnFetch({ endpoint: 'references', body: transformedBody });
    return data;
  };

  return {
    loading,
    payload,
    error,
    refetch,
    save
  };
};