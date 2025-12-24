import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Stepper from "../components/stepper/Stepper";
import Step1Souscription from "../components/forms/Step1Souscription";
import Step2Formation from "../components/forms/Step2Formation";
import Step3Formation from "../components/forms/Step3Formation";
import Step4Formation from "../components/forms/Step4Formation";

const steps = [
  { id: 1, title: "Informations Personnelles" },
  { id: 2, title: "Détails de la Formation" },
  { id: 3, title: "Informations Financières et Autres Détails" },
  { id: 4, title: "Principe de paiement" },
  { id: 5, title: "Mode de paiement" },
];

export default function Avi() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, steps.length));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Souscription onNext={nextStep} />;
      case 2:
        return <Step2Formation onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <Step3Formation onNext={nextStep} onPrev={prevStep} />;
      case 4:
        return <Step4Formation onNext={nextStep} onPrev={prevStep} />
      default:
        return <div className="text-center">Parcours terminé</div>;
    }
  };

  return (
    <div className="d-flex min-vh-100 bg-light">
      <div style={{ width: '280px', flexShrink: 0 }} className="d-none d-md-block">
        <Sidebar />
      </div>
      <div className="flex-grow-1">
        <Header />
        <div className="p-4">
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-center mb-4">Parcours à suivre</h2>
            
            {!started ? (
              <>
                <Stepper steps={steps} activeStep={currentStep} />
                
                <div className="d-flex justify-content-between mt-4">
                  <button className="btn btn-secondary">
                    Télécharger un résumé
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setStarted(true)}
                  >
                    Commencer
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-5">
                  <div className="d-flex justify-content-between align-items-center position-relative px-4">
                    <div 
                      className="position-absolute top-50 start-0 translate-middle-y"
                      style={{
                        height: '2px',
                        width: '100%',
                        backgroundColor: '#e0e0e0',
                        zIndex: 0,
                        left: '0',
                        right: '0'
                      }}
                    >
                      <div 
                        className="h-100 transition-all"
                        style={{
                          width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                          transition: 'width 0.3s ease'
                        }}
                      />
                    </div>
                    {steps.map((step) => (
                      <div 
                        key={step.id}
                        className="d-flex flex-column align-items-center position-relative"
                        style={{ zIndex: 1, flex: 1 }}
                      >
                        <div
                          className={`rounded-circle d-flex align-items-center justify-content-center fw-bold transition-all
                            ${currentStep > step.id 
                              ? 'text-white' 
                              : currentStep === step.id 
                                ? 'text-white' 
                                : 'bg-white text-muted border border-2'
                            }`}
                          style={{
                            width: '40px',
                            height: '40px',
                            transition: 'all 0.3s ease',
                            boxShadow: currentStep === step.id ? '0 0 0 4px rgba(13, 110, 253, 0.2)' : 'none'
                          }}
                        >
                          {currentStep > step.id ? (
                            <i className="bi bi-check-lg"></i>
                          ) : (
                            <span>{String(step.id).padStart(2, '0')}</span>
                          )}
                        </div>
                        <div 
                          className={`mt-2 text-center small fw-semibold ${
                            currentStep === step.id ? 'text-primary' : 'text-muted'
                          }`}
                          style={{ 
                            maxWidth: '150px',
                            fontSize: '0.85rem',
                            transition: 'color 0.3s ease'
                          }}
                        >
                          {step.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  {renderStep()}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}