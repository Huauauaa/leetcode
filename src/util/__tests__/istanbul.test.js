var foo = 1;
var bar = 2;
/* istanbul ignore else  */
if (foo > 0) {
  console.log("foo" + (foo + bar));
}
/* istanbul ignore if  */
if (1 > 2) {
  console.log("test");
}

switch (foo) {
  case 1:
    /* some code */
    break;
  /* istanbul ignore next */
  case 2: // really difficult to enter in a unit test for some reason
    someCode();
}
