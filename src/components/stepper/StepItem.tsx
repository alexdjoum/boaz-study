import type { Step } from "./Stepper";

interface StepItemProps {
  step: Step;
  active: boolean;
}

export default function StepItem({ step, active }: StepItemProps) {
  return (
    <div
      className={`d-flex justify-content-between align-items-center border rounded p-3 ${
        active ? "border-primary bg-light" : "border-secondary"
      }`}
    >
      <div className="d-flex align-items-start gap-3">
        <div
          className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: active ? "#0d6efd" : "transparent",
            color: active ? "#fff" : "#0d6efd",
            border: active ? "none" : "1px solid #0d6efd",
            fontSize: "0.85rem",
          }}
        >
          {String(step.id).padStart(2, "0")}
        </div>
        <div>
          <p className="fw-semibold mb-1">{step.title}</p>
          {step.description && (
            <p className="text-muted small mb-0">{step.description}</p>
          )}
        </div>
      </div>
      <span
        className={`badge ${
          active ? "bg-primary" : "bg-secondary"
        }`}
      >
        {active ? "En cours" : "À venir"}
      </span>
    </div>
  );
}
