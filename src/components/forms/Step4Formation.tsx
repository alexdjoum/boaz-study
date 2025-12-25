import { useState } from "react";

interface StepProps {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step4Formation({ onNext, onPrev }: StepProps) {
  const [fileName, setFileName] = useState<string>("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

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
        <div className="col-12 mt-5">
          <h5 className="mb-4">Sélectionnez votre mode de paiement</h5>
          
          <div className="d-flex flex-column gap-3">
            <div
              className={`border rounded-4 p-4 position-relative ${
                selectedPaymentMethod === 'depot' ? 'border-primary border-2' : 'border-secondary'
              }`}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedPaymentMethod('depot')}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-dark">Dépôt Bancaire</span>
                <i className="bi bi-chevron-down text-muted"></i>
              </div>
              {selectedPaymentMethod === 'depot' && (
                <div className="position-absolute top-0 end-0 m-3">
                  <div className="bg-primary rounded-circle" style={{ width: '20px', height: '20px' }}>
                    <i className="bi bi-check text-white d-flex justify-content-center align-items-center h-100"></i>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`border rounded-4 p-4 position-relative ${
                selectedPaymentMethod === 'virement' ? 'border-primary border-2' : 'border-secondary'
              }`}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedPaymentMethod('virement')}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-dark">Virement Bancaire Direct</span>
                <i className="bi bi-chevron-down text-muted"></i>
              </div>
              {selectedPaymentMethod === 'virement' && (
                <div className="position-absolute top-0 end-0 m-3">
                  <div className="bg-primary rounded-circle" style={{ width: '20px', height: '20px' }}>
                    <i className="bi bi-check text-white d-flex justify-content-center align-items-center h-100"></i>
                  </div>
                </div>
              )}
            </div>
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
          type="button" 
          className="btn btn-primary px-4 rounded-pill"
          onClick={onNext}
        >
          Suivant
        </button>
      </div>
    </form>
  );
}