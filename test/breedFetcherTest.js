const { fetchBreedDescription } = require('../fetchBreedDescription');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription("Siberian", (error, desc) => {

      const expectedDesc = 	"The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      assert.equal(desc, expectedDesc);

      done();
    });
  });

  it('returns a string description for an error when and invalid/non-existent breed is passed, via callback', (done) => {
    fetchBreedDescription('Crazy', (err, desc) => {

      const expectedDesc = null;
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});