interface StepProps {
  onNext: () => void;
}

export default function Step0Tips({ onNext }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="mb-4">Informations personnelles</h4>
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
            placeholder="Numéro"
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
            placeholder="Numéro de passeport"
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
            placeholder="Numéro de passeport"
            required
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button type="submit" className="btn btn-primary">
          Suivant
        </button>
      </div>
    </form>
  );
}
