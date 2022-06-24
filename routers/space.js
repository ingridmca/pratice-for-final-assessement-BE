const { Router } = require("express");
const Space = require("../models").space;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const spaces = await Space.findAll({
      raw: true,
      include: User,
    });
    res.send(spaces);
  } catch (e) {
    console.log(e.message);
  }
});

router.put("/", authMiddleware, async (req, res, next) => {
  try {
    const { title, description, backgroundColor, color } = req.body;
    const spaceId = req.user.id;
    console.log("space Id", spaceId);

    const oneSpace = await Space.findByPk(spaceId);
    console.log("Space", oneSpace);
    const updatedSpace = await oneSpace.update({
      title,
      description,
      backgroundColor,
      color,
    });

    res.send(updatedSpace);
  } catch (e) {
    console.log(e.message);
    next();
  }
});

module.exports = router;
