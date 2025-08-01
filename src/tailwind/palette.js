module.exports = {
    /**
     * New design system color scheme
     * based on specifications from design team
     */

    header: {
        hr: "var(--header-hr)",
        menu_hover: "var(--header-menu-hover)",
    },
    product: {
        bg: "var(--product-bg)",
        accent: "var(--product-accent)",
        border: "var(--product-border)",
        hover: "var(--product-hover)",
        DEFAULT: "var(--product-primary)",
        dark: "var(--product-dark)",
        contrast: "var(--product-primary-contrast)",
        text: "var(--product-text)",
        "text-contrast": "var(--product-text-contrast)",
    },
    home: {
        bg: "#f2f8f9",
        accent: "#cce3e6",
        border: "#73b1ba",
        hover: "#268795",
        DEFAULT: "#007282",
        dark: "#005B68",
    },
    discover: {
        bg: "#f5f4f9",
        accent: "#e2deec",
        border: "#9386bb",
        hover: "#584496",
        DEFAULT: "#3b2383",
        dark: "#2f1c69",
    },

    compare: {
        bg: "#faf3f8",
        accent: "#edd0e1",
        border: "#c873a6",
        hover: "#ac2c7a",
        DEFAULT: "#a3156b",
        dark: "#821156",
    },

    recommend: {
        bg: "#fdf3f5",
        accent: "#f8dce0",
        border: "#e67e8f",
        hover: "#d93752",
        DEFAULT: "#d21433",
        dark: "#a81029",
    },

    review: {
        bg: "#fef7f2",
        accent: "#fee8d9",
        border: "#f9ab73",
        hover: "#f67d26",
        DEFAULT: "#f56600",
        dark: "#c45200",
    },

    /**
     * Client colours
     */
    client1: {
        bg50: "rgba(231, 233, 243, 50)",
        bg: "rgb(231, 233, 243)",
        accent: "rgb(222, 224, 241)",
        border: "rbg(185, 190, 220)",
        primary: "rgb(41, 56, 146)",
    },

    client2: {
        bg50: "rgba(250, 232, 227, 50)",
        bg: "rgb(250, 232, 227)",
        accent: "rgb(251, 214, 203)",
        border: "rgb(240, 186, 171)",
        primary: "rgb(205, 46, 17)",
    },

    joint: {
        bg50: "rgba(229 ,242, 241)",
        bg: "rgb(229, 242, 241)",
        accent: "rgb(204, 230, 227)",
        border: "rgb(178, 217, 214)",
        primary: "rgb(26, 132, 125)",
    },

    smsf: {
        bg50: "rgba(225, 241, 254)",
        bg: "rgb(225, 241, 254)",
        accent: "rgb(202, 231, 254)",
        border: "rgb(142, 203, 253)",
        primary: "rgb(0, 130, 250)",
    },

    /**
     * Platform product colours
     */

    platform_existing: {
        DEFAULT: "#337ab7",
        bg: "#EEF7FC",
    },

    platform_recommended: {
        DEFAULT: "#388e3c",
        bg: "#E5FFE5",
    },

    platform_alternative: {
        DEFAULT: "#e37200",
        bg: "#ffa5001a",
    },

    /**
     * Scopes colours
     */

    scopes_in: {
        DEFAULT: "#388e3c",
        border: "#388e3caa",
        bg2: "#D5E4D4",
        bg: "#388e3c0f",
    },
    scopes_out: {
        DEFAULT: "#f27440",
        border: "#f27440aa",
        bg2: "#F9DFD6",
        bg: "#f274400f",
    },
    scopes_na: {
        DEFAULT: "#616161",
        border: "#616161aa",
        bg2: "#dbdbdb",
        bg: "#6161610f",
    },

    /**
     *  Alerts palette
     *  Based on specifications from design team
     */

    success: {
        bg: "#f1f7f2",
        accent: "#e1eee2",
        border: "#c3DDc5",
        DEFAULT: "#388e3d",
    },
    info: {
        bg: "#f2f9fd",
        accent: "#e6f3fc",
        border: "#b2d9f4",
        DEFAULT: "#0082db",
    },
    warning: {
        bg: "#fef8f5",
        accent: "#fdeae2",
        border: "#fbd5c6",
        DEFAULT: "#f27440",
    },
    error: {
        bg: "#fef4f4",
        accent: "#fbdede",
        border: "#f18f8f",
        DEFAULT: "#e42020",
    },

    /**
     * Request status color
     * Based on the old manage request legend colours
     */
    manage_request: {
        pending_deletion: "#e57373",
        cancelled: "#d32f2f",
        incomplete: "#9e9e9e",
        submitted: "#f9a825",
        with_pc: "#546e7a",
        received: "#00897b",
        confirmation: "#7e57c2",
        in_progress: "#3bafda",
        booked: "#3f51b5",
        review: "#5d4037",
        complete: "#43a047",
        on_hold: "#ff7043",
    },

    /**
     * Tailwind color config of the old color palette
     * Based on libs/shared-lib/src/lib/ui/scss/pd/resources/_palette.scss.
     *
     * Colours from these palette are prefixed with pd_*
     */
    pd_violet: {
        xxdark: "rgba(33, 18, 70, 1)",
        xdark: "rgba(43, 23, 91, 1)",
        dark: "rgba(52, 29, 111, 1)",
        DEFAULT: "rgba(62, 34, 131, 1)",
        light: "rgba(72, 39, 151, 1)",
        xlight: "rgba(81, 45, 171, 1)",
        xxlight: "rgba(81, 45, 171, 1)",
        marketing: "rgba(74, 48, 140, 1)",
    },
    pd_purple: {
        xxdark: "rgba(86, 17, 60, 1)",
        xdark: "rgba(107, 21, 75, 1)",
        dark: "rgba(129, 25, 90, 1)",
        DEFAULT: "rgba(150, 29, 105, 1)",
        light: "rgba(171, 33, 120, 1)",
        xlight: "rgba(193, 37, 135, 1)",
        xxlight: "rgba(214, 42, 150, 1)",
        marketing: "rgba(157, 47, 117, 1)",
        pale: "rgba(240, 187, 220, 1)",
    },
    pd_red: {
        xxdark: "rgba(140, 13, 34, 1)",
        xdark: "rgba(163, 16, 40, 1)",
        dark: "rgba(187, 18, 45, 1)",
        DEFAULT: "rgba(210, 20, 51, 1)",
        light: "rgba(233, 23, 57, 1)",
        xlight: "rgba(235, 46, 77, 1)",
        xxlight: "rgba(237, 69, 97, 1)",
        marketing: "rgba(216, 66, 82, 1)",
    },
    pd_orange: {
        xxdark: "rgba(169, 70, 0, 1)",
        xdark: "rgba(194, 81, 0, 1)",
        dark: "rgba(220, 91, 0, 1)",
        DEFAULT: "rgba(245, 102, 0, 1)",
        light: "rgba(255, 115, 16, 1)",
        xlight: "rgba(255, 130, 41, 1)",
        xxlight: "rgba(255, 145, 67, 1)",
        marketing: "rgba(245, 148, 54, 1)",
        pale: "rgba(252, 219, 195, 1)",
    },
    pd_teal: {
        xxdark: "rgba(0, 47, 54, 1)",
        xdark: "rgba(0, 69, 79, 1)",
        dark: "rgba(0, 92, 105, 1)",
        DEFAULT: "rgba(0, 114, 130, 1)",
        light: "rgba(0, 136, 156, 1)",
        xlight: "rgba(0, 159, 181, 1)",
        xxlight: "rgba(0, 181, 207, 1)",
    },
    pd_yellow: {
        DEFAULT: "rgba(245, 213, 52, 1)",
    },
    pd_brown: {
        DEFAULT: "rgba(217, 125, 32, 1)",
    },
    pd_indigo: {
        dark: "rgba(63, 81, 181, 1)",
        DEFAULT: "rgba(197, 202, 233, 1)",
        light: "rgba(242, 244, 255, 1)",
    },
    pd_green: {
        DEFAULT: "rgba(56, 142, 61, 1)",
    },
};
