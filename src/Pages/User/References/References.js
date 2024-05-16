import './References.scss';
import { Table } from '../../Modules/Table/Table'
import ReferencesProvider from '../../../providers/ReferencesProviders'
import { useReferences } from '../../../hooks/API/useReferences'

export const References = () =>{

  const { loading, payload, error, refetch } = useReferences();

  // Logowanie danych dla debugowania
  console.log('ReferencesComponent - payload:', payload);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  
  return(
    <ReferencesProvider>
      <div>
        <h1>Referencje</h1>
        <Table/>
      </div>
    </ReferencesProvider>
  )
}