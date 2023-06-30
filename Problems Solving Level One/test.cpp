#include <iostream>

using namespace std;

std::string boolean_to_string(bool b) { return b ? "true" : "false"; }

int main() {
  cout << boolean_to_string(0);
  return 0;
}
