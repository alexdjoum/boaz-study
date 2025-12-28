import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import PdfViewerCard, { type PdfDocument } from "../components/PdfViewerCard";

export default function PdfDocumentList() {
  const documents: PdfDocument[] = [
    {
      fileName: "Proforma de service.df",
      date: "11/24/2023",
      reference: "C-235-fwc-fdc-192",
      address: "Yaoundé, Cameroun",
      clientName: "YOHANN TOINY",
      clientDetails: "Email: yohann@example.com\nTel: +237 600 000 000",
      amount: "150000 F CFA",
      status: "VALIDÉE",
      url: "/documents/proforma1.pdf"
    },
    {
      fileName: "Facture de service.pdf",
      date: "12/15/2023",
      reference: "F-456-abc-def-123",
      address: "Douala, Cameroun",
      clientName: "CLIENT TEST",
      clientDetails: "Email: client@example.com\nTel: +237 655 000 000",
      amount: "250000 F CFA",
      status: "EN ATTENTE",
      url: "/documents/facture1.pdf"
    }
  ];

  const handleDownload = (doc: PdfDocument) => {
    console.log("Téléchargement:", doc.fileName);
  };

  const handleSettings = (doc: PdfDocument) => {
    console.log("Paramètres:", doc.fileName);
  };

  return (
    <div className="container-fluid min-vh-100 bg-light p-0">
      <div className="row g-0 h-100">
        <div className="col-md-3 col-lg-2">
          <Sidebar />
        </div>
        <main className="col-md-9 col-lg-10">
          <Header title="Mes Documents" />
          <div className="bg-white shadow rounded m-3 p-4 mb-5" style={{minHeight: "92%"}}>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {documents.map((doc, index) => (
                <div key={index} className="col-auto">
                  <PdfViewerCard
                    document={doc}
                    onDownload={() => handleDownload(doc)}
                    onSettings={() => handleSettings(doc)}
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>  
    </div>
  );
}