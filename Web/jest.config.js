/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-node-single-context',
  testMatch: ['**/Tests/**/(*.)+((T|t)est).[tj]s?(x)']
};
