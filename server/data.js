var categories = ['aerobic', 'strength', 'balance', 'flexibility'];

var exercises = [
    { id: 01, name: 'Indoor Cycling', category: "aerobic" },
    { id: 02, name: 'Indoor Rowing', category: "aerobic" },
    { id: 03, name: 'Swimming', category: "aerobic" },
    { id: 04, name: 'Dumbell Row', category: "strength" }
];

var rooms = [
    { id: 101, name: "Blue-Studio" },
    { id: 102, name: "Green-Studio" },
    { id: 200, name: "Red-Studio" },
    { id: 100, name: "Pool" }
];

module.exports = {
    categories: categories,
    exercises: exercises,
    rooms: rooms
};
