// ============= 変数のモジュール化 ============= //
// import { hello } from "./modules/var.js";
// console.log(hello);


// ============= ローディング画面 ============= //
// 第一引数：取得する要素(ローディング画面)、第二引数：付与するクラス名
// import { loadingScreen } from "./modules/loading.js";
// loadingScreen('.loading-screen' , 'active');


// ============= トップへ戻るボタン ============= //
// 第一引数：取得する要素(トップへ戻るボタン)、第二引数：付与するクラス名
import { topbutton } from "./modules/topbutton.js";
topbutton('topButton');


// ============= スクロール検知(getBoundingClientRect) ============= //
// 第一引数：監視する要素、第二引数：付与するクラス名
import { scrollObservation } from "./modules/scrollObservation.js";
scrollObservation('section' , 'fadeInUp-visible');
scrollObservation('.catchcopy' , 'fadeIn-visible');


// ============= ドロワー(ハンバーガーメニュー) ============= //
import { drawerMenu } from "./modules/drawer.js";
drawerMenu();


// ============= アコーディオンメニュー ============= //
// import { acc } from "./modules/acc.js";
// acc();

// ============= Swiper ============= //
import { swiper } from "./modules/swiper.js";
swiper();