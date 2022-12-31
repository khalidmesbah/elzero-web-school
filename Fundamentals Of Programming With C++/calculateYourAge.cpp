#include <iostream>
using namespace std;

int main()
{
    int age;
    cin >> age;

    int ageInDays = age * 365;
    int ageInHours = ageInDays * 24;
    int ageInMinutes = ageInHours * 60;
    int ageInSeconds = ageInMinutes * 60;

    cout << ageInDays << " Days " << endl;
    cout << ageInHours << " Hours " << endl;
    cout << ageInMinutes << " Minutes " << endl;
    cout << ageInSeconds << " Seconds " << endl;
}