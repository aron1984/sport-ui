import './button.css';

interface ButtonProps {
  rondeau?: boolean;
  border?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
  typeBtn: 'primary' | 'secondary' | 'alert' | 'error' | "alternative"
  color: 'lakers' | 'celtics' | 'default'
}


export const Button = ({
  rondeau = false,
  border = false,
  size = 'md',
  label,
  typeBtn = "primary",
  color = "default",
  ...props
}: ButtonProps) => {
  const mode =  rondeau ? 'storybook-button--rondeau' : 'storybook-button--base';
  const btnColor = border ? `storybook-button--${color}-${typeBtn} bordered` : `storybook-button--${color}-${typeBtn} `

  
  return (
    <button
    type="button"
      className={['storybook-button', `storybook-button--${size}`, btnColor, mode].join(' ')}
      // style={{ backgroundColor: background().backGroundColor, color: background().fontColor}}
      {...props}
      >
      {label}
    </button>
  );
};

// const background = () => {
//   let backGroundColor
//   let fontColor
//   if(color === 'lakers') {
//     fontColor = 'yellow'
//     backGroundColor= 'white'
//   }

//   return {
//     backGroundColor,
//     fontColor
//   }
// }