const express = require('express');
const router = express.Router();
const add = require('../views/addPage');
const layout = require("../views/layout");
const { Page } = require("../models");
const { addPage } = require("../views");

router.get('/', (req, res, next) => {
  res.send(layout());
});

router.post('/', async (req, res, next) => {
  
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`


  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    slug: sluggedStr
  });
  //console.log(page)
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get('/add', (req, res, next) => {
  res.send(add());
});

// router.post('/add', (req, res) => {

// })


module.exports = router;