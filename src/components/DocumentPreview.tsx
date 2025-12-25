import { useState, useEffect } from "react";

interface DocumentPreviewProps {
  file: File | null;
}

export default function DocumentPreview({ file }: DocumentPreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [fileType, setFileType] = useState<string>("");

  useEffect(() => {
    if (!file) {
      setPreviewUrl("");
      setFileType("");
      return;
    }

    setFileType(file.type);

    if (file.type.startsWith("image/") || file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  const renderPreview = () => {
    if (!file) {
      return (
        <div className="text-center">
          <i className="bi bi-file-earmark-image text-muted mb-3" style={{ fontSize: "4rem" }}></i>
          <p className="text-muted mb-1">Aucun document sélectionné</p>
          <small className="text-muted">L'aperçu s'affichera ici</small>
        </div>
      );
    }

    if (fileType.startsWith("image/")) {
      return (
        <img 
          src={previewUrl} 
          alt="Aperçu" 
          className="img-fluid rounded shadow-sm" 
          style={{ maxHeight: "500px", maxWidth: "100%" }} 
        />
      );
    }

    if (fileType === "application/pdf") {
      return (
        <iframe 
          src={previewUrl} 
          className="w-100 rounded shadow-sm" 
          style={{ height: "500px", border: "none" }}
          title="Aperçu PDF"
        />
      );
    }

    return (
      <div className="text-center">
        <i className="bi bi-file-earmark-text text-primary mb-3" style={{ fontSize: "4rem" }}></i>
        <p className="text-dark fw-semibold mb-1">{file.name}</p>
        <small className="text-muted d-block mb-3">{formatFileSize(file.size)}</small>
        <button className="btn btn-primary btn-sm">
          <i className="bi bi-download me-2"></i>Télécharger
        </button>
      </div>
    );
  };

  return (
    <div className="card border rounded-3 p-4 mt-3" style={{ minHeight: "400px", backgroundColor: "#f8f9fa" }}>
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        {renderPreview()}
      </div>
    </div>
  );
}