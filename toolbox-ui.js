'use strict';
function renderToolSelection(){
 const chaos=devMode||records.best>=100,methods=devMode||records.best>=1000;
 for(const [id,available,threshold,panel] of [['chaosToolsButton',chaos,100,'chaosMenu'],['methodsToolsButton',methods,1000,'practicesPanel']]){const b=$(id);b.disabled=!available;b.textContent=(id==='chaosToolsButton'?'Control the chaos':'Dubious methods')+(available?'':' · '+threshold+' population');b.title=available?'Toggle inline tools. Hover each tool for an explanation.':'Permanently unlock this research category by successfully clearing '+threshold+' population.';if(!available)$(panel).hidden=true;b.setAttribute('aria-expanded',String(!$(panel).hidden))}
 $('chaosMessage').hidden=!game.lastIntervention;$('practiceStatus').hidden=!practiceNotice&&practiceSelection.weight===null&&!practiceSelection.relabel.length&&!practiceSelection.rect;
 const active=practiceMode!=='aim'&&game.phase==='play';$('toolSelectionBar').hidden=!active;
 $('toolSelectionHint').textContent=practiceMode==='weight'?'Select a dot, then click Weight selected dot to apply.':practiceMode==='relabel'?'Select one dot per group, then click Swap selected labels.':'Drag a rectangle, then click Keep selected sample.';
 for(const key of ['weight','relabel','cherry']){const b=$('practice-'+key);b.disabled=!game.canPractice(key,practiceRank(key));b.setAttribute('aria-pressed',String(practiceMode===key))}
}
function enterPracticeSelection(mode){if(mode==='aim'){closePracticeTools();return}if(!practiceRank(mode)||game.phase!=='play')return;practiceMode=mode;resetPracticeSelection();practiceNotice='';draw()}
function reviewPracticeSelection(){renderToolSelection()}
function closePracticeTools(){practiceMode='aim';resetPracticeSelection();practiceNotice='';draw()}
function finishToolAction(){closePracticeTools()}
for(const [button,panel] of [['chaosToolsButton','chaosMenu'],['methodsToolsButton','practicesPanel']])$(button).onclick=()=>{if($(button).disabled)return;$(panel).hidden=!$(panel).hidden;if($(panel).hidden)closePracticeTools();renderToolSelection()};
for(const key of ['weight','relabel','cherry']){const apply=$('practice-'+key).onclick;$('practice-'+key).onclick=()=>{const ready=key==='weight'?practiceSelection.weight!==null&&E.pointWeight(game.points[practiceSelection.weight])===1:key==='relabel'?practiceSelection.relabel.length===2:!!practiceSelection.rect&&!practiceSelection.start;if(practiceMode!==key){enterPracticeSelection(key);return}if(ready)apply();else closePracticeTools()}}
$('practiceClear').onclick=closePracticeTools;$('practiceSelectAgain').onclick=()=>enterPracticeSelection(practiceMode);$('toolSelectionCancel').onclick=closePracticeTools;
const backupButton=$('restoreProgressBackup');try{backupButton.hidden=!localStorage.getItem('rate-my-fit-reset-backup-v1')}catch{}backupButton.onclick=()=>{try{undoGameProgressReset();location.reload()}catch{backupButton.textContent='Unable to restore browser progress'}};
renderToolSelection();
