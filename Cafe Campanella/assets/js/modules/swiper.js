export function swiper() {

    const swiper = new Swiper(".swiper", {

        pagination: {
            el: ".swiper-pagination",
        },

        // ループ
        loop: true,

        // 自動再生
        autoplay: {
            delay: 3000,
        },

        //自動再生のスピード
        speed: 1500,

        //一度に表示するスライドの数
        slidesPerView: 1.5,

        // アクティブなスライドを真ん中に持ってくる
        centeredSlides: true,

         // レスポンシブ設定
        breakpoints: {
            601: {
                slidesPerView: 3,
            }
        }
    });
}