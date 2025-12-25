interface StepProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function Step1Souscription({ onNext, onPrev }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Nom"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Numéro de passeport"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Prénom"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="delivranceDate">Date de délivrance du passeport</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date de délivrance"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="expirationDate">Date d'expiration du passeport</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date d'expiration du passeport"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Numéro de téléphone"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="passportScan">Scan du passeport</label>
          <input
            type="file"
            className="form-control"
            placeholder="Scan du passeport"
            required
          />
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button 
          type="button" 
          className="btn btn-outline-secondary px-4 rounded-pill" 
          onClick={onPrev}
        >Précédent
        </button>
        <button type="submit" className="btn btn-primary">
          Suivant
        </button>
      </div>
    </form>
  );
}
