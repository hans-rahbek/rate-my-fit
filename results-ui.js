'use strict';
function renderRoundResults(){$('reviewResults').hidden=game.phase==='play';$('prepareRisk').hidden=game.phase!=='shop';if(game.phase==='play'&&$('resultsMenu').open)$('resultsMenu').close()}
function recordFinishedResults(){if(!devMode&&game.phase==='over'&&typeof recordRunScore==='function')recordRunScore(game)}
function openRoundResults(){if(game.phase==='play')return;renderResult();$('result').hidden=false;$('resultsTitle').textContent='Round '+game.round+' · '+(game.result.passed?'Population cleared':'Run ended');if(!$('resultsMenu').open)$('resultsMenu').showModal();$('resultsTitle').focus?.({preventScroll:true});$('resultsMenu').scrollTop=0}
function closeRoundResults(){if($('resultsMenu').open)$('resultsMenu').close()}
$('reviewResults').onclick=openRoundResults;$('resultsClose').onclick=()=>{closeRoundResults();recordFinishedResults()};$('resultsMenu').addEventListener('cancel',recordFinishedResults);renderRoundResults();

$('prepareRisk').onclick=openRoundPlanning;
