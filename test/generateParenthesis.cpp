#include<iostream>
#include<vector>
using namespace std;
void generate(vector<char> arg, int open, int close, int n){
     if(n == close){
           if(!arg.empty()){
               for(int i = 0; i<arg.size(); i++){
                cout<<arg[i];
               }
               cout<<endl;
               return;
             }   
     }else{
      if(open < n){
      arg.push_back('(');
      generate(arg, open+1, close, n);
     } 
     if(open >close){
      arg.push_back(')');
      generate(arg, open, close+1, n);
      }      
     }
}
int main(){
  int n; 
  cout<<"Enter value of n";
  cin>>n;
  vector<char> v(n*2);
  generate(v,0,0,n);
 
  return 0;
}