interface HeaderProps {
  title: string;
}
export default function Header({ title }: HeaderProps) {
  return (
    <div className="bg-white rounded mb-3" style={{ borderRadius: "1rem" }}>
      <div className="d-flex align-items-center p-3">
        <div className="me-auto fs-3 fw-semibold">
          {title}
        </div>

        <div className="d-flex align-items-center gap-2 me-4">
          <i className="bi bi-building text-primary"></i>
          <span>Mon Agence</span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <img
            src="/user.jpg"
            alt="Mon compte"
            className="rounded-circle"
            width="32"
            height="32"
          />
          <span>Mon Compte</span>
        </div>
      </div>
    </div>
  );
}
