import { createContext, useState } from "react";

export const ReferencesContext = createContext();

const ReferencesProvider =({children}) =>{

  const [ referencesData, setReferencesData ] = useState({});
  // const [ filtersData, setFiltersData ] = useState({
  //   filters:{
  //     title: '', 
  //     author: '',
  //     category: '',
  //     publicationYear: '',
  //   }
  // });

  return(
    <ReferencesContext.Provider
      value ={{
        referencesData,
        setReferencesData,
        // filtersData,
        // setFiltersData
      }}
    >
      {children}
    </ReferencesContext.Provider>
  )

}





export default ReferencesProvider;