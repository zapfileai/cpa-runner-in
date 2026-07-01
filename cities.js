const indianaCities = [
  "Cutler", "Cynthiana", "Dale", "Daleville", "Danville",
  "Dayton", "Decatur", "Delphi", "Demotte", "Denver",
  "Depauw", "Deputy", "Dillsboro", "Donaldson", "Dubois",
  "Dunkirk", "Dyer", "East Chicago", "Eaton", "Economy",
  "Edinburgh", "Edwardsport", "Elberfeld", "Elizabeth", "Elizabethtown",
  "Elkhart", "Ellettsville", "Elwood", "Eminence", "Etna Green",
  "Evansville", "Fair Oaks", "Fairbanks", "Fairland", "Fairmount",
  "Farmersburg", "Farmland", "Ferdinand", "Fishers", "Flat Rock",
  "Flora", "Floyds Knobs", "Fort Branch", "Fort Wayne", "Fortville",
  "Fountaintown", "Fowler", "Francesville", "Frankfort", "Franklin",
  "Frankton", "Freelandville", "Fremont", "French Lick", "Galveston",
  "Garrett", "Gary", "Gas City", "Gaston", "Georgetown",
  "Glenwood", "Goshen", "Gosport", "Grabill", "Granger",
  "Greencastle", "Greenfield", "Greens Fork", "Greensburg", "Greentown",
  "Greenville", "Greenwood", "Griffith", "Guilford", "Hagerstown",
  "Hamilton", "Hamlet", "Hammond", "Hanna", "Hanover",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < indianaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(indianaCities[i]);
}

module.exports = { batches };
