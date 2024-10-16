import classes from './Button.module.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    isActive: boolean;
  };

export default function Button({children, isActive, ...props}: ButtonProps) {
  return (
     (
        <button {...props} className={`${classes.Btn} ${isActive ? classes.active : ''}`}>
        {children}
      </button>
      )
  )
}
