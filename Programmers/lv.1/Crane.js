function solution(board, moves) {
  const basket = []; // 바구니 배열
  let result = 0; // 결과값

  moves.forEach((order) => {
    const doll = pickup(board, order - 1);
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        // doll 2개가 겹친게 맞다면 basket에서 터뜨리고 result에 값 추가
        basket.pop();
        result += 2;
      } else {
        basket.push(doll); // 아니라면 바구니에 인형 추가
      }
    }
  });
  return result;
}

// basket에 넣는 함수
function pickup(board, order) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][order] !== 0) {
      const doll = board[i][order];
      board[i][order] = 0; // 빈 index면 0으로 바꾸기
      return doll;
    }
  }
}
