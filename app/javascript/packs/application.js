// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "jquery"
import "popper.js"
import "bootstrap"

import anime from 'animejs';
import 'jquery.inview.js';

import '@fortawesome/fontawesome-free/js/all';
import "../stylesheets/application" 

Rails.start()
Turbolinks.start()
ActiveStorage.start()

global.$ = jQuery;
window.$ = jQuery;

// jQuery呼び出し
window.$ = window.jQuery = require('jquery');
require('packs/raty')

// Raty.js初期化
$(function() {
  $('#star').raty({
    starType: 'i',
    score: function() {
      return $(this).attr('data-score');
    },
    click: function(score, evt) {
      $('#rating').val(score);
    }
  });
});

//= require jquery
//= require jquery_ujs