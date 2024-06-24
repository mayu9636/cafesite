export function loadingScreen(a , b){

// ローディング画面の要素を取得
const loadingScreen = document.querySelector(a);

// ページの読み込みが完了したら実行される関数
// load = 読み込まなければならない要素(画像など)を全て読み込んだあとに実行する
window.addEventListener('load', function () {
    // 5秒後にloadingScreenが表示されていなければ、強制的に非表示にする
    // 回線が遅いとき、通信制限かかってる人などに一定時間経ったらとりあえず画面表示させてあげるための記述
    setTimeout(function () {
        // if文で『!』を先頭につけると、「〜ではなかったとき」という質問になる
        // else文を書く必要がなくなる。すっきりしたコードになる。
        // 以下は「activeクラスがついてなかったとき、activeクラスをつけてね」という意味
        if (!loadingScreen.classList.contains(b)) {
            loadingScreen.classList.add(b);
        }
    }, 5000);

    // ローディング画面を非表示にする
    loadingScreen.classList.add(b);
});
}

// 非同期処理 =　「プログラムは上からコードを読み込む」ルールを破る
// setTimeout関数 = 非同期処理
// 非同期処理だから、setTimeoutを読み込んだときに指定秒数待たずに他のコード読み込んでくれる
