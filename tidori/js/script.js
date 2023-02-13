'use strict';

/* ローディング設定 */
window.onload = function() {
  const loader = document.getElementById('load');
  loader.classList.add('loaded');
}

/* ナビ設定 */
function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  }
  toggleNav();

/* ナビ設定ここまで */


/* index.htmlのトップ用スライドショー ここから */

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 1280){
      var responsiveImage = [//PC用の画像
        { src: './images/top-este2.jpg'},
        { src: './images/top2.jpg'},
        { src: './images/cosme__cosme_counseling.jpg'}
      ];
    } else if (windowwidth > 768){
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: './images/top-este2.jpg' },
        { src: './images/top2.jpg' },
        { src: './images/cosme__cosme_counseling.jpg' }
      ];
    } else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: './images/top__este__tab.jpg' },
        { src: './images/top2.png' },
        { src: './images/cosme__cosme_counseling.jpg' }
      ];
    }

//Vegas全体の設定

$('#slider').vegas({
    overlay: false,//画像の上に網線やドットのオーバーレイパターン画像を指定。
    transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 5000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 9500,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像設定を読む
  });

/* index.htmlのトップ用スライドショー ここまで */


$(function() {
  $('.fixed_item1').mouseover(function(e) {
	$('.fixed_text1').removeClass("fixed_hidden1");
    })
  $('.fixed_item1').mouseout(function(e) {
  $('.fixed_text1').addClass("fixed_hidden1");
    })
});

$(function() {
  $('.fixed_item2').mouseover(function(e) {
	$('.fixed_text2').removeClass("fixed_hidden2");
    })
  $('.fixed_item2').mouseout(function(e) {
  $('.fixed_text2').addClass("fixed_hidden2");
    })
});

$(function() {
  $('.fixed_item3').mouseover(function(e) {
	$('.fixed_text3').removeClass("fixed_hidden3");
    })
  $('.fixed_item3').mouseout(function(e) {
  $('.fixed_text3').addClass("fixed_hidden3");
    })
});

// $(function() {
//   $('.fixed_item4').mouseover(function(e) {
// 	$('.fixed_text4').removeClass("fixed_hidden4");
//     })
//   $('.fixed_item4').mouseout(function(e) {
//   $('.fixed_text4').addClass("fixed_hidden4");
//     })
// });




// 入店からの流れのスライドショー ここから

$('.slider').slick({
  autoplay: false,//自動的に動き出すか。初期値はfalse。
  infinite: false,//スライドをループさせるかどうか。初期値はtrue。
  speed: 500,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});

// 入店からの流れのスライドショー ここまで


//ここから施術の流れのスライドショー
$('.service__slider').slick({
  autoplay: false,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  responsive: [
    {
    breakpoint: 1280,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
    }
  },
  {
    breakpoint: 769,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1,//スライドを画面に1枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
  }
]
});
//ここまで施術の流れのスライドショー



//ここから化粧品ページのスライドショー

//ここまで化粧品ページのスライドショー