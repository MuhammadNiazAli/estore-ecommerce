'use client';

import React, { useState, useRef } from 'react';
import { Mail, UserCog, Edit, CheckCircle, X, Save, Loader2 } from 'lucide-react';

const roles = ['Administrator', 'Editor', 'Moderator', 'User'];
const statuses = ['Active', 'Inactive', 'Pending', 'Suspended'];

const DashboardProfile = () => {
  // Initial user state
  const [user, setUser] = useState({
    name: 'Niaz Ali',
    email: 'niaz@example.com',
    role: 'Administrator',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/100?u=niaz-profile',
  });

  // Editing state
  const [editingField, setEditingField] = useState(null); // 'name' | 'email' | 'role' | 'status' | null
  const [formValues, setFormValues] = useState(user);
  const [formErrors, setFormErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(null); // null | true | false

  // Avatar upload state
  const [avatarPreview, setAvatarPreview] = useState(user.avatar);
  const fileInputRef = useRef(null);

  // Account Settings Modal state
  const [showSettings, setShowSettings] = useState(false);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));

    // Clear error on change
    setFormErrors((prev) => ({ ...prev, [field]: null }));
  };

  // Validation
  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) errors.name = 'Name is required';
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email.trim())
    ) {
      errors.email = 'Invalid email address';
    }
    if (!roles.includes(formValues.role)) errors.role = 'Invalid role selected';
    if (!statuses.includes(formValues.status))
      errors.status = 'Invalid status selected';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Save handler (simulate backend save)
  const handleSave = () => {
    if (!validateForm()) return;

    setSaving(true);
    setSaveSuccess(null);

    setTimeout(() => {
      // Simulate success 90% of time
      if (Math.random() < 0.9) {
        setUser(formValues);
        setEditingField(null);
        setSaveSuccess(true);
      } else {
        setSaveSuccess(false);
      }
      setSaving(false);
    }, 1500);
  };

  // Cancel editing
  const handleCancel = () => {
    setFormValues(user);
    setFormErrors({});
    setEditingField(null);
  };

  // Avatar Upload handler
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate image type and size (< 2MB)
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file.');
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert('Image size must be under 2MB.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
      setFormValues((prev) => ({ ...prev, avatar: reader.result }));
      setEditingField(null);
      setSaveSuccess(null);
    };
    reader.readAsDataURL(file);
  };

  // Open file input dialog
  const triggerAvatarUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <section className="w-full bg-white flex justify-center px-4 py-10">
        <div className="w-full max-w-[1000px] bg-white p-6 rounded-xl shadow-lg">
          {/* Header */}
          <h2 className="text-2xl font-bold text-amber-600 mb-6 select-none">
            Profile Overview
          </h2>

          {/* Profile Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative group">
              <img
                src={avatarPreview}
                alt="User avatar"
                className="w-24 h-24 rounded-full border-4 border-amber-600 object-cover shadow"
              />
              <button
                type="button"
                onClick={triggerAvatarUpload}
                aria-label="Change avatar"
                className="opacity-0 group-hover:opacity-100 transition absolute inset-0 bg-white bg-opacity-50 rounded-full flex items-center justify-center text-amber-600 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
              >
                <Edit className="w-6 h-6" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </div>

            {/* Details */}
            <div className="flex-1 w-full max-w-xl">
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 select-none"
                >
                  Name
                </label>
                {editingField === 'name' ? (
                  <>
                    <input
                      id="name"
                      type="text"
                      value={formValues.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      disabled={saving}
                      autoFocus
                      className={`mt-1 block w-full rounded-md border-gray-200 bg-white text-gray-900 shadow-sm focus:border-amber-600 focus:ring-amber-600 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-200'
                      }`}
                      aria-invalid={!!formErrors.name}
                      aria-describedby="name-error"
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') handleCancel();
                      }}
                    />
                    {formErrors.name && (
                      <p
                        id="name-error"
                        className="mt-1 text-xs text-red-500 select-none"
                      >
                        {formErrors.name}
                      </p>
                    )}
                  </>
                ) : (
                  <div
                    tabIndex={0}
                    role="textbox"
                    aria-readonly="true"
                    onClick={() => setEditingField('name')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setEditingField('name');
                        e.preventDefault();
                      }
                    }}
                    className="mt-1 cursor-pointer rounded-md px-2 py-1 text-gray-900 bg-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    aria-label={`Name: ${user.name}. Click to edit`}
                  >
                    {user.name}
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 select-none"
                >
                  Email
                </label>
                {editingField === 'email' ? (
                  <>
                    <input
                      id="email"
                      type="email"
                      value={formValues.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={saving}
                      autoFocus
                      className={`mt-1 block w-full rounded-md border-gray-200 bg-white text-gray-900 shadow-sm focus:border-amber-600 focus:ring-amber-600 ${
                        formErrors.email ? 'border-red-500' : 'border-gray-200'
                      }`}
                      aria-invalid={!!formErrors.email}
                      aria-describedby="email-error"
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') handleCancel();
                      }}
                    />
                    {formErrors.email && (
                      <p
                        id="email-error"
                        className="mt-1 text-xs text-red-500 select-none"
                      >
                        {formErrors.email}
                      </p>
                    )}
                  </>
                ) : (
                  <div
                    tabIndex={0}
                    role="textbox"
                    aria-readonly="true"
                    onClick={() => setEditingField('email')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setEditingField('email');
                        e.preventDefault();
                      }
                    }}
                    className="mt-1 cursor-pointer rounded-md px-2 py-1 text-gray-900 bg-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    aria-label={`Email: ${user.email}. Click to edit`}
                  >
                    <Mail className="inline w-4 h-4 mr-1 text-amber-600" />
                    {user.email}
                  </div>
                )}
              </div>

              {/* Role */}
              <div className="mb-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 select-none"
                >
                  Role
                </label>
                {editingField === 'role' ? (
                  <select
                    id="role"
                    value={formValues.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    disabled={saving}
                    autoFocus
                    className="mt-1 block w-full rounded-md border-gray-200 bg-white text-gray-900 shadow-sm focus:border-amber-600 focus:ring-amber-600"
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') handleCancel();
                    }}
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div
                    tabIndex={0}
                    role="textbox"
                    aria-readonly="true"
                    onClick={() => setEditingField('role')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setEditingField('role');
                        e.preventDefault();
                      }
                    }}
                    className="mt-1 cursor-pointer rounded-md px-2 py-1 text-gray-900 bg-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 select-none"
                    aria-label={`Role: ${user.role}. Click to edit`}
                  >
                    {user.role}
                  </div>
                )}
              </div>

              {/* Status */}
              <div className="mb-4">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 select-none"
                >
                  Status
                </label>
                {editingField === 'status' ? (
                  <select
                    id="status"
                    value={formValues.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    disabled={saving}
                    autoFocus
                    className="mt-1 block w-full rounded-md border-gray-200 bg-white text-gray-900 shadow-sm focus:border-amber-600 focus:ring-amber-600"
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') handleCancel();
                    }}
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div
                    tabIndex={0}
                    role="textbox"
                    aria-readonly="true"
                    onClick={() => setEditingField('status')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setEditingField('status');
                        e.preventDefault();
                      }
                    }}
                    className="mt-1 cursor-pointer rounded-md px-2 py-1 text-gray-900 bg-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 select-none flex items-center gap-1"
                    aria-label={`Status: ${user.status}. Click to edit`}
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {user.status}
                  </div>
                )}
              </div>

              {/* Action buttons (Save/Cancel) if editing */}
              {editingField && (
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-amber-600 text-black px-4 py-2 rounded-md font-medium hover:bg-amber-500 transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleCancel}
                    disabled={saving}
                    className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-500 transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              )}

              {/* Save result feedback */}
              {saveSuccess === true && (
                <p
                  role="alert"
                  className="mt-2 text-green-400 font-semibold select-none"
                  tabIndex={-1}
                >
                  Profile saved successfully!
                </p>
              )}
              {saveSuccess === false && (
                <p
                  role="alert"
                  className="mt-2 text-red-500 font-semibold select-none"
                  tabIndex={-1}
                >
                  Failed to save profile. Please try again.
                </p>
              )}
            </div>
          </div>

          {/* Account Settings Button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setShowSettings(true)}
              className="bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-500 transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <UserCog className="w-5 h-5 text-amber-600" />
              Account Settings
            </button>
          </div>
        </div>
      </section>

      {/* Account Settings Modal */}
      {showSettings && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="account-settings-title"
          tabIndex={-1}
          className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowSettings(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setShowSettings(false);
          }}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="account-settings-title"
              className="text-amber-600 text-xl font-bold mb-4 select-none"
            >
              Account Settings
            </h3>
            <p className="text-gray-700 mb-4">
              This is a placeholder for account settings. Implement your settings here.
            </p>
            <button
              onClick={() => setShowSettings(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded"
              aria-label="Close account settings"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="mt-4 bg-amber-600 text-black px-4 py-2 rounded-md hover:bg-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardProfile;
