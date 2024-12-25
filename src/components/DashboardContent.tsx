import React from 'react';
import { Stats } from './dashboard/Stats';
import { RecentActivity } from './dashboard/RecentActivity';
import { QuickActions } from './dashboard/QuickActions';

export function DashboardContent() {
  return (
    <div className="p-4 lg:p-6">
      <Stats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  );
}