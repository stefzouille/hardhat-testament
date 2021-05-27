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

  describe('Deployment', function () {
    it('Should revert if owner and doctor are the same person.', async function () {
      await expect(Testament.connect(dev).deploy(owner.address, owner.address)).to.revertedWith(
        'Testament: You cannot define the owner and the doctor as the same person.');
    });
  });
  describe('Who is the best?', function () {
    it('Your are the best in the world coconut.', async function () {
      await expect();
    });
  });
  describe('Who is dead?', function () {
    it('Not me i am too young to die', async function () {
      await expect();
    });
  });
});
