/**
 * Configuration for product colors themes
 * Based on old palette settings
 */

const palette = require("./palette");

module.exports = {
    pd_home: {
        DEFAULT: palette.pd_teal.DEFAULT,
        secondary: "white",
    },
    pd_settings: {
        DEFAULT: palette.pd_teal.DEFAULT,
    },
    pd_discover: {
        DEFAULT: palette.pd_violet.DEFAULT,
        secondary: palette.pd_violet.dark,
    },
    pd_compare: {
        DEFAULT: palette.pd_purple.DEFAULT,
        secondary: palette.pd_purple.dark,
        existing: "#337ab7",
        "existing-light": "#58afdf1a",
        recommended: "#388e3c",
        "recommended-light": "#00ff001a",
        alternative: "#e37200",
        "alternative-light": "#ffa5001a",
    },
    pd_recommend: {
        DEFAULT: palette.pd_red.DEFAULT,
        secondary: palette.pd_red.dark,
    },
    pd_review: {
        DEFAULT: palette.pd_orange.DEFAULT,
        secondary: palette.pd_orange.dark,
    },
};
