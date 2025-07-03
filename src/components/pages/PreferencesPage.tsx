import React, { useState } from 'react';
import { ArrowLeft, Sparkles, TrendingUp, Clock, Heart } from 'lucide-react';

interface PreferencesPageProps {
  onBack: () => void;
}

export const PreferencesPage: React.FC<PreferencesPageProps> = ({ onBack }) => {
  const [preferences, setPreferences] = useState({
    contentTypes: [] as string[],
    genres: [] as string[],
    difficulty: 'intermediate',
    notifications: true,
    autoplay: true
  });

  const contentTypes = [
    { id: 'tutorials', label: 'Tutorials', icon: '📚' },
    { id: 'hackathons', label: 'Hackathons', icon: '🏆' },
    { id: 'news', label: 'Tech News', icon: '📰' },
    { id: 'interviews', label: 'Interviews', icon: '🎤' },
    { id: 'demos', label: 'Product Demos', icon: '💻' },
    { id: 'workshops', label: 'Workshops', icon: '🛠️' }
  ];

  const genres = [
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'Mobile Development',
    'Blockchain',
    'Cybersecurity',
    'Data Science',
    'Cloud Computing',
    'DevOps',
    'UI/UX Design'
  ];

  const toggleContentType = (type: string) => {
    setPreferences(prev => ({
      ...prev,
      contentTypes: prev.contentTypes.includes(type)
        ? prev.contentTypes.filter(t => t !== type)
        : [...prev.contentTypes, type]
    }));
  };

  const toggleGenre = (genre: string) => {
    setPreferences(prev => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter(g => g !== genre)
        : [...prev.genres, genre]
    }));
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
            <h1 className="text-3xl font-bold text-white">Content Preferences</h1>
            <p className="text-white/60 mt-1">Customize your content experience</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Content Types */}
          <div className="bg-[#0f2f5f] rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="text-[#ddb870]" size={24} />
              <h2 className="text-xl font-semibold text-white">Content Types</h2>
            </div>
            <p className="text-white/60 mb-6">Select the types of content you're most interested in</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => toggleContentType(type.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    preferences.contentTypes.includes(type.id)
                      ? 'border-[#ddb870] bg-[#ddb870]/10 text-white'
                      : 'border-white/20 hover:border-white/40 text-white/70 hover:text-white'
                  }`}
                >
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <div className="font-medium">{type.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Genres */}
          <div className="bg-[#0f2f5f] rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="text-[#ddb870]" size={24} />
              <h2 className="text-xl font-semibold text-white">Technology Areas</h2>
            </div>
            <p className="text-white/60 mb-6">Choose your areas of interest</p>
            
            <div className="flex flex-wrap gap-3">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    preferences.genres.includes(genre)
                      ? 'bg-[#ddb870] text-[#081932]'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Level */}
          <div className="bg-[#0f2f5f] rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="text-[#ddb870]" size={24} />
              <h2 className="text-xl font-semibold text-white">Difficulty Level</h2>
            </div>
            <p className="text-white/60 mb-6">Select your preferred content difficulty</p>
            
            <div className="space-y-3">
              {[
                { id: 'beginner', label: 'Beginner', desc: 'New to technology and programming' },
                { id: 'intermediate', label: 'Intermediate', desc: 'Some experience with development' },
                { id: 'advanced', label: 'Advanced', desc: 'Experienced developer or expert' }
              ].map((level) => (
                <label
                  key={level.id}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <input
                    type="radio"
                    name="difficulty"
                    value={level.id}
                    checked={preferences.difficulty === level.id}
                    onChange={(e) => setPreferences(prev => ({ ...prev, difficulty: e.target.value }))}
                    className="w-4 h-4 text-[#ddb870] bg-transparent border-white/30 focus:ring-[#ddb870] focus:ring-2"
                  />
                  <div>
                    <div className="text-white font-medium">{level.label}</div>
                    <div className="text-white/60 text-sm">{level.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Settings */}
          <div className="bg-[#0f2f5f] rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="text-[#ddb870]" size={24} />
              <h2 className="text-xl font-semibold text-white">Experience Settings</h2>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                <div>
                  <div className="text-white font-medium">Smart Notifications</div>
                  <div className="text-white/60 text-sm">Get notified about content matching your interests</div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.notifications}
                  onChange={(e) => setPreferences(prev => ({ ...prev, notifications: e.target.checked }))}
                  className="w-5 h-5 text-[#ddb870] bg-transparent border-white/30 rounded focus:ring-[#ddb870] focus:ring-2"
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                <div>
                  <div className="text-white font-medium">Auto-play Videos</div>
                  <div className="text-white/60 text-sm">Automatically play videos when browsing</div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.autoplay}
                  onChange={(e) => setPreferences(prev => ({ ...prev, autoplay: e.target.checked }))}
                  className="w-5 h-5 text-[#ddb870] bg-transparent border-white/30 rounded focus:ring-[#ddb870] focus:ring-2"
                />
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-[#ddb870] text-[#081932] px-8 py-3 rounded-lg font-semibold hover:bg-[#ddb870]/90 transition-colors">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};