#include<bits/stdc++.h>
using namespace std;

vector<int> subarraySum(vector<int>arr, int n, long long s)
    {
        long long start = 0;
        long long currnet_sum =0;
        vector<int> res;

        if(s ==0){
          res.push_back(-1);
          return res;
        }

        for (int i = 0; i < n; i++) {
            currnet_sum += (arr[i]);

            while (currnet_sum > s && start <= i) {
            currnet_sum = currnet_sum -(arr[start]);
             start++;
            }
              if (currnet_sum == s) {
                res.push_back(start+1);
                res.push_back(i+1);
             return res;
            }
  }

  return res;

    }

int main(){
  vector<int> val = { 
    1,2,3,4
  };
  vector<int> result;
  
  result = subarraySum(val, 4,0);
  if(result.empty()){
    cout<<-1<<endl;
    return -1;
  }
  for(int i=0; i < result.size(); i++){
    cout<<result[i]<<endl;
  }

return 0;
}