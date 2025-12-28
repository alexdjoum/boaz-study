import { useState } from "react";

export interface PdfDocument {
  fileName: string;
  date: string;
  reference: string;
  address: string;
  clientName: string;
  clientDetails: string;
  amount: string;
  status: string;
  url?: string;
}

interface PdfViewerCardProps {
  document: PdfDocument;
  onDownload?: () => void;
  onSettings?: () => void;
  onPreview?: () => void;
}

export default function PdfViewerCard({ 
  document, 
  onDownload, 
  onSettings,
  onPreview 
}: PdfViewerCardProps) {
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  const handleDownloadClick = () => {
    if (onDownload) {
      onDownload();
    } else if (document.url) {
      const link = window.document.createElement('a');
      link.href = document.url;
      link.download = document.fileName;
      link.click();
    }
  };

  const handleSettingsClick = () => {
    if (onSettings) {
      onSettings();
    }
  };

  const handleCardClick = () => {
    if (onPreview) {
      onPreview();
    } else {
      setShowPdfPreview(true);
    }
  };

  const handleClosePdfPreview = () => {
    setShowPdfPreview(false);
  };

  return (
    <>
      <div 
        className="card shadow-sm" 
        style={{ maxWidth: "400px", cursor: "pointer" }}
        onClick={handleCardClick}
      >
        <div className="card-header bg-white border-bottom-0 py-3">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <small 
                className="text-muted" 
                style={{ fontSize: "0.75rem", lineHeight: "1.6" }}
              >
                Intervalle Fichier dans de fichier<br />
                Sélectionner les le texte<br />
                Nom du la les titres<br />
                du sujet (en)
              </small>
            </div>
            <div className="text-end">
              <small 
                className="text-muted d-block" 
                style={{ fontSize: "0.75rem" }}
              >
                Date : {document.date}
              </small>
            </div>
          </div>
          <div className="my-3">
            <small 
              className="text-muted d-block mb-2" 
              style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
            >
              <strong>Numéro de la les titres:</strong><br />
              {document.reference}
            </small>
            
            <small 
              className="text-muted d-block mb-2" 
              style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
            >
              <strong>Adresse:</strong><br />
              {document.address}
            </small>
            
            <small 
              className="text-muted d-block mb-2" 
              style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
            >
              <strong>Nom:</strong><br />
              {document.clientName}<br />
              {document.clientDetails}
            </small>
          </div>
          <div className="text-center">
            <h6 className="fw-bold mb-0 text-uppercase">
              {document.status}
            </h6>
          </div>
        </div>
        <div className="card-body px-0 py-0">
          <table className="table table-sm table-borderless mb-0">
            <thead className="bg-light">
              <tr>
                <th 
                  className="text-center py-2 fw-semibold" 
                  style={{ fontSize: "0.85rem" }}
                >
                  Ste
                </th>
                <th 
                  className="text-center py-2 fw-semibold" 
                  style={{ fontSize: "0.85rem" }}
                >
                  Prix unitaire
                </th>
                <th 
                  className="text-center py-2 fw-semibold" 
                  style={{ fontSize: "0.85rem" }}
                >
                  Montant
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td 
                  className="text-center py-2" 
                  style={{ fontSize: "0.85rem" }}
                >
                  -
                </td>
                <td 
                  className="text-center py-2" 
                  style={{ fontSize: "0.85rem" }}
                >
                  {document.amount}
                </td>
                <td 
                  className="text-center py-2" 
                  style={{ fontSize: "0.85rem" }}
                >
                  {document.amount}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center py-2 border-top">
            <small className="text-muted">
              Formulaire de déduction (facultatif)
            </small>
          </div>
        </div>
        <div className="card-footer bg-primary text-white py-3">
          <div className="d-flex align-items-center justify-content-center gap-3">
            <button
              className="btn btn-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
              onClick={(e) => {
                e.stopPropagation();
                handleDownloadClick();
              }}
              title="Télécharger"
              type="button"
            >
              <i className="bi bi-download"></i>
            </button>
            
            <button
              className="btn btn-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
              onClick={(e) => {
                e.stopPropagation();
                handleSettingsClick();
              }}
              title="Paramètres"
              type="button"
            >
              <i className="bi bi-eye"></i>
            </button>
            <span className="fw-semibold">
              {document.fileName}
            </span>
          </div>
        </div>
      </div>
      {showPdfPreview && document.url && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center" 
          style={{ zIndex: 1050 }}
          onClick={handleClosePdfPreview}
        >
          <div 
            className="bg-white rounded p-3" 
            style={{ width: "90%", height: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="mb-0">Aperçu du PDF - {document.fileName}</h5>
              <button
                className="btn-close"
                onClick={handleClosePdfPreview}
                aria-label="Fermer"
                type="button"
              ></button>
            </div>
            <iframe
              src={document.url}
              className="w-100 h-100 border-0 rounded"
              title="PDF Preview"
            />
          </div>
        </div>
      )}
    </>
  );
}