import { useState } from "react";

type MediaUploaderProps = {
  onFileSelect: (fileName: string) => void;
};

function MediaUploader({ onFileSelect }: MediaUploaderProps) {
  const [fileName, setFileName] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
    onFileSelect(file.name);
  };

  return (
    <div>
      <label className="mb-2 block font-medium text-white">
        Upload Image
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white
        file:mr-4 file:rounded-lg file:border-0
        file:bg-violet-600 file:px-4 file:py-2
        file:text-white hover:file:bg-violet-500"
      />

      {fileName && (
        <p className="mt-3 text-sm text-emerald-400">
          📷 {fileName}
        </p>
      )}
    </div>
  );
}

export default MediaUploader;