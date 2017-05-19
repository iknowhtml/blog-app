module.exports = {
  extends: 'airbnb',
  rules: {
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/prop-types': 0,
  },
  plugins: ['react', 'jsx-a11y', 'import', 'eslint-plugin-html'],
  env: {
    browser: true,
    node: true,
  },
};
