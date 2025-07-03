import React from 'react';
import { X, Settings, User, LogOut, Sliders } from 'lucide-react';

interface UserSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
}

export const UserSidebar: React.FC<UserSidebarProps> = ({
  isOpen,
  onClose,
  onNavigate,
  isLoggedIn
}) => {
  const handleNavigation = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-[#0f2f5f] z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#ddb870] rounded-lg flex items-center justify-center">
                <span className="text-[#081932] font-bold text-lg">S</span>
              </div>
              <span className="text-white text-xl font-semibold">Skà Labs</span>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              <button
                onClick={() => handleNavigation('preferences')}
                className="w-full flex items-center space-x-3 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <Sliders size={20} className="text-white/60 group-hover:text-[#ddb870] transition-colors" />
                <span className="font-medium">Preferences</span>
              </button>

              <button
                onClick={() => handleNavigation('profile')}
                className="w-full flex items-center space-x-3 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <User size={20} className="text-white/60 group-hover:text-[#ddb870] transition-colors" />
                <span className="font-medium">Profile</span>
              </button>

              <button
                onClick={() => handleNavigation('settings')}
                className="w-full flex items-center space-x-3 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <Settings size={20} className="text-white/60 group-hover:text-[#ddb870] transition-colors" />
                <span className="font-medium">Settings</span>
              </button>

              {isLoggedIn && (
                <button
                  onClick={() => handleNavigation('logout')}
                  className="w-full flex items-center space-x-3 p-3 text-white/80 hover:text-white hover:bg-red-500/20 rounded-lg transition-all duration-200 group"
                >
                  <LogOut size={20} className="text-white/60 group-hover:text-red-400 transition-colors" />
                  <span className="font-medium">Log Out</span>
                </button>
              )}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="text-white/40 text-sm">
              <p>Demo Version</p>
              <p className="text-xs mt-1">Full functionality coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};