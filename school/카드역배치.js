// a = list(range(21))
// for _ in range(10):
//     s, e = map(int, input().split())
//     for i in range((e-s+1)//2):
//         a[s+i], a[e-i] = a[e-i], a[s+i]

// a.pop(0)
// for x in a:
//     print(x, end=" ")

let cards = [];
for (let i = 1; i <= 20; i++) {
  cards.push(i);
}

let i = prompt("i번째 카드: ");
let j = prompt("j번째 카드: ");

if (i <= j && j <= 20) {
  let reversed = cards.slice(i - 1, j).reverse();
  cards.splice(i - 1, j - i + 1, ...reversed);

  console.log(cards.join(" "));
} else {
  console.log("잘못된 입력입니다.");
}
