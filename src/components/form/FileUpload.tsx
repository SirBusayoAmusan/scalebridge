"use client";

import { useRef } from "react";

export function FileUpload({
  files,
  onChange,
}: {
  files: File[];
  onChange: (files: File[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function addFiles(list: FileList | null) {
    if (!list) return;
    onChange([...files, ...Array.from(list)]);
  }

  function removeFile(index: number) {
    onChange(files.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed divider bg-surface px-6 py-10 text-center hover:border-accent transition-colors"
      >
        <span className="block font-extrabold text-sm mb-1">
          Click to upload supporting documents
        </span>
        <span className="block text-xs text-ink/55">
          Contracts, LPOs, financials, or other relevant documents (optional)
        </span>
      </button>
      <input
        ref={inputRef}
        type="file"
        multiple
        className="sr-only"
        onChange={(e) => {
          addFiles(e.target.files);
          e.target.value = "";
        }}
      />
      {files.length > 0 && (
        <ul className="flex flex-col gap-2 list-none p-0 m-0">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center justify-between gap-3 bg-surface px-3.5 py-2.5 text-sm"
            >
              <span className="truncate">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(i)}
                aria-label={`Remove ${file.name}`}
                className="font-extrabold text-accent-700 hover:text-accent shrink-0"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
