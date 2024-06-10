import React, { useState } from 'react';
import DateFilter from './components/DateFilter';
import SalesTable from './components/SalesTable';
import SalesChart from './components/SalesChart';
import Statistics from './components/Statistics';

function App() {
  const [date, setDate] = useState();
  return (
    <div className="container px-1 md:px-2 lg:px-8 bg-slate-100">
      <DateFilter onChange={(date) => setDate(date)} />
      <div className="mb-4 bg-white pb-4 pt-2 md:pt-8 px-2 md:px-4 shadow rounded-md">
        <Statistics />
        <SalesChart />
      </div>
      <div className="bg-white py-4 px-2 md:px-8 shadow rounded-md">
        <SalesTable date={date} />
      </div>
    </div>
  );
}

export default App;
