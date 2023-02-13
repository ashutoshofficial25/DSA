function revStr(str) {
  if (str.length <= 0) {
    return str;
  }

  // console.log(str);

  return (
    revStr(str.substr(0, str.length - 1)) + console.log(str[str.length - 1])
  );
}

console.log(revStr("Some"));
