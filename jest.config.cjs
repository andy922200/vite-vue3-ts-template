module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.vue', '!**/node_modules/**'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  roots: ['./src/tests/jest/'],
}
