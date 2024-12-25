import React from 'react';
import { User } from 'lucide-react';

export function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center py-2 border-b border-gray-100">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 lg:mr-4">
              <User className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-medium">New user registered</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}