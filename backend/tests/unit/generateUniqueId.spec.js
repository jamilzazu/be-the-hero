const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID',() => {
  it('should generate an unique ID',() => {
    const id= generateUniqueId();

    expect(id).toHaveLength(8);
  });
});

// const crypto = require('crypto');

// export default function generateUniqueId(){
//   return crypto.randomBytes(4).toString('HEX');
// }