const { testConnectionDabase } = require("../database");
const Tag = require("../models/Tag");

exports.postTag = async (req, res, next) => {
  testConnectionDabase();
  const value = req.body.value;
  console.log("value", value);
  try {
    await Tag.create({
      value: value,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteTag = async (req, res, next) => {
  const tagId = req.params.id;
  let toDeleteTag;
  try {
    toDeleteTag = await Tag.findByPk(tagId);
  } catch (err) {
    console.log(err);
  }
  console.log("todeleteTag", toDeleteTag);
  await toDeleteTag.destroy();
};
