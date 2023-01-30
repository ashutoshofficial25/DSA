#include<iostream>
using namespace std;

int main(){

    string S;
    cin>>S;
    int sum = 0;
    int i=0;
    while(i!= S.size()){
        sum += (int) S[i];
        i++;
    }

    cout<<sum<<endl;
}