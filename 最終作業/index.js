1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
var array = [
  {
    name: 'Casper',
    like: '鍋燒意麵',
    age: 18
  },
  {
    name: 'Wang',
    like: '炒麵',
    age: 24
  },
  {
    name: 'Bobo',
    like: '蘿蔔泥',
    age: 1
  },
  {
    name: '滷蛋',
    like: '蘿蔔泥',
    age: 3
  }
];

var ans = array.every(function(item, index, array){
  console.log(item, index, array); // 物件, 索引, 全部陣列
  return item.age > 10 // 當全部 age 大於 10 才能回傳 true
});
console.log(ans); // false: 只要有部分不符合，則為 false

var ans2 = array.every(function(item, index, array){
  return item.age < 25
});
console.log(ans2); 