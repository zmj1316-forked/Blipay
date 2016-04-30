const Sequelize = require('sequelize');
const index = require("./index");

module.exports = (db) => {
  const Item = db.define('item', {
    price: {
      type: Sequelize.DECIMAL(10, 2)
    },
    remain: {
      type: Sequelize.INTEGER                     
    },
    name: {
      type: Sequelize.STRING
    },
    thumb: {
      type: Sequelize.STRING
    }

  });
  associate: (models)=>{
    Item.belongsTo(models.User,{as: 'sid'});
  };
  if (!global.isProduction) {
    Item.sync().then(() => {
      console.log('Table `Item` created');
    });
  }
  return Item;
};
