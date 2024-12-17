module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Vehicles', [
      { name: 'SUV Model X', type: 'suv', wheels: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cruiser Bike Y', type: 'cruiser', wheels: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'sedan Model X', type: 'sedan', wheels: 4, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Vehicles', null, {});
  },
};
