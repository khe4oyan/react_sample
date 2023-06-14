import './theme.css';
import { useState, useEffect } from "react";

export default function ThemeSetter() {
  const [theme, setTheme] = useState(() => {
		let theme = localStorage.getItem('theme');
		if (theme == undefined) { theme = 'def'; }
		return theme;
	});

  useEffect(() => {
		localStorage.setItem('theme', theme);
    if (theme == 'def') { return; }

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.href = `./css_theme/${theme}.css`;
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    }
  }, [theme]);

	return (
		<div className='themeSetter center'>
			<div className='themeSetter__box'>
				<button className='themeSetter__box__button theme_default' onClick={() => {setTheme('def')}}>default</button>
				<button className='themeSetter__box__button theme_blackWhite' onClick={() => {setTheme('blackWhite')}}>B&W</button>
				<button className='themeSetter__box__button theme_space' onClick={() => {setTheme('space')}}>space</button>
			</div>
		</div>
	)
}
