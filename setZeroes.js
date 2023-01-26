var setZeroes = function(matrix) {
    let memo = {}
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0 && !memo[`${i},${j}`]){
                memo[`${i},${j}`] = true
                helper(i, j, matrix, memo)
            }
        }
    }
};

function helper(i, j, matrix, memo){
    let u = i - 1, d = i + 1, l = j - 1, r = j + 1
    //up
    while(u >= 0){
        if(matrix[u][j] !== 0) memo[`${u},${j}`] = true
        matrix[u--][j] = 0
    }
    
    //down
    while(d < matrix.length){
        if(matrix[d][j] !== 0) memo[`${d},${j}`] = true
        matrix[d++][j] = 0
    }
    
    //left
    while(l >= 0 ){
        if(matrix[i][l] !== 0) memo[`${i},${l}`] = true
        matrix[i][l--] = 0
    }
    
    //right
    while(r < matrix[0].length){
        if(matrix[i][r] !== 0) memo[`${i},${r}`] = true
        matrix[i][r++] = 0
    }
}


/*

Когда нашли элемент равный нулю мы будем двигаться от текущего элемента на лево, на парво, вниз, вверх. 
В функии helper мы рассматриваем только те элементы которые не равны нулю (строки 17, 23, 29, 35), те элементы которые изначально 
равны нулю мы пропускаем чтобы они не попали в memo на текущей итерации.  
Элементы которые изначально равны нулю попадут в memo на строке 6 в главной функции setZeroes

Initial matrix
[1,1,1]
[1,0,0]
[1,1,1]
 

iteration 1
i = 1 j = 1

matrix 
[ 1, 0, 1 ] 
[ 0, 0, 0 ]
[ 1, 0, 1 ] 


memo
{ 
  '1,1': true, 
  '0,1': true, 
  '2,1': true, 
  '1,0': true 
 }

iteration 2
i = 1 j = 2

matrix 
  [ 1, 0, 0 ] 
  [ 0, 0, 0 ] 
  [ 1, 0, 0 ]

memo
{
  '1,1': true,
  '0,1': true,
  '2,1': true,
  '1,0': true,
  '1,2': true,
  '0,2': true,
  '2,2': true
}
*/
