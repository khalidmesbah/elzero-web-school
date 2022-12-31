#include <iostream>
using namespace std;

int main()
{
    int a, b, c, d = 4, e = 6, f, g;
    
    cout << a << endl; // ???
    cout << b << endl; // ???
    cout << c << endl; // ???

    a = 1, b = 2, c = 3;
    e = 5;
    g = f = 0;
    cout << a + b + c + d + e + g + f;
}