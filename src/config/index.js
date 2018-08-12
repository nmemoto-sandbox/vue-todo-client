const { config } = require('./' + process.env.NODE_ENV + '.js');

export default class Environment {
  static get API_ENDPOINT() {
    return config.API_ENDPOINT;
  }
  static get AUTH_CONFIG() {
    return config.AUTH_CONFIG
  }
}