"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",

      [
        {
          title: "Leo Messi Space",
          description:
            "Also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },

        {
          title: "Dummy Space",
          description:
            "A space designed to resemble and serve as a substitute for the real or usual on",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],

      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
