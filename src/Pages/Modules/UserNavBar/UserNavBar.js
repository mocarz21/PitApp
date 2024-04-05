import { NavLink } from "react-router-dom"

export const UserNavBar = () =>{

  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <NavLink to={"/user/dyplomy"}>
            <h1>Dokumenty</h1>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to={'/user/referencje'}>
            <h1>Referencje</h1>
          </NavLink>
        </div>
      </div>
    </div>
  )
}