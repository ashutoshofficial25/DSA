#include<iostream>
using namespace std;

   long long int floorSqrt(long long int x) 
    {
        int start = 0;
        long long end = x;
        long long mid;
        int n=5;
        int num = 2;
        cout<<(start + ((end-start)/2))<<endl;
        while(start <= end){
            mid =start + ((end-start)/2);
            cout<<mid<<endl;
            if(mid*mid == x){
                return mid;
            }
            if(mid*mid > x){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
    }

int main(){
  long long ans = floorSqrt(5);
  cout<<ans<<endl;
  return 0;
}