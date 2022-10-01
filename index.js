let a = 0.5965;
// a = 1.0000
a = 0.0567
let result = '';
let count = 0;  // -1, 0
let ispush = false;

for(const c of a.toString()+"0000") {
  ++count;
  if (c > 0)
    ispush = true
  if (ispush) {
    result += c;
    if (count == 4)
      result += '.'
    if (count == 6)
      break
  }
}

console.log(result);
