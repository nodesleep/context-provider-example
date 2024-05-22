// ThemedComponent.tsx
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemedComponent() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        if (!context) {
          throw new Error('ThemedComponent must be used within a ThemeProvider');
        }
        const { theme } = context;
        const styles: React.CSSProperties = {
          backgroundColor: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
          padding: '20px',
          textAlign: 'center',
        };

        return (
          <div style={styles}>
            The current theme is {theme}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}