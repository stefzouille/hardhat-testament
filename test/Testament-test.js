/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai');

describe('Testament', function () {
  let dev, owner, doctor, Testament, testament, alice, bob, charlie, dan;

  beforeEach(async function () {
    [dev, owner, doctor, alice, bob, charlie, dan] = await ethers.getSigners();
    Testament = await ethers.getContractFactory('Testament');
    testament = await Testament.connect(dev).deploy(owner.address, doctor.address);
    await testament.deployed();
  });

  describe('Deployement', function () {
    it('Has name motherfucker', async function () {
      Testament = await ethers.getContractFactory('Testament');
      testament = await Testament.connect(dev).deploy(owner.address, doctor.address);
      await testament.deployed();
      expect();
    });
  });
});
