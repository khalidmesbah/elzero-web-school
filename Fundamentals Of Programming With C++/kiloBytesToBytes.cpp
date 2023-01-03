#include <iostream>
using namespace std;

int main()
{
    int numOfKiloBytes;
    cout << "Type the number of kilobytes" << endl;
    cin >> numOfKiloBytes;

    cout << "The number of Bytes is " << numOfKiloBytes * 1024 << endl;
    cout << "The number of Bits is " << numOfKiloBytes * 1024 * 8 << endl;

    return 0;
}