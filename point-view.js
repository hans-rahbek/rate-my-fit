'use strict';
let pointOpacity=1,pointVisibility=[true,true];
const pointView=document.createElement('section');pointView.className='point-view';pointView.setAttribute('aria-label','Point display');
pointView.innerHTML='<label for="pointOpacity">Point opacity <output id="pointOpacityValue">100%</output></label><input id="pointOpacity" type="range" min="5" max="100" step="5" value="100"><label><input id="showPointsA" type="checkbox" checked> Show group A · red</label><label><input id="showPointsB" type="checkbox" checked> Show group B · blue</label><button id="restorePointView" type="button">Show both · full opacity</button><small>Display only: hidden points still count in the fit. Compass: gold A / dashed purple B.</small>';
document.getElementById('plot').before(pointView);
function syncPointView(){document.getElementById('pointOpacity').value=pointOpacity*100;document.getElementById('pointOpacityValue').textContent=Math.round(pointOpacity*100)+'%';[0,1].forEach(i=>document.getElementById(i?'showPointsB':'showPointsA').checked=pointVisibility[i]);draw()}
document.getElementById('pointOpacity').oninput=e=>{pointOpacity=Number(e.target.value)/100;syncPointView()};
[0,1].forEach(i=>document.getElementById(i?'showPointsB':'showPointsA').onchange=e=>{pointVisibility[i]=e.target.checked;syncPointView()});
document.getElementById('restorePointView').onclick=()=>{pointOpacity=1;pointVisibility=[true,true];syncPointView()};
