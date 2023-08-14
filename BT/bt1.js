// BAI 1

/**
 * Fix bug
 */
function run() {
  // const b = "Bar";

  // console.log(a, b);
  // b = "Bar1";
  // {
  //   let c = "Fooz";
  //   let d = "Bazz";
  //   let a = "Foo";

  //   console.log(c, d);
  // }

  // console.log(c);
  // console.log(d);

  /*** FIX */
  const b = "Bar";
  let a = "Foo";
  console.log(a, b);
  let c = "Fooz";
  let d = "Bazz";
  {
    console.log(c, d);
  }

  console.log(c);
  console.log(d);
}

// BAI 2

export { run };
