!function(scope) {
    const X = [-72.19186401367188, -72.61570434570312, 17.90058288574219, 87.98150634765625, -79.477294921875, -7.4723968505859375, -5.967943572998047, -37.714324951171875, -60.176690673828126, -13.438540649414062, 5.762976837158203, 10.025380706787109, -15.225117492675782, -44.5116943359375, 70.21256713867187, -77.34771118164062, -21.836790466308592, 9.86437759399414, -32.23638916015625, 97.38124389648438, 17.5202392578125, 1.5435269355773926, 16.815640258789063, -97.2963134765625, 46.45830383300781, -45.012228393554686, 2.3242023468017576, 72.20474853515626, 92.89500122070312, -86.5346435546875, 34.69784851074219, -1.6013269424438477, 11.792695617675781, -53.8343505859375, -12.173324584960938, -52.36912841796875, 11.50256576538086, -19.068313598632812, 44.933233642578124, 33.34100341796875, 20.359500122070312, -58.80100708007812, -10.784239196777344, 28.739703369140624, 5.220246887207031, -52.191583251953126, -6.143609619140625, -23.68704833984375, 42.108010864257814, 29.316058349609374, -1.9611644744873047, 28.59603271484375, -32.839175415039065, 9.515393829345703, -59.97933349609375, -74.86468505859375, 60.90077514648438, 33.268157958984375, 40.74894714355469, 84.97257080078126, 59.13594970703125, 40.46660461425781, -15.026707458496094, -42.87205200195312, -17.156529235839844, -25.598944091796874, 2.7984615325927735, -23.695298767089845, 19.320068359375, -43.53948974609375, 46.23982543945313, 0.3931009769439697, 67.82207641601562, -21.323809814453124, -51.91444702148438, 20.63708038330078, 41.70567626953125, -67.7315185546875, -81.8291259765625, 98.03292236328124, 5.561127853393555, -33.24550170898438, -28.918948364257812, 23.365890502929688, -24.654730224609374, 32.180239868164065, -11.131686401367187, 62.43245239257813, 47.02731628417969, -111.35101318359375, 64.54566040039063, -50.40434265136719, 90.28325805664062, 75.86524047851563, 66.14952392578125, -94.86727905273438, 20.318975830078124, 40.508636474609375, 47.378012084960936, -33.90986022949219];
    const Y = [-34.12498168945312, -5.280286407470703, 31.180703735351564, 2.4758268356323243, -56.49190673828125, 43.80192565917969, -94.80478515625, -16.879109191894532, 79.74808959960937, -58.70673828125, -70.2453125, 113.82244873046875, -9.898148345947266, -27.822402954101562, -41.84543151855469, 39.351251220703126, 71.4056884765625, 12.876429748535156, -27.753439331054686, -38.609197998046874, 45.2468017578125, -1.749744987487793, 92.93272094726562, -23.666073608398438, -81.78843994140625, -86.1287109375, 75.56246337890624, 43.41160888671875, -1.2737661361694337, 6.054631042480469, -41.642111206054686, -35.82887268066406, -8.802883911132813, -10.93645782470703, -42.592691040039064, -78.00751342773438, 18.077177429199217, 36.206640625, -19.827639770507812, 31.580490112304688, -56.38102416992187, 7.0601753234863285, -94.06469116210937, 70.94594116210938, 54.81658935546875, 19.106002807617188, -47.027102661132815, 41.14833984375, 44.052862548828124, 58.431976318359375, 50.57118530273438, 17.250442504882812, 76.37554931640625, -4.795932388305664, -38.170370483398436, 2.8439767837524412, 42.020941162109374, -19.35022735595703, -23.606524658203124, 17.76203308105469, 7.173992156982422, -83.00944213867187, 100.83781127929687, 56.1618896484375, 9.012749481201173, -21.88481750488281, -24.024191284179686, 3.1585666656494142, 29.348504638671876, -9.754296112060548, -2.855228805541992, -77.62152709960938, 55.382476806640625, 10.618225860595704, -65.41499633789063, -39.488616943359375, -24.05413818359375, 36.79942321777344, 73.39614868164062, 46.436892700195315, -5.492086029052734, 43.26661682128906, 28.348550415039064, -118.17415771484374, -58.272119140625, 100.38925170898438, 17.909098815917968, -54.309515380859374, -71.81497192382812, 8.909732818603516, -29.317349243164063, -54.91035766601563, -30.424151611328124, 11.617797088623046, 81.82099609375, -35.60399169921875, -66.05169067382812, 5.393063735961914, 22.833163452148437, 81.54735107421875];
    const Z = [-8.87335433959961, -7.140866088867187, 84.34651489257813, -47.903829956054686, 29.068994140625, 55.29156494140625, -17.348300170898437, -19.68877410888672, 10.607491302490235, 89.63270874023438, -55.40620727539063, 40.36002197265625, 105.54830322265624, 14.756935119628906, 73.51705932617188, 52.32719116210937, -93.44075317382813, -43.1002197265625, -65.27991333007813, 5.671796417236328, 29.867831420898437, -78.19642333984375, -56.98388671875, 21.40946807861328, -1.3936951637268067, 25.40057373046875, 26.62548828125, -12.41580581665039, -13.256832885742188, 22.06427917480469, 40.62015991210937, 37.44849853515625, -14.747958374023437, 39.58492736816406, 2.6097368240356444, -13.56328887939453, -8.289659881591797, -20.19867858886719, -17.81942138671875, -59.95849609375, -21.718486022949218, 79.656640625, 51.3935546875, 59.07667236328125, 1.0088839530944824, -38.822940063476565, -90.53571166992188, 17.96819152832031, 0.42539043426513673, -30.026779174804688, -53.81083984375, 33.692385864257815, 46.85675048828125, 65.090283203125, 81.012060546875, -72.08975219726562, 45.428155517578126, 100.23136596679687, -93.70157470703126, 69.308154296875, -81.61968994140625, -52.80003051757812, -7.987468719482422, -53.81539306640625, 34.95647277832031, 62.87327880859375, -44.9667724609375, -45.946337890625, -97.713916015625, -101.80983276367188, 54.165985107421875, 20.822459411621093, -56.78492431640625, 1.4567225456237793, -62.004705810546874, 10.016947174072266, -51.766973876953124, -5.485232162475586, -48.565911865234376, 22.175936889648437, 18.717440795898437, 76.35533447265625, -85.09012451171876, 4.405549621582031, -29.61600341796875, -4.305135345458984, 112.60533447265625, -24.211412048339845, 38.48765258789062, -7.956561279296875, 22.800749206542967, 40.23072204589844, -56.72637939453125, 21.747361755371095, 21.019749450683594, -39.837396240234376, 65.9286376953125, 0.9249940872192383, -28.960635375976562, -36.292538452148435];
    const cmap = [0x440154, 0x440256, 0x450457, 0x450559, 0x46075a, 0x46085c, 0x460a5d, 0x460b5e, 0x470d60, 0x470e61, 0x471063, 0x471164, 0x471365, 0x481467, 0x481668, 0x481769, 0x48186a, 0x481a6c, 0x481b6d, 0x481c6e, 0x481d6f, 0x481f70, 0x482071, 0x482173, 0x482374, 0x482475, 0x482576, 0x482677, 0x482878, 0x482979, 0x472a7a, 0x472c7a, 0x472d7b, 0x472e7c, 0x472f7d, 0x46307e, 0x46327e, 0x46337f, 0x463480, 0x453581, 0x453781, 0x453882, 0x443983, 0x443a83, 0x443b84, 0x433d84, 0x433e85, 0x423f85, 0x424086, 0x424186, 0x414287, 0x414487, 0x404588, 0x404688, 0x3f4788, 0x3f4889, 0x3e4989, 0x3e4a89, 0x3e4c8a, 0x3d4d8a, 0x3d4e8a, 0x3c4f8a, 0x3c508b, 0x3b518b, 0x3b528b, 0x3a538b, 0x3a548c, 0x39558c, 0x39568c, 0x38588c, 0x38598c, 0x375a8c, 0x375b8d, 0x365c8d, 0x365d8d, 0x355e8d, 0x355f8d, 0x34608d, 0x34618d, 0x33628d, 0x33638d, 0x32648e, 0x32658e, 0x31668e, 0x31678e, 0x31688e, 0x30698e, 0x306a8e, 0x2f6b8e, 0x2f6c8e, 0x2e6d8e, 0x2e6e8e, 0x2e6f8e, 0x2d708e, 0x2d718e, 0x2c718e, 0x2c728e, 0x2c738e, 0x2b748e, 0x2b758e, 0x2a768e, 0x2a778e, 0x2a788e, 0x29798e, 0x297a8e, 0x297b8e, 0x287c8e, 0x287d8e, 0x277e8e, 0x277f8e, 0x27808e, 0x26818e, 0x26828e, 0x26828e, 0x25838e, 0x25848e, 0x25858e, 0x24868e, 0x24878e, 0x23888e, 0x23898e, 0x238a8d, 0x228b8d, 0x228c8d, 0x228d8d, 0x218e8d, 0x218f8d, 0x21908d, 0x21918c, 0x20928c, 0x20928c, 0x20938c, 0x1f948c, 0x1f958b, 0x1f968b, 0x1f978b, 0x1f988b, 0x1f998a, 0x1f9a8a, 0x1e9b8a, 0x1e9c89, 0x1e9d89, 0x1f9e89, 0x1f9f88, 0x1fa088, 0x1fa188, 0x1fa187, 0x1fa287, 0x20a386, 0x20a486, 0x21a585, 0x21a685, 0x22a785, 0x22a884, 0x23a983, 0x24aa83, 0x25ab82, 0x25ac82, 0x26ad81, 0x27ad81, 0x28ae80, 0x29af7f, 0x2ab07f, 0x2cb17e, 0x2db27d, 0x2eb37c, 0x2fb47c, 0x31b57b, 0x32b67a, 0x34b679, 0x35b779, 0x37b878, 0x38b977, 0x3aba76, 0x3bbb75, 0x3dbc74, 0x3fbc73, 0x40bd72, 0x42be71, 0x44bf70, 0x46c06f, 0x48c16e, 0x4ac16d, 0x4cc26c, 0x4ec36b, 0x50c46a, 0x52c569, 0x54c568, 0x56c667, 0x58c765, 0x5ac864, 0x5cc863, 0x5ec962, 0x60ca60, 0x63cb5f, 0x65cb5e, 0x67cc5c, 0x69cd5b, 0x6ccd5a, 0x6ece58, 0x70cf57, 0x73d056, 0x75d054, 0x77d153, 0x7ad151, 0x7cd250, 0x7fd34e, 0x81d34d, 0x84d44b, 0x86d549, 0x89d548, 0x8bd646, 0x8ed645, 0x90d743, 0x93d741, 0x95d840, 0x98d83e, 0x9bd93c, 0x9dd93b, 0xa0da39, 0xa2da37, 0xa5db36, 0xa8db34, 0xaadc32, 0xaddc30, 0xb0dd2f, 0xb2dd2d, 0xb5de2b, 0xb8de29, 0xbade28, 0xbddf26, 0xc0df25, 0xc2df23, 0xc5e021, 0xc8e020, 0xcae11f, 0xcde11d, 0xd0e11c, 0xd2e21b, 0xd5e21a, 0xd8e219, 0xdae319, 0xdde318, 0xdfe318, 0xe2e418, 0xe5e419, 0xe7e419, 0xeae51a, 0xece51b, 0xefe51c, 0xf1e51d, 0xf4e61e, 0xf6e620, 0xf8e621, 0xfbe723, 0xfde725];
    const instruments = [["ct4mgm", 0, "Acoustic Grand Piano"], ["ct4mgm", 1, "Bright Acoustic Piano"], ["ct4mgm", 3, "Honky-tonk Piano"], ["ct4mgm", 4, "Electric Piano 1"], ["ct4mgm", 5, "Electric Piano 2"], ["ct4mgm", 6, "Harpsichord"], ["ct4mgm", 7, "Clavi"], ["ct4mgm", 8, "Celesta"], ["ct4mgm", 9, "Glockenspiel"], ["ct4mgm", 10, "Music Box"], ["ct4mgm", 11, "Vibraphone"], ["ct4mgm", 12, "Marimba"], ["ct4mgm", 13, "Xylophone"], ["ct4mgm", 15, "Dulcimer"], ["ct4mgm", 16, "Drawbar Organ"], ["ct4mgm", 17, "Percussive Organ"], ["ct4mgm", 18, "Rock Organ"], ["ct4mgm", 19, "Church Organ"], ["ct4mgm", 20, "Reed Organ"], ["ct4mgm", 21, "Accordion"], ["ct4mgm", 22, "Harmonica"], ["ct4mgm", 23, "Tango Accordion"], ["ct4mgm", 24, "Acoustic Guitar (nylon)"], ["ct4mgm", 25, "Acoustic Guitar (steel)"], ["ct4mgm", 32, "Acoustic Bass"], ["8mbgmgs", 33, "Electric Bass (finger)"], ["ct4mgm", 34, "Electric Bass (pick)"], ["ct4mgm", 35, "Fretless Bass"], ["ct4mgm", 36, "Slap Bass 1"], ["ct4mgm", 37, "Slap Bass 2"], ["ct4mgm", 38, "Synth Bass 1"], ["ct4mgm", 39, "Synth Bass 2"], ["ct4mgm", 44, "Tremolo Strings"], ["ct4mgm", 45, "Pizzicato Strings"], ["ct4mgm", 46, "Orchestral Harp"], ["masquerade55v006", 47, "Timpani"], ["ct4mgm", 48, "String Ensemble 1"], ["ct4mgm", 50, "SynthStrings 1"], ["ct4mgm", 51, "SynthStrings 2"], ["ct4mgm", 52, "Choir Aahs"], ["ct4mgm", 53, "Voice Oohs"], ["ct4mgm", 54, "Synth Voice"], ["ct4mgm", 55, "Orchestra Hit"], ["ct4mgm", 56, "Trumpet"], ["ct4mgm", 57, "Trombone"], ["ct4mgm", 58, "Tuba"], ["ct4mgm", 59, "Muted Trumpet"], ["ct4mgm", 60, "French Horn"], ["ct4mgm", 61, "Brass Section"], ["ct4mgm", 65, "Alto Sax"], ["ct4mgm", 67, "Baritone Sax"], ["ct4mgm", 68, "Oboe"], ["ct4mgm", 69, "English Horn"], ["ct4mgm", 70, "Bassoon"], ["ct4mgm", 71, "Clarinet"], ["ct4mgm", 72, "Piccolo"], ["ct4mgm", 73, "Flute"], ["ct4mgm", 74, "Recorder"], ["ct4mgm", 75, "Pan Flute"], ["ct4mgm", 76, "Blown Bottle"], ["ct4mgm", 77, "Shakuhachi"], ["ct4mgm", 78, "Whistle"], ["ct4mgm", 79, "Ocarina"], ["ct4mgm", 80, "Lead 1 (square)"], ["ct4mgm", 81, "Lead 2 (sawtooth)"], ["ct4mgm", 82, "Lead 3 (calliope)"], ["ct4mgm", 86, "Lead 7 (fifths)"], ["ct4mgm", 87, "Lead 8 (bass + lead)"], ["ct4mgm", 88, "Pad 1 (new age)"], ["ct4mgm", 89, "Pad 2 (warm)"], ["ct4mgm", 90, "Pad 3 (polysynth)"], ["ct4mgm", 91, "Pad 4 (choir)"], ["ct4mgm", 93, "Pad 6 (metallic)"], ["ct4mgm", 94, "Pad 7 (halo)"], ["ct4mgm", 95, "Pad 8 (sweep)"], ["ct4mgm", 96, "FX 1 (rain)"], ["ct4mgm", 97, "FX 2 (soundtrack)"], ["ct4mgm", 98, "FX 3 (crystal)"], ["8mbgmgs", 101, "FX 6 (goblins)"], ["8mbgmgs", 102, "FX 7 (echoes)"], ["8mbgmgs", 103, "FX 8 (sci-fi)"], ["ct4mgm", 104, "Sitar"], ["ct4mgm", 105, "Banjo"], ["8mbgmgs", 112, "Tinkle Bell"], ["8mbgmgs", 113, "Agogo"], ["8mbgmgs", 114, "Steel Drums"], ["8mbgmgs", 121, "Breath Noise"], ["Candy_Bee", 0, "Candy Bee"], ["MuseScore_General", 0, "Acoustic Grand Piano"], ["MuseScore_General", 2, "Electric Grand Piano"], ["MuseScore_General", 4, "Electric Piano 1"], ["MuseScore_General", 5, "Electric Piano 2"], ["MuseScore_General", 11, "Vibraphone"], ["MuseScore_General", 19, "Church Organ"], ["MuseScore_General", 24, "Acoustic Guitar (nylon)"], ["MuseScore_General", 45, "Pizzicato Strings"], ["MuseScore_General", 46, "Orchestral Harp"], ["MuseScore_General", 48, "String Ensemble 1"], ["MuseScore_General", 56, "Trumpet"], ["MuseScore_General", 80, "Lead 1 (square)"]];
    const centroids = [52, 102, 109, 15, 94, 175, 169, 107, 208, 75, 33, 116, 234, 127, 32, 38, 28, 108, 90, 121, 107, 128, 45, 92, 46, 49, 89, 74, 47, 84, 58, 97, 140, 83, 25, 87, 148, 99, 91, 95, 65, 76, 71, 123, 98, 65, 203, 37, 193, 171, 145, 73, 75, 52, 81, 22, 34, 28, 114, 116, 87, 0, 1, 125, 117, 95, 120, 75, 86, 23, 109, 89, 94, 110, 35, 64, 83, 111, 69, 46, 123, 255, 140, 96, 250, 63, 165, 249, 35, 92, 13, 29, 6, 133, 41, 42, 18, 113, 108, 92];
    const energy = [70, 54, 59, 104, 75, 46, 69, 54, 53, 62, 140, 39, 23, 44, 104, 101, 126, 86, 118, 105, 113, 85, 89, 55, 66, 88, 61, 93, 101, 28, 70, 69, 87, 57, 131, 29, 108, 110, 109, 113, 99, 108, 179, 73, 91, 90, 45, 144, 56, 83, 79, 114, 123, 100, 117, 143, 144, 140, 117, 90, 82, 255, 222, 160, 180, 169, 122, 165, 145, 95, 96, 129, 81, 99, 61, 109, 127, 94, 116, 121, 117, 49, 72, 56, 18, 46, 0, 30, 54, 60, 127, 122, 67, 103, 66, 40, 76, 141, 107, 162];

    var player = new MediaElementPlayer('player', {
        audioWidth: 280,
        audioHeight: 40,
        features: ['playpause', 'progress', 'volume'],
		pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
		success: function(mediaElement, originalNode) {}
	});

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("hsl(212, 50%, 100%)");

    const fieldOfView = 50;
    const aspectRatio = 1.0;
    const nearPlane = 150;
    const farPlane = 450;
    
    scene.fog = new THREE.Fog(scene.background, nearPlane, farPlane);

    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.z = 300;

    const viewer = document.getElementById('viewer');
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(viewer.clientWidth, viewer.clientHeight);
    viewer.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x404040));
    const light = new THREE.PointLight(0xffffff, 0.6, 0);
    light.position.set(-50, 50, 200);
    var lightHolder = new THREE.Group();
    lightHolder.add(light);
    scene.add(lightHolder);

    const spheres = [];

    for (var i = 0; i < 100; i++) {
        var geometry = new THREE.SphereGeometry(5, 32, 32);
        var material = new THREE.MeshBasicMaterial({color: cmap[centroids[i]]});
        var sphere = new THREE.Mesh(geometry, material);
        sphere.instrument = instruments[i];
        spheres.push(sphere);
        scene.add(sphere);
        sphere.position.set(X[i], Y[i], Z[i]);
    }

    const controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.noZoom = true;
    controls.noPan = true;

    var autorotate = true;
    var mousedown = false;
    var dragging = false;
    renderer.domElement.addEventListener('mousedown', () => {
        autorotate = false;
        mousedown = true;
    });

    var mouse = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();
    var currentSphere = null;
    renderer.domElement.addEventListener('mousemove', e => {
        mouse.x = ((event.clientX - renderer.domElement.offsetLeft) / renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = - ((event.clientY - renderer.domElement.offsetTop) / renderer.domElement.clientHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(spheres);

        if(intersects.length > 0) {
            viewer.style.cursor = 'pointer';
            autorotate = false;
            var intersect = intersects[0].object;
            if (intersect !== currentSphere) {
                currentSphere = intersect;
                [...document.getElementsByClassName("tippy-content")].forEach(element => {
                    element.innerHTML = `${intersect.instrument[2]}<br>(${intersect.instrument[0]})`;
                });
                [...document.getElementsByClassName('tippy-popper')].forEach(element => {
                    element.style.display = 'block';
                });
                document.getElementById('soundfont-info').innerHTML = intersect.instrument[0];
                document.getElementById('midi-info').innerHTML = `${intersect.instrument[1]} ${intersect.instrument[2]}`;
            }
        } else {
            viewer.style.cursor = 'grab';
            currentSphere = null;
            [...document.getElementsByClassName('tippy-popper')].forEach(element => {
                element.style.display = 'none';
            });
            document.getElementById('soundfont-info').innerHTML = "";
            document.getElementById('midi-info').innerHTML = "";
        }
        if (mousedown) {
            dragging = true;
        }
    });

    renderer.domElement.addEventListener('mouseup', e => {
        if (!dragging && currentSphere) {
            player.remove();
            document.getElementById('player').src = `hundred-samples/${currentSphere.instrument[0]}-${currentSphere.instrument[1]}.flac`;
            player = new MediaElementPlayer('player', {
                audioWidth: 280,
                audioHeight: 40,
                features: ['playpause', 'progress', 'volume'],
                pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
                success: function(mediaElement, originalNode) {}
            });
            setTimeout(() => {
                player.play();
            }, 0);
        }

        dragging = false;
        mousedown = false;

        setTimeout(() => {
            var event = document.createEvent('MouseEvents');
            event.initEvent('mouseenter', true, true);
            renderer.domElement.dispatchEvent(event);
                setTimeout(() => {
                var event = new MouseEvent('mousemove', e);
                renderer.domElement.dispatchEvent(event);
            }, 0);
        }, 0);
    });

    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        controls.update();
        if (autorotate) {
            controls._moveCurr.x += 0.005;
            controls._moveCurr.y += 0.002;
        }
        lightHolder.quaternion.copy(camera.quaternion);
    }
    animate();

    var currentCriteria = 'centroids';
    scope.updateColors = element => {
        const criteria = element.getAttribute("data-criteria");
        if (criteria !== currentCriteria) {
            currentCriteria = criteria;
            const array = (criteria === "centroids") ? centroids : energy;
            for (var i = 0; i < 100; i++) {
                spheres[i].material.color = new THREE.Color(cmap[array[i]]);
            }
            [...document.getElementsByClassName('color-selector')].forEach(el => {
                el.classList.remove('selected');
            })
            element.classList.add('selected');
        }
    }

    tippy.setDefaults({placement: 'bottom', followCursor: true, duration: 0});
    tippy(renderer.domElement);

    scope.hundred = {
        scene: scene,
        camera: camera,
        renderer: renderer,
        spheres: spheres,
        controls: controls,
        player: player,
        toggleRotation: () => autorotate = !autorotate
    };
}(window);
