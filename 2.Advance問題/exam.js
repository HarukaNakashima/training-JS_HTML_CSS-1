
/************************************************************

Q1：任意の個数の数値型の引数をとり、その数の合計を数値型で返す関数getSumを定義しましょう。

************************************************************/
// ここに処理を記述
function getSum(...theArgs) {
    console.log("theArgs :", theArgs);
    const initialValue = 0;
    let total = theArgs.reduce(
        (previousvalue, currentValue) => 
        previousvalue + currentValue, initialValue
    );
    console.log("total : ", total);
    return total;
}

test('Q1', getSum(1), 1);
test('Q1', getSum(1, 3), 4);
test('Q1', getSum(1, 3, 5, 7, 9, 11), 36);
test('Q1', getSum(9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20), 174);





/************************************************************

Q2：入力された文字列を逆順にする関数を作成しましょう

************************************************************/

function getReverse(str) {
    // ここに処理を記述
    const strArr1 = [...str];
    // console.log("strArr1 :", strArr1);
    const strArr2 = strArr1.reverse();
    // console.log("strArr2 : ", strArr2);
    const newStr = strArr2.join('');
    // console.log("newStr : ", newStr);
    return newStr;
}

test('Q2', getReverse("ーシクタ"), "タクシー");
test('Q2', getReverse("トマト"), "トマト");
test('Q2', getReverse("ラベンダー"), "ーダンベラ");
test('Q2', getReverse("UPC"), "CPU");





/************************************************************

Q3：
Array.filter, Array.map を利用して配列の偶数要素のみを抽出した配列に対して
各要素を二乗した配列を返す関数を作成しましょう

************************************************************/

function squareForEvenNumber(arr) {
    // ここに処理を記述
    // 引数の配列の偶数要素のみを抽出
    // 抽出した新しい配列の各要素を二乗する
   const squareArr = arr.filter(elem => elem % 2 === 0).map(elem => elem**2);
   return squareArr;
}

test('Q3', squareForEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]), [4, 16, 36, 64]);
test('Q3', squareForEvenNumber([1, 3, 5]), []);
test('Q3', squareForEvenNumber([2, 4, 6]), [4, 16, 36]);





/************************************************************

Q4：
引数に配列を取り、小さい順から並び替えた配列を返す関数 bubbleSort を定義しましょう。
バブルソートで実装してください。

************************************************************/

// ここに処理を記述
// バブルソート：要素の端（先頭または末尾）から比較し、比較結果により要素を1つずつ入れ替えて、再び比較を行っていく。
function bubbleSort (arr) {
    // 確定したものを除外するために比較する要素の終わりの数を、outerという名前の変数にして1つずつ増やす。
    for(let outer = 0; outer < arr.length -1; outer++){
        // console.log(outer + 1+ "周目");
        // 配列の一番最後から数を減らすことで最初の要素に向かって比較をする。
        for(let i = arr.length -1; i > outer; i--) {
            if(arr[i] < arr[i-1]) {
                // 小さい数をtmpに一時保存し、場所を入れ替える
                let tmp = arr[i];
                arr[i] = arr[i-1];
                // console.log("arr[i]: ",arr[i]);
                arr[i-1] = tmp;
                // console.log("arr[i-1]: ",arr[i-1]);

            }
        }
    }
    // console.log("arr : ", arr);
    return arr;
}
test('Q4', bubbleSort([6, 9, 2, 5, 4, 1, 0, 3, 7, 8]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
test('Q4', bubbleSort([3, 1, 0, 2]), [0, 1, 2, 3]);
test('Q4', bubbleSort([7, 39, 22, 13]), [7, 13, 22, 39]);





/************************************************************

Q5：
第一引数にリストのデータ、第二引数に追加するデータの前の値、
第三引数に追加したいデータをとる関数`insertLinkedList`を作成してください。
第二引数に渡されたデータの次に、第三引数に渡されたデータを連結するようにして、
最終的にリスト全体を返してください。

************************************************************/

const insertLinkedList = (list, data, addData) => {
    console.log("test1");
    // ここに処理を記述
    // 現在無限ループ中
    // dataを検索し、その後ろにaddDataを追加
    // 先頭の次に追加する場合
    if(list.head.value === data) {
        console.log("test2");
        let tmp = list.head.next;
       list.head.next.value = addData;
       console.log(list.head.next.value);
       list.next.next = tmp;
       return list;
    } 
    while (list.head.next !== null) {
           console.log("test3");
           if(list.head.next.value === data) {
              console.log("test4");
              let tmp = list.head.next.next;
              list.head.next.next.value = addData;
              console.log(list.head.next.next.value);//6
              list.head.next.next.next = tmp;
              list.head.next = list.head.next.next;
           }
    }
    return list;
};
// const removeLinkedList = (list, data) => {
//     // console.log("test1");
//     // console.log("list.head :", list.head);

//     //もし、head.valueに検索したい値があったらそのnodeを削除して連結リストを返す
//     if ( list.head.value === data){
//         // console.log("test2");
//         return list.head.next;
//     }
//     while (list.head.next !== null) {
//         // console.log("test3");
//         if(list.head.next.value === data) {
//             // console.log("test4");
//            list.head.next = list.head.next.next;
//            return list;
//         }
//         // console.log("test5");
//         list.head = list.head.next;
//     }
//     // console.log("test6");
//     return list;
// };

const linkedList = {
    head: {
        value: 0,
        next: {
            value: 3,
            next: {
                value: 2,
                next: null
            }
        }
    }
};

const resultLinkedList = {
    head: {
        value: 0,
        next: {
            value: 3,
            next: {
                value: 6,
                next: {
                    value: 2,
                    next: null
                }
            }
        }
    }
};

const linkedList2 = {
    head: {
        value: 72,
        next: {
            value: 20,
            next: {
                value: 60,
                next: {
                    value: 8,
                    next: null
                }
            }
        }
    }
};
  
const resultLinkedList2 = {
    head: {
        value: 72,
        next: {
            value: 20,
            next: {
                value: 60,
                next: {
                    value: 8,
                    next: {
                        value: 15,
                        next: null
                    }
                }
            }
        }
    }
};

test('Q5', insertLinkedList(linkedList, 3, 6), resultLinkedList);
test('Q5', insertLinkedList(linkedList2, 8, 15), resultLinkedList2);
