const { Service } = require('feathers-mongoose');

exports.Products = class Products extends Service {
  async find(){
      return "hello world"
  }
};
