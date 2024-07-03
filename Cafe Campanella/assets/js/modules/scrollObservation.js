export function scrollObservation(a, b) {
    const allTarget = document.querySelectorAll(a);

    function observation() {
        allTarget.forEach(function (target) {
            // 要素の位置情報を取得
            const targetRect = target.getBoundingClientRect();

            // 画面内に入っているかどうかを判定
            if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
                target.classList.add(b);
            } 

            // 1回だけアニメーションしたいのでコメントアウト。
            // else {
            //     target.classList.remove(b);
            // }
        });
    }

    window.addEventListener("scroll", observation);

}
