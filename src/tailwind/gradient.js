/**
 * Configuration for product gradients
 * Based on old palette settings
 */

const palette = require("./palette");

module.exports = {
    "pd_gradient-primary": `linear-gradient(
        to right,
        ${palette.pd_violet.DEFAULT},
        ${palette.pd_purple.DEFAULT},
        ${palette.pd_red.DEFAULT},
        ${palette.pd_orange.DEFAULT},
        ${palette.pd_yellow.DEFAULT})`,
    "pd_gradient-home": `linear-gradient(
        120deg,
        ${palette.pd_teal.xdark} 0%,
        ${palette.pd_teal.DEFAULT} 27%,
        ${palette.pd_teal.DEFAULT} 73%,
        ${palette.pd_teal.dark} 100%
    )`,
    "pd_gradient-discover": "linear-gradient(120deg, rgb(52, 29, 111), rgb(62, 34, 131), rgb(72, 39, 151))",
    "pd_gradient-compare": "linear-gradient(120deg, rgb(107, 21, 75), rgb(129, 25, 90), rgb(150, 29, 105))",
    "pd_gradient-recommend": "linear-gradient(120deg, rgb(163, 16, 40), rgb(187, 18, 45), rgb(210, 20, 51))",
    "pd_gradient-review": "linear-gradient(120deg, rgb(194, 81, 0), rgb(220, 91, 0), rgb(245, 102, 0))",
    "pd_gradient-teal": "linear-gradient(120deg, rgba(0, 92, 105, 1), rgba(0, 114, 130, 1), rgba(0, 136, 156, 1))",
    "pd_gradient-gray": "linear-gradient(to bottom, rgba(232, 233, 235, 1), rgba(252, 252, 252, 1))",
};
