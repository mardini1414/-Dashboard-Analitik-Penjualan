import React from 'react';
import StatisticCard from './StatisticCard';
import { DollarSign, ShoppingCart, Star } from 'lucide-react';

function Statistics() {
  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatisticCard
        title="Total Penjualan"
        value={'4.456'}
        icon={<ShoppingCart className="text-purple-500" />}
        classBackgroundIcon={'bg-purple-500/20'}
      />
      <StatisticCard
        title="Total Pendapatan"
        value={'1.907.000'}
        icon={<DollarSign className="text-green-500" />}
        classBackgroundIcon={'bg-green-500/20'}
      />
      <StatisticCard
        title="Produk Terlaris"
        value={'Produk B'}
        icon={<Star className="text-yellow-500" />}
        classBackgroundIcon={'bg-yellow-500/20'}
      />
    </div>
  );
}

export default Statistics;
