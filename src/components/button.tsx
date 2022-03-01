interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
