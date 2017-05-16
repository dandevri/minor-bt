//Database object
var db = {
  // Put request simulate
  put: function(id, data) {
    this.data[id] = data;
  },
  // Get request simulate
  get: function(id) {
    return this.data[id];
  },
  // Store data object
  data: {}
}

// Scores in data object
db.put(0, {FEY: '0', AJA: '1'});
db.put(1, {FEY: '0', AJA: '2'});
db.put(2, {FEY: '0', AJA: '3'});
