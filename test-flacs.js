!function(scope) {
    const table = document.getElementsByTagName('table')[0];
    const instruments = ['GP', 'EP', 'VP', 'CO', 'AG', 'PS', 'OH', 'SE', 'TP', 'SL'];
    const instrumentNames = ["Grand Piano", "Electric Piano", "Vibraphone", "Church Organ", "Acoustic Guitar", "Pizzicato Strings", "Orchestral Harp", "String Ensemble", "Trumpet", "Synth Lead"];
    const tracks = [
        'waldstein_1.mid', 'ty_juni.mid', 'pathetique_2.mid', 'mz_331_3.mid', 'muss_1.mid', 'liz_liebestraum.mid', 'liz_et6.mid',
        'liz_et3.mid', 'elise.mid', 'deb_clai.mid', 'chpn_op66.mid', 'chpn-p15.mid', 'bach_846.mid', 'alb_se6.mid'
    ];
    const groups = ['original', 'mulaw-ref', 'resyn', 'tanh', 'no-tanh', 'exp'];

    const instrumentSelector = document.getElementById('instrument-selector');
    for (var i = 0; i < instrumentNames.length; i++) {
        var cell = document.createElement('div');
        cell.innerHTML = instrumentNames[i];
        if (i == 0) {
            cell.classList.add('selected');
        }
        cell.setAttribute('data-instrument', instruments[i]);
        cell.onclick = (e) => {
            [...document.querySelectorAll('#instrument-selector > div')].forEach(element => {
                element.classList.remove('selected');
            });
            e.target.classList.add('selected');
            setTimeout(() => {
                var instrument = e.target.getAttribute('data-instrument');
                [...document.getElementsByTagName('audio')].forEach(element => {
                    var parent = element;
                    while (parent.tagName.toLowerCase() != 'td') {
                        parent = parent.parentElement;
                    }
                    element.player.remove();
                    var src = element.src;
                    element = parent.querySelector('audio');
                    element.src = src.slice(0, src.length - 10) + instrument + src.slice(-8);
                    element.player = new MediaElementPlayer(element, {
                        audioWidth: 170,
                        audioHeight: 40,
                        features: ['playpause', 'progress'],
                        pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
                        success: function(mediaElement, originalNode) {}
                    });
                });
            }, 0);
        }
        instrumentSelector.appendChild(cell);
    }


    const body = document.createElement('tbody');
    body.setAttribute('id', 'tbody');
    for (var j = tracks.length-1; j >= 0; j--) {
        var row = document.createElement('tr');
        var label = document.createElement('td');
        label.innerHTML = tracks[j];
        label.style.fontFamily = 'monospace';
        label.style.paddingLeft = '10px';
        row.appendChild(label);
        for (var k = 0; k < groups.length; k++) {
            var cell = document.createElement('td');
            var audio = document.createElement('audio');
            audio.src = `test-flacs/${groups[k]}/${instruments[0]}-${('0' + j).slice(-2)}.flac`;
            cell.appendChild(audio);
            row.appendChild(cell);
        }
        body.appendChild(row);
    }
    table.appendChild(body);

    [...document.getElementsByTagName('audio')].forEach(element => {
        self.player = new MediaElementPlayer(element, {
            audioWidth: 170,
            audioHeight: 40,
            features: ['playpause', 'progress'],
            pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
            success: function(mediaElement, originalNode) {}
        });
    });
}(window);
