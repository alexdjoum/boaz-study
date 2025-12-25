import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

interface TableRow {
  id: number;
  nom: string;
  service: string;
  date: string;
  statut: "en-attente" | "valide" | "rejete";
  document: string;
}

export default function Subscription() {
  const [rows, setRows] = useState<TableRow[]>([
    {
      id: 1,
      nom: "Mon_AVI",
      service: "AVI",
      date: "12/03/2025",
      statut: "en-attente",
      document: "Document_AVI.pdf"
    }
  ]);

  const handleDeleteRow = (id: number) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleAddRow = () => {
    const newRow: TableRow = {
      id: rows.length + 1,
      nom: "",
      service: "",
      date: "",
      statut: "en-attente",
      document: ""
    };
    setRows([...rows, newRow]);
  };

  const getStatutBadge = (statut: string) => {
    switch (statut) {
      case "valide":
        return <span className="badge bg-success rounded-pill">✓</span>;
      case "rejete":
        return <span className="badge bg-danger rounded-pill">✗</span>;
      case "en-attente":
      default:
        return <span className="badge bg-warning rounded-pill">⏱</span>;
    }
  };

  return (
    <div className="container-fluid min-vh-100 bg-light p-0">
      <div className="row g-0 h-100">
        <div className="col-md-3 col-lg-2">
          <Sidebar />
        </div>
        <main className="col-md-9 col-lg-10">
          <Header title="Mes Souscriptions" />
          <div className="bg-white shadow rounded m-3 p-4" style={{minHeight: "92%"}}>
            <div className="d-flex justify-content-end">
              <div className="input-group shadow-sm">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-search text-muted"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control border-start-0 ps-0" 
                  placeholder="Rechercher..."
                  style={{boxShadow: "none"}}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill px-4"
                  onClick={handleAddRow}
                >
                  Ajouter
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr className="border-bottom">
                    <th className="text-muted small fw-normal">Id</th>
                    <th className="text-muted small fw-normal">Nom</th>
                    <th className="text-muted small fw-normal">Service</th>
                    <th className="text-muted small fw-normal">Date</th>
                    <th className="text-muted small fw-normal">Statut</th>
                    <th className="text-muted small fw-normal">Document associé</th>
                    <th className="text-muted small fw-normal">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.id} className="border-bottom">
                      <td className="py-3">
                        <span className="text-muted">{String(index + 1).padStart(2, '0')}</span>
                      </td>
                      <td className="py-3">
                        <input
                          type="text"
                          className="form-control border-0 bg-transparent p-0"
                          defaultValue={row.nom}
                          placeholder="Nom"
                          style={{ boxShadow: 'none' }}
                        />
                      </td>
                      <td className="py-3">
                        <input
                          type="text"
                          className="form-control border-0 bg-transparent p-0"
                          defaultValue={row.service}
                          placeholder="Service"
                          style={{ boxShadow: 'none' }}
                        />
                      </td>
                      <td className="py-3">
                        <input
                          type="text"
                          className="form-control border-0 bg-transparent p-0"
                          defaultValue={row.date}
                          placeholder="JJ/MM/AAAA"
                          style={{ boxShadow: 'none', minWidth: '100px' }}
                        />
                      </td>
                      <td className="py-3">
                        {getStatutBadge(row.statut)}
                      </td>
                      <td className="py-3">
                        <span 
                          className="text-muted small bg-light px-3 py-1 rounded-pill d-inline-block"
                          style={{ fontSize: '0.85rem' }}
                        >
                          {row.document || "Document_associe.pdf"}
                        </span>
                      </td>
                      <td className="py-3">
                        <div className="d-flex gap-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary border-0 p-1"
                            title="Voir"
                          >
                            <i className="bi bi-eye"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary border-0 p-1"
                            title="Modifier"
                          >
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger border-0 p-1"
                            onClick={() => handleDeleteRow(row.id)}
                            title="Supprimer"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}