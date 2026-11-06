'use strict';
// Permanent starting benchmarks supplied by the player, 6 November 2026.
// Keep these defaults in future versions. They seed only the local leaderboard,
// never research, perk unlocks or population records. Unknown round counts are omitted.
const DEFAULT_LEADERBOARD=Object.freeze([
 ['JBR',106678,97.61,99.91,'18:53'],
 ['JBR',3672,97.04,99.95,'19:06'],
 ['JBR',2114,96.44,99.78,'18:17'],
 ['HHR',1772,97.80,99.91,'17:59'],
 ['JBR',744,94.02,99.95,'17:46'],
 ['HHR',428,97.34,99.87,'19:09'],
 ['JBR',410,97.81,99.83,'18:36'],
 ['JBR',378,93.64,99.66,'18:51'],
 ['YOU',216,95.61,99.94,'18:15'],
 ['JBR',202,98.15,99.82,'18:58']
].map(([handle,maxPopulation,averageFit,maxFit,time])=>Object.freeze({id:'benchmark-'+handle.toLowerCase()+'-'+maxPopulation+'-20261106-'+time.replace(':',''),ruleset:3,source:'default',handle,maxPopulation,averageFit,maxFit,startedAt:Date.parse('2026-11-06T'+time+':00Z'),ended:true})));
