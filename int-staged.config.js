module.exports = {
  extends: ['@commitlint/config-conventional'],
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'yarn type-check',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': filenames => `yarn lint . ${filenames.join(' ')}`,
  rules: {
    'type-enum': () => [
      1,
      'always',
      [
        'config',
        'feature',
        'fix',
        'docs',
        'refactor',
        'test',
        'revert',
        'merge',
        'style',
        'build'
      ]
    ],
    'scope-case': () => [0, 'never'],
    'subject-case': () => [0, 'never']
  }
}
