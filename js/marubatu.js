var count = 0;
var btn = 0;

var firstMan = {
  name: '先攻',
  mark: '〇',
  obtained: [],
  color: 'red'
}

var secondMan = {
  name: '後攻',
  mark: '×',
  obtained: [],
  color: 'blue'
}

var turnMan = firstMan;

//ボタンを押したときの処理
$(function() {
  $('.btn').click(function() {
    //○×の記入
    turnMan.obtained.push(parseInt(this.name));
    var cover = document.createElement('img');
    cover.setAttribute('class', 'cover');
    cover.setAttribute('src', 'img/' + turnMan.color + '.jpg')
    this.parentElement.insertBefore(cover, null);

    //進行処理
    count += 1;
    if(judge(count, turnMan.obtained)) {
      text.innerText = 'Winner ' + turnMan.name + ' !';
      $('.btn').hide();
      reset.style.display = 'block';
    }else{
      change();
    }
  })

  $('#reset').click(function() {
    location.reload();
  })
})

// 関数・手順交代
function change() {
  // ターンプレイヤーの交代
  if (count % 2 == 0) {
    turnMan = firstMan;
  }else{
    turnMan = secondMan;
  };

  // 継続or終了
  if (count < 9) {
    text.innerText = turnMan.name + '(' + turnMan.mark + ')の手順です';
  }else{
    text.innerText = 'Push Reset !'
    reset.style.display = 'block';
  }
}

// 勝敗の判定
function judge(count, num) {
  var victory = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  if(count >= 5) {
    for(var i=0; i<victory.length; i++){
    if (num.indexOf(victory[i][0]) >= 0
    && num.indexOf(victory[i][1]) >= 0
    && num.indexOf(victory[i][2]) >= 0) {
      return true;
    }
  }
  }
  return false;
}
