// JavaScript Document

import $ from "jquery";
import debounce from 'lodash.debounce';
import "./hasAttr";
import {rwdMedia} from "./rwdMedia";
import {rippletInit} from './ripplet';
import './nav-scroll';
import lightbox from "lightbox2";
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/tab';
import 'jquery-parallax.js';
import Cookies from 'js-cookie';
import bsCustomFileInput from 'bs-custom-file-input';
import {addBackToTop} from 'vanilla-back-to-top';

window.debounce = debounce;
window.rwdMedia = rwdMedia;
window.Cookies = Cookies;
window.rippletInit = rippletInit;
window.bsCustomFileInput = bsCustomFileInput;
window.addBackToTop = addBackToTop;
window.lightbox = lightbox;

import './home';

document.addEventListener('DOMContentLoaded', function(){


    let hashUrl = document.location.toString();
    hashUrl = hashUrl.replace(/\./g, '\\\.').replace(/%20/g, '-').replace(/%22/g, '');

    if ( hashUrl.match('#') ) {
        let hashAddress = '#'+hashUrl.split('#')[1];

        //przesowa do elementu
        if (!$('#fullpage').length) {

            hashAddress = hashAddress.replace(/"/g, '').replace(/ /g, '-').replace(/&quot;/g, '').replace('/', '-').replace(/\./g, '');

            if( $(hashAddress).closest('.tab-pane') ) {
                const activeTab = $(hashAddress).closest('.tab-pane').attr('id');
                $(`[aria-controls="${activeTab}"]` ).tab('show');
                setTimeout(function(){ $(hashAddress).get(0).scrollIntoView(); }, 1000);
            }

        }

    }


    window.onscroll = function() {handleHeader()};
    handleHeader();

    rippletInit();

    addBackToTop({
        diameter: 56,
        backgroundColor: '#FFFFFF',
        textColor: '#004f92',
        innerHTML: ''
    });

    $('.page-section .nav-scroll').navScroll();

    $("#videoModal").on('hidden.bs.modal', function (e) {
        $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
    });

    $('[data-toggle="tooltip"]').tooltip();

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

}, false);

function handleHeader() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.body.classList.add('sm');
    } else {
        document.body.classList.remove('sm');
    }
}

// jQuery.fn.jquery
// $.fn.popover.Constructor.VERSION
// $.fn.hasAttr





