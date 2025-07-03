import React, { useState } from 'react';
import { ArrowLeft, Monitor, Sun, Moon, Volume2, Bell, Shield, Globe } from 'lucide-react';

interface SettingsPageProps {
  onBack: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ onBack }) => {
  const [settings, setSettings] = useState({
    theme: 'dark',
    autoplay: true,
    notifications: true,
    volume: 80,
    language: 'en',
    privacy: 'public'
  });

  const themeOptions = [
    { id: 'light', label: 'Light', icon: Sun, desc: 'Light theme for daytime viewing' },
    { id: 'dark', label: 'Dark', icon: Moon, desc: 'Dark theme for comfortable viewing' },
    { id: 'auto', label: 'Automatic', icon: Monitor, desc: 'Follows your system preference' }
  ];

  const handleThemeChange = (theme: string) => {
    setSettings(prev => ({ ...prev, theme }));
    // In a real app, this would apply the theme
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      // Auto mode - check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#081932] pt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={onBack}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-white/60 mt-1">Customize your experience</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Appearance */}
          <div className="bg-[#0f2f5f] rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Monitor className="text-[#ddb870]" size={24} />
              <h2 className="text-xl font-semibold text-white">Appearance</h2>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white/80 font-medium">Theme</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {themeOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleThemeChange(option.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        settings.theme === option.id
                          ? 'border-[#ddb870] bg-[#ddb870]/10'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <IconComponent 
                          size={20} 
                          className={settings.theme === option.id ? 'text-[#ddb870]' : 'text-white/60'} 
                        />
                        <span className="text-white font-medium">{option.label}</span>
                      </div>
                      <p className="text-white/60 text-sm">{option.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Playback */}
          <div className="bg-[#0f2f5f] rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Volume2 className="text-[#ddb870]" size={24} />
              <h2 className="text-xl font-semibold text-white">Playback</h2>
            </div>
            
            <div className="space-y-6">
              <label className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                <div>
                  <div className="text-white font-medium">Auto-play videos</div>
                  <div className="text-white/60 text-sm">Automatically play videos when browsing</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.autoplay}
                  onChange={(e) => setSettings(prev => ({ ...prev, autoplay: e.target.checked }))}
                  className="w-5 h-5 text-[#ddb870] bg-transparent border-white/30 rounded focus:ring-[#ddb870] focus:ring-2"
                />
              </label>

              <div className="p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-white font-medium">Default Volume</div>
                    <div className="text-white/60 text-sm">Set the default playback volume</div>
                  </div>
                  <span className="text-[#ddb870] font-medium">{settings.volume}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.volume}
                  onChange={(e) => setSettings(prev => ({ ...prev, volume: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #ddb870 0%, #ddb870 ${settings.volume}%, rgba(255,255,255,0.2) ${settings.volume}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-[#0f2f5f] rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="text-[#ddb870]" size={24} />
              <h2 className="text-xl font-semibold text-white">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                <div>
                  <div className="text-white font-medium">Push Notifications</div>
                  <div className="text-white/60 text-sm">Receive notifications about new content</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => setSettings(prev => ({ ...prev, notifications: e.target.checked }))}
                  className="w-5 h-5 text-[#ddb870] bg-transparent border-white/30 rounded focus:ring-[#ddb870] focus:ring-2"
                />
              </label>
            </div>
          </div>

          {/* Language & Region */}
          <div className="bg-[#0f2f5f] rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="text-[#ddb870]" size={24} />
              <h2 className="text-xl font-semibold text-white">Language & Region</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#081932] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ddb870] transition-colors"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="it">Italiano</option>
                  <option value="pt">Português</option>
                </select>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-[#0f2f5f] rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="text-[#ddb870]" size={24} />
              <h2 className="text-xl font-semibold text-white">Privacy</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Profile Visibility</label>
                <select
                  value={settings.privacy}
                  onChange={(e) => setSettings(prev => ({ ...prev, privacy: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#081932] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ddb870] transition-colors"
                >
                  <option value="public">Public</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-[#ddb870] text-[#081932] px-8 py-3 rounded-lg font-semibold hover:bg-[#ddb870]/90 transition-colors">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};