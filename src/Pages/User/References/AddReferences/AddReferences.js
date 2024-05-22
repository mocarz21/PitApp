import { useState } from "react"
import { useReferences} from '../../../../hooks/API/useReferences'
import './AddReferences.scss'

export const AddReferences = () => {

  const { save } = useReferences()
  
  const [imagePreview, setImagePreview] = useState(null);
  const [imgName , setImgName] = useState()
  const [name , setName] = useState()
  const [projectName , setProjectName] = useState()
  const [company , setCompany] = useState()
  const [thema , setThema] = useState()
  const [beneficiary , setBeneficiary] = useState()
  const [startDate , setStartDate] = useState()
  const [endDate , setEndDate] = useState()


  const handleSubmit = (event) => {
    event.preventDefault();
    let body={name, projectName, company, thema, beneficiary, startDate, endDate, imgName }
    console.log(body)
    save(body)
  };

  const handleInputFile=(e)=>{
    const file = e.target.files[0];
    setImgName(file.name)
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="container add-references">
      <div className="form-header">
        <h1>Add References</h1>
      </div>
      <div className="form-content">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                Wybierz plik:
                <input className="form-input" type="file" onChange={handleInputFile} />
              </label>
              <label className="form-label">
                NAZWA:
                <input className="form-input" type="text" name="nazwa" value={name} onChange={(e)=>setName(e.target.value)}/>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                PROJEKT:
                <input className="form-input" type="text" name="projekt" value={projectName} onChange={(e)=>setProjectName(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                FIRMA:
                <input className="form-input" type="text" name="firma" value={company} onChange={(e)=>setCompany(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                TEMATYKA:
                <input className="form-input" type="text" name="tematyka" value={thema} onChange={(e)=>setThema(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                BENEFICJENT:
                <input className="form-input" type="text" name="beneficjent" value={beneficiary} onChange={(e)=>setBeneficiary(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                OD:
                <input className="form-input" type="date" name="od" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                DO:
                <input className="form-input" type="date" name="do" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
              </label>
            </div>
            <button type="submit">Dodaj</button>
          </form>
        </div>
        <div className="image-section">
          {imagePreview && (
            <img className="image-preview" src={imagePreview} alt="Preview"  />
          )}
        </div>
      </div>
    </div>
  );
};
