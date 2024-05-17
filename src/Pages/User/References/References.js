import './References.scss';
import { Table } from '../../Modules/Table/Table'
import ReferencesProvider from '../../../providers/ReferencesProviders'
import { useReferences } from '../../../hooks/API/useReferences'
import { Route, Routes } from 'react-router-dom';
import { AddReferences } from '../../User/References/AddReferences/AddReferences';

export const References = () =>{

  const { loading, payload, error, refetch } = useReferences();

  // Logowanie danych dla debugowania

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
        <Routes>
          <Route path="AddReferencje" element={<AddReferences />} />
          <Route path="/" element={<Table />} />
        </Routes>
      </div>
    </ReferencesProvider>
  )
}