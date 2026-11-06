'use strict';
const SUCCESS_SOUND_KEY='rate-my-fit-sound-muted-v1';let successSoundMuted=false;try{successSoundMuted=localStorage.getItem(SUCCESS_SOUND_KEY)==='true'}catch{}
function renderSoundControl(){const button=document.getElementById('soundToggle');button.textContent=successSoundMuted?'Sound: Off':'Sound: On';button.setAttribute('aria-pressed',String(!successSoundMuted));button.setAttribute('aria-label',successSoundMuted?'Enable success sound':'Mute success sound');button.title='FAHHHH on a successful guess'}
function stopSuccessSound(){const audio=document.getElementById('successAudio');try{audio.pause();audio.currentTime=0}catch{}}
function playSuccessSound(){if(successSoundMuted)return;const audio=document.getElementById('successAudio');try{audio.pause();audio.currentTime=0;audio.volume=.65;const pending=audio.play();if(pending&&typeof pending.catch==='function')pending.catch(()=>{})}catch{}}
document.getElementById('soundToggle').onclick=()=>{successSoundMuted=!successSoundMuted;if(successSoundMuted)stopSuccessSound();try{localStorage.setItem(SUCCESS_SOUND_KEY,String(successSoundMuted))}catch{}renderSoundControl()};renderSoundControl();

if(typeof window!=='undefined')window.addEventListener('storage',event=>{if(event.key===SUCCESS_SOUND_KEY){successSoundMuted=event.newValue==='true';if(successSoundMuted)stopSuccessSound();renderSoundControl()}});
