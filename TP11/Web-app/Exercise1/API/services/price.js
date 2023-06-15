const Prices = require("../models/prices");

const findAll = async () => {
}

const create = async (newPrice) => {
  const createdPrice = await Prices.create(newPrice);
  return createdPrice;
}

const update = async () => {
}

const remove = async () => {
}

module.exports = {
  update,
  remove,
  findAll,
  create,
}