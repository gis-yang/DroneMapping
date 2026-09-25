/* GeoFly Lab Part 107 practice quiz.
   Questions 1-24 come from the FAA sample questions in the original GeoFly/CSGIS guide;
   the rest were written for this course from 14 CFR Part 107 and the FAA sUAS Study Guide.
   Chart questions refer to figures in the FAA testing supplement FAA-CT-8080-2H. */
(function () {
    var SUPPLEMENT = 'https://www.faa.gov/training_testing/testing/supplements';
    var Q = [
        // ---------- Regulations ----------
        { c: 'reg', q: 'A small UA causes an accident and your crew member loses consciousness. When do you report the accident?',
          a: ['No accidents need to be reported', 'When requested by the UA owner', 'Within 10 days of the accident'], k: 2,
          e: 'Report to the FAA within 10 calendar days any operation that causes serious injury, loss of consciousness, or more than $500 of damage to property other than the drone.' },
        { c: 'reg', q: 'A small UA must be operated in a manner which',
          a: ['does not endanger the life or property of another', 'requires more than one visual observer', 'never exceeds 200 feet AGL'], k: 0,
          e: 'No person may operate a small UAS in a careless or reckless manner that endangers the life or property of another (14 CFR 107.23).' },
        { c: 'reg', q: 'You plan to release golf balls from your small UA at an altitude of 100 feet AGL. You must ensure the objects being dropped will',
          a: ['not create an undue hazard to persons or property', 'land within 10 feet of the expected landing zone', 'not cause property damage in excess of $300'], k: 0,
          e: 'Dropping objects is allowed only if it does not create an undue hazard to persons or property. When unsure, the most conservative safety answer is usually correct.' },
        { c: 'reg', q: 'After having dinner and wine, your client asks you to go outside to demonstrate the small UA. You must',
          a: ['pass a self-administered sobriety test before operating a small UA', 'not operate a small UA within 8 hours of consuming any alcoholic beverage', 'ensure that your visual observer has not consumed any alcoholic beverage in the previous 12 hours'], k: 1,
          e: 'No crewmember may act within 8 hours of drinking alcohol or with a blood alcohol concentration of 0.04 percent or greater.' },
        { c: 'reg', q: 'During a flight of your small UA, you observe a hot air balloon entering the area. You should',
          a: ['yield the right-of-way to the hot air balloon', 'ensure the UA passes below, above, or ahead of the balloon', 'expect the hot air balloon to climb above your altitude'], k: 0,
          e: 'A small UA must yield the right of way to all other aircraft, including balloons, gliders, and helicopters.' },
        { c: 'reg', q: 'According to 14 CFR Part 107, what is the maximum groundspeed for a small UA?',
          a: ['87 knots', '87 mph', '100 knots'], k: 0,
          e: 'The limit is 100 mph, which is 87 knots.' },
        { c: 'reg', q: 'Upon request by the FAA, the remote pilot in command must provide',
          a: ['a logbook documenting small UA landing currency', 'a remote pilot certificate with a small UAS rating', 'any employer-issued photo identification'], k: 1,
          e: 'The remote pilot certificate must be available during operations and shown to the FAA or law enforcement on request. "Landing currency" applies to crewed aircraft pilots.' },
        { c: 'reg', q: 'The refusal of a remote PIC to submit to a blood alcohol test when requested by a law enforcement officer',
          a: ['is grounds for suspension or revocation of their remote pilot certificate', 'can be delayed for a period up to 8 hours after the request', 'has no consequences to the remote pilot certificate'], k: 0,
          e: 'Refusing an alcohol test is grounds for denying an application, or suspending or revoking a certificate, for up to one year.' },
        { c: 'ops', q: 'What precautions should a remote PIC take to prevent possible in-flight emergencies when using lithium-based batteries?',
          a: ['Store the batteries in a freezer to allow proper recharging', 'Follow the manufacturer’s recommendations for safe battery handling', 'Allow the battery to charge until it reaches a minimum temperature of 100 °C'], k: 1,
          e: 'Follow the manufacturer’s guidance. Store lithium batteries in a cool, dry place at about room temperature, and never in a hot car or a freezer.' },
        { c: 'ops', q: 'A remote PIC and a visual observer defining their roles and responsibilities before and during a small UA operation is a good use of',
          a: ['Crew Resource Management', 'Authoritarian Resource Management', 'Single Pilot Resource Management'], k: 0,
          e: 'Crew Resource Management (CRM) is the effective use of all available resources (people, hardware, software, and information) to ensure a safe operation.' },
        { c: 'ops', q: 'What should the operator of a small UAS do if the manufacturer does not provide information about scheduled maintenance?',
          a: ['Contact the FAA for a minimum equipment list', 'Establish a scheduled maintenance protocol', 'Contact the NTSB for component failure rates'], k: 1,
          e: 'If the manufacturer does not provide a maintenance schedule, the operator should create and follow one, and keep maintenance records.' },
        { c: 'reg', q: 'What is the minimum age to be issued a remote pilot certificate?',
          a: ['14 years', '16 years', '18 years'], k: 1,
          e: 'Applicants must be at least 16 years old, able to read, speak, write, and understand English, and in a physical and mental condition to fly safely.' },
        { c: 'reg', q: 'How often must a certificated remote pilot complete recurrent training to operate under Part 107?',
          a: ['Every 12 calendar months', 'Every 24 calendar months', 'Every 36 calendar months'], k: 1,
          e: 'The certificate does not expire, but recurrent training (free and online from the FAA) must be completed every 24 calendar months.' },
        { c: 'reg', q: 'Part 107 applies to small unmanned aircraft that weigh, including everything on board,',
          a: ['less than 25 pounds', 'less than 55 pounds', 'less than 100 pounds'], k: 1,
          e: 'A small UA weighs less than 55 pounds at takeoff, including payload and attachments.' },
        { c: 'reg', q: 'What are the minimum distances a small UA must remain from clouds?',
          a: ['500 feet below and 2,000 feet horizontally', '1,000 feet below and 1 statute mile horizontally', '250 feet below and 500 feet horizontally'], k: 0,
          e: 'Stay at least 500 feet below clouds and 2,000 feet horizontally from clouds, with at least 3 statute miles of visibility.' },
        { c: 'reg', q: 'What is required to operate a small UA at night under Part 107?',
          a: ['Navigation lights visible for 1 statute mile', 'Anti-collision lighting visible for at least 3 statute miles and current night training or testing', 'A waiver from the FAA for every flight'], k: 1,
          e: 'Night and civil twilight flights require anti-collision lighting visible for at least 3 statute miles, and the remote PIC must have completed the updated knowledge test or training.' },
        { c: 'reg', q: 'Operating a small UA from a moving land vehicle is',
          a: ['never allowed', 'allowed only over a sparsely populated area and not while carrying property for compensation', 'allowed anywhere if a visual observer rides along'], k: 1,
          e: 'Operation from a moving vehicle is allowed only over a sparsely populated area, and never from a moving aircraft or while transporting property for hire.' },
        { c: 'reg', q: 'A person without a remote pilot certificate may manipulate the flight controls of a small UA if',
          a: ['they have logged 10 hours of simulator time', 'they are under the direct supervision of a remote PIC who can immediately take direct control', 'the flight stays below 200 feet AGL'], k: 1,
          e: 'An uncertificated person may fly under the direct supervision of a certificated remote PIC who has the ability to immediately take direct control.' },
        { c: 'reg', q: 'A drone that is registered, or required to be registered, must also',
          a: ['comply with the Remote ID rule', 'carry an ADS-B Out transmitter', 'file a flight plan before each flight'], k: 0,
          e: 'Registered drones must broadcast Remote ID (built in or with a broadcast module), unless flown inside an FAA-Recognized Identification Area. Part 107 drones may not use ADS-B Out.' },
        { c: 'reg', q: 'A small UA crashes into a parked car. The repair estimate is $800. The remote PIC must',
          a: ['report the accident to the FAA within 10 days', 'report only if someone was injured', 'report within 30 days to the NTSB only'], k: 0,
          e: 'Damage to property other than the drone that costs more than $500 to repair (or replace, if lower) must be reported to the FAA within 10 days.' },

        // ---------- Airspace and charts ----------
        { c: 'air', fig: 'Figure 78', q: 'You have been hired to inspect the railroad tracks from Blencoe (SE of Sioux City) to Onawa. Will ATC authorization be required?',
          a: ['Yes, Onawa is in Class D airspace that is designated for an airport', 'No, your entire flight is in Class G airspace', 'Yes, you must contact the Onawa control tower to operate within 5 miles of the airport'], k: 1,
          e: 'There is no controlled airspace between Blencoe and Onawa. It is Class G from the surface up to 1,200 feet AGL, so no authorization is needed.' },
        { c: 'air', fig: 'Figure 78', q: 'You have been contracted to inspect towers about 4 NM southwest of the Sioux Gateway (SUX) airport. What is the maximum altitude above ground level (AGL) that you are authorized to operate over the top of the towers?',
          a: ['400 feet AGL', '402 feet AGL', '802 feet AGL'], k: 2,
          e: 'The tallest tower in that cluster is 402 feet AGL. Within a 400-foot radius of a structure you may fly up to 400 feet above its top: 402 + 400 = 802 feet AGL.' },
        { c: 'air', fig: 'Figure 25, Area 3', q: 'The floor of Class B airspace at Dallas Executive (RBD) is',
          a: ['at the surface', '3,000 feet MSL', '3,100 feet MSL'], k: 1,
          e: 'The 110/30 label means Class B from 3,000 feet MSL to 11,000 feet MSL in that sector. Below it, RBD sits in Class D.' },
        { c: 'air', fig: 'Figure 23, Area 3', q: 'What is the floor of the Savannah Class C airspace at the shelf area (outer circle)?',
          a: ['1,300 feet AGL', '1,300 feet MSL', '1,700 feet MSL'], k: 1,
          e: 'The 41/13 label on the outer ring means the shelf runs from 1,300 feet MSL to 4,100 feet MSL. Class C altitudes are charted in MSL.' },
        { c: 'air', fig: 'Figure 78', q: 'What class of airspace is associated with Sioux Gateway/Col. Day (SUX) Airport?',
          a: ['Class B airspace', 'Class C airspace', 'Class D airspace'], k: 2,
          e: 'A blue dashed circle marks Class D, which starts at the surface. The bracketed number gives its ceiling in hundreds of feet MSL.' },
        { c: 'air', fig: 'Figure 20, Area 1', q: 'The Fentress NALF Airport (NFE) is in what type of airspace?',
          a: ['Class C', 'Class E', 'Class G'], k: 1,
          e: 'A magenta dashed circle marks Class E airspace that starts at the surface.' },
        { c: 'air', fig: 'Figure 75, Area 6', q: 'During preflight planning, you plan to operate in R-2305. Where would you find additional information regarding this airspace?',
          a: ['In the Aeronautical Information Manual', 'In the Chart Supplements U.S.', 'In the Special Use Airspace area of the chart'], k: 2,
          e: 'R-2305 is a restricted area. Its altitudes, times of use, and controlling agency are listed in the Special Use Airspace table in the chart margin.' },
        { c: 'air', fig: 'Figure 21', q: 'A farmer hires you to inspect crops in the Devils Lake West MOA, east of area 2. How would you find out if the MOA is active?',
          a: ['Refer to the chart legend', 'This information is available in the Small UAS database', 'Refer to the Military Operations Directory'], k: 0,
          e: 'MOA names, altitudes, times of use, and controlling agencies are listed in the Special Use Airspace information printed with the chart legend. Also check NOTAMs before flight.' },
        { c: 'air', fig: 'Figure 23, Area 4', q: 'What is the required flight visibility for a remote pilot operating near the Plantation Airport (JYL)?',
          a: ['5 statute miles', '1 statute mile', '3 statute miles'], k: 2,
          e: 'A trick question: the chart is irrelevant. Minimum visibility for all Part 107 operations is 3 statute miles from the control station.' },
        { c: 'air', fig: 'Figure 21, Area 1', q: 'After receiving ATC authorization to operate near Minot International (MOT) while the tower is operating, which frequency could be used to monitor manned aircraft and ATC communications?',
          a: ['UNICOM 122.95', 'ASOS 118.725', 'CT 118.2'], k: 2,
          e: 'The control tower (CT) frequency, 118.2, is in the airport data block. It also serves as the CTAF when the tower is closed.' },
        { c: 'air', fig: 'Figure 24, Area 6', q: 'What type of airport is Card Airport?',
          a: ['Public towered', 'Public non-towered', 'Private non-towered'], k: 2,
          e: '"PVT" marks a private airport, and magenta symbols indicate an airport without an operating control tower.' },
        { c: 'air', fig: 'Figure 20, Area 4', q: 'A small UA is launched 2 NM northeast of the town of Hertford. What is the height of the highest obstacle?',
          a: ['399 feet MSL', '500 feet MSL', '500 feet AGL'], k: 2,
          e: 'The tallest tower is 514 feet MSL and 500 feet AGL (in parentheses). Only the AGL value matches a choice.' },
        { c: 'air', fig: 'Figure 24, Area 3, and Legend 1', q: 'For information about parachute operations at Tri-County Airport, refer to',
          a: ['notes on the border of the chart', 'Chart Supplements U.S.', 'the Notices to Air Missions (NOTAM) publication'], k: 1,
          e: 'The Chart Supplement U.S. (formerly the Airport/Facility Directory) gives detailed airport information, including parachute and glider operations.' },
        { c: 'air', q: 'Which airspace can you fly in under Part 107 without ATC authorization?',
          a: ['Class G', 'Class D', 'Class E surface area designated for an airport'], k: 0,
          e: 'Class G is uncontrolled. Class B, C, D, and surface-area Class E require prior authorization, usually through LAANC or FAA DroneZone.' },
        { c: 'air', q: 'The fastest way to request authorization to fly in controlled airspace below the published facility map altitude is',
          a: ['LAANC through an FAA-approved provider', 'calling the control tower on a handheld radio', 'filing a flight plan with Flight Service'], k: 0,
          e: 'LAANC (Low Altitude Authorization and Notification Capability) gives near-real-time approval up to the altitudes on the UAS Facility Maps.' },
        { c: 'air', q: 'Class D airspace generally extends from the surface to about',
          a: ['2,500 feet above the airport elevation', '4,000 feet above the airport elevation', '10,000 feet MSL'], k: 0,
          e: 'Class D typically reaches 2,500 feet above the airport, Class C 4,000 feet, and Class B 10,000 feet MSL.' },

        // ---------- Weather ----------
        { c: 'wx', q: 'In a METAR, "BKN008" means',
          a: ['broken clouds at 800 feet AGL', 'broken clouds at 8,000 feet MSL', 'visibility of 8 statute miles'], k: 0,
          e: 'Cloud heights are in hundreds of feet above ground level: BKN008 means a broken layer at 800 feet AGL, which is a ceiling.' },
        { c: 'wx', q: 'In a METAR, "14021G26KT" means the wind is',
          a: ['from 140° at 21 knots, gusting to 26 knots', 'from 210° at 14 knots, gusting to 26 knots', 'toward 140° at 21 mph, gusting to 26 mph'], k: 0,
          e: 'The first three digits give the true direction the wind is blowing from, then the speed in knots. "G" gives the gust speed.' },
        { c: 'wx', q: 'Which conditions produce a high density altitude and reduced aircraft performance?',
          a: ['Cold, dry air at sea level', 'Hot, humid air at a high-elevation site', 'Cool air with high barometric pressure'], k: 1,
          e: 'High, hot, and humid conditions all lower air density. Propellers and motors then produce less lift and performance decreases.' },
        { c: 'wx', q: 'What are characteristics of stable air?',
          a: ['Cumuliform clouds, showery precipitation, and turbulence', 'Stratiform clouds, continuous precipitation, and smooth air with fair to poor visibility', 'Good visibility and strong updrafts'], k: 1,
          e: 'Stable air brings stratiform clouds and fog, steady precipitation, smooth air, and often haze. Unstable air brings cumulus clouds, showers, turbulence, and usually good visibility.' },
        { c: 'wx', q: 'The three stages of a thunderstorm are',
          a: ['cumulus, mature, and dissipating', 'developing, severe, and decaying', 'lifting, mature, and anvil'], k: 0,
          e: 'Cumulus (updrafts), mature (updrafts and downdrafts, heaviest precipitation), and dissipating (downdrafts).' },
        { c: 'wx', q: 'A small spread between temperature and dew point most likely indicates',
          a: ['strong gusty winds', 'fog or low clouds may form', 'clear skies and good visibility'], k: 1,
          e: 'When temperature approaches the dew point, the air nears saturation, and fog or low clouds become likely.' },
        { c: 'wx', q: 'Where can a remote pilot get an official weather briefing and NOTAMs?',
          a: ['From Flight Service at 1800wxbrief.com or 1-800-WX-BRIEF', 'Only from a local TV forecast', 'From the drone manufacturer’s app'], k: 0,
          e: 'Flight Service (1800wxbrief.com) provides official briefings, including NOTAMs and temporary flight restrictions.' },

        // ---------- Operations, performance, human factors ----------
        { c: 'ops', q: 'In the IMSAFE personal checklist, the "A" stands for',
          a: ['Altitude', 'Alcohol', 'Airspace'], k: 1,
          e: 'IMSAFE: Illness, Medication, Stress, Alcohol, Fatigue, Emotion (or Eating).' },
        { c: 'ops', q: 'The antidote for the hazardous attitude "invulnerability" is',
          a: ['"Follow the rules."', '"It could happen to me."', '"Not so fast. Think first."'], k: 1,
          e: 'Anti-authority: follow the rules. Impulsivity: not so fast, think first. Invulnerability: it could happen to me. Macho: taking chances is foolish. Resignation: I’m not helpless.' },
        { c: 'ops', q: 'In a coordinated level turn with a 60° bank, the load factor is',
          a: ['1 G', '2 G', '4 G'], k: 1,
          e: 'Load factor rises quickly beyond 45° of bank: 2 G at 60° and about 5.76 G at 80°. Higher load factors raise stall speed and stress on the aircraft.' },
        { c: 'ops', q: 'Unless otherwise indicated, turns in an airport traffic pattern are made to the',
          a: ['left', 'right', 'direction of the wind'], k: 0,
          e: 'Standard traffic patterns use left turns. Watch for crewed aircraft in the pattern when flying near an airport.' },
        { c: 'ops', q: 'An aircraft taking off on Runway 27 is heading approximately',
          a: ['027° magnetic', '270° magnetic', '270° true'], k: 1,
          e: 'Runway numbers are the magnetic heading rounded to the nearest 10°, with the last zero dropped.' },
        { c: 'ops', q: 'At a non-towered airport with no UNICOM or Flight Service station, pilots self-announce on',
          a: ['MULTICOM 122.9', 'the ATIS frequency', 'guard frequency 121.5'], k: 0,
          e: 'MULTICOM (122.9) is used where there is no tower, FSS, or UNICOM. Otherwise pilots use the airport’s CTAF.' },
        { c: 'ops', q: 'When scanning for traffic, each stop should',
          a: ['last 10 seconds and cover 90°', 'cover about 30° and last no longer than 2 to 3 seconds', 'focus only on the horizon'], k: 1,
          e: 'Scan from the greatest distance inward, about 30° at a time, overlapping the previous area by about 10°, with stops no longer than 2 to 3 seconds.' },
        { c: 'ops', q: 'In the DECIDE model of decision making, the first step is to',
          a: ['Detect that a change has occurred', 'Decide on a new plan', 'Delegate the task'], k: 0,
          e: 'DECIDE: Detect, Estimate, Choose, Identify, Do, Evaluate.' }
    ];

    var CAT = { reg: 'Regulations', air: 'Airspace and charts', wx: 'Weather', ops: 'Operations and human factors' };
    var root = document.getElementById('quiz');
    if (!root) return;
    var els = {
        setup: root.querySelector('.quiz-setup'),
        run: root.querySelector('.quiz-run'),
        done: root.querySelector('.quiz-done'),
        mode: root.querySelector('#quiz-mode'),
        start: root.querySelector('#quiz-start'),
        progress: root.querySelector('.quiz-progress'),
        bar: root.querySelector('.quiz-bar span'),
        cat: root.querySelector('.quiz-cat'),
        fig: root.querySelector('.quiz-fig'),
        q: root.querySelector('.quiz-q'),
        opts: root.querySelector('.quiz-opts'),
        fb: root.querySelector('.quiz-feedback'),
        next: root.querySelector('#quiz-next'),
        score: root.querySelector('.quiz-score'),
        review: root.querySelector('.quiz-review'),
        again: root.querySelector('#quiz-again'),
        retry: root.querySelector('#quiz-retry')
    };
    var deck = [], i = 0, right = 0, missed = [];

    function shuffle(a) { for (var j = a.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[r]; a[r] = t; } return a; }
    function show(el) { [els.setup, els.run, els.done].forEach(function (x) { x.hidden = x !== el; }); }

    function build(mode) {
        var pool = Q.slice();
        if (mode === 'quick') return shuffle(pool).slice(0, 15);
        if (mode === 'nochart') return shuffle(pool.filter(function (x) { return !x.fig; }));
        if (CAT[mode]) return shuffle(pool.filter(function (x) { return x.c === mode; }));
        return shuffle(pool);
    }

    function start(list) {
        deck = list; i = 0; right = 0; missed = [];
        show(els.run); render();
        els.q.focus();
    }

    function render() {
        var item = deck[i];
        els.progress.textContent = 'Question ' + (i + 1) + ' of ' + deck.length;
        els.bar.style.width = (i / deck.length * 100) + '%';
        els.cat.textContent = CAT[item.c];
        if (item.fig) {
            els.fig.innerHTML = 'Uses ' + item.fig + ' of the FAA testing supplement FAA-CT-8080-2H. <a href="' + SUPPLEMENT + '" target="_blank" rel="noopener">Open the supplement</a>';
            els.fig.hidden = false;
        } else { els.fig.hidden = true; }
        els.q.textContent = item.q;
        els.opts.innerHTML = '';
        item.a.forEach(function (text, n) {
            var b = document.createElement('button');
            b.type = 'button';
            b.className = 'quiz-opt';
            b.innerHTML = '<span class="letter">' + 'ABC'[n] + '</span><span></span>';
            b.lastChild.textContent = text;
            b.addEventListener('click', function () { answer(n); });
            els.opts.appendChild(b);
        });
        els.fb.hidden = true;
        els.next.hidden = true;
    }

    function answer(n) {
        var item = deck[i];
        var buttons = els.opts.querySelectorAll('button');
        buttons.forEach(function (b, m) {
            b.disabled = true;
            if (m === item.k) b.classList.add('is-right');
            if (m === n && n !== item.k) b.classList.add('is-wrong');
        });
        var ok = n === item.k;
        if (ok) right++; else missed.push({ item: item, chose: n });
        els.fb.className = 'quiz-feedback ' + (ok ? 'ok' : 'no');
        els.fb.innerHTML = '<strong>' + (ok ? 'Correct.' : 'Not quite. The answer is ' + 'ABC'[item.k] + '.') + '</strong> ';
        els.fb.appendChild(document.createTextNode(item.e));
        els.fb.hidden = false;
        els.next.textContent = i + 1 < deck.length ? 'Next question' : 'See results';
        els.next.hidden = false;
        els.next.focus();
    }

    function finish() {
        var pct = Math.round(right / deck.length * 100);
        els.score.innerHTML = '<span class="big">' + pct + '%</span> ' + right + ' of ' + deck.length + ' correct. ' +
            (pct >= 70 ? 'That is above the 70% passing score on the FAA exam.' : 'The FAA exam requires 70%. Review the topics below and try again.');
        els.review.innerHTML = '';
        if (missed.length) {
            var h = document.createElement('h3'); h.textContent = 'Review the questions you missed'; els.review.appendChild(h);
            var ol = document.createElement('ol');
            missed.forEach(function (m) {
                var li = document.createElement('li');
                var p1 = document.createElement('p'); p1.className = 'rq'; p1.textContent = m.item.q;
                var p2 = document.createElement('p'); p2.innerHTML = '<span class="rk">Answer: ' + 'ABC'[m.item.k] + '. </span>';
                p2.appendChild(document.createTextNode(m.item.a[m.item.k] + ' — ' + m.item.e));
                li.appendChild(p1); li.appendChild(p2); ol.appendChild(li);
            });
            els.review.appendChild(ol);
            els.retry.hidden = false;
        } else { els.retry.hidden = true; }
        show(els.done);
        els.score.focus();
    }

    els.start.addEventListener('click', function () { start(build(els.mode.value)); });
    els.next.addEventListener('click', function () { if (++i < deck.length) render(); else finish(); });
    els.again.addEventListener('click', function () { show(els.setup); });
    els.retry.addEventListener('click', function () { start(shuffle(missed.map(function (m) { return m.item; }))); });
    var count = document.getElementById('quiz-count');
    if (count) count.textContent = Q.length;

    // Flip cards for key numbers
    document.querySelectorAll('.card-flip').forEach(function (c) {
        c.addEventListener('click', function () {
            var f = c.classList.toggle('flipped');
            c.setAttribute('aria-pressed', f ? 'true' : 'false');
        });
    });
    var flipAll = document.getElementById('flip-all');
    if (flipAll) flipAll.addEventListener('click', function () {
        var cards = document.querySelectorAll('.card-flip');
        var anyHidden = Array.prototype.some.call(cards, function (c) { return !c.classList.contains('flipped'); });
        cards.forEach(function (c) { c.classList.toggle('flipped', anyHidden); c.setAttribute('aria-pressed', anyHidden ? 'true' : 'false'); });
        flipAll.textContent = anyHidden ? 'Hide all answers' : 'Show all answers';
    });
})();
