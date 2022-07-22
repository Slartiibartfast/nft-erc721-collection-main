
    const fs = require('fs');

const CID = `QmdMLQX78WbfHJtqUfGhsebXrTekaMZA5Bt63KTRbg29vC`;
const TOKEN_COUNT = 200;
fs.mkdirSync('metadata', { recursive: true });
for (let i = 1; i <= TOKEN_COUNT; i++) {
  const metadata = {
    id: i,
    name: `Tanoti ${i}`,
    image: `ipfs://${CID}/${i}.jpg`,
    description: `Songket weaving has always been the core of Tanoti's journey with craft. It is an age-old technique of creating exquisite fabric using the most precious of threads. The songket patterns are woven using gold or silver thread on a traditional looms, applying intricate weaving techniques handed down from generation to generation. These meticulously created textiles were so highly sought after, they were once used by Malay royals and aristocrats for ceremonies and celebrations.

About Tanoti - Tanoti is located in Sarawak, Malaysia's largest state. It lies in East Malaysia where 27 ethnic groups and more than 40 sub-ethnic groups live in harmony, all with their own distinct crafts, costume, architecture, patterns and practices.

Tanoti is a congregation of Sarawakian women weavers and artisans dedicated towards the production, promotion and proliferation of hand-crafted fabrics using traditional techniques inherited from our ancestors. Tanoti currently engages with 480 craft artisans residing in 25 rural and remote villages across Sarawak.`,
    attributes: [{
      value: "true",
      trait_type: "Songket"
    }]
  }
  fs.writeFileSync(`metadata/${i}.json`, JSON.stringify(metadata, null, 2), 'utf8');
}
