document.getElementById('info').innerHTML = `Screen size: <span id="screenSize"></span><br>
Layout viewport size: <span id="layoutViewportSize"></span><br>
Visual viewport size: <span id="visualViewportSize"></span><br>
Visual viewport scale factor: <span id="visualViewportScale"></span><br>
Device pixel ratio: <span id="devicePixelRatio"></span>`;

const screenSizeElement = document.getElementById("screenSize");

const updateScreenWidth = () => {
    screenSizeElement.innerText = `${screen.width}px \u00d7 ${screen.height}px`;
}
updateScreenWidth();
screen.orientation.addEventListener("change", updateScreenWidth);

const devicePixelRatioElement = document.getElementById("devicePixelRatio");

const updateDevicePixelRatio = () => {
    const dpr = window.devicePixelRatio;
    devicePixelRatioElement.innerText = dpr;
    matchMedia(`(resolution: ${dpr}dppx)`).addEventListener("change", updateDevicePixelRatio, { once: true });
};
updateDevicePixelRatio();

const layoutViewportSizeElement = document.getElementById("layoutViewportSize");

const updateLayoutViewportWidth = () => {
    layoutViewportSizeElement.innerText = `${window.innerWidth}px \u00d7 ${window.innerHeight}px`;
};
updateLayoutViewportWidth();
window.addEventListener("resize", updateLayoutViewportWidth);

const visualViewportScaleElement = document.getElementById("visualViewportScale");
const visualViewportSizeElement = document.getElementById("visualViewportSize");

const updateVisualViewport = () => {
    visualViewportScaleElement.innerText = window.visualViewport.scale;
    visualViewportSizeElement.innerText = `${Math.round(window.visualViewport.width)}px \u00d7 ${Math.round(window.visualViewport.height)}px`;
};
updateVisualViewport();
window.visualViewport.addEventListener("resize", updateVisualViewport);
window.visualViewport.addEventListener("scroll", updateVisualViewport);
