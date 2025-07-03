import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Calendar, Edit3, Camera } from 'lucide-react';

interface ProfilePageProps {
  onBack: () => void;
  isLoggedIn: boolean;
  onLogin: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onBack, isLoggedIn, onLogin }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: 'alex_developer',
    email: 'alex@example.com',
    fullName: 'Alex Johnson',
    joinDate: '2024-01-15',
    bio: 'Full-stack developer passionate about AI and emerging technologies.',
    location: 'San Francisco, CA',
    website: 'https://alexjohnson.dev'
  });

  const [editForm, setEditForm] = useState(profile);

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#081932] pt-20">
        <div className="max-w-md mx-auto px-4 py-16">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <button
              onClick={onBack}
              className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold text-white">Profile</h1>
          </div>

          {/* Login/Signup Form */}
          <div className="bg-[#0f2f5f] rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#ddb870] rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={32} className="text-[#081932]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome to Skà</h2>
              <p className="text-white/60">Sign in to access your profile and personalized content</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#081932] border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ddb870] transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-[#081932] border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ddb870] transition-colors"
                />
              </div>

              <button
                type="button"
                onClick={onLogin}
                className="w-full bg-[#ddb870] text-[#081932] py-3 rounded-lg font-semibold hover:bg-[#ddb870]/90 transition-colors"
              >
                Sign In
              </button>

              <div className="text-center">
                <p className="text-white/60 text-sm">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={onLogin}
                    className="text-[#ddb870] hover:text-[#ddb870]/80 transition-colors"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#081932] pt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white">Profile</h1>
              <p className="text-white/60 mt-1">Manage your account information</p>
            </div>
          </div>
          
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center space-x-2 bg-[#ddb870] text-[#081932] px-4 py-2 rounded-lg font-medium hover:bg-[#ddb870]/90 transition-colors"
            >
              <Edit3 size={18} />
              <span>Edit Profile</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#0f2f5f] rounded-xl p-6 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-[#ddb870] rounded-full flex items-center justify-center mx-auto">
                  <User size={48} className="text-[#081932]" />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-[#081932] text-white p-2 rounded-full hover:bg-[#081932]/80 transition-colors">
                    <Camera size={16} />
                  </button>
                )}
              </div>
              
              <h2 className="text-xl font-bold text-white mb-2">
                {isEditing ? editForm.fullName : profile.fullName}
              </h2>
              <p className="text-[#ddb870] mb-4">@{isEditing ? editForm.username : profile.username}</p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail size={16} />
                  <span className="text-sm">{isEditing ? editForm.email : profile.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Calendar size={16} />
                  <span className="text-sm">Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <div className="bg-[#0f2f5f] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Profile Information</h3>
              
              {isEditing ? (
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        value={editForm.fullName}
                        onChange={(e) => setEditForm(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#081932] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ddb870] transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Username</label>
                      <input
                        type="text"
                        value={editForm.username}
                        onChange={(e) => setEditForm(prev => ({ ...prev, username: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#081932] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ddb870] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-[#081932] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ddb870] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Bio</label>
                    <textarea
                      value={editForm.bio}
                      onChange={(e) => setEditForm(prev => ({ ...prev, bio: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#081932] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ddb870] transition-colors resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Location</label>
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) => setEditForm(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#081932] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ddb870] transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Website</label>
                      <input
                        type="url"
                        value={editForm.website}
                        onChange={(e) => setEditForm(prev => ({ ...prev, website: e.target.value }))}
                        className="w-full px-4 py-3 bg-[#081932] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ddb870] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={handleSave}
                      className="bg-[#ddb870] text-[#081932] px-6 py-3 rounded-lg font-semibold hover:bg-[#ddb870]/90 transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white/80 text-sm font-medium mb-2">Bio</h4>
                    <p className="text-white">{profile.bio}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white/80 text-sm font-medium mb-2">Location</h4>
                      <p className="text-white">{profile.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white/80 text-sm font-medium mb-2">Website</h4>
                      <a 
                        href={profile.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#ddb870] hover:text-[#ddb870]/80 transition-colors"
                      >
                        {profile.website}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};