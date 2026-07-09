type PlatformSelectorProps = {
  value: string;
  onChange: (platform: string) => void;
};

const platforms = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "X",
  "YouTube",
];

function PlatformSelector({
  value,
  onChange,
}: PlatformSelectorProps) {
  return (
    <div>
      <label className="mb-2 block font-medium text-white">
        Platform
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-violet-500"
      >
        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PlatformSelector;