let items = [
  {
    id: 1,
    name: "Whale",
    count: 4
  },
  {
    id: 2,
    name: "Tiger Shark",
    count: 14
  },
  {
    id: 3,
    name: "Seal",
    count: 26
  },
  {
    id: 1,
    name: "Octopus",
    count: 4
  },
  {
    id: 2,
    name: "Dory",
    count: 14
  },
  {
    id: 3,
    name: "Pistol Shrimp",
    count: 26
  }
];

const all = () =>
  items.slice().sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });

const find = id => {
  id = parseInt(id, 10); // Convert to integer
  return items.find(item => item.id === id);
};

const search = query => {
  query = query.toLowerCase();
  return items
    .filter(item => {
      return item.name.toLowerCase().indexOf(query) !== -1;
    })
    .slice()
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
};

const create = ({ name, count }) => {
  const seaAnimal = {
    id: items.length + 1,
    name,
    count: parseInt(count, 10)
  };
  items.push(seaAnimal);
  return seaAnimal;
};

const findAndUpdate = (id, changes) => {
  id = parseInt(id, 10); // Convert to integer
  const item = items.find(item => item.id === id);
  Object.assign(item, changes);
  return item;
};

const destroy = id => {
  id = parseInt(id, 10); // Convert to integer
  const indexToRemove = items.findIndex(item => item.id === id);
  if (indexToRemove === -1) {
    // Not found
    return;
  }
  const removedItems = items.splice(indexToRemove, 1); // Remove the item at that index
  return removedItems[0]; // Return removed item
};

module.exports = { all, find, search, create, findAndUpdate, destroy };
