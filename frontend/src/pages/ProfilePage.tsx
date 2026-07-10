import { Mail, Phone, MapPin, User } from "lucide-react";

function ProfilePage() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">
        My Profile
      </h2>

      <p className="mt-3 text-slate-400">
        Manage your personal information.
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900 p-8">
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-violet-600 text-5xl text-white">
            <User size={56} />
          </div>

          <div className="mt-6 flex-1 space-y-5 md:mt-0">

            <div className="flex items-center gap-3 text-slate-300">
              <User size={18} />
              <span>Suraj Kumar</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <Mail size={18} />
              <span>suraj@example.com</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <Phone size={18} />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <MapPin size={18} />
              <span>India</span>
            </div>

            <button className="mt-4 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">
              Edit Profile
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;