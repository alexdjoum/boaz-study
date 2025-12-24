import StepItem from "./StepItem";

export interface Step {
  id: number;
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  activeStep: number;
}

export default function Stepper({ steps, activeStep }: StepperProps) {
  return (
    <div className="row g-3 justify-content-center p-4">
      {steps.map((step) => (
        <div key={step.id} className="col-12">
          <StepItem step={step} active={activeStep === step.id} />
        </div>
      ))}
    </div>
  );
}
