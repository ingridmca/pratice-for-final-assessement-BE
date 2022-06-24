const { Router } = require("express");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const Story = require("../models").story;
const Space = require("../models").space;
const User = require("../models").user;

const router = new Router();

router.get("/:id", async (req, res) => {
  try {
    const spaceId = req.params.id;

    const story = await Space.findByPk(spaceId, {
      include: [{ model: Story }, { model: User }],
    });
    res.send(story);
  } catch (e) {
    console.log(e.message);
  }
});
// //delete a user -> http :4000/users/1
router.delete("/:storyId", async (req, res, next) => {
  try {
    const { storyId } = req.params;

    console.log(storyId);

    const storyToDelete = await Story.findByPk(storyId);

    await storyToDelete.destroy();

    res.send("Story deleted ");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, content, imageUrl } = req.body;
    const spaceId = req.user.id;

    const newStory = await Story.create({ name, content, imageUrl, spaceId });

    res.status(200).send(newStory);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
