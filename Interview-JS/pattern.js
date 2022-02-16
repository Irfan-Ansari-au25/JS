/*
1) Write a program 
	input;  mycustome_varibaleName
	output: mycustomeVaribaleName
2) Write the logic to print pattern
        	1
        	1 2
        	1 2 3
        	1 2 3 4
        	1 2 3 4 5
 
        */
//   Q.2.

let input = 5;

for (let i = 1; i < input; i++) {
  for (let j = 0; j < i; j++) {
    console.log(j + 1);
    //need to change line here
  }
}

////////

const input = "mycustome_varibaleName";
const arrayList = input.split("-");
string = arrayList[0];
for (let i = 1; i < arrayList.length; i++) {
  const newWord = arryList[i].toUpperCase(0);
  string += newWord;
}
console.log(string);
