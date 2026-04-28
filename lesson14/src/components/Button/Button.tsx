import type React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
}) => {
  const baseStyle = 'px-4 py-2 rounded font-medium cursor-pointer border';

  const variants = {
    primary: 'bg-blue-500 text-white border-blue-500',
    secondary: 'bg-gray-200 text-black border-gray-300',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled ? 'true' : undefined}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};
