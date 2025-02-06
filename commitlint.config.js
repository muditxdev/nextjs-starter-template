module.exports = {
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'header-max-length': [2, 'always', 72],
  },
  extends: ['@commitlint/config-conventional'],
};
