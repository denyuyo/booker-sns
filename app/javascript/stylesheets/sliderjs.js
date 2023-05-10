$('.slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5,//スライドを画面に1.5枚見せる
      }
    }
  ]
  });
  
  $('#leaf').on('inview', function(event, isInView) {
  if (isInView) {
   $('#leaf').css('opacity',1)
    leafview();
  } else {
    $('#leaf').css('opacity',0)
  }
});

function leafview() {
  /* 
   * Lazy Line Painter - Path Object 
   * Generated using 'SVG to Lazy Line Converter'
   * 
   * http://lazylinepainter.info 
   * Copyright 2013, Cam O'Connell  
   *  
   */
  var pathObj = {
    "leaf": {
      "strokepath": [{
        "path": "M265.765,277.662v-34.071v-26.997V107.745c0-3.141-1.287-5.98-3.343-8.047   c-2.058-2.056-4.895-3.334-8.047-3.334c-6.283,0-11.381,5.097-11.381,11.381v94.297l-45.502-29.034   c-1.905-1.216-4.032-1.804-6.141-1.804c-3.749,0-7.407,1.865-9.576,5.27c-3.385,5.29-1.845,12.344,3.466,15.729l57.753,36.867   v67.675v29.733v34.983c0,3.141,1.276,5.99,3.334,8.046c2.067,2.057,4.904,3.345,8.046,3.345c6.293,0,11.39-5.097,11.39-11.391   v-54.065l88.258-74.019c2.696-2.25,4.084-5.482,4.084-8.736c0-2.584-0.892-5.178-2.666-7.306   c-4.064-4.824-11.238-5.452-16.052-1.408L265.765,277.662z",
        "duration": 1300
      }, {
        "path": "M464.959,249.408c-7.073-32.054-20.531-64.3-39.998-95.817C388.427,94.439,332.124,41.326,270.478,7.864   L255.997,0l-14.482,7.864C179.881,41.326,123.576,94.439,87.043,153.591c-19.468,31.517-32.926,63.763-39.999,95.817   c-7.824,35.418-7.6,69.651,0.648,101.725l0.172,0.689l0.213,0.678c10.528,34.223,34.526,60.754,69.398,76.736   c32.104,14.714,65.608,16.904,82.714,16.904c1.327,0,2.614-0.01,3.871-0.031v35.53V512h30.362h43.161h30.362v-30.361v-35.53   c1.257,0.021,2.544,0.031,3.861,0.031c17.116,0,50.609-2.19,82.723-16.904c34.872-15.972,58.869-42.512,69.398-76.736l0.204-0.678   l0.182-0.689C472.561,319.059,472.774,284.826,464.959,249.408z M434.903,343.574c-18.008,58.544-82.35,72.204-123.098,72.204   c-18.11,0-31.567-2.696-34.223-5.35v71.212h-43.161v-71.212c-2.655,2.654-16.113,5.35-34.233,5.35   c-40.749,0-105.08-13.66-123.098-72.204c-29.277-113.856,65.06-247.22,178.906-309.027   C369.852,96.354,464.179,229.718,434.903,343.574z",
        "duration": 1800
      }],
      "dimensions": {
        "width": 512,
        "height": 512
      }
    }
  };
  /* 
   Setup and Paint your lazyline! 
   */

  $('#leaf').lazylinepainter({
    "svgData": pathObj,
    "strokeWidth": 3,
    "strokeColor": "#4CAF50"
  }).lazylinepainter('paint');

}

$(function() {
  $('.box1').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('fadeInDown');
    } else {
      $(this).removeClass('fadeInDown');
      $(this).css('opacity',0);
    }
  });

  $('.box2').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('bounceIn');
    } else {
      $(this).removeClass('bounceIn');
    }
  });
  
  $('.box3').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('lightSpeedIn');
    } else {
      $(this).removeClass('lightSpeedIn');
    }
  });
  
});


$('.inview').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).css('background-color', 'yellow');
  } else {
    $(this).css('background-color', 'white');
  }
});





