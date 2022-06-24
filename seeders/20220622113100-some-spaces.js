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
          backgroundColor: "#00FFFF",
          color: "#F0FFFF",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },

        {
          title: "Dummy Space",
          description:
            "A space designed to resemble and serve as a substitute for the real or usual on",
          backgroundColor: "#F5F5DC",
          color: "#7FFFD4",
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
