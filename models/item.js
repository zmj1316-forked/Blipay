const Sequelize = require('sequelize');

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

  }
  );
  if (!global.isProduction) {
    Item.sync().then(() => {
      console.log('Table `Item` created');
    });
  }
  return Item;
};
