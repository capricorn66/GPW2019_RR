import { CountUp } from "countup.js";

export function animateValue(value, elem) {

    const options = {
        useEasing : true,
        useGrouping : true,
        separator : '&nbsp;',
        decimal : ',',
        prefix : '',
        suffix : ''
    };
    const numAnim = new CountUp(elem, value, options);
    numAnim.start();

}
