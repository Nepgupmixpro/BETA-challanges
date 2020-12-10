let v1 = process.argv[2]
let v = v1.split(' ')
let prev = v[0]
for (i = 0; i != v.length; i++) {
  if (v[i].length < prev.length) {
    prev = v[i]
  }
}
console.log(prev)