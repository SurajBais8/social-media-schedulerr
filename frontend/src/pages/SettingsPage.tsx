import { useState } from "react";

function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [emailNotification, setEmailNotification] = useState(true);

  return (
    <div>
      <h2 className="text-4xl font-bold text-white">
        Settings
      </h2>

      <p className="mt-3 text-slate-400">
        Manage your account preferences.
      </p>

      <div className="mt-10 space-y-6">

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold text-white">
            Appearance
          </h3>

          <label className="mt-5 flex items-center justify-between">
            <span className="text-slate-300">
              Dark Mode
            </span>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </label>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold text-white">
            Notifications
          </h3>

          <label className="mt-5 flex items-center justify-between">
            <span className="text-slate-300">
              Email Notifications
            </span>

            <input
              type="checkbox"
              checked={emailNotification}
              onChange={() =>
                setEmailNotification(!emailNotification)
              }
            />
          </label>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold text-white">
            Account
          </h3>

          <button className="mt-5 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700">
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
}

export default SettingsPage;