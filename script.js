var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './img/top1.webp'},
				{ src: './img/top2.webp'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
                { src: './img/top1.webp'},
                { src: './img/top2.webp'}
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 1300,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 12000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
		//timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
	});


//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
	var access = $.cookie('access')
	if(!access){
		flag = false;
		$.cookie('access', false);
	}else{
		flag = false	
	}
	//モーダル表示
	$(".modal-open").modaal({
		overlay_close:true,//モーダル背景クリック時に閉じるか
		before_open:function(){// モーダルが開く前に行う動作
			$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
		},
		after_close:function(){// モーダルが閉じた後に行う動作
			$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
		}
		});