function logger(a, b, ...args) {
  console.log(a, b, args);
  console.log(arguments);
}

function log(...args) {
  console.log(args);
}

logger(5, 7);
logger(1, 2, 3, 4);

log(5, 7);
log(1, 2, 3, 4);
