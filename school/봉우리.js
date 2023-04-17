// dx=[-1, 0, 1, 0]
// dy=[0, 1, 0, -1]
// n = int(input())
// a = [list(map(int, input().split()))for _ in range(n)]
// a.insert(0, [0]*n)
// a.append([0]*n)
// for x in a:
// 		x.insert(0, 0)
// 		x.append(0)
// cnt=0
// for i in range(1, n+1):
// 		for j in range(1, n+1):
// 				if all(a[i][j]>a[i+dx[k]][j+dy[k]] for k in range(4)):
// 						cnt+=1
// print(cnt)

let answer = 0;
let n = arr.length;
let x = [0, 0, -1, 1];
let y = [-1, 1, 0, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let flag = 1;
    for (let k = 0; k < x.length; k++) {
      let nx = i + x[k];
      let ny = j + y[k];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
        flag = 0;
        break;
      }
    }
    if (flag) answer++;
  }
}

return answer;
