import React from 'react';

type OverviewTileProps = {
  title: string;
  value: number;
};

const OverviewTile: React.FC<OverviewTileProps> = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default OverviewTile;