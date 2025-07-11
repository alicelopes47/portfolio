import { useState } from 'react';
import { IoMdArrowDropleft } from 'react-icons/io';

interface LinkWithAlertProps {
  extraClassIndicator?: string;
  message?: string;
  href: string;
  icon: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export function LinkWithAlert({
  message,
  href,
  icon,
  onClick,
}: LinkWithAlertProps) {
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenAlert(true)}
      onMouseLeave={() => setOpenAlert(false)}
    >
      {openAlert && <Alert message={message} />}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        className="cursor-pointer"
      >
        {icon}
      </a>
    </div>
  );
}

interface AlertProps {
  extraClassIndicator?: string;
  message?: string;
}

export const Alert = ({ message }: AlertProps) => {
  return (
    <div
      className="bg-darkText rounded-2xl absolute left-[2.5rem] bottom-[-5px]"
      data-aos="fade-left"
    >
      <IoMdArrowDropleft className="text-darkText text-3xl absolute left-[-15px] top-[10%]" />
      <div className="flex items-center justify-center p-2 relative">
        <h1 className="text-lightText text-md">{message || 'Conheça'}</h1>
      </div>
    </div>
  );
};
