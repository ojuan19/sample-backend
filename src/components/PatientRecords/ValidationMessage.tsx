import React from 'react';

interface ValidationMessageProps {
  message: string;
}

const ValidationMessage: React.FC<ValidationMessageProps> = ({ message }) => {
  return (
    <div className="text-red-600 text-sm mt-1">
      {message}
    </div>
  );
}

export default ValidationMessage;