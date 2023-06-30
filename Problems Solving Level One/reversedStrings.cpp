#include <iostream>
#include <string>

using namespace std;

string reverseString(string str) {
  string revStr = "";
  for (int i = str.size() - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

int main() {
  cout << reverseString("srawedoc");
  return 0;
}
