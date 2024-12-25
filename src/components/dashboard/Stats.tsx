import React from 'react';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import { StatCard } from './StatCard';

const stats = [
  {
    title: 'Total Users',
    value: '24.8k',
    change: '+12%',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    title: 'Revenue',
    value: '$45,231',
    change: '+8%',
    icon: DollarSign,
    color: 'bg-green-500',
  },
  {
    title: 'Orders',
    value: '1,345',
    change: '+3%',
    icon: ShoppingCart,
    color: 'bg-purple-500',
  },
  {
    title: 'Growth',
    value: '23%',
    change: '+2%',
    icon: TrendingUp,
    color: 'bg-orange-500',
  },
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}