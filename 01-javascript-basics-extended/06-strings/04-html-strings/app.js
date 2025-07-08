const loadingHTML = '<div class="spinner">Loading...</div>';
console.log(loadingHTML);

const n1 = 7;
const n2 = 2;

const pageHTML = `
  <h1>Title</h1>
  <ul>
    <li>${n1} + ${n2} = ${n1 + n2}</li>
    <li>${n1} * ${n2} = ${n1 * n2}</li>
    <li>${n1} / ${n2} = ${n1 / n2}</li>
  </ul>
`;
console.log(pageHTML);
