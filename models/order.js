const Sequelize = require('sequelize');


module.exports = (db) => {
  const Order = db.define('order', {
    count: {
      type: Sequelize.INTEGER
    },
    cost: {
      type: Sequelize.DECIMAL(10, 2)
    },
    isPayed: {
      type: Sequelize.BOOLEAN
    },
    isConfirmed: {
      type: Sequelize.BOOLEAN
    },
    isRefunding: {
      type: Sequelize.BOOLEAN
    }

  }
  );

  // if (!global.isProduction) {
  //   Order.sync().then(() => {
  //     console.log('Table `Order` created');
  //   });
  // }
  return Order;
};
