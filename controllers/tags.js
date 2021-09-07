const { testConnectionDabase } = require("../database");
const Tag = require("../models/Tag");

// exports.getTags = async (req, res, next) => {
//   let tags = await Tag.findAll();
//   res.status(200).json(tags);
// };

exports.postTag = async (req, res, next) => {
  testConnectionDabase();
  const name = req.body.name;
  const description = req.body.description;
  const url = req.body.url;

  try {
    await Video.create({
      name: name,
      description: description,
      url: url,
    });
  } catch (err) {
    console.log(err);
  }
};


exports.deleteTag = async (req, res, next) => {
  const tagId = req.body.id;
  let toDeleteTag;
  try {
    toDeleteTag = await Video.findByPk(tagId);
  } catch (err) {
    console.log(err);
  }
  await toDeleteTag.destroy();
};
