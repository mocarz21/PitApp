import { useQuery } from '../../Fetch/useQuery';
import { returnFetch } from '../../Fetch/returnFetch'

export const useReferences = (referencesId) => {
  const endpoint = referencesId ? `references/${referencesId}` : 'references';

  const { loading, payload, error, refetch } = useQuery({ endpoint });

  const save = async ( body ) => {

    const transformedBody = {
      nazwa_Img: body.imgName,
      tytul: body.title,
      autor: body.author,
      rok_wydania: body.publishYear,
      kategoria: body.category,
      opis: body.description
    }

    const data = await returnFetch({ endpoint: 'secure/books', body: transformedBody });
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