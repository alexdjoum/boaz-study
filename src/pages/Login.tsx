import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    navigate("/");
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="row g-0">
                <div className="col-md-5 d-none d-md-block bg-primary rounded-start-4 p-5 text-white position-relative overflow-hidden">
                  <div className="h-100 d-flex flex-column justify-content-between">
                    <div>
                      <img 
                        src="/boaz-study.png" 
                        alt="Boaz Study" 
                        className="mb-4"
                        style={{ height: "50px", filter: "brightness(0) invert(1)" }}
                      />
                      <h3 className="fw-bold mb-3">Bienvenue !</h3>
                      <p className="mb-0">
                        Connectez-vous pour accéder à votre espace personnel et gérer vos formations.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="d-flex gap-3">
                        <div className="bg-white bg-opacity-25 rounded-circle p-3">
                          <i className="bi bi-book fs-4"></i>
                        </div>
                        <div className="bg-white bg-opacity-25 rounded-circle p-3">
                          <i className="bi bi-graduation-cap fs-4"></i>
                        </div>
                        <div className="bg-white bg-opacity-25 rounded-circle p-3">
                          <i className="bi bi-briefcase fs-4"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="position-absolute rounded-circle bg-white bg-opacity-10"
                    style={{ 
                      width: "300px", 
                      height: "300px", 
                      top: "-100px", 
                      right: "-100px" 
                    }}
                  />
                  <div 
                    className="position-absolute rounded-circle bg-white bg-opacity-10"
                    style={{ 
                      width: "200px", 
                      height: "200px", 
                      bottom: "-50px", 
                      left: "-50px" 
                    }}
                  />
                </div>
                <div className="col-md-7 p-5">
                  <div className="mb-4 text-center text-md-start">
                    <h2 className="fw-bold mb-2">Connexion</h2>
                    <p className="text-muted">Entrez vos identifiants pour continuer</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label text-muted small fw-semibold">
                        Adresse email
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="bi bi-envelope text-muted"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control border-start-0 ps-0"
                          placeholder="exemple@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          style={{ boxShadow: 'none' }}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-muted small fw-semibold">
                        Mot de passe
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="bi bi-lock text-muted"></i>
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control border-start-0 border-end-0 ps-0"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          style={{ boxShadow: 'none' }}
                        />
                        <span 
                          className="input-group-text bg-white border-start-0"
                          style={{ cursor: 'pointer' }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} text-muted`}></i>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label className="form-check-label text-muted small" htmlFor="rememberMe">
                          Se souvenir de moi
                        </label>
                      </div>
                      <Link 
                        to="/forgot-password" 
                        className="text-primary text-decoration-none small fw-semibold"
                      >
                        Mot de passe oublié ?
                      </Link>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary w-100 py-3 rounded-3 fw-semibold mb-3"
                    >
                      Se connecter
                    </button>
                    <div className="d-flex align-items-center my-4">
                      <hr className="flex-grow-1" />
                      <span className="px-3 text-muted small">OU</span>
                      <hr className="flex-grow-1" />
                    </div>
                    <div className="d-grid gap-2">
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary py-2 rounded-3"
                      >
                        <i className="bi bi-google me-2"></i>
                        Continuer avec Google
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary py-2 rounded-3"
                      >
                        <i className="bi bi-facebook me-2"></i>
                        Continuer avec Facebook
                      </button>
                    </div>
                    <p className="text-center text-muted small mt-4 mb-0">
                      Vous n'avez pas de compte ?{" "}
                      <Link to="/register" className="text-primary fw-semibold text-decoration-none">
                        Inscrivez-vous
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-muted small mb-0">
                © 2025 Boaz Study. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}