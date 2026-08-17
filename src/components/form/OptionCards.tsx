export function OptionCards({
  name,
  options,
  value,
  onChange,
  columns = 2,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-2.5 ${columns === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}
      role="radiogroup"
    >
      {options.map((option) => {
        const checked = value === option;
        return (
          <label
            key={option}
            className={`cursor-pointer border px-4 py-3.5 text-sm font-bold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent has-[:focus-visible]:outline-offset-2 ${
              checked
                ? "bg-accent text-bg border-accent"
                : "bg-surface divider text-ink hover:border-ink/60"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={checked}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            {option}
          </label>
        );
      })}
    </div>
  );
}
