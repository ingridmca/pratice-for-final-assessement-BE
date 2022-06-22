"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    [
      queryInterface.addColumn("spaces", "userId", {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }),

      queryInterface.addColumn("stories", "spaceId", {
        type: Sequelize.INTEGER,
        references: {
          model: "spaces",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    await [
      queryInterface.removeColumn("spaces", "userId"),
      queryInterface.removeColumn("stories", "spaceId"),
    ];
  },
};
