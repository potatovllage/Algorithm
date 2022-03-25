def solution(arr1, arr2):
    answer = arr1
    row = len(arr1)
    col = len(arr1[0])
    
    for i in range(row):
        for j in range(col):
            answer[i][j] = arr1[i][j] + arr2[i][j]
            
    return answer