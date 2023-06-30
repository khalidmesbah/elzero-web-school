#include <iostream>
#include <string>

std::string even_or_odd(int number) { return number % 2 == 0 ? "Even" : "Odd"; }

int main() {
  std::cout << even_or_odd(22) << std::endl;
  std::cout << even_or_odd(21) << std::endl;
  return 0;
}
