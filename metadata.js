const fs = require('fs');

const CID = `QmwhateverQmRPQ69hzzXdbCX86qAGX4MeqwP95b8eXmqSUrEqfHHXjy`;
const TOKEN_COUNT = 200;
fs.mkdirSync('metadata', { recursive: true });
for (let i = 1; i <= TOKEN_COUNT; i++) {
  const metadata = {
    id: i,
    name: `Tanoti ${i}`,
    image: `ipfs://${CID}/${i}`
  }
  fs.writeFileSync(`metadata/${i}`, JSON.stringify(metadata, null, 2), 'utf8');
}