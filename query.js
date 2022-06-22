//imoport all the models files
//using this:
const User = require("./models").user;
const Space = require("./models").space;
const Story = require("./models").story;

async function spaceWithUsers() {
  const lists = await Space.findAll({
    raw: true,
    include: [User],
  });

  //If you add the "raw: true" you only have the data itself

  console.log(lists);
}

spaceWithUsers();

async function storyWithSpace() {
  const lists = await Story.findAll({
    raw: true,
    include: { model: Space, include: User },
  });

  //If you add the "raw: true" you only have the data itself

  console.log(lists);
}

storyWithSpace();
