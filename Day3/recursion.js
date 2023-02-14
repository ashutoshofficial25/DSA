//fibonacci=1,1,2,3,5,8

//f(n) = f(n-1) + f(n-2);

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

//factorial

function factorial(n) {
  if (n <= 2) {
    return n;
  }

  n * factorial(n - 1);
}

//tail recursion is the recursion whewe recursive cakk us the last statenement in the function

//head recursion is the recursion whwew recursive call is not te last statenement in the function
