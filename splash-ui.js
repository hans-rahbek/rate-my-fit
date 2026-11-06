'use strict';
const LDA_INTRO_PREF='rate-my-fit-lda-intro-skip-v1';
function introIsSkipped(){try{return localStorage.getItem(LDA_INTRO_PREF)==='true'}catch{return false}}
function openLdaIntro(initial=false){$('splashSkip').checked=introIsSkipped();$('splashPlay').textContent=initial?'Let’s play →':'Back to the game →';if(!$('introSplash').open)$('introSplash').showModal();$('splashTitle').focus?.({preventScroll:true});$('introSplash').scrollTop=0}
function closeLdaIntro(){try{if($('splashSkip').checked)localStorage.setItem(LDA_INTRO_PREF,'true');else localStorage.removeItem(LDA_INTRO_PREF)}catch{}$('introSplash').close()}
$('splashPlay').onclick=closeLdaIntro;$('introSplash').addEventListener('cancel',event=>{event.preventDefault();closeLdaIntro()});$('ldaIntroButton').onclick=()=>openLdaIntro(false);if(!introIsSkipped())openLdaIntro(true);
