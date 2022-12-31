#include <iostream>
#include <iomanip>
using namespace std;

float improve(float improvement, int days = 365)
{
    return days != 0
        ? (improvement * improve(improvement, days - 1))
        : 1;
}

int main()
{
    cout << improve(0.99) << endl;
    // -0.03% deterioration in a year => loser
    cout << improve(1.00) << endl;
    // +0.00% improvement in a year => loser
    cout << improve(1.01) << endl;
    // +37.78% improvement in a year => winner
}