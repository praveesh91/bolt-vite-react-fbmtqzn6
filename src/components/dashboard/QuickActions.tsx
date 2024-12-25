import React from 'react';

const actions = ['Add User', 'Create Report', 'View Analytics', 'Update Settings'];

export function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <p className="font-medium">{action}</p>
            <p className="text-sm text-gray-600 mt-1">Click to proceed</p>
          </button>
        ))}
      </div>
    </div>
  );
}