export function drawerMenu() {

    document.addEventListener('DOMContentLoaded', function () {

        const toggleButton = document.querySelector('.toggleButton');
        const drawerMenu = document.getElementById('drawerMenu');

        toggleButton.addEventListener('click', function (event) {

            event.stopPropagation();
            drawerMenu.classList.toggle('open');
            toggleButton.classList.toggle('close');
        });

        const anchorLinks = document.querySelectorAll('.nav-menu li a');

        // 取得したアンカーリンク全てにクリックイベントを設定。
        anchorLinks.forEach(function (anchorLink) {
            anchorLink.addEventListener('click', function () {
                drawerMenu.classList.remove('open');
                toggleButton.classList.remove('close');
            });
        });

        // ドキュメント（webサイト）内をクリックした際の処理
        document.addEventListener('click', function (event) {
            const targetElement = event.target;

            // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
            if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
                drawerMenu.classList.remove('open');
                toggleButton.classList.remove('close');
            }
        });
    });
}