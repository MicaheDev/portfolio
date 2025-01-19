type ButtonProps = {
  title: string;
  id?: string;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  containerClass?: string;
};

export default function Button({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
}: ButtonProps) {
  return (
    <button
      id={id}
      className={`btn ${containerClass}`}
    >
      {leftIcon}

      <span>
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
}
