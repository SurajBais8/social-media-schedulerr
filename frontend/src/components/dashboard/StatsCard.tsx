interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  color: "violet" | "cyan" | "emerald" | "pink";
}

const colorClasses = {
  violet: "text-violet-400",
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  pink: "text-pink-400",
};

function StatsCard({
  title,
  value,
  subtitle,
  color,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50">
      <h3 className="text-sm font-medium text-slate-400">
        {title}
      </h3>

      <p className={`mt-4 text-4xl font-bold ${colorClasses[color]}`}>
        {value}
      </p>

      <p className="mt-3 text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}

export default StatsCard;