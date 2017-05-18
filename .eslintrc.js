module.exports = {
  extends: 'airbnb',
  rules: {
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    node: true,
  },
};
