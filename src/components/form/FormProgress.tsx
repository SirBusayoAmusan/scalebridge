export function FormProgress({
  step,
  total,
  labels,
}: {
  step: number;
  total: number;
  labels: string[];
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-between text-xs font-bold text-ink/55 mb-2">
        <span>
          Step {step} of {total}
        </span>
        <span>{labels[step - 1]}</span>
      </div>
      <div
        className="h-1 bg-surface"
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div
          className="h-full bg-accent transition-[width] duration-300"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
