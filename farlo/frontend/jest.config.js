module.exports = {
    preset: 'ts-jest', 
    testEnvironment: 'node',  
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest' 
    },
    transformIgnorePatterns: [
      '/node_modules/' 
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],  
  };
  