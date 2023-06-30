#include <iostream>

using namespace std;

// sol1
// #define t1 a % 2
// #define t2 a * 8
// #define t3 a * 9
// #define ans t1 ? t2 : t3
// int simpleMultiplication(int a) { return ans; }

int simpleMultiplication(int a) { return a % 2 == 0 ? a * 8 : a * 9; }

int main() {
  simpleMultiplication(2);
  simpleMultiplication(5);
  simpleMultiplication(6);
  simpleMultiplication(9);
  return 0;
}
