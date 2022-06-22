"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",

      [
        {
          name: "Leo Messi Story",
          content:
            "Born and raised in central Argentina, Messi relocated to Spain to join Barcelona at the age of 13, for whom he made his competitive debut aged 17 in October 2004. He established himself as an integral player for the club within the next three years, and in his first uninterrupted season in 2008–09 he helped Barcelona achieve the first treble in Spanish football; that year, aged 22, Messi won his first Ballon d'Or. Three successful seasons followed, with Messi winning four consecutive Ballons d'Or. ",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/440px-Lionel_Messi_20180626.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },

        {
          name: "Dummy Story",
          content:
            "In games such as football or rugby, to pretend to kick or move a ball in a particular direction but instead do something completely different, in order to deceive the opposing team's players: Adams' cross was dummied by Novo at the front post, allowing Smith to score from close range.",
          imageUrl:
            "https://dictionary.cambridge.org/images/thumb/dummy_noun_002_11765.jpg?version=5.0.244",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],

      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
