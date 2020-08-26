import $ from "jquery";
import {animateValue} from './animateValue';

document.addEventListener('DOMContentLoaded', function(){

    const $fullpage = document.getElementById('fullpage');

    function animateValueOnTargets() {
        animateValue(470,'value_1', 0);
        animateValue(250,'value_2', 0);
        animateValue(19,'value_3', 0);
        animateValue(50,'value_4', 0);
        animateValue(60,'value_5', 0);
    };

    if($fullpage) {
        import('fullpage.js')
            .then( function ({default: fullpage}) {

                let fullPageCreated = false;
                let fullPage;

                const fullPageInit = function() {
                    fullPage = new fullpage('#fullpage', {
                        'navigation': true,
                        onLeave: function(index, nextIndex) {
                            if (nextIndex.index === 1){

                                setTimeout(animateValueOnTargets, 900)

                            }
                        }
                    });
                };

                if( (rwdMedia.xl() || rwdMedia.xxl()) && $(window).height() >= 701 ) {

                    fullPageCreated = true;
                    fullPageInit();

                } else {

                    animateValueOnTargets();

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
