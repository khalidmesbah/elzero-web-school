#include <iostream>

using namespace std;

bool isDivisible(int n, int x, int y) {
  return n % x == 0 && n % y == 0 ? true : false;
}

int main() {
  cout << isDivisible(12, 3, 4);
  return 0;
}
