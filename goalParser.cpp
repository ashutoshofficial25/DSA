#include<bits/stdc++.h>
using namespace std;
int main(){

      string command = "G()()()()(al)";

         string word = "";
        for(int i= 0; i< command.size(); ++i){
            if(command.at(i) == 'G'){
                word.push_back('G');
            }
            if(command[i] == '(' && command[i+1] == ')'){
                word.push_back('o');
            }
            if(command[i] == '(' && command[i+1] != ')'){
              continue;
            }
            if(command[i] == 'a'){
              word.push_back('a');
            }
            if(command[i] == 'l'){
              word.push_back('l');
            }
        }

        cout<<word<<endl;

}