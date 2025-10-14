'use client';

import { StatsCard } from './stats-card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlusIcon } from '@phosphor-icons/react';

export function PaymentMethod() {
  // Payment method data with dummy
  const paymentMethods = [
    {
      name: 'Visa',
      transactions: 1247,
      amount: '$45,230',
      percentage: 42,
      image: (
        <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
          VISA
        </div>
      ),
      trend: { value: '+12.5%', isPositive: true }
    },
    {
      name: 'Mastercard',
      transactions: 892,
      amount: '$32,150',
      percentage: 30,
      image: (
        <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
          <div className="flex space-x-1">
            M
          </div>
        </div>
      ),
      trend: { value: '+8.2%', isPositive: true }
    },
    {
      name: 'Apple Pay',
      transactions: 654,
      amount: '$18,945',
      percentage: 18,
      image: (
        <div className="w-12 h-8 bg-gray-900 rounded flex items-center justify-center">
          <div className="text-white text-lg">A</div>
        </div>
      ),
      trend: { value: '+25.8%', isPositive: true }
    },
    {
      name: 'Credit Card',
      transactions: 324,
      amount: '$12,675',
      percentage: 10,
      image: (
        <div className="w-12 h-8 bg-gray-300 rounded flex items-center justify-center text-gray-600">
          C
        </div>
      ),
      trend: { value: '-2.1%', isPositive: false }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Payment Method Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {paymentMethods.map((method, index) => (
          <StatsCard
            key={method.name}
            title={method.name}
            value={method.amount}
            subtitle={`${method.transactions} transactions`}
            trend={method.trend}
            progress={method.percentage}
            content={
              <div className="flex items-center justify-between mt-3">
                {method.image}
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{method.percentage}% of total</p>
                </div>
              </div>
            }
          />
        ))}
      </div>

      {/* Add Payment Method Button */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Payment Methods</h3>
            <p className="text-muted-foreground text-sm">
              Manage your organization's payment methods for donations and subscriptions.
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusIcon size={16} />
            Add Payment Method
          </Button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <p className="text-2xl font-bold text-primary">3,117</p>
            <p className="text-sm text-muted-foreground">Total Transactions</p>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">$109,000</p>
            <p className="text-sm text-muted-foreground">Total Amount</p>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">+11.2%</p>
            <p className="text-sm text-muted-foreground">Growth Rate</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
