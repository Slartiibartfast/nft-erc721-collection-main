const fs = require('fs');

const CID = `QmdMLQX78WbfHJtqUfGhsebXrTekaMZA5Bt63KTRbg29vC`;
const TOKEN_COUNT = 200;
fs.mkdirSync('metadata', { recursive: true });
for (let i = 1; i <= TOKEN_COUNT; i++) {
  const metadata = {
    id: i,
    name: `Tanoti ${i}`,
    image: `ipfs://${CID}/${i}.jpg`
  }
  fs.writeFileSync(`metadata/${i}`, JSON.stringify(metadata, null, 2), 'utf8');
}