function getCircleArea1(radius) {
  return Math.PI * radius ** 2;
}

const getCircleArea2 = function (radius) {
  return Math.PI * radius ** 2;
};

const getCircleArea3 = radius => Math.PI * radius ** 2;

const area1 = getCircleArea1(10);
const area2 = getCircleArea2(10);
const area3 = getCircleArea3(10);

console.log(area1, area2, area3);
