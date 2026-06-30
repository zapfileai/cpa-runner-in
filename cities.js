const indianaCities = [
  "Akron", "Albany", "Albion", "Alexandria", "Anderson",
  "Angola", "Arcadia", "Argos", "Arlington", "Atlanta",
  "Attica", "Auburn", "Aurora", "Austin", "Avilla",
  "Avon", "Bargersville", "Batesville", "Bath", "Battle Ground",
  "Bedford", "Beech Grove", "Berne", "Bethlehem", "Beverly Shores",
  "Bloomfield", "Bloomingdale", "Bloomington", "Bluffton", "Boonville",
  "Borden", "Boswell", "Bourbon", "Brazil", "Bremen",
  "Bringhurst", "Bristol", "Brookston", "Brookville", "Brownsburg",
  "Brownstown", "Bunker Hill", "Burlington", "Butler", "Camby",
  "Camden", "Campbellsburg", "Cannelton", "Carmel", "Carthage",
  "Cayuga", "Cedar Grove", "Cedar Lake", "Celestine", "Centerpoint",
  "Centerville", "Chandler", "Charlestown", "Charlottesville", "Chesterton",
  "Churubusco", "Cicero", "Clarksville", "Clay City", "Claypool",
  "Clayton", "Clinton", "Cloverdale", "Coal City", "Columbia City",
  "Columbus", "Connersville", "Converse", "Corydon", "Covington",
  "Craigville", "Crawfordsville", "Crothersville", "Crown Point", "Culver",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < indianaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(indianaCities[i]);
}

module.exports = { batches };
