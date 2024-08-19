const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DokunModule", (m) => {
  const dokun = m.contract("Dokun");

  return { dokun };
});
