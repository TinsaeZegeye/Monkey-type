import { FaCrown, FaInfo, FaKeyboard, FaRegUser } from "react-icons/fa";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { TiKeyboard } from "react-icons/ti";

export default function Navbar() {
  const navItems = [
    { icon: FaKeyboard, label: "Practice" },
    { icon: FaCrown, label: "Leaderboards" },
    { icon: FaInfo, label: "About" },
    { icon: IoMdSettings, label: "Settings" },
  ];

  return (
    <header className="flex items-center justify-between p-4 w-full max-w-7xl gap-8 select-none">
      {/* Logo */}
      <div className="flex items-center gap-6">
        <div
          className="flex items-center cursor-pointer"
          role="button"
          tabIndex={0}
        >
          <TiKeyboard
            className="text-yellow-500 text-5xl mx-2 mt-1"
            aria-hidden="true"
          />
          <div className="flex flex-col">
            <span className="font-mono text-[#646669] -mb-1 text-sm pl-1">
              monkey see
            </span>
            <p className="text-[#646669] text-4xl font-mono font-bold tracking-tight">
              monkeytype
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.label}>
                  <button
                    className="p-2 text-[#646669] hover:text-[#d1d0c5] cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded"
                    aria-label={item.label}
                  >
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Right side of navigation bar */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 text-[#646669] hover:text-[#d1d0c5] cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded"
          aria-label="Notifications"
        >
          <IoIosNotifications className="w-7 h-7" aria-hidden="true" />
        </button>
        <button
          className="p-2 text-[#646669] hover:text-[#d1d0c5] cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded"
          aria-label="User profile"
        >
          <FaRegUser className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
