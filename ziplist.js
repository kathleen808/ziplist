
function ziplist(list1, list2) {
  const final = [];
  for (let i = 0; i < list1.length; i++) {
    final.push(list1[i]);
    if (list2[i] != null) {
      final.push(list2[i]);
    }
  }
  return final;
}

function ziplistTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const a1 = ['a', 'b', 'c'];
const a2 = ['1', '2', '3'];

console.log(ziplist(a1, a2));
console.log(ziplistTheSimpleWay(a1, a2));
