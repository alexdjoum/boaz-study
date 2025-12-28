import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { useNavigate } from "react-router-dom";

type FilterStatus = 
  | "en-preparation" 
  | "en-attente-paiement" 
  | "paiement-attente" 
  | "cloturee" 
  | "payee" 
  | "livre";

interface FilterBadge {
  id: FilterStatus;
  label: string;
  color: "warning" | "primary" | "success" | "secondary";
}

type Status = "en-preparation" | "en-attente-paiement" | "paiement-attente" | "cloturee" | "payee" | "livre";

interface Subscription {
  id: string;
  nom: string;
  service: string;
  date: string;
  statut: Status;
}

export default function Subscription() {

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const subscriptions: Subscription[] = [
    {
      id: "01",
      nom: "Mona Roy",
      service: "AVI",
      date: "12/03/2025",
      statut: "payee",
    },
    {
      id: "02",
      nom: "Mona Roy",
      service: "Attestation de logement",
      date: "10/03/2025",
      statut: "en-preparation",
    },
    {
      id: "03",
      nom: "Mona Roy",
      service: "Assurance Voyage",
      date: "09/03/2025",
      statut: "en-attente-paiement",
    },
    {
      id: "04",
      nom: "Mona Roy",
      service: "AVI",
      date: "08/03/2025",
      statut: "livre",
    },
    {
      id: "05",
      nom: "Mona Roy",
      service: "AVI",
      date: "05/03/2025",
      statut: "cloturee",
    }
  ];

  const [activeFilters, setActiveFilters] = useState<FilterStatus[]>([]);

  const filters: FilterBadge[] = [
    { id: "en-preparation", label: "En préparation", color: "warning" },
    { id: "en-attente-paiement", label: "En attente de paiement", color: "warning" },
    { id: "paiement-attente", label: "Paiement en attente", color: "primary" },
    { id: "cloturee", label: "Clôturée", color: "secondary" },
    { id: "payee", label: "Payée", color: "success" },
    { id: "livre", label: "Livré", color: "primary" },
  ];

  const getStatusBadge = (statut: Status) => {
    const statusConfig = {
      "payee": { color: "success", label: "Payée" },
      "en-preparation": { color: "warning", label: "En préparation" },
      "en-attente-paiement": { color: "warning", label: "En attente de paiement" },
      "paiement-attente": { color: "primary", label: "Paiement en attente" },
      "livre": { color: "primary", label: "Livré" },
      "cloturee": { color: "secondary", label: "Clôturé" }
    };

    const config = statusConfig[statut];
    return (
      <span className="d-flex align-items-center gap-2">
        <span className={`badge bg-${config.color} rounded-circle p-0`} style={{ width: "8px", height: "8px" }}></span>
        {config.label}
      </span>
    );
  };

  const toggleFilter = (filterId: FilterStatus) => {
    setActiveFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const renderActions = (subscription: Subscription) => {
    const { statut } = subscription;

    return (
      <div className="d-flex flex-column gap-2">
        <button className="btn btn-outline-secondary btn-sm rounded-pill px-3 d-flex align-items-center justify-content-center gap-2">
          <i className="bi bi-eye"></i> Voir
        </button>
        {(statut === "en-preparation" || statut === "en-attente-paiement" || statut === "paiement-attente") && (
          <>
            <button className="btn btn-outline-primary btn-sm rounded-pill px-3 d-flex align-items-center justify-content-center gap-2">
              <i className="bi bi-pencil"></i> Modifier ou continuer
            </button>
            <button className="btn btn-outline-danger btn-sm rounded-pill px-3 d-flex align-items-center justify-content-center gap-2">
              <i className="bi bi-trash"></i> Annuler
            </button>
          </>
        )}
      </div>
    );
  };

  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesFilter = activeFilters.length === 0 || activeFilters.includes(sub.statut);
    const matchesSearch = sub.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sub.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleViewAllDocuments = () => {
    navigate('/documents');
  };

  return (
    <div className="container-fluid min-vh-100 bg-light p-0">
      <div className="row g-0 h-100">
        <div className="col-md-3 col-lg-2">
          <Sidebar />
        </div>
        <main className="col-md-9 col-lg-10">
          <Header title="Mes Souscriptions" />
          <div className="bg-white shadow rounded m-3 p-4 mb-5" style={{minHeight: "92%"}}>
            <div className="card shadow-sm rounded-4 border-0 p-4">
              <div className="d-flex flex-wrap gap-2 mb-4">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    className={`btn rounded-pill px-4 d-flex align-items-center gap-2 ${
                      activeFilters.includes(filter.id)
                        ? `btn-${filter.color} text-white`
                        : `btn-outline-${filter.color}`
                    }`}
                    onClick={() => toggleFilter(filter.id)}
                  >
                    <span
                      className={`badge bg-${filter.color} rounded-circle p-0`}
                      style={{ width: "10px", height: "10px" }}
                    ></span>
                    {filter.label}
                  </button>
                ))}
              </div>
              <div className="mb-4" style={{ maxWidth: "400px" }}>
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-search text-muted"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0 ps-0"
                    placeholder="Rechercher"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ boxShadow: "none" }}
                  />
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-borderless align-middle">
                  <thead className="border-bottom">
                    <tr>
                      <th className="text-muted fw-normal small">Id</th>
                      <th className="text-muted fw-normal small">Nom et prénom</th>
                      <th className="text-muted fw-normal small">Service</th>
                      <th className="text-muted fw-normal small">Date</th>
                      <th className="text-muted fw-normal small">Statut</th>
                      <th className="text-muted fw-normal small">Document associé</th>
                      <th className="text-muted fw-normal small">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubscriptions.map((sub) => (
                      <tr key={sub.id} className="border-bottom">
                        <td className="py-3">{sub.id}</td>
                        <td className="py-3">{sub.nom}</td>
                        <td className="py-3">{sub.service}</td>
                        <td className="py-3">{sub.date}</td>
                        <td className="py-3">{getStatusBadge(sub.statut)}</td>
                        <td className="py-3">
                          <span className="text-muted small">
                            <button className="btn btn-primary btn-sm rounded-pill px-3" onClick={handleViewAllDocuments}>
                              Voir les documents
                            </button>
                          </span>
                        </td>
                        <td className="py-3">
                          {renderActions(sub)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-secondary rounded-pill px-4">
                  Retour
                </button>
                <button className="btn btn-primary rounded-pill px-4">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}