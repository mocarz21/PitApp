import { Route, Routes } from 'react-router-dom';
import { Diplomas } from './Diplomas/Diplomas'
import { References } from './References/References'
import { UserNavBar } from '../Modules/UserNavBar/UserNavBar';

export const User = () =>{

  return (
    <div className="container">
      <UserNavBar/>
      <Routes>
          <Route path="dyplomy" element={<Diplomas />} />
          <Route path="referencje/*" element={<References />} /> 
      </Routes>
    </div>
  )
}