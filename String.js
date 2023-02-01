function reverse(str){
  let res=''
  for(let i=0;i<str.length;i++){
      const char=str[i]
      res=char+res
  }
  return res
}

console.log(reverse('hai'));




function palindrome(str){
  let start=0
  let end=str.length-1
  let result=true
  while(end>start){
      if(str[start]!=str[end]){
          result=false
      }
      start++
      end--
  }
  return result
}

console.log(palindrome('malayalam'));
console.log(palindrome('hello'))




function replace(s){
  let rep = ""
  for (let i=0;i<s.length;i++){
      let char = s[i]
      if(char=='o'){
          char = 'y'
      }
      rep += char
  }
  return rep
}
console.log(replace('hello world'))



function encode(s){
  let dec = ' '
  for(let i=0;i<s.length;i++){
      let char = s.codePointAt(i)
      dec += char + ' '
  }
  return dec
}
console.log(encode('helloworld'))








const str = 'hellodjfseldd'
const repeating = [];
const arr = str.split('').sort()
for(let i = 0; i < arr.length; i++) {
  if(arr[i] === arr[i + 1]){
      if(!repeating.includes(arr[i])){
          repeating.push(arr[i]);
      }
  }
}

console.log(repeating);



function sort(str) {
  let temp = 0;
  for(let i=0;i<str.length;i++){
      for(let j=i+1 ;j<str.length;j++){
          if(str[i] > str [j]){
              temp = str[i];
              str[i] = str[j];
              str[j] = temp;
          }
      }
  }
  return str;
}

console.log(sort('asd'))
