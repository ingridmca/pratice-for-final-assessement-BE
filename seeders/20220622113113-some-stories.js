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
          createdAt: new Date("2022-06-23T08:56:53.821Z"),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Leo Messi Story 2",
          content:
            " 2 Born and raised in central Argentina, Messi relocated to Spain to join Barcelona at the age of 13, for whom he made his competitive debut aged 17 in October 2004. He established himself as an integral player for the club within the next three years, and in his first uninterrupted season in 2008–09 he helped Barcelona achieve the first treble in Spanish football; that year, aged 22, Messi won his first Ballon d'Or. Three successful seasons followed, with Messi winning four consecutive Ballons d'Or. ",
          imageUrl:
            "https://en.psg.fr/media/211879/city26-messi.jpg?quality=60&width=1600&bgcolor=ffffff",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },

        {
          name: "Dummy Story",
          content:
            "In games such as football or rugby, to pretend to kick or move a ball in a particular direction but instead do something completely different, in order to deceive the opposing team's players: Adams' cross was dummied by Novo at the front post, allowing Smith to score from close range.",
          imageUrl:
            "https://tcf.admeen.org/game/17500/17152/400x246/dumb-ways-to-die-original.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Dummy Story 2",
          content:
            "In games such as football or rugby, to pretend to kick or move a ball in a particular direction but instead do something completely different, in order to deceive the opposing team's players: Adams' cross was dummied by Novo at the front post, allowing Smith to score from close range.",
          imageUrl: "https://i.ytimg.com/vi/IJNR2EpS0jw/mqdefault.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Dummy Story 3",
          content:
            "In games such as football or rugby, to pretend to kick or move a ball in a particular direction but instead do something completely different, in order to deceive the opposing team's players: Adams' cross was dummied by Novo at the front post, allowing Smith to score from close range.",
          imageUrl:
            "https://assets.funnygames.nl/2/26352/81893/1200x630/dumb-ways-to-die-1.webp",
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
