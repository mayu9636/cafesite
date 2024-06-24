export function topbutton(a) {

    function siteScroll() {
        let scrollY = window.scrollY; // スクロールされた量を取得
        const topButton = document.getElementById(a);

        // スクロール量を取得した変数を使って条件分岐を作成。    
        if (window.scrollY > 300) {
            topButton.style.opacity = "1";
        }
        else if (window.scrollY < 300) {
            topButton.style.opacity = "0";
        }
    };
    //スクロールイベントを作成
    window.addEventListener('scroll', siteScroll);
}