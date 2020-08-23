import $ from "jquery";

document.addEventListener('DOMContentLoaded', function(){

    const $fullpage = document.getElementById('fullpage');

    if($fullpage) {
        import('fullpage.js')
            .then( function ({default: fullpage}) {

                let fullPageCreated = false;
                let fullPageInit;
                let fullPage;

                if( (rwdMedia.xl() || rwdMedia.xxl()) && $(window).height() >= 701 ) {

                    fullPageCreated = true;

                    fullPageInit = function() {
                        fullPage = new fullpage('#fullpage', {

                            'navigation': true,

                        });
                    }
                    fullPageInit();
                }

                $( window ).resize(function() {

                    if( (rwdMedia.xl() || rwdMedia.xxl()) && $(window).height() >= 701 ) {

                        if(fullPageCreated === false) {
                            fullPageCreated = true;
                            fullPageInit();
                        }

                    } else {

                        if(fullPageCreated === true) {
                            fullPageCreated = false;
                            fullPage.destroy('all');
                        }

                    }
                });


            })
    }

}, false);
