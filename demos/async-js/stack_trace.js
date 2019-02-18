function h(z) {
  const error = new Error();
  console.log(error.stack);
}
function g(y) {
  h(y + 1);
}
function f(x) {
  g(x + 1);
}
f(3);
