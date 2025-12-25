import { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import DocumentPreview from "../components/DocumentPreview";

export default function ProofOfFinancing() {
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [activePreview, setActivePreview] = useState<"document" | "photo" | null>(null);

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocumentFile(e.target.files[0]);
      setActivePreview("document");
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
      setActivePreview("photo");
    }
  };

  const currentFile = activePreview === "document" ? documentFile : 
                      activePreview === "photo" ? photoFile : null;

  return (
    <div className="container-fluid min-vh-100 bg-light p-0">
          <div className="row g-0 h-100">
            <div className="col-md-3 col-lg-2">
              <Sidebar />
            </div>
            <main className="col-md-9 col-lg-10">
              <Header title="Mes Souscriptions" />
                <div className="container my-4">
                    <div className="mb-4">
                        <button className="btn btn-light rounded-pill px-4 border d-flex align-items-center gap-2">
                            Cliquez ici pour sélectionner le service
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div 
                                className="card border-2 h-100" 
                                style={{ 
                                borderColor: '#dee2e6', 
                                borderStyle: 'dashed', 
                                minHeight: '200px' 
                                }}
                            >
                                <div className="card-body d-flex align-items-center justify-content-center">
                                <label className="text-center w-100" style={{ cursor: 'pointer' }}>
                                    <input 
                                    type="file" 
                                    className="d-none" 
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleDocumentChange}
                                    />
                                    <div className="text-muted">
                                    <i className="bi bi-file-earmark-arrow-up fs-1 mb-3 d-block"></i>
                                    <p className="mb-0">
                                        {documentFile ? documentFile.name : "Charger le document"}
                                    </p>
                                    </div>
                                </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 d-flex align-items-center justify-content-center">
                            <span className="text-muted fw-semibold">Ou</span>
                        </div>
                        <div className="col-md-5">
                            <div 
                                className="card border-2 h-100" 
                                style={{ 
                                borderColor: '#dee2e6', 
                                borderStyle: 'dashed', 
                                minHeight: '200px' 
                                }}
                            >
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <h6 className="mb-3 text-muted">Prendre une photo</h6>
                                    <label className="text-center" style={{ cursor: 'pointer' }}>
                                <input 
                                type="file" 
                                className="d-none" 
                                accept="image/*" 
                                capture="environment"
                                onChange={handlePhotoChange}
                                />
                                <div className="border border-2 rounded p-4" style={{ borderColor: '#dee2e6' }}>
                                <i className="bi bi-camera fs-1 text-muted"></i>
                                </div>
                                <small className="text-muted d-block mt-2">
                                {photoFile ? photoFile.name : "Cam..."}
                                </small>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DocumentPreview file={currentFile} />
                </div> 
            </main>
        </div>
    </div>
  );
}