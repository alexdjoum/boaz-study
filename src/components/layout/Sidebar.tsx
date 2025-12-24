import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [isSubscriptionsOpen, setIsSubscriptionsOpen] = useState(true);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-light d-md-none position-fixed top-0 start-0 m-3 shadow-sm"
        style={{ zIndex: 1050 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-4`}></i>
      </button>

      {isMobileMenuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-md-none"
          style={{ zIndex: 1040 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <aside
        className={`bg-white shadow-sm p-0 col-md-3 ${
          isMobileMenuOpen ? 'd-block' : 'd-none d-md-block'
        }`}
        style={{
          minHeight: "100vh",
          position: isMobileMenuOpen ? 'fixed' : 'relative',
          top: 0,
          left: 0,
          zIndex: 1045,
          width: isMobileMenuOpen ? '280px' : 'auto',
          overflowY: 'auto',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <div className="p-4 d-flex justify-content-center border-bottom">
          <img src="/boaz-study.png" style={{ height: "45px" }} alt="Boaz Study" />
        </div>
        <nav className="px-3 py-3">
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 px-3 py-3 mb-2 rounded-3 text-decoration-none ${
                isActive ? 'bg-opacity-10 text-primary fw-semibold' : 'text-dark'
              }`
            }
          >
            <i className="bi bi-house-door fs-5"></i>
            <span>Accueil</span>
          </NavLink>
          <NavLink
            to="/subscriptions"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 px-3 py-3 mb-2 rounded-3 text-decoration-none ${
                isActive ? 'bg-opacity-10 text-primary fw-semibold' : 'text-dark'
              }`
            }
          >
            <i className="bi bi-house-door fs-5"></i>
            <span>Souscriptions</span>
          </NavLink>
          <NavLink
            to="/agency"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 px-3 py-3 mb-2 rounded-3 text-decoration-none ${
                isActive ? 'bg-opacity-10 text-primary fw-semibold' : 'text-dark'
              }`
            }
          >
            <i className="bi bi-building fs-5"></i>
            <span>Mon agence</span>
            <i className="bi bi-chevron-down ms-auto small"></i>
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 px-3 py-3 mb-2 rounded-3 text-decoration-none ${
                isActive ? 'bg-opacity-10 text-primary fw-semibold' : 'text-dark'
              }`
            }
          >
            <i className="bi bi-grid fs-5"></i>
            <span>Services</span>
          </NavLink>
          <div className="mb-2">
            <button
              onClick={() => setIsSubscriptionsOpen(!isSubscriptionsOpen)}
              className="d-flex align-items-center gap-3 px-3 py-3 w-100 bg-transparent border-0 rounded-3 text-primary fw-semibold text-start"
            >
              <i className="bi bi-briefcase fs-5"></i>
              <span>Mes souscriptions</span>
              <i className={`bi bi-chevron-${isSubscriptionsOpen ? 'up' : 'down'} ms-auto`}></i>
            </button>

            {isSubscriptionsOpen && (
              <div className="bg-light bg-opacity-50 rounded-3 py-2 mt-1">
                <NavLink
                  to="/services-sub"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `d-block px-4 py-2 text-decoration-none ${
                      isActive ? 'text-primary fw-semibold' : 'text-secondary'
                    }`
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/financement"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `d-block px-4 py-2 text-decoration-none ${
                      isActive ? 'text-primary fw-semibold' : 'text-secondary'
                    }`
                  }
                >
                  Financement
                </NavLink>
                <NavLink
                  to="/remboursements"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `d-block px-4 py-2 text-decoration-none ${
                      isActive ? 'text-primary fw-semibold' : 'text-secondary'
                    }`
                  }
                >
                  Remboursements
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/preuves"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 px-3 py-3 mb-2 rounded-3 text-decoration-none ${
                isActive ? 'bg-opacity-10 text-primary fw-semibold' : 'text-dark'
              }`
            }
          >
            <i className="bi bi-check2-square fs-5"></i>
            <span>Preuves de versement</span>
          </NavLink>
          <div className="mb-2">
            <button
              onClick={() => setIsWalletOpen(!isWalletOpen)}
              className="d-flex align-items-center gap-3 px-3 py-3 w-100 bg-transparent border-0 rounded-3 text-dark text-start"
            >
              <i className="bi bi-wallet2 fs-5"></i>
              <span>Mon Wallet Boaz</span>
              <i className={`bi bi-chevron-${isWalletOpen ? 'up' : 'down'} ms-auto`}></i>
            </button>

            {isWalletOpen && (
              <div className="bg-light bg-opacity-50 rounded-3 py-2 mt-1">
                <NavLink
                  to="/wallet/historiques"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `d-block px-4 py-2 text-decoration-none ${
                      isActive ? 'text-primary fw-semibold' : 'text-secondary'
                    }`
                  }
                >
                  Mes historiques
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/affiliation"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 px-3 py-3 mb-2 rounded-3 text-decoration-none ${
                isActive ? 'bg-opacity-10 text-primary fw-semibold' : 'text-dark'
              }`
            }
          >
            <i className="bi bi-people fs-5"></i>
            <span>Programme d'affiliation</span>
          </NavLink>
          <NavLink
            to="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 px-3 py-3 mb-2 rounded-3 text-decoration-none ${
                isActive ? 'bg-opacity-10 text-primary fw-semibold' : 'text-dark'
              }`
            }
          >
            <i className="bi bi-grid fs-5"></i>
            <span>Se Connecter</span>
          </NavLink>
          <div className="d-flex align-items-center my-4 px-3">
            <hr className="flex-grow-1" />
            <span className="px-3 text-muted small">GENERAL</span>
            <hr className="flex-grow-1" />
          </div>
          <NavLink
            to="/dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 px-3 py-3 mb-2 rounded-3 text-decoration-none ${
                isActive ? 'bg-opacity-10 text-primary fw-semibold' : 'text-dark'
              }`
            }
          >
            <i className="bi bi-speedometer2 fs-5"></i>
            <span>Tableau de bord</span>
          </NavLink>
          <NavLink
            to="/settings"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `d-flex align-items-center gap-3 px-3 py-3 mb-4 rounded-3 text-decoration-none ${
                isActive ? 'bg-opacity-10 text-primary fw-semibold' : 'text-dark'
              }`
            }
          >
            <i className="bi bi-gear fs-5"></i>
            <span>Paramètres</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}