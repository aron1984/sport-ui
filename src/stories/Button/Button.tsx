import './button.css';

interface ButtonProps {
  rondeau?: boolean;
  border?: boolean;
  animated?: boolean;
  img?: string;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
  typeBtn: 'primary' | 'secondary' | 'tertiary' | 'alert' | 'error' | "alternative"
  color: 'lakers' | 'celtics' | 'minesota' | 'default',
  customStyles?: React.CSSProperties,
}


export const Button = ({
  rondeau = false,
  border = false,
  animated = false,
  size = 'md',
  label,
  typeBtn = "primary",
  color = "default",
  img,
  customStyles,
  ...props
}: ButtonProps) => {
  const mode =  rondeau ? 'storybook-button--rondeau' : 'storybook-button--base';
  const btnColor = border ? `storybook-button--${color}-${typeBtn} bordered` : `storybook-button--${color}-${typeBtn} `;
  const btnAnimated = animated ? `animated` : null;
  const withIcon = img ? 'withIcon' : null;

  let width = '';
  const sizeIcon = () => {
    if(size === 'sm') {
      width = '20px';
    }
    if(size === 'md') {
      width = '30px';
    }
    if(size === 'lg'){
      width = '30px'
    }
    return width
  }

  
  return (
    <button
    type="button"
      className={['storybook-button', `storybook-button--${size}`, btnColor, mode, btnAnimated, withIcon].join(' ')}
      style={customStyles}
      {...props}
      >
                                   {
        img !== undefined && <img src={img} style={{width: sizeIcon(), marginRight: '10px' }} alt={label}/>
      }

      {label}
    </button>
  );
};