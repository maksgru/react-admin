const env = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'development';

const config = {
  development: {
    serverUrl: 'http://localhost:4000/'
  }
};

export default config[env];
