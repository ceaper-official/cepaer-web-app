
let be = document.getElementsByTagName("BODY")[0];

initColors();

function initColors(){
    if (localStorage.getItem("isLight") === null) {
        localStorage.setItem("isLight", 'true');
    }

    if (localStorage.getItem("isLight") === 'false'){
        makeDark();
    }
    else{
        makeLight();
    }
}


function makeDark(){
    be.style.setProperty('--primary', "#fcfcfc");
    be.style.setProperty('--secondary', "#fcfcfc");
    be.style.setProperty('--grey', "#73737D");
    be.style.setProperty('--background-color', "#111216");
    be.style.setProperty('--background-color-grey', "#111216");
    be.style.setProperty('--accent', "#00ffae");
    be.style.setProperty('--hover', "rgba(255, 255, 255, 0.07)");
    be.style.setProperty('--gradient', "linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)");
    be.style.setProperty('--articleText', "#d1d1d1");
    be.style.setProperty('--track', "rgba(255, 255, 255, 0.3)");
    be.style.setProperty('--progress', "#fff");
    be.style.setProperty('--card', "#1D2128");
    be.style.setProperty('--error', "#EE565B");
    be.style.setProperty('--success', "#ff6f00;");
    be.style.setProperty('--errorBackground', "rgba(238, 86, 91, 0.1)");
    be.style.setProperty('--horizontalRule', "rgba(255, 255, 255, 0.15)");
    be.style.setProperty('--inputBackground', "rgba(255, 255, 255, 0.07)");
    be.style.setProperty('--tooltip', "#000");
}

function makeLight(){
    be.style.setProperty('--primary', "");
    be.style.setProperty('--secondary', "");
    be.style.setProperty('--grey', "");
    be.style.setProperty('--background-color', "");
    be.style.setProperty('--accent', "");
    be.style.setProperty('--hover', "");
    be.style.setProperty('--gradient', "");
    be.style.setProperty('--articleText', "");
    be.style.setProperty('--track', "");
    be.style.setProperty('--progress', "");
    be.style.setProperty('--card', "");
    be.style.setProperty('--error', "");
    be.style.setProperty('--success', "");
    be.style.setProperty('--errorBackground', "");
    be.style.setProperty('--horizontalRule', "");
    be.style.setProperty('--inputBackground', "");
    be.style.setProperty('--tooltip', "lightgrey");
}
