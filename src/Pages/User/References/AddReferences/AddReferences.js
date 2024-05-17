import { useState } from "react"
import './AddReferences.scss'

export const AddReferences = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Zapobiega domyślnemu odświeżeniu strony
    console.log('działa');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container add-references">
      <div className="form-header">
        <h1>Add References</h1>
        <div>
          <label className="form-label">
            Wybierz plik:
            <input 
              className="form-input" 
              type="file" 
              onChange={handleImageChange} 
              style={{ display: 'block' }}
            />
          </label>
        </div>
      </div>
      <div className="form-content">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                NAZWA:
                <input className="form-input" type="text" name="nazwa"/>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                PROJEKT:
                <input className="form-input" type="text" name="projekt"/>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                FIRMA:
                <input className="form-input" type="text" name="firma"/>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                TEMATYKA:
                <input className="form-input" type="text" name="tematyka"/>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                BENEFICJENT:
                <input className="form-input" type="text" name="beneficjent"/>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                OD:
                <input className="form-input" type="date" name="od"/>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                DO:
                <input className="form-input" type="date" name="do"/>
              </label>
            </div>
            <button type="submit">Dodaj</button>
          </form>
        </div>
        <div className="image-section">
          {imagePreview && (
            <img className="image-preview" src={imagePreview} alt="Preview" />
          )}
        </div>
      </div>
    </div>
  );
};
