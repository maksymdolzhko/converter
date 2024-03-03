interface ButtonProps {
  label?: string;
  disable?: boolean;
  className?: string;
  onClick?: ()=> void;
  children?: React.ReactNode;
}
const Button = ({ label, disable=false, className, onClick, children }: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disable}
      onClick={onClick}
      className={`${className} rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
