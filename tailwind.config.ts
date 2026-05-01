import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: { extend: { colors: { accent: '#8B3DFF' }, boxShadow: { glow: '0 0 40px rgba(139,61,255,0.4)' } } },
  plugins: []
};
export default config;
