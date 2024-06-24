// アコーディオンメニューにしたい要素を全て取得。今回はliの入れ子にh2が入っており、そのh2にクリックイベントを設定したいので、この形式にしている。
// こうすることで、アコーディオンメニューが開いた時に見出しをクリックした時と、開いたメニューをクリックした時で違う結果をもたらすことができる。
export function acc() {
    const accTriggers = document.querySelectorAll('.acc_trigger');

    // forEach関数を使って、上で取得した全ての要素に対して、クリックされるとtoggleAccというイベントが発生するようにする
    accTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', toggleAcc)
    });

    // アコーディオンメニュー開閉のための関数toggleAccを宣言。
    function toggleAcc() {

        // アコーディオンメニューにしたい要素（li）を全て取得。
        const items = document.querySelectorAll('.acc_count');

        // parentNodeを使って、クリックされた要素(thisとして、今回はacc_triggerのついたh2)の親要素（親ノード）を取得する。これでクリックされたliを取得できる。
        // 二行目のコメントアウトの解説の通り、見出しとメニューに個別の役割を与えているので、この記述でh2をクリックさせて、liを取得するということが可能になる。
        const thisItem = this.parentNode;
        // console.log(thisItem);

        //  アコーディオンメニューにしたい要素を取得した変数itemsに対してforEachでクリックされた要素とそうでない要素を判定する。
        items.forEach(function (item) {

            // クリックされたliだった場合、クラスis-openを付与する
            if (thisItem == item) {
                thisItem.classList.toggle('is-open');
                // return;
            } else {
                // それ以外のliに対してクラスis-openを外す。こうすることでアコーディオンメニューが複数開かないようにしている。
                item.classList.remove('is-open');
            }
        });
    }

}