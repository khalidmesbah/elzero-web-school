#include <cmath>
#include <iostream>
#include <math.h>
using namespace std;

int centuryFromYear(int year) { return ceil(float(year) / 100); }
int main() {
  cout << centuryFromYear(1705) << endl;
  cout << centuryFromYear(1900) << endl;
  cout << centuryFromYear(1601) << endl;
  cout << centuryFromYear(2000) << endl;
  return 0;
}
