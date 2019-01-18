
function trump(){

    // トランプカードの画像を配列に格納
    let arr=[];
    for(let j=1; j<=4; j++){
        for(let i=1; i<=13; i++){
            arr.push("<div class='card "+i+"'  id="+j+"_"+i+"><img src='img/"+j+"_"+i+".png'></div>");
        }
    }
 
    // アレイの中身をシャッフル
        shuffle(arr);

    // divタグ生成
    for(let i=0; i<=arr.length; i++){
        $("#field").append(arr[i]);
    }
    // カードを裏で表示する
    $(".card").children('img').attr('src','img/card_back.png');


    let answer=[];   // カードの正解判定用の配列格納用
    let cardjudge=[];// はずれ判定用の配列格納用
    let count=0;     // カードをめくった回数

        // カードのクリックイベント
        $(".card").on('click',function cardopen(){
            count++;

            // カードをめくった回数が2回までなら
            if(count<=2){
            let id2 = $(this).attr('id');        // divタグのidを*変数*へ格納
            cardjudge.push($(this).attr('id'));  // divタグのidを*配列*へ格納（誤ったときの裏返し用）

            $(this).children('img').attr('src','img/'+id2+'.png');// カードを表向きにする
            answer.push($(this).attr('class')); // カード番号での正誤判定用に配列に格納

            //  あたり判定
                if (answer[0]==answer[1]){
                    setTimeout(function(){
                        alert("あたり");
                    }, 1000);

                    // 変数と配列を初期値へ
                    cardjudge=[];
                    answer=[];
                    count=0;
                }

            //  はずれ判定
                if(count==2&&answer[0]!=answer[1]){
                    setTimeout(function(){
                    alert("はずれ");
                    // 誤ったカードを裏返しにする
                    $("#"+cardjudge[0]).children('img').attr('src','img/card_back.png');
                    $("#"+cardjudge[1]).children('img').attr('src','img/card_back.png');
                    cardjudge=[];// 変数と配列を初期値へ
                    }, 1000);

                    // 変数と配列を初期値へ
                    answer=[];
                    count=0;   
                }

            }

        });

}


trump();



 // シャッフル用関数
function shuffle(arr) {
    var n = arr.length;
    var temp, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        temp = arr[n];
        arr[n] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
