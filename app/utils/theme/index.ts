export const theme = {
  size: (n: number = 1) => `${n * 12}px`,
  color: {
    background: '#FFFFFF',
    text: '#000000',
  },
  device: {
    display: 'screen and (max-width: 1366px)',
    tablet: 'screen and (max-width: 1024px)',
    mobile: 'screen and (max-width: 480px)',
  },
  easing: {
    quick: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
};
