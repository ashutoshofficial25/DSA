function tryCatch() {
  try {
    throw new Error();
  } catch (e) {
    var e = 1,
      y = 2;
    console.log("first", e);
  } finally {
    console.log("second", e);
  }
  console.log("third", e);
  console.log("fourth", y);
}

tryCatch();
