import React from 'react';

interface QuickAccessWidgetProps {
  title: string;
}

const QuickAccessWidget: React.FC<QuickAccessWidgetProps> = ({ title }) => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">Some quick stats here.</p>
    </div>
  );
}

export default QuickAccessWidget;