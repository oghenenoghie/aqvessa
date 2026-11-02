export const THEME_STORAGE_KEY = "aqvessa-theme";

/**
 * Runs in <head> before first paint, so a saved theme never flashes. Without a saved choice the
 * system preference applies through CSS alone.
 */
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
