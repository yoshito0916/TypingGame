'use strict';

{

  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }
  const words = [
    'red',
    'blue',
    'pink',
  ];

  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');
  
  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });
  
  document.addEventListener('keydown', e => { 
    if (e.key !== word[loc]) {  
      return;
    }

    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc); 
    if (loc === word.length) {  
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        return;
      }
      setWord();
    }
 });
}

// {

//   function setWord() {
//     word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
//     //単語が重複しない処理。splice()を使って、wordsのランダムな位置から１個ずつ削除しながらwordをセットする。
//     //splice()の返り値は結果が一つであっても配列になるので、配列から取り出すために添字の０を付けてあげる。
//     target.textContent = word;
//     loc = 0;
//   }
//   const words = [
//     'red',
//     'blue',
//     'pink',
//   ];
//   let word;
//   let loc = 0;
//   let startTime;
//   let isPlaying = false;
//   const target = document.getElementById('target');
  
//   document.addEventListener('click', () => {
//     if (isPlaying === true) {
//       return;
//     }
//     isPlaying = true;
//     startTime = Date.now();
//     setWord();
//   });
  
  

//   document.addEventListener('keydown', e => { 
//     if (e.key !== word[loc]) {  
//       return;
//     }
//     //打ったキーがwordのloc番目出なかった場合、つまり不正解だった場合はこれ以降の処理をする必要はないのでこの時点でreturnとする。その上で、この条件に該当しないということは、打ったキーが正解ということなので、下記の条件分岐を削る事ができる。
//     //メインとなる処理以外のケースを早めに除外してあげて、メインとなる処理をわかりやすくする事を「早期リターン」「アーリーリターン」と呼ぶ。
//     // if (e.key === word[loc]) {
//     loc++;

//     // 1: _ed
//     // 2: __d
//     // 3: ___
//     target.textContent = '_'.repeat(loc) + word.substring(loc);
 
// //javascriptにはrepeat()というメソッドがあるので、'_'.repeat(loc)としてあげると、アンダーバーをlocの個数分繋げた文字列を作ってくれる。また、文字列はwordのインデックスで考えると、locが1のときはwordの0番目、1番目以降。locが２のときは、wordの0番目、1番目、2番目以降を取り出してあげれば良い。そのためにsubstring()というメソッドがありword.substring(loc)とすると、loc番目以降の文字を取り出してくれる。 

//     if (loc === word.length) {  //最後まで打ち終わったら次の単語が表示されるようにする
//       if (words.length === 0) {//最後の単語が打ち終わった時の経過時間を表示
//         const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);//1000で割って秒単位とする。小数点以下２桁表示したいのでtoFixed()とする。
//         const result = document.getElementById('result');
//         result.textContent = `Finished! ${elapsedTime} seconds!`;//テンプレートリテラルに埋込
//         return;
//       }
//       setWord();
//     }
//  });
// }