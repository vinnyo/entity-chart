const palette = require("./palette");

const gradient = require("./gradient");

const product = require("./product");

const states = {
    pd_error: {
        DEFAULT: palette.pd_red.DEFAULT,
    },
    pd_warning: {
        DEFAULT: palette.pd_orange.DEFAULT,
    },
    pd_info: {
        DEFAULT: palette.pd_teal.DEFAULT,
    },
};

module.exports = {
    palette,
    gradient,
    product,
    states,
};
