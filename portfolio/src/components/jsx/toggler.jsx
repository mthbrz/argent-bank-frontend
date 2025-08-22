import React from 'react';
import useDarkMode from '../../hooks/darkMode';

export default function Toggler({darkMode}) {
    const transition = 'all 250ms ease'

   return (
      <div style={{fontSize: '1.5rem', cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            darkMode ?
               <span onClick={useDarkMode.toggleTheme} aria-label="Full Moon" role="img">🌕</span>
               :
               <span onClick={useDarkMode.toggleTheme} aria-label="New Moon" role="img">🌑</span>
         }
      </div>
   )
}