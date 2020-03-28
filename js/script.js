// jQuery
$(function(){
  // ページを開いた時に画像を表示
  let height = $(window).height();
  setTimeout(function() {
    $(".top-wrapper").css("height",90+"vh");
    $(".footer").css("height",10+"vh");
    $(".welcome").css("padding-top",height/3.5);
    $('.top-wrapper').animate({"width":"toggle"},500);
    $(".hello").fadeIn(3000);
  });
  // ヘッダーを表示させるタイミング
  setTimeout(function() {
    $(".header").slideDown(1000);
  },3000);
  // ヘッダー以外の表示タイミング
  setTimeout(function() {
    $(".profile,.works,.service,.contact").fadeIn(1000);
  },4000);
  // ヘッダー内jquery処理
  $(".header-list li").hover(function() {
    let text = $(this).text();
    $(".port-folio").text("show");
    $(".name").text(text);
  },function(){
    $(".port-folio").text("WELCOME TO MY PORTFOLIO!")
    $(".name").text("Sougo Ito");
  })
  // ナビバー表示タイミング

  // サービスアイコンのhover時
  $(".service-icon,.return-btn").hover(function() {
    $(this).css("color","white").css("background-color","black");
  },function() {
    $(this).css("color","black").css("background-color","white");
  })

  // トップページ戻るボタン,各セクション表示設定
  // $(".nav-list").hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > height-100){
      $(".return-btn").fadeIn();
    } else {
      $(".return-btn").fadeOut();
    }
    // if($(this).scrollTop() > height-100){
    //   $(".nav-list").fadeIn();
    // } else {
    //   $(".nav-list").hide();
    // }

    // プロフィールテキスト表示
    let profile= $("#profile").offset().top;
    if($(this).scrollTop() >= profile/1.5){
      $(".profile-text p").slideDown();
    }
    // スキル一覧表示
    let skill = $(".skill").offset().top;
    if($(this).scrollTop()>= skill){
      $(".skill-list li").slideDown();
    }

    //works一覧表示
    let works = $(".works").offset().top;
    if($(this).scrollTop()>= works){
      $(".work-detail").css({bottom:"-500px",opacity:"0"})
      .animate({bottom:"500px",opacity:"1"},2000);
    }

    // サービステキストの表示
    let service =$(".service").offset().bottom;
    if($(this).scrollTop() >= service/1.5){
      $(".service-text p").fadeIn();
    }
  })
  $(".return-btn,.return-top").click(function(){
    $("body,html").animate({"scrollTop":0},500);
  });
  // ナビゲーション実行
  $(".header-list a,.nav-list a").click(function(){
    let id =$(this).attr("href");
    let position = $(id).offset().top;
    $("html,body").animate({"scrollTop":position},500)
  })


  if (window.matchMedia( "(min-width: 481px) and (min-width: 768px)" ).matches) {
    /* ウィンドウサイズが 480px以上768px以下の場合のコードをここに */
    setTimeout(function() {
      $(".top-wrapper").css("height",90+"vh");
    });

    }
  
});


