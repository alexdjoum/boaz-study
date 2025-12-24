import { useState } from "react";

interface StepProps {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step2Formation({ onNext, onPrev }: StepProps) {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="row g-4">
        <div className="col-md-6">
          <label className="form-label text-muted small">
            Année scolaire
          </label>
          <select
            className="form-select border-0 border-bottom rounded-0 px-0 bg-transparent"
            style={{ 
              boxShadow: 'none',
              borderColor: '#dee2e6'
            }}
            required
          >
            <option value="">2024/2025</option>
            <option value="2023/2024">2023/2024</option>
            <option value="2025/2026">2025/2026</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label text-muted small">
            Est ce le renouvellement ?
          </label>
          <select
            className="form-select border-0 border-bottom rounded-0 px-0 bg-transparent"
            style={{ 
              boxShadow: 'none',
              borderColor: '#dee2e6'
            }}
            required
          >
            <option value="">Non</option>
            <option value="oui">Oui</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label text-muted small">
            Montant à financer par nous (en euro)
          </label>
          <input
            type="text"
            className="form-control border-0 border-bottom rounded-0 px-0"
            placeholder="Exemple : 7500€"
            style={{ 
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderColor: '#dee2e6'
            }}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label text-muted small">
            Je vais en France pour
          </label>
          <select
            className="form-select border-0 border-bottom rounded-0 px-0 bg-transparent"
            style={{ 
              boxShadow: 'none',
              borderColor: '#dee2e6'
            }}
            required
          >
            <option value="">Etudes</option>
            <option value="travail">Travail</option>
            <option value="stage">Stage</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label text-muted small">
            Donne tu votre pays d'origine
          </label>
          <select
            className="form-select border-0 border-bottom rounded-0 px-0 bg-transparent"
            style={{ 
              boxShadow: 'none',
              borderColor: '#dee2e6'
            }}
            required
          >
            <option value="">CCFR</option>
            <option value="cameroun">Cameroun</option>
            <option value="senegal">Sénégal</option>
            <option value="cote-ivoire">Côte d'Ivoire</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label text-muted small">
            Avez démarrez l'achat ?
          </label>
          <select
            className="form-select border-0 border-bottom rounded-0 px-0 bg-transparent"
            style={{ 
              boxShadow: 'none',
              borderColor: '#dee2e6'
            }}
            required
          >
            <option value="">Oui</option>
            <option value="non">Non</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label text-muted small">
            Quelle est l'état ?
          </label>
          <select
            className="form-select border-0 border-bottom rounded-0 px-0 bg-transparent"
            style={{ 
              boxShadow: 'none',
              borderColor: '#dee2e6'
            }}
            required
          >
            <option value="">Le motif</option>
            <option value="en-cours">En cours</option>
            <option value="termine">Terminé</option>
            <option value="en-attente">En attente</option>
          </select>
        </div>
        <div className="col-12 mt-4">
          <label className="form-label text-muted small">
            Nom de l'établissement d'accueil
          </label>
          <input
            type="text"
            className="form-control border-0 border-bottom rounded-0 px-0"
            style={{ 
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderColor: '#dee2e6'
            }}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label text-muted small">
            Titre de la formation
          </label>
          <input
            type="text"
            className="form-control border-0 border-bottom rounded-0 px-0"
            style={{ 
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderColor: '#dee2e6'
            }}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label text-muted small">
            Ville
          </label>
          <input
            type="text"
            className="form-control border-0 border-bottom rounded-0 px-0"
            style={{ 
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderColor: '#dee2e6'
            }}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label text-muted small">
            Date de début de la formation
          </label>
          <div className="position-relative">
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0 px-0"
              placeholder="jj/mm/aaa"
              style={{ 
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderColor: '#dee2e6'
              }}
              required
            />
            <i 
              className="bi bi-calendar3 position-absolute end-0 top-50 translate-middle-y text-muted"
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
        </div>
        <div className="col-12">
          <label className="form-label text-muted small">
            Attestation d'inscription / Lettre d'admission
          </label>
          <div className="d-flex align-items-center gap-3">
            <label 
              htmlFor="fileUpload" 
              className="btn btn-outline-secondary rounded-pill px-4"
              style={{ cursor: 'pointer' }}
            >
              Choisir un fichier
            </label>
            <input
              id="fileUpload"
              type="file"
              className="d-none"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
            {fileName && (
              <span className="text-muted small d-flex align-items-center gap-2">
                <i className="bi bi-file-earmark-pdf text-danger"></i>
                {fileName}
              </span>
            )}
            {!fileName && (
              <span className="text-muted small">Attestation_ESI.pdf</span>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-5 pt-4">
        <button 
          type="button" 
          className="btn btn-outline-secondary px-4 rounded-pill" 
          onClick={onPrev}
        >
          Précédent
        </button>

        <button 
          type="submit" 
          className="btn btn-primary px-4 rounded-pill"
        >
          Suivant
        </button>
      </div>
    </form>
  );
}