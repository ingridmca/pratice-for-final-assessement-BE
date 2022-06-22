//Router file example

//Remember to import the the Router from express, and to import the models!!

const { Router } = require("express");
const Story = require("../models").story;
const Space = require("../models").space;
const User = require("../models").user;

// create a router that is the sabe as app that we have in index.js

const router = new Router();

//Write how many and any kind of route that you might need!

router.get("/", async (req, res) => {
  try {
    const users = await Story.findAll({
      raw: true,
      include: { model: Space, include: User },
    });
    res.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

//Export your router!

module.exports = router;
