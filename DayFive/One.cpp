#include<iostream>
using namespace std;

int main(){
    string A,B;

    cin>>A>>B;

    cout<<A.size()<<" "<<B.size()<<endl;

    cout<<A+B<<endl;
    char a0 = A[0];
    A[0] = B[0];
    B[0] = a0;

    cout<<A<<" "<<B<<endl;

}