/* ==========================================================
   REPCAST — app.js  (production-ready)
   All Firebase bugs fixed, Google login added,
   auth persistence added, manager credentials secured.
   ========================================================== */
   'use strict';

   /* ── MANAGER CREDENTIALS ────────────────────────────────────
      NOTE: For production security, replace this check with a
      Firestore role lookup after Firebase Auth login.
      See README for instructions.
   ────────────────────────────────────────────────────────────── */
   const MANAGER_EMAIL    = 'reemkabra@gmail.com';
   const MANAGER_PASSWORD = 'reem1901';
   
   /* ── DATA ─────────────────────────────────────────────────── */
   const SUBCATS = {
     chest:     ['Upper Chest', 'Middle Chest', 'Lower Chest'],
     back:      ['Upper Back', 'Lats', 'Lower Back'],
     legs:      ['Quads', 'Hamstrings', 'Calves', 'Glutes'],
     shoulders: ['Front Deltoid', 'Lateral', 'Rear Deltoid'],
     arms:      ['Biceps', 'Triceps', 'Forearms'],
     core:      ['Abs', 'Obliques', 'Transverse Abs'],
     fullbody:  ['Compound', 'HIIT', 'Functional'],
     physio:    ['Shoulder Rehab', 'Knee Rehab', 'Lower Back Rehab', 'Hip Rehab', 'Ankle Rehab', 'Neck Rehab', 'Balance', 'Breathing'],
   };
   
   // Master library — manager can add/edit/delete via admin panel
   let MASTER_EXERCISES = JSON.parse(localStorage.getItem('repcast_master') || 'null') || [
   
     /* ── CHEST ─────────────────────────────────────────────── */
     // Upper Chest
     { id:'m1',  title:'Incline Dumbbell Press',         muscle:'chest',       sub:'Upper Chest',      desc:'Set bench 30-45°. Lower dumbbells to chest, press up and inward. Keep shoulder blades retracted. Feel the upper chest stretch at the bottom.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m2',  title:'Incline Barbell Press',          muscle:'chest',       sub:'Upper Chest',      desc:'Grip just outside shoulder-width. Lower bar to upper chest. Drive through heels, arch slightly. Focus on upper pec squeeze at lockout.', diff:'Intermediate', duration:'50s', premium:false, custom:false },
     { id:'m3',  title:'Low-to-High Cable Fly',          muscle:'chest',       sub:'Upper Chest',      desc:'Set cables at lowest position. Arc hands upward and inward to shoulder height. Keep slight elbow bend. Squeeze upper chest at the top.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'m4',  title:'Incline Machine Press',          muscle:'chest',       sub:'Upper Chest',      desc:'Adjust seat so handles align with upper chest. Press forward to full extension. Controlled return. Great for isolating upper chest safely.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m5',  title:'Landmine Press',                 muscle:'chest',       sub:'Upper Chest',      desc:'Hold end of barbell at shoulder. Press forward and up in an arc. Single arm or both. Excellent upper chest and anterior delt activation.', diff:'Intermediate', duration:'45s', premium:true,  custom:false },
     // Middle Chest
     { id:'m6',  title:'Flat Barbell Bench Press',       muscle:'chest',       sub:'Middle Chest',     desc:'Grip shoulder-width. Lower to mid-chest. Drive through chest, keep wrists stacked. Retract scapulae throughout. Classic compound builder.', diff:'Beginner',     duration:'50s', premium:false, custom:false },
     { id:'m7',  title:'Flat Dumbbell Press',            muscle:'chest',       sub:'Middle Chest',     desc:'Lower dumbbells with elbows at 45°. Press up and slightly together. Greater range of motion than barbell. Keep wrists neutral.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'m8',  title:'Cable Crossover',                muscle:'chest',       sub:'Middle Chest',     desc:'Set cables at mid height. Bring hands together in front of chest. Squeeze and hold 1 second. Constant tension throughout.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'m9',  title:'Chest Press Machine',            muscle:'chest',       sub:'Middle Chest',     desc:'Set seat so handles are at chest height. Press forward fully, squeeze at extension. Great for beginners and warm-up sets.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m10', title:'Push-Up',                        muscle:'chest',       sub:'Middle Chest',     desc:'Hands shoulder-width, body straight. Lower chest to floor, elbows at 45°. Press back up fully. Scale with knees or elevate feet.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m11', title:'Wide-Grip Push-Up',              muscle:'chest',       sub:'Middle Chest',     desc:'Place hands wider than shoulder-width. Lower chest to floor. Greater chest stretch than standard push-up. Keep core tight.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     // Lower Chest
     { id:'m12', title:'Decline Cable Fly',              muscle:'chest',       sub:'Lower Chest',      desc:'Set cables high. Arc hands down and together at hip height. Squeeze lower chest. Lean forward slightly for better stretch.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'m13', title:'Decline Barbell Press',          muscle:'chest',       sub:'Lower Chest',      desc:'On decline bench, lower bar to lower pec. Press up and slightly back. Targets lower chest and sternal head effectively.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m14', title:'Dips (Chest Lean)',              muscle:'chest',       sub:'Lower Chest',      desc:'Lean forward 30-45° on parallel bars. Lower until shoulders below elbows. Press back up. The forward lean shifts emphasis to chest.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m15', title:'Decline Dumbbell Fly',           muscle:'chest',       sub:'Lower Chest',      desc:'On decline bench, lower dumbbells in a wide arc. Keep soft elbow bend. Squeeze at the top. Strong lower pec stretch at bottom.', diff:'Intermediate', duration:'40s', premium:true,  custom:false },
   
     /* ── BACK ───────────────────────────────────────────────── */
     // Upper Back
     { id:'m16', title:'Barbell Row',                    muscle:'back',        sub:'Upper Back',       desc:'Hip hinge at 45°. Pull bar to lower chest, elbows drive back. Squeeze scapulae at top. Lower with control. Keep back flat.', diff:'Intermediate', duration:'50s', premium:false, custom:false },
     { id:'m17', title:'Seated Cable Row',               muscle:'back',        sub:'Upper Back',       desc:'Sit tall, feet braced. Pull handles to lower chest. Squeeze shoulder blades together. Do not round lower back on return.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'m18', title:'Face Pull',                      muscle:'back',        sub:'Upper Back',       desc:'Cable at head height. Pull rope to face, elbows high. Externally rotate at top. Excellent rear delt and upper trap activator.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m19', title:'Meadows Row',                    muscle:'back',        sub:'Upper Back',       desc:'Landmine setup, staggered stance. Row handle to hip, keep elbow high. Drive through elbow. Great for upper back thickness.', diff:'Advanced',     duration:'45s', premium:false, custom:false },
     { id:'m20', title:'Chest-Supported Row',            muscle:'back',        sub:'Upper Back',       desc:'Lie prone on incline bench. Row dumbbells up, elbows at 90°. Eliminates lower back stress. Full scapular retraction at top.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     // Lats
     { id:'m21', title:'Wide-Grip Pull-Up',              muscle:'back',        sub:'Lats',             desc:'Overhand grip wider than shoulders. Drive elbows to hips. Pause at top. Slow descent. Full hang at bottom for stretch.', diff:'Advanced',     duration:'50s', premium:false, custom:false },
     { id:'m22', title:'Chin-Up',                        muscle:'back',        sub:'Lats',             desc:'Underhand grip, shoulder-width. Pull chin over bar. Great lat and bicep co-activation. Control the descent fully.', diff:'Intermediate', duration:'50s', premium:false, custom:false },
     { id:'m23', title:'Single-Arm Dumbbell Row',        muscle:'back',        sub:'Lats',             desc:'Brace on bench. Pull dumbbell to hip, elbow drives back. Keep torso stable. Lower fully. Drives lat thickness effectively.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'m24', title:'Lat Pulldown',                   muscle:'back',        sub:'Lats',             desc:'Wide overhand grip. Pull bar to upper chest, lean back slightly. Elbows drive down. Squeeze at bottom. Controlled return.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'m25', title:'Straight-Arm Pulldown',          muscle:'back',        sub:'Lats',             desc:'Arms straight, lat-width. Push bar down in arc. Hinge at hips slightly. Squeeze lats at bottom. Excellent isolation exercise.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'m26', title:'Cable Row to Hip',               muscle:'back',        sub:'Lats',             desc:'Single arm cable, pull to hip with straight arm. Focus on lat shortening. Keep elbow close to body throughout the movement.', diff:'Intermediate', duration:'40s', premium:true,  custom:false },
     // Lower Back
     { id:'m27', title:'Romanian Deadlift',              muscle:'back',        sub:'Lower Back',       desc:'Hinge at hips, soft knees. Bar slides down thighs. Feel hamstring and lower back stretch. Drive hips forward to stand.', diff:'Intermediate', duration:'55s', premium:false, custom:false },
     { id:'m28', title:'Good Morning',                   muscle:'back',        sub:'Lower Back',       desc:'Bar on traps. Hip hinge forward until torso near parallel. Drive hips back. Squeeze glutes to return. Keep spine neutral.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m29', title:'Hyperextension',                 muscle:'back',        sub:'Lower Back',       desc:'On GHD or 45° bench. Hinge down then extend back to neutral. Add weight on chest for progression. Avoid hyperextension at top.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m30', title:'Deadlift',                       muscle:'back',        sub:'Lower Back',       desc:'Bar over mid-foot. Hip hinge to grip. Drive floor away. Lock hips and knees simultaneously. Hinge back down. King of posterior chain.', diff:'Advanced',     duration:'60s', premium:true,  custom:false },
   
     /* ── LEGS ───────────────────────────────────────────────── */
     // Quads
     { id:'m31', title:'Barbell Back Squat',             muscle:'legs',        sub:'Quads',            desc:'Bar on traps. Feet shoulder-width, toes out. Brace core, knees out. Hip crease below parallel. Drive through heels.', diff:'Intermediate', duration:'60s', premium:false, custom:false },
     { id:'m32', title:'Leg Press',                      muscle:'legs',        sub:'Quads',            desc:'Feet mid-platform, shoulder-width. Full range without locking knees. Control descent all the way. Do not raise hips at bottom.', diff:'Beginner',     duration:'50s', premium:false, custom:false },
     { id:'m33', title:'Bulgarian Split Squat',          muscle:'legs',        sub:'Quads',            desc:'Rear foot elevated. Front foot forward enough for vertical shin. Descend to 90°. Drive through front heel to stand.', diff:'Advanced',     duration:'55s', premium:false, custom:false },
     { id:'m34', title:'Hack Squat',                     muscle:'legs',        sub:'Quads',            desc:'Feet low on platform. Descend to full depth. Knees track over toes. Excellent quad isolation. Less lower back stress than barbell squat.', diff:'Intermediate', duration:'50s', premium:false, custom:false },
     { id:'m35', title:'Leg Extension',                  muscle:'legs',        sub:'Quads',            desc:'Set pad on shins. Extend fully, hold 1 second. Lower with control. Excellent quad isolation. Great for VMO activation.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m36', title:'Walking Lunge',                  muscle:'legs',        sub:'Quads',            desc:'Step forward, lower back knee near floor. Drive front foot up. Alternate legs. Keep torso upright throughout movement.', diff:'Beginner',     duration:'50s', premium:false, custom:false },
     { id:'m37', title:'Front Squat',                    muscle:'legs',        sub:'Quads',            desc:'Bar on front deltoids. More upright torso than back squat. Greater quad emphasis. Requires good wrist and ankle mobility.', diff:'Advanced',     duration:'55s', premium:true,  custom:false },
     // Hamstrings
     { id:'m38', title:'Romanian Deadlift (Legs)',       muscle:'legs',        sub:'Hamstrings',       desc:'Hip hinge with soft knees. Feel deep hamstring stretch at bottom. Drive hips forward. Keep bar close to body. Neutral spine throughout.', diff:'Intermediate', duration:'55s', premium:false, custom:false },
     { id:'m39', title:'Nordic Curl',                    muscle:'legs',        sub:'Hamstrings',       desc:'Anchor feet. Lower as slowly as possible under hamstring control. Catch with hands, push back up. Excellent eccentric strength builder.', diff:'Advanced',     duration:'50s', premium:false, custom:false },
     { id:'m40', title:'Lying Leg Curl',                 muscle:'legs',        sub:'Hamstrings',       desc:'Lie prone. Curl pad to glutes. Squeeze hamstrings. Slow on the way down. Keep hips on bench throughout.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m41', title:'Seated Leg Curl',                muscle:'legs',        sub:'Hamstrings',       desc:'Knee angle of 90° in seated position. Curl under seat. Greater stretch than lying curl due to hip angle. Good for peak hamstring contraction.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m42', title:'Single-Leg RDL',                 muscle:'legs',        sub:'Hamstrings',       desc:'Balance on one leg. Hinge forward, extending free leg behind. Keep hips square. Feel deep hamstring stretch. Great hip stability challenge.', diff:'Intermediate', duration:'50s', premium:true,  custom:false },
     // Calves
     { id:'m43', title:'Standing Calf Raise',            muscle:'legs',        sub:'Calves',           desc:'On edge of step. Lower heel fully below edge. Rise to ball of foot. Pause at top. Full range stretch is key for growth.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m44', title:'Seated Calf Raise',              muscle:'legs',        sub:'Calves',           desc:'Pad on lower thigh near knee. Full range of motion. Seated position emphasises soleus more than standing. Slow and controlled.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m45', title:'Donkey Calf Raise',              muscle:'legs',        sub:'Calves',           desc:'Hinge forward 90°, load on lower back. Full range calf raise. Hip position creates excellent gastrocnemius stretch and activation.', diff:'Intermediate', duration:'40s', premium:true,  custom:false },
     // Glutes
     { id:'m46', title:'Glute Bridge',                   muscle:'legs',        sub:'Glutes',           desc:'Lie supine. Drive hips to ceiling, squeeze glutes at top. Hold 2 seconds. Control lowering. Great glute activation exercise.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m47', title:'Hip Thrust',                     muscle:'legs',        sub:'Glutes',           desc:'Upper back on bench, bar over hips. Drive hips up. Full hip extension at top. Squeeze glutes hard. Lower under control.', diff:'Intermediate', duration:'50s', premium:false, custom:false },
     { id:'m48', title:'Cable Kickback',                 muscle:'legs',        sub:'Glutes',           desc:'Ankle cuff on low cable. Kick leg back and up. Full hip extension. Squeeze glute at top. Keep core braced, minimal hip rotation.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m49', title:'Sumo Deadlift',                  muscle:'legs',        sub:'Glutes',           desc:'Wide stance, toes out 45°. Drive knees out. Pull bar up, lock hips at top. Greater glute activation than conventional deadlift.', diff:'Intermediate', duration:'55s', premium:true,  custom:false },
     { id:'m50', title:'Step-Up',                        muscle:'legs',        sub:'Glutes',           desc:'Step onto box with one leg. Drive through heel to stand. Lower with control. Alternate or single-leg. Add dumbbells for progression.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
   
     /* ── SHOULDERS ──────────────────────────────────────────── */
     // Front Deltoid
     { id:'m51', title:'Overhead Barbell Press',         muscle:'shoulders',   sub:'Front Deltoid',    desc:'Press bar from front rack. Brace core. Full lockout overhead. Lower with control. Do not lean excessively. Great mass builder.', diff:'Intermediate', duration:'50s', premium:false, custom:false },
     { id:'m52', title:'Dumbbell Shoulder Press',        muscle:'shoulders',   sub:'Front Deltoid',    desc:'Seated or standing. Press dumbbells from ear height. Full extension at top. Neutral or pronated grip. Greater ROM than barbell.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'m53', title:'Front Raise',                    muscle:'shoulders',   sub:'Front Deltoid',    desc:'Arms straight, raise to shoulder height. Neutral or pronated grip. Slow and controlled. Avoid swinging. Can use cable for constant tension.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m54', title:'Arnold Press',                   muscle:'shoulders',   sub:'Front Deltoid',    desc:'Start with palms facing you. Rotate outward as you press up. Reverse on the way down. Works all three deltoid heads.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m55', title:'Push Press',                     muscle:'shoulders',   sub:'Front Deltoid',    desc:'Slight knee dip, drive bar overhead using leg drive. Lock out fully. Lower with control. Allows heavier loads than strict press.', diff:'Advanced',     duration:'50s', premium:true,  custom:false },
     // Lateral
     { id:'m56', title:'Lateral Raise',                  muscle:'shoulders',   sub:'Lateral',          desc:'Slight forward lean. Raise arms to shoulder height in wide arc. Lead with elbows. Pinky slightly higher. Control descent.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m57', title:'Cable Lateral Raise',            muscle:'shoulders',   sub:'Lateral',          desc:'Single-arm cable from low pulley. Raise across body to shoulder height. Constant tension throughout. Pause at top.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'m58', title:'Machine Lateral Raise',          muscle:'shoulders',   sub:'Lateral',          desc:'Set pad on lower arm. Raise to shoulder height. Isolates medial delt effectively. Great for hypertrophy with higher reps.', diff:'Beginner',     duration:'38s', premium:false, custom:false },
     { id:'m59', title:'Leaning Cable Lateral Raise',    muscle:'shoulders',   sub:'Lateral',          desc:'Hold pole, lean away from cable. Raise arm overhead. Greater range of motion. Excellent medial delt stretch at bottom.', diff:'Intermediate', duration:'40s', premium:true,  custom:false },
     // Rear Deltoid
     { id:'m60', title:'Face Pull',                      muscle:'shoulders',   sub:'Rear Deltoid',     desc:'Cable at head height. Rope to face, elbows high and wide. Externally rotate at top. Key exercise for shoulder health and balance.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m61', title:'Rear Delt Fly',                  muscle:'shoulders',   sub:'Rear Deltoid',     desc:'Bent forward 90°. Arc dumbbells up and out, leading with elbows. Squeeze rear delts at top. Keep slight elbow bend.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m62', title:'Reverse Pec Deck',               muscle:'shoulders',   sub:'Rear Deltoid',     desc:'Face into machine, arms forward. Drive elbows back and out. Squeeze rear delts at end range. Great isolation for beginners.', diff:'Beginner',     duration:'38s', premium:false, custom:false },
     { id:'m63', title:'Band Pull-Apart',                muscle:'shoulders',   sub:'Rear Deltoid',     desc:'Hold band at shoulder height, arms straight. Pull apart to chest. Squeeze shoulder blades. Excellent postural and warm-up exercise.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
   
     /* ── ARMS ───────────────────────────────────────────────── */
     // Biceps
     { id:'m64', title:'Barbell Curl',                   muscle:'arms',        sub:'Biceps',           desc:'Supinated grip. Elbows pinned to sides. Curl to full contraction. Slow eccentric. Classic mass builder.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'m65', title:'Hammer Curl',                    muscle:'arms',        sub:'Biceps',           desc:'Neutral grip, thumbs up. Curl to shoulder. Elbows stationary. Works brachialis and brachioradialis. Alternating or simultaneous.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m66', title:'Incline Dumbbell Curl',          muscle:'arms',        sub:'Biceps',           desc:'Lie back on incline bench. Arms hang straight. Curl fully. Excellent long head stretch at bottom. Pure bicep isolation.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m67', title:'Concentration Curl',             muscle:'arms',        sub:'Biceps',           desc:'Seated, elbow on inner thigh. Curl dumbbell fully. Squeeze at top. Eliminates cheating. Great for bicep peak development.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m68', title:'Preacher Curl',                  muscle:'arms',        sub:'Biceps',           desc:'Rest upper arm on pad. Curl from full extension. Excellent short head isolation. Do not lock out fully at bottom.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'m69', title:'Bayesian Curl',                  muscle:'arms',        sub:'Biceps',           desc:'Cable behind at hip height. Step forward for stretch. Curl toward shoulder. Maximum long head tension throughout range.', diff:'Intermediate', duration:'40s', premium:true,  custom:false },
     { id:'m70', title:'Cable Curl',                     muscle:'arms',        sub:'Biceps',           desc:'Stand facing low cable. Curl bar or rope to chin. Constant tension. Squeeze hard at top. Control return fully.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     // Triceps
     { id:'m71', title:'Tricep Rope Pushdown',           muscle:'arms',        sub:'Triceps',          desc:'Grip rope, palms in. Push down and apart at bottom. Fully extend elbows. Do not lean forward. Great lateral head isolation.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m72', title:'Skull Crusher',                  muscle:'arms',        sub:'Triceps',          desc:'Lie flat, bar above forehead. Lower to forehead bending only at elbows. Upper arms vertical. Extend back. Strong long head activation.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m73', title:'Close-Grip Bench Press',         muscle:'arms',        sub:'Triceps',          desc:'Grip at shoulder-width or narrower. Lower bar to lower chest. Press up, elbows close to body. Great mass builder for all three heads.', diff:'Intermediate', duration:'50s', premium:false, custom:false },
     { id:'m74', title:'Overhead Tricep Extension',      muscle:'arms',        sub:'Triceps',          desc:'Bar or dumbbell overhead. Lower behind head. Upper arms stay vertical. Full stretch of long head. Press back up to lockout.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m75', title:'Tricep Dips',                    muscle:'arms',        sub:'Triceps',          desc:'Parallel bars, torso upright. Lower until elbows 90°. Press back up. Keep elbows close to body to maximise tricep involvement.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m76', title:'Single-Arm Kickback',            muscle:'arms',        sub:'Triceps',          desc:'Brace on bench. Upper arm parallel to floor. Extend forearm back fully. Squeeze at lockout. Excellent long and lateral head isolation.', diff:'Beginner',     duration:'38s', premium:true,  custom:false },
     // Forearms
     { id:'m77', title:'Wrist Curl',                     muscle:'arms',        sub:'Forearms',         desc:'Seated, forearms on thighs. Full wrist flexion and extension. Use barbell or dumbbells. Slow and controlled. Builds wrist flexors.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'m78', title:'Reverse Wrist Curl',             muscle:'arms',        sub:'Forearms',         desc:'Overhand grip, forearms on thighs. Extend wrists upward. Targets wrist extensors and brachioradialis. Often neglected but important.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'m79', title:'Farmers Carry',                  muscle:'arms',        sub:'Forearms',         desc:'Hold heavy dumbbells or handles. Walk for distance or time. Builds grip, forearms and core simultaneously. Great functional exercise.', diff:'Intermediate', duration:'50s', premium:false, custom:false },
     { id:'m80', title:'Dead Hang',                      muscle:'arms',        sub:'Forearms',         desc:'Hang from pull-up bar. Relax shoulders. Hold as long as possible. Builds grip strength, decompresses spine, stretches lats.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
   
     /* ── CORE ───────────────────────────────────────────────── */
     // Abs
     { id:'m81', title:'Cable Crunch',                   muscle:'core',        sub:'Abs',              desc:'Kneel, rope behind head. Crunch elbows to knees. Pause at peak contraction. Resist on way up. Weighted ab exercise.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m82', title:'Plank to Shoulder Tap',          muscle:'core',        sub:'Abs',              desc:'High plank. Tap opposite shoulder, hips square. Brace core throughout. Minimal rotation. Builds anti-rotation stability.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'m83', title:'Hanging Leg Raise',              muscle:'core',        sub:'Abs',              desc:'Dead hang. Raise legs straight or bent to 90°. Control descent. Avoid swinging. Advanced lower ab and hip flexor exercise.', diff:'Advanced',     duration:'45s', premium:false, custom:false },
     { id:'m84', title:'Ab Wheel Rollout',               muscle:'core',        sub:'Abs',              desc:'Kneel with wheel under shoulders. Roll forward, hips down. Return using abs. Full extension is advanced. Start with partial range.', diff:'Advanced',     duration:'45s', premium:true,  custom:false },
     { id:'m85', title:'Crunch',                         muscle:'core',        sub:'Abs',              desc:'Lie supine, knees bent. Curl upper back off floor. Exhale at top. Do not pull neck. Focus on upper ab shortening.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'m86', title:'Reverse Crunch',                 muscle:'core',        sub:'Abs',              desc:'Lie supine, knees up. Curl hips toward chest. Pause at top. Lower with control. Emphasises lower abs and hip flexors.', diff:'Beginner',     duration:'38s', premium:false, custom:false },
     { id:'m87', title:'V-Up',                           muscle:'core',        sub:'Abs',              desc:'Lie flat, simultaneously lift legs and torso. Touch hands to feet at top. Lower back down fully. Demands full ab integration.', diff:'Advanced',     duration:'40s', premium:true,  custom:false },
     // Obliques
     { id:'m88', title:'Copenhagen Plank',               muscle:'core',        sub:'Obliques',         desc:'Side plank, top foot on bench. Bottom leg hangs. Hold or add adduction reps. Challenges obliques and adductors together.', diff:'Advanced',     duration:'45s', premium:false, custom:false },
     { id:'m89', title:'Russian Twist',                  muscle:'core',        sub:'Obliques',         desc:'Seated, torso at 45°. Rotate side to side. Add weight for progression. Keep spine neutral. Works rotational oblique strength.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m90', title:'Side Plank',                     muscle:'core',        sub:'Obliques',         desc:'Elbow or hand on floor. Stack hips. Hold position. Can add hip dips for extra challenge. Strong lateral core stabiliser.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'m91', title:'Pallof Press',                   muscle:'core',        sub:'Obliques',         desc:'Cable at chest height, stand sideways. Press handles forward, resist rotation. Key anti-rotation exercise for functional core strength.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'m92', title:'Woodchop',                       muscle:'core',        sub:'Obliques',         desc:'Cable high. Pull diagonally across body to opposite hip. Keep arms nearly straight. Rotate torso fully. Builds rotational power.', diff:'Intermediate', duration:'40s', premium:true,  custom:false },
     // Transverse Abs
     { id:'m93', title:'Dead Bug',                       muscle:'core',        sub:'Transverse Abs',   desc:'Supine, arms vertical, hips/knees 90°. Lower opposite arm and leg. Maintain lumbar contact with floor. Excellent deep core activation.', diff:'Beginner',     duration:'50s', premium:false, custom:false },
     { id:'m94', title:'Bird Dog',                       muscle:'core',        sub:'Transverse Abs',   desc:'On all fours. Extend opposite arm and leg. Hold 3 seconds. Return. Keep hips square. Excellent spinal stability and transverse activation.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'m95', title:'Hollow Body Hold',               muscle:'core',        sub:'Transverse Abs',   desc:'Lie supine. Press lower back flat. Arms overhead, legs straight. Hold. Activate transverse abdominis and deep core.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'m96', title:'Stomach Vacuum',                 muscle:'core',        sub:'Transverse Abs',   desc:'Exhale all air. Pull navel toward spine. Hold 20-60 seconds. Excellent direct transverse abdominis activation without movement.', diff:'Beginner',     duration:'30s', premium:false, custom:false },
   
     /* ── FULL BODY ──────────────────────────────────────────── */
     { id:'m97', title:'Barbell Clean and Press',        muscle:'fullbody',    sub:'Compound',         desc:'Power clean from floor to front rack, then press overhead. Full body explosive movement. Demands coordination and strength throughout the chain.', diff:'Advanced',     duration:'60s', premium:true,  custom:false },
     { id:'m98', title:'Thrusters',                      muscle:'fullbody',    sub:'Compound',         desc:'Front squat to overhead press in one fluid motion. Use barbell or dumbbells. Metabolically demanding. Great conditioning and strength builder.', diff:'Advanced',     duration:'55s', premium:false, custom:false },
     { id:'m99', title:'Kettlebell Swing',               muscle:'fullbody',    sub:'Compound',         desc:'Hip hinge. Drive hips forward explosively to swing kettlebell to shoulder height. Hinge back. Powerful posterior chain exercise.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'m100',title:'Burpee',                         muscle:'fullbody',    sub:'HIIT',             desc:'Squat, kick feet back to plank, push-up, jump feet forward, jump up. Full body conditioning. Scale by removing push-up or jump.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'m101',title:'Battle Ropes',                   muscle:'fullbody',    sub:'HIIT',             desc:'Alternate or simultaneous wave patterns. Keep chest up, knees slightly bent. 20-30 second bursts. Excellent metabolic conditioning.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'m102',title:'Box Jump',                       muscle:'fullbody',    sub:'HIIT',             desc:'Athletic stance. Swing arms and jump onto box. Land softly with soft knees. Step down. Builds power and fast-twitch muscle fibre.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'m103',title:'Turkish Get-Up',                 muscle:'fullbody',    sub:'Functional',       desc:'From lying with KB overhead, move to standing in a series of controlled steps. Demands total body stability, mobility and strength.', diff:'Advanced',     duration:'60s', premium:true,  custom:false },
     { id:'m104',title:'Bear Crawl',                     muscle:'fullbody',    sub:'Functional',       desc:'All-fours position, knees hover off floor. Crawl forward alternating opposite hand and foot. Builds total body coordination and core stability.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
   
     /* ── PHYSIOTHERAPY ──────────────────────────────────────── */
     // Shoulder Rehab
     { id:'p1',  title:'External Rotation (Theraband)',  muscle:'physio',      sub:'Shoulder Rehab',   desc:'Elbow at side, 90° flexion. Rotate arm outward against band resistance. Hold 2 sec. Return slowly. Targets infraspinatus and teres minor.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p2',  title:'Pendulum Exercise',              muscle:'physio',      sub:'Shoulder Rehab',   desc:'Lean on table, arm hanging freely. Use body momentum to create small circles. Clockwise and counter-clockwise. Gentle traction for rotator cuff.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'p3',  title:'Scapular Retraction',            muscle:'physio',      sub:'Shoulder Rehab',   desc:'Stand or sit tall. Squeeze shoulder blades together, hold 5 sec. Release slowly. Strengthens middle trapezius and rhomboids. Key postural exercise.', diff:'Beginner',     duration:'30s', premium:false, custom:false },
     { id:'p4',  title:'Wall Slide',                     muscle:'physio',      sub:'Shoulder Rehab',   desc:'Back and arms against wall. Slide arms overhead maintaining contact. Promotes scapular upward rotation and overhead mobility. Do slowly.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p5',  title:'Sleeper Stretch',                muscle:'physio',      sub:'Shoulder Rehab',   desc:'Lie on affected side, elbow at 90°. Use other hand to gently press forearm down. Hold 30 sec. Improves posterior capsule flexibility.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'p6',  title:'Internal Rotation (Band)',       muscle:'physio',      sub:'Shoulder Rehab',   desc:'Elbow at side. Rotate arm inward against band resistance. Targets subscapularis. Important for rotator cuff balance after injury.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p7',  title:'YTW Exercise',                   muscle:'physio',      sub:'Shoulder Rehab',   desc:'Prone on bench or floor. Raise arms into Y, T, and W positions. Targets lower and mid trapezius. Excellent scapular stabiliser.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'p8',  title:'Shoulder Flexion Wall Walk',     muscle:'physio',      sub:'Shoulder Rehab',   desc:'Face wall, walk fingers up as high as comfortable. Hold at top. Walk back down. Progressive shoulder flexion ROM restoration exercise.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     // Knee Rehab
     { id:'p9',  title:'Terminal Knee Extension (TKE)',  muscle:'physio',      sub:'Knee Rehab',       desc:'Band behind knee. From slight flexion, fully extend knee against resistance. Hold 1 sec. VMO activation exercise critical for knee stability.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p10', title:'Mini Squat',                     muscle:'physio',      sub:'Knee Rehab',       desc:'Feet shoulder-width. Bend knees 20-30° only. Hold 5 sec. Return. Pain-free range squat for early knee rehab. Progress depth gradually.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p11', title:'Straight Leg Raise',             muscle:'physio',      sub:'Knee Rehab',       desc:'Lie supine. Tighten quad, raise leg to 45°. Hold 3 sec. Lower slowly. Activates quads without knee joint stress. Post-op essential.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p12', title:'Step Down Exercise',             muscle:'physio',      sub:'Knee Rehab',       desc:'Stand on step. Slowly lower heel of free foot toward floor. Control with stance leg. Excellent VMO and knee stability rehab exercise.', diff:'Intermediate', duration:'40s', premium:false, custom:false },
     { id:'p13', title:'Knee CARs',                      muscle:'physio',      sub:'Knee Rehab',       desc:'Controlled articular rotation. Draw full circles with knee in maximum available range. Lubricates joint, maintains arthrokinematics and proprioception.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'p14', title:'VMO Isometric',                  muscle:'physio',      sub:'Knee Rehab',       desc:'Sit with knee at 30°. Press into a pad or towel roll under knee. Hold quad contraction 10 sec. Specifically activates vastus medialis oblique.', diff:'Beginner',     duration:'30s', premium:false, custom:false },
     // Lower Back Rehab
     { id:'p15', title:'Pelvic Tilt',                    muscle:'physio',      sub:'Lower Back Rehab', desc:'Lie supine, knees bent. Flatten lower back against floor by tilting pelvis. Hold 5 sec. Release. Activates deep core and resets lumbar lordosis.', diff:'Beginner',     duration:'30s', premium:false, custom:false },
     { id:'p16', title:'Cat-Cow Stretch',                muscle:'physio',      sub:'Lower Back Rehab', desc:'All fours. Arch back upward (cat). Release and let belly drop (cow). Breathe through each position. Mobilises thoracic and lumbar spine.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p17', title:"Child's Pose",                  muscle:'physio',      sub:'Lower Back Rehab', desc:'Kneel and sit back on heels. Arms forward on floor. Hold 30-60 sec. Gentle lumbar flexion stretch. Excellent for acute lower back pain relief.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'p18', title:'McKenzie Extension',             muscle:'physio',      sub:'Lower Back Rehab', desc:'Lie prone. Prop on elbows or hands. Allow lower back to extend. Hold 10-30 sec. Centralisation exercise for disc-related lower back pain.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'p19', title:'Multifidus Activation',          muscle:'physio',      sub:'Lower Back Rehab', desc:'All fours. Small spinal extension with lumbar only. No hip movement. Hold 5 sec. Activates multifidus — key lumbar segmental stabiliser.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p20', title:'Prone Hip Extension',            muscle:'physio',      sub:'Lower Back Rehab', desc:'Lie prone. Lift one straight leg off floor. Hold 3 sec. Lower. Activates gluteus maximus with minimal lumbar stress. Great early rehab exercise.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     // Hip Rehab
     { id:'p21', title:'Clamshell',                      muscle:'physio',      sub:'Hip Rehab',        desc:'Lie on side, hips and knees at 45°. Open top knee like a clamshell. Hold 2 sec. Targets gluteus medius. Essential for hip and knee stability.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p22', title:'Side-Lying Hip Abduction',       muscle:'physio',      sub:'Hip Rehab',        desc:'Lie on side. Raise top leg straight to 45°. Hold 2 sec. Lower with control. Strengthens gluteus medius without joint compression.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p23', title:'Hip CARs',                       muscle:'physio',      sub:'Hip Rehab',        desc:'Stand or lie. Draw maximum circumduction circle with hip. Front, side, back, other side. Maintains joint mobility and proprioceptive input.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'p24', title:'90-90 Hip Stretch',              muscle:'physio',      sub:'Hip Rehab',        desc:'Sit with front and back leg at 90°. Lean toward front shin. Hold 30-60 sec. Excellent hip external and internal rotator flexibility exercise.', diff:'Beginner',     duration:'50s', premium:false, custom:false },
     { id:'p25', title:'Hip Flexor Stretch',             muscle:'physio',      sub:'Hip Rehab',        desc:'Half-kneeling. Tuck pelvis under, drive forward gently. Hold 30 sec. Targets iliopsoas. Critical for desk workers and anterior pelvic tilt correction.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
     { id:'p26', title:'Pigeon Pose',                    muscle:'physio',      sub:'Hip Rehab',        desc:'Front leg externally rotated, back leg extended. Lower toward floor. Hold 30-60 sec. Excellent piriformis and deep hip external rotator stretch.', diff:'Intermediate', duration:'50s', premium:false, custom:false },
     // Ankle Rehab
     { id:'p27', title:'Alphabet Writing',               muscle:'physio',      sub:'Ankle Rehab',      desc:'Seated or lying. Write alphabet with toes. Full ankle range of motion in all planes. Classic post-sprain mobility restoration exercise.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     { id:'p28', title:'Single-Leg Balance',             muscle:'physio',      sub:'Ankle Rehab',      desc:'Stand on one leg. Hold 30-60 sec. Progress to eyes closed or unstable surface. Restores proprioception and neuromuscular control after ankle sprain.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'p29', title:'Towel Toe Curls',                muscle:'physio',      sub:'Ankle Rehab',      desc:'Barefoot on towel. Curl toes to scrunch towel toward you. Strengthens intrinsic foot muscles. Important for arch support and foot stability.', diff:'Beginner',     duration:'30s', premium:false, custom:false },
     { id:'p30', title:'Ankle Eversion (Band)',          muscle:'physio',      sub:'Ankle Rehab',      desc:'Band around foot. Evert foot outward against resistance. Targets peroneals. Critical strengthening exercise after lateral ankle sprain.', diff:'Beginner',     duration:'35s', premium:false, custom:false },
     // Neck Rehab
     { id:'p31', title:'Cervical Retraction',            muscle:'physio',      sub:'Neck Rehab',       desc:'Gently glide chin straight back. Hold 3 sec. Release. Corrects forward head posture. Activates deep cervical flexors. Do 10 reps hourly.', diff:'Beginner',     duration:'25s', premium:false, custom:false },
     { id:'p32', title:'Neck Side Bend Stretch',         muscle:'physio',      sub:'Neck Rehab',       desc:'Gently tilt ear toward shoulder. Hand on head for gentle overpressure. Hold 30 sec. Stretches scalenes and upper trapezius. Both sides.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'p33', title:'Levator Scapulae Stretch',       muscle:'physio',      sub:'Neck Rehab',       desc:'Turn head 45°, look down toward armpit. Gentle hand pressure on back of head. Hold 30 sec. Targets levator scapulae — common tension area.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'p34', title:'Deep Neck Flexor Activation',   muscle:'physio',      sub:'Neck Rehab',       desc:'Lie supine. Gently nod chin down, hold 10 sec. Only small movement. Activates longus colli and capitis. Critical for cervical stability.', diff:'Beginner',     duration:'30s', premium:false, custom:false },
     // Balance & Proprioception
     { id:'p35', title:'BOSU Balance',                   muscle:'physio',      sub:'Balance',          desc:'Stand on BOSU dome side. Single or double leg. Progress to eyes closed or ball throwing. Excellent proprioception and ankle-to-hip stability training.', diff:'Intermediate', duration:'45s', premium:false, custom:false },
     { id:'p36', title:'Star Excursion Balance',         muscle:'physio',      sub:'Balance',          desc:'Stand on one leg. Reach with other foot in 8 directions. Return to start. Assesses and trains dynamic balance. Used post ACL and ankle rehab.', diff:'Intermediate', duration:'50s', premium:true,  custom:false },
     { id:'p37', title:'Tandem Walk',                    muscle:'physio',      sub:'Balance',          desc:'Walk heel-to-toe in a straight line. Arms out or crossed. Eyes open then closed. Tests and trains vestibular and proprioceptive balance systems.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     // Breathing & Diaphragm
     { id:'p38', title:'Diaphragmatic Breathing',        muscle:'physio',      sub:'Breathing',        desc:'Lie supine. Place hand on belly. Inhale, belly rises, chest still. Exhale slowly. 4-count in, 6-count out. Activates diaphragm and parasympathetic system.', diff:'Beginner',     duration:'40s', premium:false, custom:false },
     { id:'p39', title:'90-90 Breathing',                muscle:'physio',      sub:'Breathing',        desc:'Lie supine, hips and knees at 90° on wall. Exhale fully. Inhale to lateral ribcage. Hold exhale. Resolves rib flare and restores Zone of Apposition.', diff:'Beginner',     duration:'45s', premium:false, custom:false },
   ];
   
   let customExercises    = [];
   let _customVideosUnsubscribe = null;
   let _publicVideosUnsubscribe  = null;
   let publicVideos              = [];
   let sentRoutines       = JSON.parse(localStorage.getItem('repcast_routines') || '[]');
   let adminDeleteTargetId = null;
   let adminSearchQuery   = '';
   
   /* ── APP STATE ───────────────────────────────────────────── */
   const state = {
     user:         null,
     isManager:    false,
     cart:         new Map(),
     activeTab:    'master',
     filterMuscle: null,
     filterSub:    null,
     searchQuery:  '',
     currentView:  'library',
   };
   
   /* ── PERSIST MASTER LIBRARY ─────────────────────────────── */
   function saveMasterLibrary() {
     localStorage.setItem('repcast_master', JSON.stringify(MASTER_EXERCISES));
     if (window._firebase && window._db) {
       const { setDoc, doc } = window._firebase;
       setDoc(doc(window._db, 'config', 'masterLibrary'), {
         exercises: MASTER_EXERCISES,
         updatedAt: new Date().toISOString(),
       }).then(function() {
         console.log('[RepCast] Master library saved to Firestore:', MASTER_EXERCISES.length, 'exercises');
         showToast('Library saved to cloud (' + MASTER_EXERCISES.length + ' exercises)');
       }).catch(function(e) {
         console.error('[RepCast] Firestore save FAILED:', e.code, e.message);
         // Common fix: ensure config/masterLibrary rule is: allow write: if true;
         showToast('Saved locally but cloud sync failed: ' + e.code);
       });
     } else {
       console.warn('[RepCast] saveMasterLibrary: window._firebase or window._db not ready');
       showToast('Saved locally (cloud not connected)');
     }
   }
   
   /* ── Load master library from Firestore (real-time) ────────
      Overwrites the local default if a manager has saved changes.
      Called once on page load, before bootTrainerApp.            */
   async function syncMasterLibraryFromFirestore() {
     if (!window._firebase || !window._db) return;
     try {
       const { getDoc, doc } = window._firebase;
       const snap = await getDoc(doc(window._db, 'config', 'masterLibrary'));
       if (snap.exists()) {
         const data = snap.data();
         if (data.exercises && data.exercises.length) {
           MASTER_EXERCISES = data.exercises;
           localStorage.setItem('repcast_master', JSON.stringify(MASTER_EXERCISES));
         }
       }
     } catch (e) {
       console.warn('Could not sync master library from Firestore:', e);
     }
   }
   
   /* ══════════════════════════════════════════════════════════
      AUTH
   ══════════════════════════════════════════════════════════ */
   
   function showRegister() {
     document.getElementById('auth-login').style.display    = 'none';
     document.getElementById('auth-register').style.display = 'block';
     document.getElementById('auth-manager').style.display  = 'none';
   }
   function showLogin() {
     document.getElementById('auth-login').style.display    = 'block';
     document.getElementById('auth-register').style.display = 'none';
     document.getElementById('auth-manager').style.display  = 'none';
   }
   function showManagerLogin() {
     document.getElementById('auth-login').style.display    = 'none';
     document.getElementById('auth-register').style.display = 'none';
     document.getElementById('auth-manager').style.display  = 'block';
   }
   
   /* ── Manager login (credential check, no Firebase Auth) ── */
   function doManagerLogin() {
     const email = document.getElementById('manager-email').value.trim();
     const pass  = document.getElementById('manager-pass').value;
   
     if (email !== MANAGER_EMAIL || pass !== MANAGER_PASSWORD) {
       showToast('❌ Invalid manager credentials.');
       document.getElementById('manager-pass').value = '';
       document.getElementById('manager-pass').focus();
       return;
     }
   
     state.isManager = true;
     state.user = { uid: 'manager', email: MANAGER_EMAIL, fullName: 'Reem Kabra', role: 'manager' };
   
     showScreen('manager');
   
     renderAdminTable();
     updateAdminStats();
     showToast('✓ Welcome, Manager!');
   }
   
   /* ── Email / Password login ─────────────────────────────── */
   async function doLogin() {
     const email = document.getElementById('login-email').value.trim();
     const pass  = document.getElementById('login-pass').value;
     if (!email || !pass) { showToast('Please enter email and password.'); return; }
     try {
       const { user } = await window._firebase.signInWithEmailAndPassword(window._auth, email, pass);
       await _bootFromFirebaseUser(user);
     } catch (e) {
       showToast('❌ ' + friendlyError(e.code));
     }
   }
   
   /* ── Google login ───────────────────────────────────────── */
   function doGoogleLogin() {
     // signInWithPopup MUST be called synchronously from a user gesture.
     // Do not await anything before calling it — browsers block popups
     // that open after async operations.
     if (!window._auth || !window._firebase) {
       showToast('Firebase not loaded yet. Please wait a moment and try again.');
       return;
     }
     var provider = new window._firebase.GoogleAuthProvider();
     provider.addScope('email');
     provider.addScope('profile');
   
     window._firebase.signInWithPopup(window._auth, provider)
       .then(async function(result) {
         var user    = result.user;
         var profile = await loadUserProfile(user.uid);
         if (!profile) {
           await createUserProfile(user.uid, {
             fullName:     user.displayName || 'Trainer',
             email:        user.email,
             businessName: 'My Studio',
             phone:        '',
             specialty:    'Personal Trainer',
           });
         }
         await _bootFromFirebaseUser(user);
       })
       .catch(function(e) {
         console.error('Google login error:', e.code, e.message);
         if (e.code === 'auth/popup-blocked') {
           showToast('Popup was blocked. Please allow popups for this site and try again.');
         } else if (e.code === 'auth/popup-closed-by-user') {
           showToast('Google sign-in was cancelled.');
         } else if (e.code === 'auth/unauthorized-domain') {
           showToast('This domain is not authorised in Firebase. Add it in Firebase Console → Authentication → Settings → Authorised domains.');
         } else {
           showToast('❌ Google sign-in failed: ' + friendlyError(e.code));
         }
       });
   }
   
   /* ── Register ───────────────────────────────────────────── */
   async function doRegister() {
     const name  = document.getElementById('reg-name').value.trim();
     const biz   = document.getElementById('reg-biz').value.trim();
     const email = document.getElementById('reg-email').value.trim();
     const pass  = document.getElementById('reg-pass').value;
     const spec  = document.getElementById('reg-specialty').value;
     if (!name || !email || !pass) { showToast('Please fill in all fields.'); return; }
     try {
       const { user } = await window._firebase.createUserWithEmailAndPassword(window._auth, email, pass);
   
       // Send email verification
       try {
         await window._firebase.sendEmailVerification(user);
       } catch(verErr) {
         console.warn('Could not send verification email:', verErr);
       }
   
       await createUserProfile(user.uid, {
         fullName: name, businessName: biz, email,
         phone: '', specialty: spec,
       });
       await _bootFromFirebaseUser(user);
       showToast('✅ Account created! Check your email to verify your address.');
     } catch (e) {
       showToast('❌ ' + friendlyError(e.code));
     }
   }
   
   /* ── Shared boot helper — loads profile then boots app ─── */
   async function _bootFromFirebaseUser(user) {
     const profile = await loadUserProfile(user.uid) || {};
   
     // ── Determine correct tier ──────────────────────────────
     // Raw tier from Firestore (may be old 'trial' set by previous code)
     let storedTier = profile.tier || 'free_limited';
     const daysLeft = calcTrialDays(profile.trialEndDate);
   
     // Determine correct tier — handle both old auto-trial users and new flow
     let tier;
     if (storedTier === 'premium') {
       tier = 'premium';
     } else if (storedTier === 'trial') {
       // Only honour 'trial' if:
       // 1. The user explicitly activated it (trialActivatedByUser flag), AND
       // 2. trialEndDate is in the future
       const isLegitTrial = profile.trialActivatedByUser === true
                         && profile.trialEndDate
                         && daysLeft > 0;
       if (isLegitTrial) {
         tier = 'trial';
       } else {
         // Old auto-trial or expired trial → downgrade to free_limited
         tier = 'free_limited';
         try {
           await window._firebase.setDoc(
             window._firebase.doc(window._db, 'users', user.uid),
             { tier: 'free_limited', trialExpiredAt: new Date().toISOString() },
             { merge: true }
           );
         } catch(e) { console.warn('Tier downgrade failed:', e); }
       }
     } else {
       // free_limited, free, or unset → always free_limited for new system
       tier = 'free_limited';
     }
   
     // trialUsed = true only when the user explicitly activated a trial via
     // the new flow (trialActivatedByUser flag), NOT the old auto-trial.
     // This prevents old users from being blocked from activating their trial.
     const trialUsed = !!profile.trialActivatedByUser;
   
     state.user = {
       uid:           user.uid,
       email:         user.email,
       fullName:      profile.fullName     || user.displayName || 'Trainer',
       businessName:  profile.businessName || 'My Studio',
       phone:         profile.phone        || '',
       specialty:     profile.specialty    || 'Personal Trainer',
       tier,
       trialDaysLeft: tier === 'trial' ? daysLeft : 0,
       trialUsed,
     };
     state.isManager = false;
     bootTrainerApp();
   }
   
   /* ── Screen switcher (landing / auth / app) ─────────────── */
   function showScreen(name) {
     document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
     document.getElementById('screen-' + name).classList.add('active');
   }
   
   /* ── Logout — signs out of Firebase, returns to landing ── */
   async function doLogout() {
     // Cancel real-time listeners and timers before signing out
     if (_customVideosUnsubscribe) { _customVideosUnsubscribe(); _customVideosUnsubscribe = null; }
     if (_publicVideosUnsubscribe)  { _publicVideosUnsubscribe();  _publicVideosUnsubscribe  = null; }
     stopTierExpiryChecker();
     customExercises = [];
     publicVideos    = [];
     try {
       await window._firebase.signOut(window._auth);
     } catch (e) { /* ignore */ }
     state.user      = null;
     state.isManager = false;
     state.cart.clear();
     showScreen('landing');
     showToast('Signed out.');
   }
   
   /* ── Upgrade nudge banner ───────────────────────────────── */
   function dismissNudge() {
     document.getElementById('upgrade-nudge-banner').classList.add('dismissed');
     sessionStorage.setItem('nudgeDismissed', '1');
   }
   
   function updateNudgeBanner() {
     var banner = document.getElementById('upgrade-nudge-banner');
     if (!banner || !state.user) return;
   
     var tier = state.user.tier;
   
     if (tier === 'premium') {
       banner.classList.add('dismissed');
       return;
     }
   
     if (tier !== 'free_limited' && sessionStorage.getItem('nudgeDismissed')) {
       banner.classList.add('dismissed');
       return;
     }
     banner.classList.remove('dismissed');
   
     var nudgeText = document.getElementById('upgrade-nudge-text');
     if (!nudgeText) return;
   
     if (tier === 'trial') {
       var days = state.user.trialDaysLeft || 0;
       nudgeText.innerHTML = 'Trial: <strong>' + days + ' day' + (days !== 1 ? 's' : '') + ' left</strong> &mdash; <a href="#" onclick="showUpgrade()" style="color:var(--accent)">Upgrade to Pro (₪25/mo)</a> to keep full access.';
   
     } else if (tier === 'free_limited') {
       if (state.user.trialUsed) {
         nudgeText.innerHTML = 'Your trial ended. <a href="#" onclick="showUpgrade()" style="color:var(--accent)">Upgrade to Pro &mdash; ₪25/mo</a> for full access.';
       } else {
         nudgeText.innerHTML = 'You have <strong>limited access</strong>. <a href="#" onclick="openModal(String.fromCharCode(39)+String.fromCharCode(115,116,97,114,116,45,116,114,105,97,108)+String.fromCharCode(39))" style="color:var(--accent)">Start free 7-day trial</a> &mdash; no card needed.';
       }
     } else {
       nudgeText.innerHTML = 'Free plan. <a href="#" onclick="showUpgrade()" style="color:var(--accent)">Upgrade to Pro</a> to unlock everything.';
     }
   }
   
   /* ── Boot trainer app UI ────────────────────────────────── */
   async function bootTrainerApp() {
     const u    = state.user;
     const tier = u.tier;
   
     // ── User identity ─────────────────────────────────────────
     document.getElementById('topnav-avatar').textContent        = initials(u.fullName);
     document.getElementById('topnav-name').textContent          = u.fullName;
     document.getElementById('profile-avatar').textContent       = initials(u.fullName);
     document.getElementById('profile-display-name').textContent = u.fullName;
     document.getElementById('profile-display-biz').textContent  = u.businessName;
     document.getElementById('pf-name').value                    = u.fullName;
     document.getElementById('pf-phone').value                   = u.phone;
     document.getElementById('pf-biz').value                     = u.businessName;
   
     // ── Trial pill in topnav: only show when actively on trial ──
     const trialPill = document.getElementById('trial-pill-top');
     if (trialPill) {
       if (tier === 'trial') {
         trialPill.style.display = '';
         document.getElementById('trial-days-top').textContent = u.trialDaysLeft;
       } else {
         trialPill.style.display = 'none';
       }
     }
   
     // ── Profile / Billing tier info ───────────────────────────
     const tierDaysEl    = document.getElementById('tier-days');
     const billingDaysEl = document.getElementById('billing-days');
     const tierCardEl    = document.getElementById('tier-status-card');
   
     if (tier === 'trial') {
       if (tierDaysEl)    tierDaysEl.textContent    = u.trialDaysLeft;
       if (billingDaysEl) billingDaysEl.textContent = u.trialDaysLeft + ' days';
       if (tierCardEl)    tierCardEl.style.display  = '';
     } else if (tier === 'premium') {
       if (tierCardEl)    tierCardEl.style.display  = 'none';
     } else {
       // free_limited or free — hide trial countdown, show upgrade prompt
       if (tierDaysEl)    tierDaysEl.textContent    = '—';
       if (billingDaysEl) billingDaysEl.textContent = '—';
       if (tierCardEl)    tierCardEl.style.display  = tier === 'free_limited' ? '' : 'none';
     }
   
     showScreen('app');
     buildMuscleFilters();
   
     // Sync master library from Firestore (picks up manager changes)
     await syncMasterLibraryFromFirestore();

     // Start video listeners — called here after _bootFromFirebaseUser
     // which itself is called from onAuthStateChanged, so by this point
     // the Firebase Auth token IS fully ready and attached.
     // onAuthStateChanged guarantees token validity before calling _bootFromFirebaseUser.
     loadCustomVideosFromFirestore(u.uid);
     loadPublicVideosFromFirestore();
   
     renderLibrary();
     updateStats();
     renderRoutinesHistory();
     updateNudgeBanner();
     startTierExpiryChecker();
   }
   
   /* ── Load user's custom videos from Firestore (real-time) ── */
   function loadCustomVideosFromFirestore(uid) {
     if (!window._firebase || !window._db) return;

     // CRITICAL: Firestore rules check request.auth.uid == userId.
     // If currentUser is null when listener starts, the rule fails.
     // Retry until Firebase Auth has fully restored the session.
     var currentUser = window._auth && window._auth.currentUser;
     if (!currentUser) {
       console.warn('[RepCast] Auth not ready — retrying in 1s for uid:', uid);
       setTimeout(function() { loadCustomVideosFromFirestore(uid); }, 1000);
       return;
     }

     // Cancel any previous listener
     if (_customVideosUnsubscribe) {
       _customVideosUnsubscribe();
       _customVideosUnsubscribe = null;
     }
   
     var db         = window._db;
     var fb         = window._firebase;
     var colRef     = fb.collection(db, 'customVideos', uid, 'videos');


   
     if (!fb.onSnapshot) {
       // Fallback for older SDK
       _loadCustomVideosFallback(uid);
       return;
     }
   
     // onSnapshot fires immediately with cached data, then again on any change.
     // Path customVideos/{uid}/videos is already scoped to this user only.
     _customVideosUnsubscribe = fb.onSnapshot(
       colRef,
       function(snap) {
         // Build clean array from snapshot — single update, no async race
         var videos = [];
         snap.forEach(function(docSnap) {
           var data = docSnap.data();
           videos.push({
             id:          data.id          || docSnap.id,
             title:       data.title       || 'Untitled',
             muscle:      data.muscle      || 'fullbody',
             sub:         data.sub         || '',
             desc:        data.desc        || '',
             diff:        data.diff        || 'Custom',
             duration:    data.duration    || '—',
             videoURL:    data.videoURL    || '',
             storagePath: data.storagePath || '',
             isPublic:    data.isPublic    === true,
             ownerId:     uid,
             custom:      true,
             premium:     false,
             createdAt:   data.createdAt   || '',
           });
         });
   
         // Single clean assignment — no race condition
         customExercises = videos;
   
         console.log('[RepCast] Custom videos loaded:', videos.length, 'for', uid);
   
         // Update counter
         var countEl = document.getElementById('custom-count');
         if (countEl) countEl.textContent = videos.length;
   
         // Re-render if on custom tab or master tab (public videos affect master)
         renderLibrary();
         updateStats();
       },
       function(err) {
         console.error('[RepCast] Video listener error:', err.code, err.message);
         if (err.code === 'permission-denied') {
           showToast('Cannot load videos — check Firestore rule for customVideos/{userId}/videos/{videoId}');
         }
       }
     );
   }
   
   // Fallback: getDocs one-time read
   async function _loadCustomVideosFallback(uid) {
     try {
       var snap = await window._firebase.getDocs(
         window._firebase.collection(window._db, 'customVideos', uid, 'videos')
       );
       var videos = [];
       snap.forEach(function(docSnap) {
         var data = docSnap.data();
         videos.push({
           id:          data.id          || docSnap.id,
           title:       data.title       || 'Untitled',
           muscle:      data.muscle      || 'fullbody',
           sub:         data.sub         || '',
           desc:        data.desc        || '',
           diff:        data.diff        || 'Custom',
           duration:    data.duration    || '—',
           videoURL:    data.videoURL    || '',
           storagePath: data.storagePath || '',
           isPublic:    data.isPublic    === true,
           ownerId:     uid,
           custom:      true,
           premium:     false,
         });
       });
       customExercises = videos;
       var countEl = document.getElementById('custom-count');
       if (countEl) countEl.textContent = videos.length;
       renderLibrary();
       updateStats();
     } catch(e) {
       console.error('[RepCast] Fallback load error:', e.code, e.message);
     }
   }
   
   /* ── Load ALL public videos from all trainers (real-time) ── */
   function loadPublicVideosFromFirestore() {
     if (!window._firebase || !window._db) return;
     if (_publicVideosUnsubscribe) { _publicVideosUnsubscribe(); _publicVideosUnsubscribe = null; }
     var col = window._firebase.collection(window._db, 'publicVideos');
     if (!window._firebase.onSnapshot) return;
     _publicVideosUnsubscribe = window._firebase.onSnapshot(col,
       function(snap) {
         var vids = [];
         snap.forEach(function(d) {
           var data = d.data();
           vids.push({
             id:       d.id,
             title:    data.title    || '',
             muscle:   data.muscle   || 'fullbody',
             sub:      data.sub      || '',
             desc:     data.desc     || '',
             diff:     data.diff     || 'Custom',
             duration: data.duration || '—',
             videoURL: data.videoURL || '',
             isPublic: true,
             custom:   true,
             ownerId:  data.ownerId  || '',
             premium:  false,
           });
         });
         publicVideos = vids;
         console.log('[RepCast] Public videos:', vids.length);
         renderLibrary();
       },
       function(err) { console.error('[RepCast] publicVideos error:', err.code); }
     );
   }

   /* ── Delete a custom video (Storage + Firestore + publicVideos) ── */
   async function deleteCustomVideo(id, event) {
     event.stopPropagation();
     if (!state.user || !window._firebase || !window._db) return;

     var ex = customExercises.find(function(e) { return e.id === id; });
     if (!ex) return;

     // Confirm before deleting
     if (!confirm('Delete "' + ex.title + '"? This cannot be undone.')) return;

     var fb = window._firebase;
     var db = window._db;

     try {
       // 1. Delete from Firestore customVideos
       await fb.deleteDoc(fb.doc(db, 'customVideos', state.user.uid, 'videos', id));

       // 2. If public, also delete from publicVideos collection
       if (ex.isPublic) {
         await fb.deleteDoc(fb.doc(db, 'publicVideos', id)).catch(function(){});
       }

       // 3. Delete from Firebase Storage if we have the path
       if (ex.storagePath && window._storage && fb.ref && fb.deleteObject) {
         fb.deleteObject(fb.ref(window._storage, ex.storagePath)).catch(function(e){
           console.warn('Storage delete failed (file may already be gone):', e.code);
         });
       }

       showToast('"' + ex.title + '" deleted.');
       // onSnapshot will automatically update customExercises and re-render

     } catch(e) {
       console.error('deleteCustomVideo error:', e.code, e.message);
       showToast('Could not delete video — try again.');
     }
   }

   function reloadMyVideos() {
     if (!state.user) return;
     showToast('Reloading your videos…');
     customExercises = [];
     loadCustomVideosFromFirestore(state.user.uid);
     setTimeout(function() { renderLibrary(); updateStats(); }, 2000);
   }

   /* ── Tier expiry checker — runs on boot and every 30 min ── */
   function checkTierExpiry() {
     if (!state.user || !window._firebase || !window._db) return;
     const tier = state.user.tier;
   
     // Check trial expiry
     if (tier === 'trial' && state.user.trialDaysLeft <= 0) {
       console.log('Trial expired — downgrading to free_limited');
       window._firebase.setDoc(
         window._firebase.doc(window._db, 'users', state.user.uid),
         { tier: 'free_limited', trialExpiredAt: new Date().toISOString() },
         { merge: true }
       ).then(() => {
         state.user.tier = 'free_limited';
         state.user.trialDaysLeft = 0;
         renderLibrary();
         updateNudgeBanner();
         updateStats();
         showToast('Your free trial has ended. Upgrade to Pro to restore full access.');
       }).catch(e => console.warn('Tier downgrade error:', e));
       return;
     }
   
     // Re-fetch profile from Firestore to catch server-side changes
     // (e.g. Morning webhook upgraded or cancelled the user)
     loadUserProfile(state.user.uid).then(profile => {
       if (!profile) return;
       const serverTier = profile.tier;
       const localTier  = state.user.tier;
   
       // Server has a different tier than local state — sync it
       if (serverTier !== localTier) {
         console.log('Tier changed on server:', localTier, '→', serverTier);
   
         // Check if premium cancelled but still in grace period
         if (localTier === 'premium' && serverTier !== 'premium' && profile.premiumUntil) {
           const graceDays = Math.ceil((new Date(profile.premiumUntil) - Date.now()) / 86400000);
           if (graceDays > 0) {
             // Still in grace period — keep premium locally, show notice
             showToast('Subscription cancelled. Access continues until ' +
               new Date(profile.premiumUntil).toLocaleDateString('en-IL'));
             return;
           }
         }
   
         // Apply server tier
         state.user.tier = serverTier === 'premium' ? 'premium'
                         : serverTier === 'trial'   ? 'trial'
                         : 'free_limited';
   
         if (serverTier === 'trial') {
           state.user.trialDaysLeft = calcTrialDays(profile.trialEndDate);
         }
   
         renderLibrary();
         updateNudgeBanner();
         updateStats();
   
         if (serverTier === 'premium' && localTier !== 'premium') {
           showToast('🎉 Premium activated! Full access unlocked.');
         }
       }
     }).catch(e => console.warn('Tier expiry check error:', e));
   }
   
   // Run expiry check every 30 minutes while app is open
   let _tierCheckInterval = null;
   function startTierExpiryChecker() {
     if (_tierCheckInterval) clearInterval(_tierCheckInterval);
     checkTierExpiry(); // run immediately on boot
     _tierCheckInterval = setInterval(checkTierExpiry, 30 * 60 * 1000);
   }
   function stopTierExpiryChecker() {
     if (_tierCheckInterval) { clearInterval(_tierCheckInterval); _tierCheckInterval = null; }
   }
   
   /* ── Auth persistence — restore session on page refresh ── */
   // Runs once on load; if Firebase already has a session, boots straight in.
   function _initAuthPersistence() {
     if (!window._auth || !window._firebase) return;
     window._firebase.onAuthStateChanged(window._auth, async (user) => {
       if (user && !state.user && !state.isManager) {
         // Session restored on page refresh — boot the full app
         await _bootFromFirebaseUser(user);
       }
       // Note: bootTrainerApp (called inside _bootFromFirebaseUser) starts
       // the Firestore listeners. By the time we reach this callback,
       // Firebase Auth has confirmed the token is valid and attached,
       // so Firestore reads will succeed.
     });
   }
   
   /* ── Helpers ─────────────────────────────────────────────── */
   function initials(name) {
     return (name || 'U').split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
   }
   
   async function loadUserProfile(uid) {
     const snap = await window._firebase.getDoc(
       window._firebase.doc(window._db, 'users', uid)
     );
     return snap.exists() ? snap.data() : null;
   }
   
   async function createUserProfile(uid, data) {
     await window._firebase.setDoc(
       window._firebase.doc(window._db, 'users', uid),
       {
         ...data,
         createdAt: new Date().toISOString(),
         tier:      'free_limited',   // new users start limited, trial is opt-in
       }
     );
   }
   
   /* ── User clicks "Start Free Trial" from inside the app ── */
   async function activateFreeTrial() {
     if (!state.user) { showToast('Please log in first.'); return; }
     if (state.user.tier === 'trial')   { showToast('Your trial is already active!'); closeAllModals(); return; }
     if (state.user.tier === 'premium') { showToast('You already have Premium access!'); closeAllModals(); return; }
   
     // ── Check Firestore for trialActivatedByUser flag (one per account) ──
     // We use this specific flag — NOT trialStartDate — because old auto-trial
     // users already have trialStartDate but never chose to activate manually.
     let profile;
     try {
       profile = await loadUserProfile(state.user.uid);
     } catch(e) {
       showToast('Connection error. Please try again.'); return;
     }
   
     if (profile && profile.trialActivatedByUser === true) {
       // This user already manually activated their trial before
       state.user.trialUsed = true;
       closeAllModals();
       setTimeout(() => showUpgrade(), 200);
       return;
     }
   
     // ── Activate trial ───────────────────────────────────────
     const trialStart = new Date().toISOString();
     const trialEnd   = new Date(Date.now() + 7 * 86400000).toISOString();
   
     try {
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'users', state.user.uid),
         {
           tier:                  'trial',
           trialStartDate:        trialStart,
           trialEndDate:          trialEnd,
           trialActivatedByUser:  true,       // ← the one-time flag
         },
         { merge: true }
       );
   
       // Update local state immediately
       state.user.tier          = 'trial';
       state.user.trialDaysLeft = 7;
       state.user.trialUsed     = true;
   
       // Update all UI elements that show trial info
       const daysEls = ['trial-days-top', 'tier-days', 'nudge-days'];
       daysEls.forEach(id => {
         const el = document.getElementById(id);
         if (el) el.textContent = 7;
       });
       const billingEl = document.getElementById('billing-days');
       if (billingEl) billingEl.textContent = '7 ימים';
   
       // Close modal, re-render library (unlocks cards), update banner
       closeAllModals();
       sessionStorage.removeItem('nudgeDismissed');
   
       // Small delay to let modal close animation finish before re-render
       setTimeout(() => {
         renderLibrary();
         updateNudgeBanner();
         showToast('🎉 Free trial activated! You now have full access for 7 days.');
       }, 300);
   
     } catch(e) {
       console.error('activateFreeTrial Firestore error:', e);
       showToast('Could not activate trial. Check your internet connection and try again.');
     }
   }
   
   /* ── Prompt trial or upgrade depending on tier ─────────── */
   function promptTrialOrUpgrade() {
     if (!state.user) return;
     if (state.user.tier === 'premium') return;
     if (state.user.tier === 'trial')   { showToast('Your trial is already active!'); return; }
     // free_limited with no prior trial → show trial modal
     // free_limited with prior trial used → show upgrade
     if (state.user.tier === 'free_limited') {
       if (state.user.trialUsed) {
         showUpgrade();
       } else {
         openModal('start-trial');
       }
     } else {
       showUpgrade();
     }
   }
   
   function calcTrialDays(trialEndDate) {
     if (!trialEndDate) return 0;
     return Math.max(0, Math.ceil((new Date(trialEndDate) - Date.now()) / 86400000));
   }
   
   function friendlyError(code) {
     const map = {
       'auth/user-not-found':       'No account found with that email.',
       'auth/wrong-password':       'Incorrect password.',
       'auth/invalid-credential':   'Incorrect email or password.',
       'auth/email-already-in-use': 'An account with that email already exists.',
       'auth/weak-password':        'Password must be at least 6 characters.',
       'auth/invalid-email':        'Please enter a valid email address.',
       'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
       'auth/too-many-requests':    'Too many attempts. Please wait a moment and try again.',
       'auth/unauthorized-domain':   'Domain not authorised. Add repcast.co.il in Firebase Console → Authentication → Settings → Authorised domains.',
       'auth/operation-not-allowed': 'Google sign-in is not enabled. Enable it in Firebase Console → Authentication → Sign-in method.',
     };
     return map[code] || 'Something went wrong. Please try again.';
   }
   
   /* ══════════════════════════════════════════════════════════
      VIEWS
   ══════════════════════════════════════════════════════════ */
   
   function setView(viewId, navEl) {
     document.querySelectorAll('#screen-app .view').forEach(v => v.classList.remove('active'));
     document.querySelectorAll('.topnav-link').forEach(n => n.classList.remove('active'));
     document.getElementById('view-' + viewId).classList.add('active');
     if (navEl) navEl.classList.add('active');
     state.currentView = viewId;
     const musclePanel = document.getElementById('muscle-panel');
     if (musclePanel) musclePanel.style.display = viewId === 'library' ? '' : 'none';
   }
   
   function setAdminView(viewId, navEl) {
     document.querySelectorAll('.admin-view').forEach(v => v.classList.remove('active'));
     document.querySelectorAll('#manager-topnav .topnav-link').forEach(n => n.classList.remove('active'));
     document.getElementById('admin-view-' + viewId).classList.add('active');
     if (navEl) navEl.classList.add('active');
     // Auto-load users when switching to users tab
     if (viewId === 'users') loadAdminUsers();
   }
   
   /* ══════════════════════════════════════════════════════════
      MUSCLE FILTER SIDEBAR
   ══════════════════════════════════════════════════════════ */
   
   function buildMuscleFilters() {
     const muscles = [
       { id:'chest',     label:'Chest',     color:'#F472B6' },
       { id:'back',      label:'Back',      color:'#60A5FA' },
       { id:'legs',      label:'Legs',      color:'#7EE8A2' },
       { id:'shoulders', label:'Shoulders', color:'#FBBF24' },
       { id:'arms',      label:'Arms',      color:'#A78BFA' },
       { id:'core',      label:'Core',      color:'#FB923C' },
       { id:'fullbody',  label:'Full Body', color:'#3ECFCF' },
       { id:'physio',    label:'Physiotherapy', color:'#A78BFA' },
     ];
     document.getElementById('muscle-filter-list').innerHTML = muscles.map(m => `
       <div class="muscle-group">
         <div class="muscle-group-header" onclick="toggleMuscleGroup('${m.id}',this)">
           <span class="muscle-dot" style="background:${m.color}"></span>
           <span>${m.label}</span>
           <i class="ti ti-chevron-right chevron"></i>
         </div>
         <div class="muscle-sub-list" id="sub-${m.id}">
           ${(SUBCATS[m.id] || []).map(s => `
             <div class="muscle-sub-item" onclick="filterBySub('${m.id}','${s}',this)">${s}</div>
           `).join('')}
         </div>
       </div>`).join('');
   }
   
   function toggleMuscleGroup(muscleId, headerEl) {
     const sub    = document.getElementById('sub-' + muscleId);
     const isOpen = sub.classList.contains('open');
     document.querySelectorAll('.muscle-sub-list').forEach(el => el.classList.remove('open'));
     document.querySelectorAll('.muscle-group-header').forEach(el => el.classList.remove('open'));
     if (!isOpen) {
       sub.classList.add('open');
       headerEl.classList.add('open');
       state.filterMuscle = muscleId;
       state.filterSub    = null;
       document.querySelectorAll('.muscle-sub-item').forEach(el => el.classList.remove('active'));
     } else {
       state.filterMuscle = null;
       state.filterSub    = null;
     }
     showClearFilter();
     renderLibrary();
   }
   
   function filterBySub(muscleId, sub, el) {
     document.querySelectorAll('.muscle-sub-item').forEach(e => e.classList.remove('active'));
     el.classList.add('active');
     state.filterMuscle = muscleId;
     state.filterSub    = sub;
     showClearFilter();
     renderLibrary();
   }
   
   function showClearFilter() {
     document.getElementById('clear-filter-btn').style.display =
       (state.filterMuscle || state.filterSub) ? 'flex' : 'none';
   }
   
   function clearFilters() {
     state.filterMuscle = null;
     state.filterSub    = null;
     document.querySelectorAll('.muscle-sub-item').forEach(el => el.classList.remove('active'));
     document.querySelectorAll('.muscle-sub-list').forEach(el => el.classList.remove('open'));
     document.querySelectorAll('.muscle-group-header').forEach(el => el.classList.remove('open'));
     document.getElementById('clear-filter-btn').style.display = 'none';
     renderLibrary();
   }
   
   /* ══════════════════════════════════════════════════════════
      LIBRARY
   ══════════════════════════════════════════════════════════ */
   
   function switchLibTab(tab, btn) {
     state.activeTab = tab;
     document.querySelectorAll('.lib-tab').forEach(b => b.classList.remove('active'));
     btn.classList.add('active');
     renderLibrary();
   }
   
   function handleSearch(q) {
     state.searchQuery = q.toLowerCase();
     document.getElementById('search-clear').style.display = q ? 'block' : 'none';
     renderLibrary();
   }
   
   function clearSearch() {
     state.searchQuery = '';
     document.getElementById('search-input').value = '';
     document.getElementById('search-clear').style.display = 'none';
     renderLibrary();
   }
   
   function renderLibrary() {
     const isMaster = state.activeTab === 'master';
     let pool;
   
     if (isMaster) {
       let masterPool = [...MASTER_EXERCISES];
       const tier = state.user && state.user.tier;
   
       if (tier === 'free') {
         // Post-trial free: cap at 20 non-premium
         masterPool = masterPool.filter(e => !e.premium).slice(0, 20);
       }
       // free_limited shows ALL exercises but cards will show lock icon
       // (isExerciseLocked handles per-sub 2-visible logic in the card)
   
       // Use shared publicVideos collection — includes all trainers' public videos
       pool = [...masterPool, ...publicVideos];
     } else {
       // "My Videos" tab: only show exercises owned by THIS user (by ownerId)
       pool = customExercises.filter(e => e.ownerId === state.user?.uid);
     }
   
     if (state.filterMuscle) pool = pool.filter(e => e.muscle === state.filterMuscle);
     if (state.filterSub)    pool = pool.filter(e => e.sub    === state.filterSub);
   
     if (state.searchQuery) {
       const q = state.searchQuery;
       pool = pool.filter(e =>
         e.title.toLowerCase().includes(q) ||
         e.muscle.includes(q) ||
         e.sub.toLowerCase().includes(q) ||
         e.desc.toLowerCase().includes(q)
       );
     }
   
     document.getElementById('master-count').textContent = MASTER_EXERCISES.length;
     document.getElementById('custom-count').textContent = customExercises.length;
   
     const section = state.filterSub    ? state.filterSub
                   : state.filterMuscle ? capitalize(state.filterMuscle)
                   : isMaster           ? 'All Exercises'
                   :                      'My Custom Videos';
   
     const body = document.getElementById('library-body');
   
     if (!pool.length) {
       body.innerHTML = `
         <div class="empty-state">
           <div class="empty-icon"><i class="ti ti-${isMaster ? 'video-off' : 'cloud-upload'}"></i></div>
           <h3>${isMaster ? 'No exercises found' : 'No custom videos yet'}</h3>
           <p>${isMaster ? 'Try adjusting your filters or search.' : 'Upload your first video using the button above.'}</p>
           ${!isMaster ? `
           <button class="btn btn-primary" onclick="openModal('upload')"><i class="ti ti-upload"></i> Upload Video</button>
           ${(state.user && state.user.tier === 'free') ? '<p style="font-size:12px;color:var(--muted);margin-top:8px">Free plan: ' + customExercises.filter(e=>e.ownerId===state.user.uid).length + '/10 uploads used. <a href=\"#\" onclick=\"showUpgrade()\">Upgrade for unlimited.</a></p>' : ''}
         ` : ''}
         </div>`;
       return;
     }
   
     body.innerHTML = `
       <div class="library-section-title">
         <h3>${section}</h3>
         <span class="count-chip">${pool.length} exercise${pool.length !== 1 ? 's' : ''}</span>
       </div>
       <div class="exercise-grid">
         ${pool.map(ex => exerciseCardHTML(ex)).join('')}
       </div>`;
   }
   
   function exerciseCardHTML(ex) {
     const inCart   = state.cart.has(ex.id);
     const isLocked = isExerciseLocked(ex);
     const safeUrl  = (ex.videoURL || '').replace(/'/g, "\'");
     const hasVideo = !!ex.videoURL;
   
     return `
     <div class="exercise-card${inCart ? ' in-cart' : ''}${isLocked ? ' locked-card' : ''}" id="ecard-${ex.id}">
       <div class="card-media">
         ${hasVideo
           ? `<video class="card-video-thumb" src="${ex.videoURL || ''}"
                preload="metadata" muted playsinline
                onerror="this.style.display='none'">
              </video>
              <div class="card-media-bg card-media-fallback" style="${cardGradient(ex.id)};display:none"></div>`
           : `<div class="card-media-bg" style="${cardGradient(ex.id)}"></div>`
         }
         ${isLocked
           ? `<div class="card-play">
                <div class="locked-play-btn" onclick="promptTrialOrUpgrade()">
                  <i class="ti ti-lock"></i>
                </div>
              </div>
              <div class="locked-overlay"><i class="ti ti-lock"></i> Start Free Trial to unlock</div>`
           : `<div class="card-play">
                <div class="play-btn" onclick="playVideo('${ex.id}','${safeUrl}')">
                  <i class="ti ti-player-play"></i>
                </div>
              </div>`
         }
         <span class="card-duration">${ex.duration || '—'}</span>
       </div>
       <div class="card-body">
         <div class="card-tags">
           <span class="tag tag-${ex.muscle}">${capitalize(ex.muscle)}</span>
           <span class="tag tag-sub">${ex.sub}</span>
           ${ex.custom && !ex.isPublic ? '<span class="tag tag-private"><i class="ti ti-lock" style="font-size:9px"></i> Private</span>' : ''}
           ${ex.custom &&  ex.isPublic ? '<span class="tag tag-public"><i class="ti ti-world" style="font-size:9px"></i> Public</span>'  : ''}
           ${ex.premium ? '<span class="tag tag-premium">Premium</span>' : ''}
           ${isLocked ? '<span class="tag tag-locked"><i class="ti ti-lock" style="font-size:9px"></i> Locked</span>' : ''}
         </div>
         <div class="card-title">${ex.title}</div>
         <div class="card-desc">${isLocked ? 'Start your free trial to unlock this exercise and many more.' : ex.desc}</div>
         <div class="card-footer">
           <span class="card-difficulty"><i class="ti ti-flame"></i> ${ex.diff || '—'}</span>
           <div style="display:flex;gap:6px;align-items:center">
             ${ex.custom && ex.ownerId === (state.user && state.user.uid) ? `
               <button class="vis-toggle-btn ${ex.isPublic ? 'public' : 'private'}"
                 onclick="toggleVideoVisibility('${ex.id}', event)"
                 title="${ex.isPublic ? 'Make Private' : 'Make Public'}">
                 <i class="ti ti-${ex.isPublic ? 'world' : 'lock'}"></i>
                 ${ex.isPublic ? 'Public' : 'Private'}
               </button>
               <button class="vis-toggle-btn private" onclick="deleteCustomVideo('${ex.id}', event)"
                 title="Delete this video" style="color:var(--danger);border-color:rgba(255,107,107,0.25)">
                 <i class="ti ti-trash"></i>
               </button>` : ''}
             ${isLocked
               ? `<button class="add-to-cart-btn" onclick="promptTrialOrUpgrade()" style="color:var(--warn);border-color:rgba(251,191,36,0.3)">
                    <i class="ti ti-lock"></i> Locked
                  </button>`
               : `<button class="add-to-cart-btn${inCart ? ' added' : ''}" onclick="toggleCart('${ex.id}')">
                    <i class="ti ti-${inCart ? 'check' : 'plus'}"></i> ${inCart ? 'Added' : 'Add'}
                  </button>`
             }
           </div>
         </div>
       </div>
     </div>`;
   }
   
   /* ── Determine if an exercise should be locked for this user ─
      free_limited: show only first 2 per sub-category, lock the rest
      free: show 20 total (no premium), but no per-sub limit
      trial / premium: everything unlocked                           */
   function isExerciseLocked(ex) {
     if (!state.user) return false;
     const tier = state.user.tier;
     if (tier === 'trial' || tier === 'premium') return false;
     if (tier === 'free_limited') {
       // Premium-marked exercises always locked on free_limited
       if (ex.premium) return true;
       // Custom exercises are never locked (user's own content)
       if (ex.custom) return false;
       // Count how many exercises from this same sub-category appear BEFORE this one
       // in MASTER_EXERCISES — allow first 2, lock the rest
       const siblings = MASTER_EXERCISES.filter(e => e.sub === ex.sub && !e.premium);
       const idx = siblings.findIndex(e => e.id === ex.id);
       return idx >= 2; // 0 and 1 are unlocked (2 per sub), rest locked
     }
     if (tier === 'free') {
       // Free tier after trial: premium exercises locked
       return !!ex.premium;
     }
     return false;
   }
   
   function cardGradient(id) {
     const gs = [
       'background:linear-gradient(135deg,rgba(126,232,162,0.1),rgba(62,207,207,0.07))',
       'background:linear-gradient(135deg,rgba(244,114,182,0.1),rgba(167,139,250,0.07))',
       'background:linear-gradient(135deg,rgba(96,165,250,0.1),rgba(62,207,207,0.07))',
       'background:linear-gradient(135deg,rgba(251,191,36,0.1),rgba(251,146,60,0.07))',
       'background:linear-gradient(135deg,rgba(167,139,250,0.1),rgba(96,165,250,0.07))',
       'background:linear-gradient(135deg,rgba(251,146,60,0.1),rgba(244,114,182,0.07))',
       'background:linear-gradient(135deg,rgba(62,207,207,0.1),rgba(126,232,162,0.07))',
     ];
     const hash = [...String(id)].reduce((a, c) => a + c.charCodeAt(0), 0);
     return gs[hash % gs.length];
   }
   
   function playVideo(id, url) {
     const all = [...MASTER_EXERCISES, ...customExercises];
     const ex  = all.find(e => e.id === id);
     if (!url && !ex?.videoURL) {
       showToast('No video attached to this exercise yet.');
       return;
     }
     const videoSrc = url || ex.videoURL;
     const title    = ex?.title || 'Exercise';
   
     // Build the in-page video player modal
     const existing = document.getElementById('modal-video-player');
     if (existing) existing.remove();
   
     const modal = document.createElement('div');
     modal.id = 'modal-video-player';
     modal.className = 'video-player-overlay';
     modal.innerHTML = `
       <div class="video-player-box">
         <div class="video-player-header">
           <h3>${title}</h3>
           <button class="video-player-close" onclick="closeVideoPlayer()">
             <i class="ti ti-x"></i>
           </button>
         </div>
         <div class="video-player-wrap">
           <video
             id="repcast-video"
             src="${videoSrc}"
             controls
             autoplay
             playsinline
             style="width:100%;max-height:480px;border-radius:0 0 12px 12px;background:#000;display:block">
             Your browser does not support the video tag.
           </video>
         </div>
       </div>`;
     document.body.appendChild(modal);
     // Close on backdrop click
     modal.addEventListener('click', e => { if (e.target === modal) closeVideoPlayer(); });
   }
   
   function closeVideoPlayer() {
     const modal = document.getElementById('modal-video-player');
     if (modal) {
       const video = modal.querySelector('video');
       if (video) { video.pause(); video.src = ''; }
       modal.remove();
     }
   }
   
   /* ══════════════════════════════════════════════════════════
      CART
   ══════════════════════════════════════════════════════════ */
   
   function toggleCart(id) {
     const all = [...MASTER_EXERCISES, ...customExercises];
     const ex  = all.find(e => e.id === id);
     if (!ex) return;
   
     if (state.cart.has(id)) {
       state.cart.delete(id);
     } else {
       state.cart.set(id, { ...ex, sets: '', reps: '', notes: '' });
       pulseBadge();
     }
     updateCartBar();
   
     // Update just that card's button without full re-render
     const card = document.getElementById('ecard-' + id);
     if (card) {
       const inCart = state.cart.has(id);
       card.classList.toggle('in-cart', inCart);
       const btn = card.querySelector('.add-to-cart-btn');
       if (btn) {
         btn.className = 'add-to-cart-btn' + (inCart ? ' added' : '');
         btn.innerHTML = `<i class="ti ti-${inCart ? 'check' : 'plus'}"></i> ${inCart ? 'Added' : 'Add'}`;
       }
     }
   }
   
   function clearCart() {
     state.cart.clear();
     updateCartBar();
     renderLibrary();
   }
   
   function updateCartBar() {
     const n = state.cart.size;
     document.getElementById('cart-count').textContent = n;
     document.getElementById('cart-label').textContent = n === 1 ? 'exercise selected' : 'exercises selected';
     document.getElementById('cart-bar').classList.toggle('visible', n > 0);
     document.getElementById('tnav-routines-badge').textContent = sentRoutines.length;
   }
   
   function pulseBadge() {
     const b = document.getElementById('cart-count');
     b.classList.remove('bump');
     void b.offsetWidth;
     b.classList.add('bump');
   }
   
   /* ══════════════════════════════════════════════════════════
      MODALS
   ══════════════════════════════════════════════════════════ */
   
   function openModal(name) {
     document.getElementById('modal-backdrop').classList.add('open');
     document.getElementById('modal-' + name).classList.add('open');
     if (name === 'checkout')    renderCheckout();
     if (name === 'start-trial') prepareTrialModal();
   }
   
   /* ── Prepare trial modal based on whether trial was already used ── */
   function prepareTrialModal() {
     const body = document.getElementById('trial-modal-body');
     if (!body) return;
     const hdr  = document.querySelector('#modal-start-trial .modal-header h3');
   
     if (state.user && state.user.trialUsed) {
       // Already used — show upgrade prompt instead
       if (hdr) hdr.innerHTML = '<i class="ti ti-clock" style="color:var(--warn)"></i> Trial Already Used';
       body.innerHTML = `
         <div style="text-align:center;padding:10px 0">
           <div style="font-size:48px;margin-bottom:14px">⏰</div>
           <h4 style="font-size:18px;font-weight:700;margin-bottom:8px">You've used your free trial</h4>
           <p style="color:var(--muted);font-size:13.5px;margin-bottom:22px;line-height:1.6">
             Each account gets one free 7-day trial. Yours has already been used.<br>
             Upgrade to Pro to get full access again.
           </p>
           <button class="btn btn-primary btn-full" onclick="handleGrowPayment();closeAllModals()" style="font-size:15px;padding:12px">
             <i class="ti ti-credit-card"></i> Upgrade to Pro — ₪25/mo
           </button>
           <p style="font-size:12px;color:var(--muted2);margin-top:10px">Cancel any time. No long-term commitment.</p>
         </div>`;
     } else {
       // Never used — reset to default trial content
       if (hdr) hdr.innerHTML = '<i class="ti ti-rocket" style="color:var(--accent)"></i> Start Your Free Trial';
       body.innerHTML = `
         <div style="width:64px;height:64px;background:rgba(126,232,162,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:30px;color:var(--accent)">
           <i class="ti ti-rocket"></i>
         </div>
         <h4 style="font-size:20px;font-weight:700;margin-bottom:8px">7 Days of Full Access</h4>
         <p style="color:var(--muted);font-size:13.5px;margin-bottom:22px;line-height:1.6">
           No credit card needed. Instant access to everything — free for 7 days.
         </p>
         <ul style="list-style:none;text-align:left;display:inline-block;margin-bottom:22px">
           <li style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13.5px"><i class="ti ti-check" style="color:var(--accent);font-size:15px"></i> Full master library — 143+ exercises</li>
           <li style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13.5px"><i class="ti ti-check" style="color:var(--accent);font-size:15px"></i> Unlimited custom video uploads</li>
           <li style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13.5px"><i class="ti ti-check" style="color:var(--accent);font-size:15px"></i> Unlimited client routines &amp; sharing</li>
           <li style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:13.5px"><i class="ti ti-check" style="color:var(--accent);font-size:15px"></i> One-time per account</li>
         </ul>
         <button class="btn btn-primary btn-full" onclick="activateFreeTrial()" style="font-size:15px;padding:12px">
           <i class="ti ti-rocket"></i> Activate My Free Trial Now
         </button>
         <p style="font-size:12px;color:var(--muted2);margin-top:10px">After 7 days you return to the limited free plan unless you upgrade to Pro (₪25/mo).</p>`;
     }
   }
   
   function closeAllModals() {
     document.getElementById('modal-backdrop').classList.remove('open');
     document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
   }
   
   /* ══════════════════════════════════════════════════════════
      TRAINER VIDEO UPLOAD
   ══════════════════════════════════════════════════════════ */
   
   /* ── Video visibility toggle ────────────────────────────── */
   function setVisibility(val) {
     document.getElementById('upload-visibility').value = val;
     document.getElementById('vis-private').classList.toggle('active', val === 'private');
     document.getElementById('vis-public').classList.toggle('active', val === 'public');
   }
   
   /* ── Toggle visibility of an already-uploaded custom video ─ */
   async function toggleVideoVisibility(id, event) {
     event.stopPropagation();
     if (!state.user || !window._firebase || !window._db) return;
     var ex = customExercises.find(function(e) { return e.id === id; });
     if (!ex) return;
     var newIsPublic = !ex.isPublic;
     var fb = window._firebase; var db = window._db;
     try {
       await fb.setDoc(fb.doc(db,'customVideos',state.user.uid,'videos',id),{isPublic:newIsPublic},{merge:true});
       if (newIsPublic) {
         await fb.setDoc(fb.doc(db,'publicVideos',id),{
           id:id,title:ex.title,muscle:ex.muscle,sub:ex.sub,desc:ex.desc,
           diff:ex.diff||'Custom',duration:ex.duration||'-',videoURL:ex.videoURL||'',
           isPublic:true,custom:true,ownerId:state.user.uid,
           ownerName:state.user.fullName||'',addedAt:new Date().toISOString()
         });
         showToast('Video is now Public - added to Master Library!');
         state.activeTab='master';
         document.getElementById('tab-master').classList.add('active');
         document.getElementById('tab-custom').classList.remove('active');
       } else {
         await fb.deleteDoc(fb.doc(db,'publicVideos',id));
         showToast('Video is now Private - removed from Master Library');
         state.activeTab='custom';
         document.getElementById('tab-custom').classList.add('active');
         document.getElementById('tab-master').classList.remove('active');
       }
       state.filterMuscle=null; state.filterSub=null;
       document.querySelectorAll('.muscle-sub-item').forEach(function(el){el.classList.remove('active');});
       var cb=document.getElementById('clear-filter-btn'); if(cb) cb.style.display='none';
     } catch(e) { console.error('toggleVideoVisibility error:',e.code,e.message); showToast('Could not update visibility.'); }
   }

   function reloadMyVideos() {
     if (!state.user) return;
     showToast('Reloading your videos...');
     customExercises = [];
     loadCustomVideosFromFirestore(state.user.uid);
     setTimeout(function(){ renderLibrary(); updateStats(); }, 2000);
   }

      function populateSubcats(muscleSelectId, subcatSelectId) {
     const muscle = document.getElementById(muscleSelectId).value;
     const sc     = document.getElementById(subcatSelectId);
     if (!muscle) { sc.innerHTML = '<option value="">Select group first</option>'; return; }
     sc.innerHTML = (SUBCATS[muscle] || []).map(s => `<option value="${s}">${s}</option>`).join('');
   }
   
   function handleAdminFileSelect(input) {
     const file = input.files[0];
     if (!file) return;
     const allowed = ['video/mp4', 'video/quicktime', 'video/webm'];
     if (!allowed.includes(file.type)) { showToast('Only MP4, MOV, or WebM allowed.'); input.value=''; return; }
     if (file.size > 500 * 1024 * 1024) { showToast('File too large — max 500 MB.'); input.value=''; return; }
     document.getElementById('admin-file-label').textContent = `${file.name} (${(file.size/1048576).toFixed(1)} MB) ✓`;
     // Clear the URL field — file takes priority
     document.getElementById('admin-ex-video').value = '';
   }
   
   function handleDragOver(e)  { e.preventDefault(); document.getElementById('upload-zone').classList.add('drag-over'); }
   function handleDragLeave(e) { document.getElementById('upload-zone').classList.remove('drag-over'); }
   function handleDrop(e) {
     e.preventDefault();
     document.getElementById('upload-zone').classList.remove('drag-over');
     if (e.dataTransfer.files[0]) processVideoFile(e.dataTransfer.files[0]);
   }
   function handleVideoSelect(input) {
     if (input.files[0]) processVideoFile(input.files[0]);
   }
   
   function processVideoFile(file) {
     const allowed = ['video/mp4', 'video/quicktime', 'video/webm'];
     if (!allowed.includes(file.type)) { showToast('Only MP4, MOV, or WebM allowed.'); return; }
     if (file.size > 500 * 1024 * 1024) { showToast('File too large — max 500 MB.'); return; }
     document.getElementById('upload-zone-inner').innerHTML = `
       <i class="ti ti-file-check" style="color:var(--accent)"></i>
       <p style="color:var(--accent)">${file.name}</p>
       <span>${(file.size / 1048576).toFixed(1)} MB · Ready to upload</span>`;
     document.getElementById('upload-zone').dataset.ready = '1';
   }
   
   async function submitUpload() {
     const title  = document.getElementById('upload-title').value.trim();
     const muscle = document.getElementById('upload-muscle').value;
     const sub    = document.getElementById('upload-subcat').value;
     const desc   = document.getElementById('upload-desc').value.trim();
   
     if (!title)  { showToast('Please enter an exercise title.'); return; }
     if (!muscle) { showToast('Please select a muscle group.'); return; }
     if (!sub)    { showToast('Please select a sub-category.'); return; }
   
     // Upload cap for free and free_limited tiers
     const myVideoCount = customExercises.filter(e => e.ownerId === state.user.uid).length;
     const tier = state.user.tier;
     if ((tier === 'free' || tier === 'free_limited') && myVideoCount >= 10) {
       closeAllModals();
       if (tier === 'free_limited') {
         showToast('Limited plan: 10 uploads max. Start your free trial or upgrade for unlimited.');
         setTimeout(() => openModal('start-trial'), 800);
       } else {
         showToast('Free plan: 10 uploads reached. Upgrade to Premium for unlimited.');
         setTimeout(() => openModal('upgrade'), 800);
       }
       return;
     }
   
     const fileInput = document.getElementById('video-file-input');
     const file      = fileInput.files[0];
     if (!file) { showToast('Please select a video file first.'); return; }
   
     const wrap = document.getElementById('upload-progress-wrap');
     const fill = document.getElementById('upload-progress-fill');
     const lbl  = document.getElementById('upload-progress-label');
     wrap.style.display = 'block';
   
     // Generate a stable exercise ID before upload
     const exerciseId  = 'c_' + state.user.uid.slice(0, 6) + '_' + Date.now();
     // Storage path scoped strictly to user uid — used to re-fetch URL if needed
     const storagePath = 'videos/' + state.user.uid + '/' + exerciseId + '_' + file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
   
     let videoURL = '';
     let videoStoragePath = '';
     try {
       const storageRef = window._firebase.ref(window._storage, storagePath);
       const task       = window._firebase.uploadBytesResumable(storageRef, file);
       videoURL = await new Promise((resolve, reject) => {
         task.on(
           'state_changed',
           snap => {
             const pct = Math.round(snap.bytesTransferred / snap.totalBytes * 100);
             fill.style.width = pct + '%';
             lbl.textContent  = 'Uploading… ' + pct + '%';
           },
           reject,
           async function() {
             // Get the permanent download URL
             const url = await window._firebase.getDownloadURL(task.snapshot.ref);
             videoStoragePath = storagePath;
             resolve(url);
           }
         );
       });
     } catch (e) {
       wrap.style.display = 'none';
       console.error('Storage upload error:', e.code, e.message);
       if (e.code === 'storage/unauthorized') {
         showToast('Upload blocked. Add this Storage rule: match /videos/{uid}/{f} { allow write: if request.auth.uid == uid; }');
       } else {
         showToast('Upload failed: ' + (e.message || e.code));
       }
       return;
     }
   
     // Read visibility choice
     const visibility = document.getElementById('upload-visibility').value || 'private';
     const isPublic   = visibility === 'public';
   
     // Build exercise object — save storagePath so URL can be refreshed later
     const newExercise = {
       id:           exerciseId,
       title,
       muscle,
       sub,
       desc:         desc || 'Custom exercise. See the uploaded video for full instructions.',
       diff:         'Custom',
       duration:     '—',
       premium:      false,
       custom:       true,
       isPublic,
       videoURL,
       storagePath:  videoStoragePath,  // ← save path for URL refresh on auth change
       ownerId:      state.user.uid,
       createdAt:    new Date().toISOString(),
     };
   
     // Save to Firestore — doc ID = exerciseId, strictly under user's uid
     try {
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'customVideos', state.user.uid, 'videos', exerciseId),
         newExercise
       );
       console.log('Saved video to Firestore:', exerciseId, 'for user', state.user.uid);
     } catch (e) {
       console.error('Firestore save error:', e.code, e.message);
       if (e.code === 'permission-denied') {
         showToast('Saved to Storage but Firestore blocked. Add rule: match /customVideos/{uid}/videos/{v} { allow write: if request.auth.uid == uid; }');
       } else {
         showToast('Video uploaded but metadata save failed: ' + (e.code || e.message));
       }
     }
   
     // Reset UI
     closeAllModals();
     showToast(`✓ "${title}" uploaded successfully!`);
     document.getElementById('upload-title').value  = '';
     document.getElementById('upload-muscle').value = '';
     document.getElementById('upload-subcat').innerHTML = '<option value="">Select group first</option>';
     document.getElementById('upload-desc').value   = '';
     wrap.style.display = 'none';
     fill.style.width   = '0%';
     document.getElementById('upload-zone-inner').innerHTML = `
       <i class="ti ti-cloud-upload"></i>
       <p>Drag &amp; drop your video here</p>
       <span>or <em>browse files</em></span>
       <small>MP4, MOV, WebM · max 500 MB</small>`;
     delete document.getElementById('upload-zone').dataset.ready;
   
     // Reset visibility toggle back to Private
     setVisibility('private');
   
     // Switch to custom tab
     state.activeTab = 'custom';
     document.getElementById('tab-master').classList.remove('active');
     document.getElementById('tab-custom').classList.add('active');
     renderLibrary();
     updateStats();
   }
   
   /* ══════════════════════════════════════════════════════════
      CHECKOUT — ROUTINE BUILDER
   ══════════════════════════════════════════════════════════ */
   
   function renderCheckout() {
     const n = state.cart.size;
     document.getElementById('checkout-subtitle').textContent =
       `${n} exercise${n !== 1 ? 's' : ''} · prescribe sets, reps and notes below`;
     document.getElementById('share-result').style.display = 'none';
   
     let html = '';
     state.cart.forEach((ex) => {
       html += `
       <div class="checkout-exercise-card" id="co-card-${ex.id}">
         <div class="checkout-thumb" style="${cardGradient(ex.id)}">
           <i class="ti ti-barbell" style="font-size:22px;color:var(--muted2)"></i>
         </div>
         <div class="checkout-info">
           <h4>
             ${ex.title}
             <span class="tag tag-${ex.muscle}" style="font-size:10px">${capitalize(ex.muscle)}</span>
             ${ex.custom ? '<span class="tag tag-custom" style="font-size:10px">Custom</span>' : ''}
           </h4>
           <p>${ex.desc.substring(0, 90)}…</p>
           <div class="prescription-row">
             <div class="prescription-field">
               <span class="prescription-label">Sets</span>
               <input class="prescription-input" type="number" min="1" max="20" placeholder="3"
                 value="${ex.sets}" onchange="updatePrescription('${ex.id}','sets',this.value)">
             </div>
             <div class="prescription-field">
               <span class="prescription-label">Reps</span>
               <input class="prescription-input" type="number" min="1" max="100" placeholder="12"
                 value="${ex.reps}" onchange="updatePrescription('${ex.id}','reps',this.value)">
             </div>
             <div class="prescription-field" style="flex:1">
               <span class="prescription-label">Trainer Notes</span>
               <input class="prescription-notes-input" type="text"
                 placeholder="e.g. slow eccentric, 2-sec hold…"
                 value="${ex.notes}" onchange="updatePrescription('${ex.id}','notes',this.value)">
             </div>
           </div>
         </div>
         <button class="remove-exercise-btn" onclick="removeFromCheckout('${ex.id}')">
           <i class="ti ti-trash"></i>
         </button>
       </div>`;
     });
     document.getElementById('checkout-list').innerHTML = html;
   }
   
   function updatePrescription(id, field, val) {
     if (state.cart.has(id)) state.cart.get(id)[field] = val;
   }
   
   function removeFromCheckout(id) {
     state.cart.delete(id);
     updateCartBar();
     renderCheckout();
     renderLibrary();
     if (!state.cart.size) closeAllModals();
   }
   
   async function sendRoutine() {
     const client    = document.getElementById('checkout-client').value.trim() || 'Client';
     const exercises = Array.from(state.cart.values()).map((ex, i) => ({
       order:   i + 1,
       videoId: ex.id,
       source:  ex.custom ? 'custom' : 'master',
       title:   ex.title,
       muscle:  ex.muscle,
       sub:     ex.sub,
       desc:    ex.desc,
       sets:    ex.sets,
       reps:    ex.reps,
       notes:   ex.notes,
       videoURL: ex.videoURL || '',
     }));
   
     const token   = 'rtn_' + Math.random().toString(36).substr(2, 8);
     const routine = {
       id:          token,
       createdBy:   state.user.uid,
       trainerName: state.user.fullName || 'Your Trainer',
       clientName:  client,
       exercises,
       createdAt:   new Date().toISOString(),
       shareToken:  token,
       isPublic:    true,
     };
   
     // Save to Firestore — use token as document ID for direct lookup (no query needed)
     try {
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'routines', token),
         routine
       );
     } catch (e) {
       console.error('Firestore routine save error:', e);
       showToast('Could not save routine. Check Firestore rules.');
     }
   
     // Also save locally so history works without extra Firestore reads
     sentRoutines.unshift(routine);
     localStorage.setItem('repcast_routines', JSON.stringify(sentRoutines.slice(0, 50)));
   
     const shareBase = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '');
     document.getElementById('share-url').textContent = `${shareBase}?routine=${token}`;
     document.getElementById('share-result').style.display = 'block';
     document.getElementById('tnav-routines-badge').textContent = sentRoutines.length;
     renderRoutinesHistory();
     updateStats();
     showToast(`✓ Routine sent for ${client}!`);
   }
   
   async function shareViaWhatsApp() {
     // Save routine first if not already saved
     const shareResult = document.getElementById('share-result');
     if (!shareResult || shareResult.style.display === 'none') {
       await sendRoutine();
     }
     const client = document.getElementById('checkout-client').value.trim() || 'there';
     const items  = Array.from(state.cart.values()).map((ex, i) => {
       const s = ex.sets  ? ex.sets + ' sets'   : '';
       const r = ex.reps  ? 'x ' + ex.reps + ' reps' : '';
       const n = ex.notes ? '\n   - ' + ex.notes : '';
       return (i + 1) + '. *' + ex.title + '* ' + s + ' ' + r + n;
     }).join('\n');
     const url = document.getElementById('share-url').textContent || (window.location.origin + '?routine=demo');
     const msg = 'Hi ' + client + '! Here is your personalised exercise routine from RepCast:\n\n' + items + '\n\nView the full routine with exercise videos here (no login needed):\n' + url;
     window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
   }
   
   async function shareViaEmail() {
     // If routine hasn't been saved yet, save it first so the URL is real
     const shareResult = document.getElementById('share-result');
     if (!shareResult || shareResult.style.display === 'none') {
       await sendRoutine();
     }
     const client = document.getElementById('checkout-client').value.trim() || 'Client';
     const url    = document.getElementById('share-url').textContent || (window.location.origin + '?routine=demo');
     const subj   = encodeURIComponent('Your Exercise Routine from RepCast');
     const body   = encodeURIComponent(
       'Hi ' + client + ',\n\n' +
       'Your personalised exercise routine is ready.\n' +
       'View it here (no login required):\n' +
       url + '\n\n' +
       'Best,\n' +
       (state.user && state.user.fullName ? state.user.fullName : 'Your Trainer')
     );
     // Use a link click instead of window.open — works in all browsers including mobile
     const link = document.createElement('a');
     link.href = `mailto:?subject=${subj}&body=${body}`;
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   }
   
   function copyShareUrl() {
     navigator.clipboard.writeText(document.getElementById('share-url').textContent).catch(() => {});
     const done = document.getElementById('copy-done');
     done.style.display = 'inline-flex';
     setTimeout(() => { done.style.display = 'none'; }, 2500);
   }
   
   /* ══════════════════════════════════════════════════════════
      ROUTINES HISTORY
   ══════════════════════════════════════════════════════════ */
   
   function renderRoutinesHistory() {
     const body = document.getElementById('routines-body');
     document.getElementById('tnav-routines-badge').textContent = sentRoutines.length;
   
     if (!sentRoutines.length) {
       body.innerHTML = `
         <div class="empty-state">
           <div class="empty-icon"><i class="ti ti-list-check"></i></div>
           <h3>No routines sent yet</h3>
           <p>Build a routine from the Exercise Library and send it to a client.</p>
           <button class="btn btn-primary" onclick="setView('library',document.getElementById('tnav-library'))">
             <i class="ti ti-layout-grid"></i> Browse Library
           </button>
         </div>`;
       return;
     }
   
     body.innerHTML = sentRoutines.map(r => {
       const d   = new Date(r.createdAt).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
       const url = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '') + '?routine=' + r.shareToken;
       return `
       <div class="routine-history-card">
         <div class="routine-history-info">
           <h4>${r.clientName}'s Routine</h4>
           <p>${r.exercises.length} exercises · sent ${d}</p>
         </div>
         <div class="routine-history-meta">
           <button class="routine-share-btn" onclick="copyToClipboard('${url}')">
             <i class="ti ti-link"></i> Copy Link
           </button>
           <button class="routine-share-btn" onclick="openSharedView('${r.shareToken}')">
             <i class="ti ti-eye"></i> Preview
           </button>
         </div>
       </div>`;
     }).join('');
   }
   
   function openSharedView(token) {
     const r = sentRoutines.find(r => r.shareToken === token);
     if (!r) return;
     renderSharedPage(r);
     showScreen('shared');
   }
   
   function renderSharedPage(routine) {
     document.getElementById('shared-trainer').textContent = routine.trainerName || state.user?.fullName || 'Your Trainer';
     document.getElementById('shared-date').textContent    =
       'Sent ' + new Date(routine.createdAt).toLocaleDateString('en-US', { month:'long', day:'numeric' });
   
     document.getElementById('shared-exercises').innerHTML = routine.exercises.map((ex, i) => {
       const hasVideo = !!ex.videoURL;
       const gradient = ['background:linear-gradient(135deg,rgba(126,232,162,0.15),rgba(62,207,207,0.1))',
         'background:linear-gradient(135deg,rgba(244,114,182,0.15),rgba(167,139,250,0.1))',
         'background:linear-gradient(135deg,rgba(96,165,250,0.15),rgba(62,207,207,0.1))',
         'background:linear-gradient(135deg,rgba(251,191,36,0.15),rgba(251,146,60,0.1))',
         'background:linear-gradient(135deg,rgba(167,139,250,0.15),rgba(96,165,250,0.1))',
       ][ (i) % 5 ];
   
       return `
       <div class="shared-exercise-card">
         ${hasVideo ? `
         <div class="shared-video-wrap" onclick="playSharedVideo('${ex.videoURL.replace(/'/g,"\'")}','${ex.title.replace(/'/g,"\'")}')">
           <video class="shared-video-thumb" src="${ex.videoURL}" preload="metadata" muted playsinline
             onerror="this.parentElement.style.background='${gradient}'"></video>
           <div class="shared-play-overlay">
             <div class="shared-play-btn"><i class="ti ti-player-play"></i></div>
           </div>
         </div>` : `
         <div class="shared-video-placeholder" style="${gradient}">
           <i class="ti ti-barbell" style="font-size:32px;color:rgba(255,255,255,0.3)"></i>
         </div>`}
         <div class="shared-ex-header">
           <div class="shared-ex-num">${i + 1}</div>
           <div style="flex:1">
             <h4>${ex.title}</h4>
             <div style="display:flex;gap:6px;margin-top:4px;flex-wrap:wrap">
               <span class="tag tag-${ex.muscle}">${capitalize(ex.muscle)}</span>
               <span class="tag tag-sub">${ex.sub || ''}</span>
               ${ex.custom ? '<span class="tag tag-custom">Custom</span>' : ''}
             </div>
           </div>
         </div>
         <div class="shared-ex-body">
           ${(ex.sets || ex.reps) ? `
           <div class="shared-prescription-bar">
             ${ex.sets ? `<div class="shared-rx-big"><span class="shared-rx-big-val">${ex.sets}</span><span class="shared-rx-big-label">Sets</span></div>` : ''}
             ${(ex.sets && ex.reps) ? '<div class="shared-rx-separator">×</div>' : ''}
             ${ex.reps ? `<div class="shared-rx-big"><span class="shared-rx-big-val">${ex.reps}</span><span class="shared-rx-big-label">Reps</span></div>` : ''}
           </div>` : ''}
           <p class="shared-ex-desc">${ex.desc}</p>
           ${ex.notes ? `<div class="shared-ex-notes"><strong>Trainer Notes</strong>${ex.notes}</div>` : ''}
         </div>
       </div>`;
     }).join('');
   }
   
   function playSharedVideo(url, title) {
     var existing = document.getElementById('modal-video-player');
     if (existing) existing.remove();
     var modal = document.createElement('div');
     modal.id = 'modal-video-player';
     modal.className = 'video-player-overlay';
     modal.innerHTML =
       '<div class="video-player-box">' +
         '<div class="video-player-header">' +
           '<h3>' + title + '</h3>' +
           '<button class="video-player-close" onclick="closeVideoPlayer()"><i class="ti ti-x"></i></button>' +
         '</div>' +
         '<div class="video-player-wrap">' +
           '<video src="' + url + '" controls autoplay playsinline ' +
             'style="width:100%;max-height:480px;border-radius:0 0 12px 12px;background:#000;display:block">' +
           '</video>' +
         '</div>' +
       '</div>';
     document.body.appendChild(modal);
     modal.addEventListener('click', function(e) { if (e.target === modal) closeVideoPlayer(); });
   }
   
   function backFromShared() {
     if (state.isManager) showScreen('manager');
     else                 showScreen('app');
   }
   
   /* ══════════════════════════════════════════════════════════
      PROFILE
   ══════════════════════════════════════════════════════════ */
   
   async function saveProfile() {
     if (!state.user) return;
     state.user.fullName     = document.getElementById('pf-name').value;
     state.user.phone        = document.getElementById('pf-phone').value;
     state.user.businessName = document.getElementById('pf-biz').value;
     state.user.specialty    = document.getElementById('pf-specialty').value;
   
     try {
       await window._firebase.setDoc(
         window._firebase.doc(window._db, 'users', state.user.uid),
         {
           fullName:     state.user.fullName,
           phone:        state.user.phone,
           businessName: state.user.businessName,
           specialty:    state.user.specialty,
         },
         { merge: true }
       );
       showToast('✓ Profile saved!');
     } catch (e) {
       showToast('Could not save profile. Try again.');
     }
   
     document.getElementById('topnav-avatar').textContent        = initials(state.user.fullName);
     document.getElementById('topnav-name').textContent          = state.user.fullName;
     document.getElementById('profile-avatar').textContent       = initials(state.user.fullName);
     document.getElementById('profile-display-name').textContent = state.user.fullName;
     document.getElementById('profile-display-biz').textContent  = state.user.businessName;
   }
   
   function handleAvatarUpload(input) {
     if (!input.files[0]) return;
     const reader = new FileReader();
     reader.onload = e => {
       document.querySelectorAll('.profile-avatar, .user-avatar-sm, .user-avatar').forEach(a => {
         a.style.backgroundImage = `url(${e.target.result})`;
         a.style.backgroundSize  = 'cover';
         a.textContent           = '';
       });
     };
     reader.readAsDataURL(input.files[0]);
     showToast('Profile photo updated!');
   }
   
   /* ══════════════════════════════════════════════════════════
      BILLING / GROW
   ══════════════════════════════════════════════════════════ */
   
   function showUpgrade() { closeAllModals(); openModal('upgrade'); }
   
   function handleGrowPayment() {
     // Replace with your real Grow checkout URL
     // window.location.href = `https://grow.me/checkout?plan=premium&uid=${state.user.uid}`;
     showToast('Redirecting to Grow payment… (add your Grow URL to handleGrowPayment)');
     closeAllModals();
   }
   
   /* ══════════════════════════════════════════════════════════
      STATS
   ══════════════════════════════════════════════════════════ */
   
   function updateStats() {
     document.getElementById('pstat-videos').textContent   = customExercises.filter(e => e.ownerId === state.user?.uid).length;
     document.getElementById('pstat-routines').textContent = sentRoutines.length;
     const clients = [...new Set(sentRoutines.map(r => r.clientName))].length;
     document.getElementById('pstat-clients').textContent  = clients;
   
     // Update billing current plan indicator
     const planEl = document.getElementById('billing-current-plan');
     if (planEl && state.user) {
       const labels = {
         premium:      'Current Plan ✓',
         trial:        'Trial Active (' + (state.user.trialDaysLeft || 0) + ' days left)',
         free_limited: 'Current Plan ✓',
         free:         'Current Plan ✓',
       };
       planEl.textContent = labels[state.user.tier] || 'Current Plan';
     }
   
     // Update tier status card dynamically
     const tierCard = document.getElementById('tier-status-card');
     if (tierCard && state.user) {
       const tier     = state.user.tier;
       const titleEl  = document.getElementById('tier-status-title');
       const subEl    = document.getElementById('tier-status-sub');
       const btnEl    = document.getElementById('tier-status-btn');
       const iconEl   = tierCard.querySelector('.tier-icon i');
   
       if (tier === 'premium') {
         tierCard.style.display = 'none';
       } else {
         tierCard.style.display = '';
         if (tier === 'trial') {
           const d = state.user.trialDaysLeft || 0;
           if (iconEl)  { iconEl.className = 'ti ti-star-filled'; }
           if (titleEl) titleEl.textContent = 'Free Trial Active — ' + d + ' day' + (d!==1?'s':'') + ' remaining';
           if (subEl)   subEl.textContent   = 'Upgrade to Pro to keep full access after your trial ends.';
           if (btnEl)   { btnEl.textContent = 'Upgrade to Pro'; btnEl.onclick = showUpgrade; }
           tierCard.style.background = 'rgba(251,191,36,0.06)';
           tierCard.style.borderColor = 'rgba(251,191,36,0.18)';
           tierCard.querySelector('.tier-icon').style.color = 'var(--warn)';
         } else if (tier === 'free_limited') {
           if (iconEl)  { iconEl.className = 'ti ti-lock'; }
           if (titleEl) titleEl.textContent = state.user.trialUsed
             ? 'Trial Ended — Limited Access'
             : 'Limited Free Access — 1-2 exercises per group';
           if (subEl)   subEl.textContent   = state.user.trialUsed
             ? 'Upgrade to Pro to restore full access.'
             : 'Start your free 7-day trial to unlock the full library.';
           if (btnEl) {
             if (state.user.trialUsed) {
               btnEl.textContent = 'Upgrade to Pro — ₪25/mo';
               btnEl.onclick = handleGrowPayment;
             } else {
               btnEl.textContent = 'Start Free Trial';
               btnEl.onclick = function(){ openModal('start-trial'); };
             }
           }
           tierCard.style.background = 'rgba(96,165,250,0.06)';
           tierCard.style.borderColor = 'rgba(96,165,250,0.18)';
           tierCard.querySelector('.tier-icon').style.color = '#60A5FA';
         }
       }
     }
   }
   
   /* ══════════════════════════════════════════════════════════
      ADMIN PANEL — MASTER LIBRARY CRUD
   ══════════════════════════════════════════════════════════ */
   
   /* ── Load real users from Firestore for admin panel ──────── */
   async function loadAdminUsers() {
     const body = document.getElementById('admin-users-list');
     if (!body) return;
   
     if (!window._db) {
       body.innerHTML = `<div class="admin-rules-hint">
         <i class="ti ti-info-circle" style="font-size:18px;color:var(--warn)"></i>
         <p>Firebase not connected. Make sure your Firebase config is in index.html.</p>
       </div>`;
       return;
     }
   
     body.innerHTML = `<p style="color:var(--muted);font-size:13px;padding:16px">
       <i class="ti ti-loader" style="animation:spin 1s linear infinite"></i> Loading users…</p>`;
   
     // REQUIRED FIRESTORE RULE for this to work:
     // In Firebase Console → Firestore → Rules, add:
     // match /users/{uid} { allow read: if true; }
     // The manager is not a Firebase Auth user so standard auth-based rules block the read.
   
     try {
       const { getDocs, collection } = window._firebase;
       const snap = await getDocs(collection(window._db, 'users'));
   
       const users = [];
       snap.forEach(d => users.push({ id: d.id, ...d.data() }));
   
       const countEl = document.getElementById('stat-total-users');
       if (countEl) countEl.textContent = users.length;
   
       if (!users.length) {
         body.innerHTML = '<p style="color:var(--muted);font-size:13px;padding:16px">No registered users yet.</p>';
         return;
       }
   
       body.innerHTML = users.map(u => {
         const tier    = u.tier || 'free';
         const tierTag = tier === 'premium'
           ? '<span class="tag" style="background:rgba(126,232,162,0.1);color:var(--accent)">Premium</span>'
           : tier === 'trial'
           ? '<span class="tag tag-custom">Trial</span>'
           : '<span class="tag" style="background:rgba(96,165,250,0.1);color:#60A5FA">Free</span>';
         const av      = (u.fullName || u.email || 'U').split(' ').slice(0,2).map(n=>n[0]).join('').toUpperCase();
         const joined  = u.createdAt
           ? new Date(u.createdAt).toLocaleDateString('en-IL',{day:'numeric',month:'short',year:'numeric'})
           : '—';
         return `
         <div class="admin-user-card">
           <div class="user-avatar-sm" style="width:40px;height:40px;font-size:14px;flex-shrink:0">${av}</div>
           <div style="flex:1;min-width:0;overflow:hidden">
             <div style="font-weight:600;font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u.fullName || '—'}</div>
             <div style="font-size:11.5px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u.email || u.id}</div>
             <div style="font-size:11px;color:var(--muted2);margin-top:2px">${u.specialty || 'Trainer'} · Joined ${joined}</div>
           </div>
           ${tierTag}
         </div>`;
       }).join('');
   
     } catch(err) {
       console.error('loadAdminUsers error:', err);
       body.innerHTML = `<div class="admin-rules-hint">
         <i class="ti ti-alert-triangle" style="font-size:18px;color:var(--danger)"></i>
         <div>
           <strong style="display:block;margin-bottom:6px;color:var(--danger)">Firestore permission denied</strong>
           <p style="font-size:12.5px;color:var(--muted);line-height:1.6">
             Add this rule to your Firestore rules in Firebase Console:<br>
             <code style="background:var(--surface3);padding:6px 10px;border-radius:6px;display:block;margin-top:6px;font-size:11.5px">
               match /users/{uid} {<br>
               &nbsp;&nbsp;allow read: if true;<br>
               }
             </code>
           </p>
         </div>
       </div>`;
     }
   }
   
   function renderAdminTable(filterQuery) {
     const q    = (filterQuery || adminSearchQuery || '').toLowerCase();
     let   pool = q
       ? MASTER_EXERCISES.filter(e =>
           e.title.toLowerCase().includes(q) ||
           e.muscle.includes(q) ||
           e.sub.toLowerCase().includes(q))
       : [...MASTER_EXERCISES];
   
     document.getElementById('admin-exercise-count').textContent = `${MASTER_EXERCISES.length} exercises`;
     document.getElementById('stat-total-exercises').textContent  = MASTER_EXERCISES.length;
   
     const tbody = document.getElementById('admin-table-body');
     if (!pool.length) {
       tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:40px;color:var(--muted)">No exercises found.</td></tr>`;
       return;
     }
   
     tbody.innerHTML = pool.map(ex => `
       <tr>
         <td>
           <div class="admin-ex-title">${ex.title}</div>
           <div class="admin-ex-desc-preview">${ex.desc}</div>
         </td>
         <td><span class="tag tag-${ex.muscle}">${capitalize(ex.muscle)}</span></td>
         <td><span class="tag tag-sub">${ex.sub}</span></td>
         <td><span style="color:var(--muted);font-size:12.5px">${ex.diff}</span></td>
         <td>
           ${ex.premium
             ? '<span class="tag tag-premium">Premium</span>'
             : '<span class="tag" style="background:var(--surface3);color:var(--muted)">Free</span>'}
         </td>
         <td>
           <div class="admin-actions">
             <button class="admin-action-btn edit" onclick="openAdminModal('edit','${ex.id}')">
               <i class="ti ti-edit"></i> Edit
             </button>
             <button class="admin-action-btn delete" onclick="openDeleteConfirm('${ex.id}')">
               <i class="ti ti-trash"></i> Delete
             </button>
           </div>
         </td>
       </tr>`).join('');
   }
   
   function handleAdminSearch(q) {
     adminSearchQuery = q;
     renderAdminTable(q);
   }
   
   function openAdminModal(mode, id) {
     const modal   = document.getElementById('modal-admin-exercise');
     const titleEl = document.getElementById('admin-modal-title');
     const saveBtn = document.getElementById('admin-modal-save-btn');
   
     // Reset form fields
     document.getElementById('admin-edit-id').value       = '';
     document.getElementById('admin-ex-title').value      = '';
     document.getElementById('admin-ex-muscle').value     = '';
     document.getElementById('admin-ex-subcat').innerHTML = '<option value="">Select group first</option>';
     document.getElementById('admin-ex-diff').value       = 'Beginner';
     document.getElementById('admin-ex-duration').value   = '';
     document.getElementById('admin-ex-desc').value       = '';
     document.getElementById('admin-ex-premium').checked  = false;
     document.getElementById('admin-ex-video').value      = '';
     const adminFile = document.getElementById('admin-ex-file');
     if (adminFile) adminFile.value = '';
     const adminFileLabel = document.getElementById('admin-file-label');
     if (adminFileLabel) adminFileLabel.textContent = 'Choose video file…';
     const adminProg = document.getElementById('admin-upload-progress');
     if (adminProg) adminProg.style.display = 'none';
   
     if (mode === 'edit' && id) {
       const ex = MASTER_EXERCISES.find(e => e.id === id);
       if (!ex) return;
       titleEl.innerHTML = '<i class="ti ti-edit"></i> Edit Exercise';
       saveBtn.innerHTML = '<i class="ti ti-check"></i> Save Changes';
       document.getElementById('admin-edit-id').value      = ex.id;
       document.getElementById('admin-ex-title').value     = ex.title;
       document.getElementById('admin-ex-muscle').value    = ex.muscle;
       populateSubcats('admin-ex-muscle', 'admin-ex-subcat');
       document.getElementById('admin-ex-subcat').value    = ex.sub;
       document.getElementById('admin-ex-diff').value      = ex.diff    || 'Beginner';
       document.getElementById('admin-ex-duration').value  = ex.duration || '';
       document.getElementById('admin-ex-desc').value      = ex.desc;
       document.getElementById('admin-ex-premium').checked = !!ex.premium;
       document.getElementById('admin-ex-video').value     = ex.videoURL || '';
     } else {
       titleEl.innerHTML = '<i class="ti ti-plus"></i> Add Exercise to Master Library';
       saveBtn.innerHTML = '<i class="ti ti-check"></i> Save Exercise';
     }
   
     document.getElementById('modal-backdrop').classList.add('open');
     modal.classList.add('open');
   }
   
   async function saveAdminExercise() {
     const editId   = document.getElementById('admin-edit-id').value;
     const title    = document.getElementById('admin-ex-title').value.trim();
     const muscle   = document.getElementById('admin-ex-muscle').value;
     const sub      = document.getElementById('admin-ex-subcat').value;
     const diff     = document.getElementById('admin-ex-diff').value;
     const duration = document.getElementById('admin-ex-duration').value.trim() || '—';
     const desc     = document.getElementById('admin-ex-desc').value.trim();
     const premium  = document.getElementById('admin-ex-premium').checked;
     let   videoURL = document.getElementById('admin-ex-video').value.trim();
   
     if (!title)  { showToast('Please enter an exercise title.'); return; }
     if (!muscle) { showToast('Please select a muscle group.'); return; }
     if (!sub)    { showToast('Please select a sub-category.'); return; }
     if (!desc)   { showToast('Please enter a description.'); return; }
   
     // ── Upload local video file if one was selected ──────────
     const fileInput = document.getElementById('admin-ex-file');
     const file      = fileInput && fileInput.files[0];
     if (file) {
       const saveBtn = document.getElementById('admin-modal-save-btn');
       saveBtn.disabled = true;
       saveBtn.innerHTML = '<i class="ti ti-loader" style="animation:spin 1s linear infinite"></i> Uploading…';
       try {
         const storageRef = window._firebase.ref(
           window._storage,
           `masterVideos/${Date.now()}_${file.name}`
         );
         const task = window._firebase.uploadBytesResumable(storageRef, file);
   
         // Show progress in the admin progress bar
         const prog = document.getElementById('admin-upload-progress');
         const fill = document.getElementById('admin-upload-fill');
         const lbl  = document.getElementById('admin-upload-label');
         if (prog) prog.style.display = 'block';
   
         videoURL = await new Promise((resolve, reject) => {
           task.on('state_changed',
             snap => {
               const pct = Math.round(snap.bytesTransferred / snap.totalBytes * 100);
               if (fill) fill.style.width = pct + '%';
               if (lbl)  lbl.textContent  = `Uploading… ${pct}%`;
             },
             reject,
             async () => resolve(await window._firebase.getDownloadURL(task.snapshot.ref))
           );
         });
   
         if (prog) prog.style.display = 'none';
       } catch (e) {
         showToast('Video upload failed. Check Firebase Storage rules.');
         const saveBtn2 = document.getElementById('admin-modal-save-btn');
         saveBtn2.disabled = false;
         saveBtn2.innerHTML = '<i class="ti ti-check"></i> Save Exercise';
         return;
       }
       const saveBtn2 = document.getElementById('admin-modal-save-btn');
       saveBtn2.disabled = false;
       saveBtn2.innerHTML = '<i class="ti ti-check"></i> Save Exercise';
       if (fileInput) fileInput.value = '';
       document.getElementById('admin-file-label').textContent = 'Choose video file…';
     }
   
     if (editId) {
       const idx = MASTER_EXERCISES.findIndex(e => e.id === editId);
       if (idx === -1) return;
       MASTER_EXERCISES[idx] = {
         ...MASTER_EXERCISES[idx],
         title, muscle, sub, diff, duration, desc, premium, videoURL,
       };
       showToast(`✓ "${title}" updated!`);
     } else {
       MASTER_EXERCISES.push({
         id: 'm_' + Date.now(),
         title, muscle, sub, diff, duration, desc, premium,
         videoURL, custom: false,
       });
       showToast(`✓ "${title}" added to master library!`);
     }
   
     saveMasterLibrary();
     closeAllModals();
     renderAdminTable();
     updateAdminStats();
   }
   
   function openDeleteConfirm(id) {
     const ex = MASTER_EXERCISES.find(e => e.id === id);
     if (!ex) return;
     adminDeleteTargetId = id;
     document.getElementById('delete-confirm-text').textContent =
       `"${ex.title}" will be permanently removed from the master library and all trainer views.`;
     document.getElementById('modal-backdrop').classList.add('open');
     document.getElementById('modal-confirm-delete').classList.add('open');
   }
   
   function confirmDeleteExercise() {
     if (!adminDeleteTargetId) return;
     const ex   = MASTER_EXERCISES.find(e => e.id === adminDeleteTargetId);
     const name = ex ? ex.title : 'Exercise';
     MASTER_EXERCISES     = MASTER_EXERCISES.filter(e => e.id !== adminDeleteTargetId);
     adminDeleteTargetId  = null;
     saveMasterLibrary();
     closeAllModals();
     renderAdminTable();
     updateAdminStats();
     showToast(`🗑 "${name}" deleted.`);
   }
   
   function updateAdminStats() {
     const el = document.getElementById('stat-total-exercises');
     if (el) el.textContent = MASTER_EXERCISES.length;
     const rl = document.getElementById('stat-total-routines');
     if (rl) rl.textContent = sentRoutines.length;
   }
   
   /* ══════════════════════════════════════════════════════════
      UTILS
   ══════════════════════════════════════════════════════════ */
   
   function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }
   function delay(ms)     { return new Promise(r => setTimeout(r, ms)); }
   
   function showToast(msg) {
     const t = document.getElementById('toast');
     t.textContent = msg;
     t.classList.add('show');
     setTimeout(() => t.classList.remove('show'), 2800);
   }
   
   function copyToClipboard(text) {
     navigator.clipboard.writeText(text).catch(() => {});
     showToast('✓ Link copied!');
   }
   
   /* ══════════════════════════════════════════════════════════
      KEYBOARD SHORTCUTS
   ══════════════════════════════════════════════════════════ */
   
   document.addEventListener('keydown', e => {
     if (e.key === 'Escape') closeAllModals();
     if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
       const s = document.getElementById('search-input');
       if (s) { s.focus(); e.preventDefault(); }
     }
   });
   
   /* ══════════════════════════════════════════════════════════
      INIT — restore Firebase session on page load
   ══════════════════════════════════════════════════════════ */
   
   // ── Check URL params on page load ─────────────────────────
   // Handles two cases:
   //   ?payment=success|failed  → return from Morning payment page
   //   ?routine=TOKEN           → shared client routine (no login needed)
   (function checkSharedRoute() {
     const params = new URLSearchParams(window.location.search);
   
     /* ── 1. Payment return from Morning ─────────────────────── */
     const paymentStatus = params.get('payment');
     if (paymentStatus === 'success') {
       // Clean the URL immediately so refreshing doesn't re-trigger
       window.history.replaceState({}, '', window.location.pathname);
       // Wait for the app to boot, then show the success message
       // and reload the user profile so the Premium tier is reflected
       window.addEventListener('firebaseReady', async () => {
         showToast('🎉 Payment successful! Your Premium account is now active.');
         // If the user is already logged in, refresh their profile from Firestore
         // so tier updates to "premium" without needing a full logout/login
         if (window._auth && window._firebase) {
           window._firebase.onAuthStateChanged(window._auth, async (user) => {
             if (user && state.user) {
               const profile = await loadUserProfile(user.uid);
               if (profile && profile.tier === 'premium') {
                 state.user.tier = 'premium';
                 // Hide the upgrade nudge banner
                 const banner = document.getElementById('upgrade-nudge-banner');
                 if (banner) banner.classList.add('dismissed');
                 // Hide trial pill in topnav
                 const pill = document.getElementById('trial-pill-top');
                 if (pill) pill.style.display = 'none';
                 showToast('✅ Premium is now active — enjoy unlimited access!');
               }
             }
           });
         }
       });
       return; // Don't process routine token on payment return
     }
   
     if (paymentStatus === 'failed') {
       window.history.replaceState({}, '', window.location.pathname);
       window.addEventListener('firebaseReady', () => {
         showToast('❌ Payment was not completed. Try again from Billing.');
       });
       return;
     }
   
     /* ── 2. Shared routine page (no login required) ─────────── */
     const token = params.get('routine');
     if (!token) return;
   
     // Try localStorage cache first (instant load for the trainer themselves)
     const cached = sentRoutines.find(r => r.shareToken === token);
     if (cached) {
       renderSharedPage(cached);
       showScreen('shared');
       return;
     }
   
     // Show the shared screen with a loading spinner while Firestore fetches
     showScreen('shared');
     document.getElementById('shared-exercises').innerHTML = `
       <div style="text-align:center;padding:60px 20px;color:var(--muted)">
         <i class="ti ti-loader" style="font-size:28px;animation:spin 1s linear infinite;display:block;margin-bottom:12px"></i>
         Loading routine…
       </div>`;
   
     function fetchRoutine() {
       if (!window._firebase || !window._db) return;
       const { getDoc, doc } = window._firebase;
       // Fetch directly by document ID (token) — no query needed, always works
       getDoc(doc(window._db, 'routines', token))
         .then(snap => {
           if (!snap.exists()) {
             document.getElementById('shared-exercises').innerHTML =
               '<div style="text-align:center;padding:60px;color:var(--muted)">Routine not found or has expired.</div>';
             return;
           }
           renderSharedPage(snap.data());
         })
         .catch(err => {
           console.error('Routine fetch error:', err);
           document.getElementById('shared-exercises').innerHTML =
             '<div style="text-align:center;padding:60px;color:var(--muted)">Could not load routine. Please try again.</div>';
         });
     }
   
     if (window._firebaseReady) fetchRoutine();
     else window.addEventListener('firebaseReady', fetchRoutine);
   })();
   
   // Wait for the Firebase module script to signal it's ready,
   // then register the auth state listener.
   if (window._firebaseReady) {
     _initAuthPersistence();
   } else {
     window.addEventListener('firebaseReady', _initAuthPersistence);
   }