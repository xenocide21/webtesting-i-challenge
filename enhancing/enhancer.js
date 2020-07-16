module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === NaN || item.enhancement === undefined) {
    item.enhancement = 1;
  }
  else if(item.enhancement < 20) {
    item.enhancement += 1;
  }
  else if(item.enhancement > 20) {
    item.enhancement = 20;
  }
  return { ...item };
}

function fail(item) {
  if(item.enhancement === NaN || item.enhancement === undefined){
    item.enhancement = 0;
  }

  if(item.enhancement < 15) {
    item.durability < 5
        ? item.durability = 0
        : item.durability -= 5
  }
  else{
    item.durability < 10
        ? item.durability = 0
        : item.durability -= 10
    item.enhancement > 16
    && item.enhancement--
  }

  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if(item.enhancement === NaN || item.enhancement === undefined){
    item.enhancement = 0;
  }

  if(item.enhancement > 0){
    item.name = `[+${item.enhancement}] ${item.name}`
  }

  return { ...item };
}