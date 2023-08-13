export const makeFontSize = (lg = 20) => ({
  lg,
  md: `${lg * 1}px`,
  base: `${lg * 1}px`,
});

export const makeSplit = (left = 0.33) => [`${left * 100}%`, `${(1 - left) * 100}%`];

export const sectionProps = {
  p: 2,
};

export const textProps = {
  fontSize: makeFontSize(13),
  lineHeight: '1.33em',
};

export const _breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

export const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em'];
