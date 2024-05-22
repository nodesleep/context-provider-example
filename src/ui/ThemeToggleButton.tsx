// ThemeToggleButton.tsx
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeToggleButton() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        if (!context) {
          throw new Error('ThemeToggleButton must be used within a ThemeProvider');
        }
        const { toggleTheme } = context;
        return (
          <button onClick={toggleTheme}>
            Toggle Theme
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}