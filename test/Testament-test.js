/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai');

describe('Testament', function () {
  let dev, owner, alice, bob, charlie, dan;
  const INIT_SUPPLY = ethers.utils.parseEther('1000000');
  const NAME = 'Duck';
  const SYMBOL = 'DCK';
  const DECIMALS = 18;
  beforeEach(async function () {
    [dev, owner, alice, bob, charlie, dan] = await ethers.getSigners();
    Duck = await ethers.getContractFactory('Duck');
    const ethBalanceBefore = await alice.getBalance();
    duck = await Duck.connect(dev).deploy(owner.address, INIT_SUPPLY);
    await duck.deployed();
  });
