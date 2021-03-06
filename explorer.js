!function(scope) {
    const length = 64 * 64 * 80 * 250;
    const cmap = [
        [ 68,  1, 84,255], [ 68,  2, 86,255], [ 69,  4, 87,255], [ 69,  5, 89,255], [ 70,  7, 90,255], [ 70,  8, 92,255], [ 70, 10, 93,255], [ 70, 11, 94,255], 
        [ 71, 13, 96,255], [ 71, 14, 97,255], [ 71, 16, 99,255], [ 71, 17,100,255], [ 71, 19,101,255], [ 72, 20,103,255], [ 72, 22,104,255], [ 72, 23,105,255], 
        [ 72, 24,106,255], [ 72, 26,108,255], [ 72, 27,109,255], [ 72, 28,110,255], [ 72, 29,111,255], [ 72, 31,112,255], [ 72, 32,113,255], [ 72, 33,115,255], 
        [ 72, 35,116,255], [ 72, 36,117,255], [ 72, 37,118,255], [ 72, 38,119,255], [ 72, 40,120,255], [ 72, 41,121,255], [ 71, 42,122,255], [ 71, 44,122,255], 
        [ 71, 45,123,255], [ 71, 46,124,255], [ 71, 47,125,255], [ 70, 48,126,255], [ 70, 50,126,255], [ 70, 51,127,255], [ 70, 52,128,255], [ 69, 53,129,255], 
        [ 69, 55,129,255], [ 69, 56,130,255], [ 68, 57,131,255], [ 68, 58,131,255], [ 68, 59,132,255], [ 67, 61,132,255], [ 67, 62,133,255], [ 66, 63,133,255], 
        [ 66, 64,134,255], [ 66, 65,134,255], [ 65, 66,135,255], [ 65, 68,135,255], [ 64, 69,136,255], [ 64, 70,136,255], [ 63, 71,136,255], [ 63, 72,137,255], 
        [ 62, 73,137,255], [ 62, 74,137,255], [ 62, 76,138,255], [ 61, 77,138,255], [ 61, 78,138,255], [ 60, 79,138,255], [ 60, 80,139,255], [ 59, 81,139,255], 
        [ 59, 82,139,255], [ 58, 83,139,255], [ 58, 84,140,255], [ 57, 85,140,255], [ 57, 86,140,255], [ 56, 88,140,255], [ 56, 89,140,255], [ 55, 90,140,255], 
        [ 55, 91,141,255], [ 54, 92,141,255], [ 54, 93,141,255], [ 53, 94,141,255], [ 53, 95,141,255], [ 52, 96,141,255], [ 52, 97,141,255], [ 51, 98,141,255], 
        [ 51, 99,141,255], [ 50,100,142,255], [ 50,101,142,255], [ 49,102,142,255], [ 49,103,142,255], [ 49,104,142,255], [ 48,105,142,255], [ 48,106,142,255], 
        [ 47,107,142,255], [ 47,108,142,255], [ 46,109,142,255], [ 46,110,142,255], [ 46,111,142,255], [ 45,112,142,255], [ 45,113,142,255], [ 44,113,142,255], 
        [ 44,114,142,255], [ 44,115,142,255], [ 43,116,142,255], [ 43,117,142,255], [ 42,118,142,255], [ 42,119,142,255], [ 42,120,142,255], [ 41,121,142,255], 
        [ 41,122,142,255], [ 41,123,142,255], [ 40,124,142,255], [ 40,125,142,255], [ 39,126,142,255], [ 39,127,142,255], [ 39,128,142,255], [ 38,129,142,255], 
        [ 38,130,142,255], [ 38,130,142,255], [ 37,131,142,255], [ 37,132,142,255], [ 37,133,142,255], [ 36,134,142,255], [ 36,135,142,255], [ 35,136,142,255], 
        [ 35,137,142,255], [ 35,138,141,255], [ 34,139,141,255], [ 34,140,141,255], [ 34,141,141,255], [ 33,142,141,255], [ 33,143,141,255], [ 33,144,141,255], 
        [ 33,145,140,255], [ 32,146,140,255], [ 32,146,140,255], [ 32,147,140,255], [ 31,148,140,255], [ 31,149,139,255], [ 31,150,139,255], [ 31,151,139,255], 
        [ 31,152,139,255], [ 31,153,138,255], [ 31,154,138,255], [ 30,155,138,255], [ 30,156,137,255], [ 30,157,137,255], [ 31,158,137,255], [ 31,159,136,255], 
        [ 31,160,136,255], [ 31,161,136,255], [ 31,161,135,255], [ 31,162,135,255], [ 32,163,134,255], [ 32,164,134,255], [ 33,165,133,255], [ 33,166,133,255], 
        [ 34,167,133,255], [ 34,168,132,255], [ 35,169,131,255], [ 36,170,131,255], [ 37,171,130,255], [ 37,172,130,255], [ 38,173,129,255], [ 39,173,129,255], 
        [ 40,174,128,255], [ 41,175,127,255], [ 42,176,127,255], [ 44,177,126,255], [ 45,178,125,255], [ 46,179,124,255], [ 47,180,124,255], [ 49,181,123,255], 
        [ 50,182,122,255], [ 52,182,121,255], [ 53,183,121,255], [ 55,184,120,255], [ 56,185,119,255], [ 58,186,118,255], [ 59,187,117,255], [ 61,188,116,255], 
        [ 63,188,115,255], [ 64,189,114,255], [ 66,190,113,255], [ 68,191,112,255], [ 70,192,111,255], [ 72,193,110,255], [ 74,193,109,255], [ 76,194,108,255], 
        [ 78,195,107,255], [ 80,196,106,255], [ 82,197,105,255], [ 84,197,104,255], [ 86,198,103,255], [ 88,199,101,255], [ 90,200,100,255], [ 92,200, 99,255], 
        [ 94,201, 98,255], [ 96,202, 96,255], [ 99,203, 95,255], [101,203, 94,255], [103,204, 92,255], [105,205, 91,255], [108,205, 90,255], [110,206, 88,255], 
        [112,207, 87,255], [115,208, 86,255], [117,208, 84,255], [119,209, 83,255], [122,209, 81,255], [124,210, 80,255], [127,211, 78,255], [129,211, 77,255], 
        [132,212, 75,255], [134,213, 73,255], [137,213, 72,255], [139,214, 70,255], [142,214, 69,255], [144,215, 67,255], [147,215, 65,255], [149,216, 64,255], 
        [152,216, 62,255], [155,217, 60,255], [157,217, 59,255], [160,218, 57,255], [162,218, 55,255], [165,219, 54,255], [168,219, 52,255], [170,220, 50,255], 
        [173,220, 48,255], [176,221, 47,255], [178,221, 45,255], [181,222, 43,255], [184,222, 41,255], [186,222, 40,255], [189,223, 38,255], [192,223, 37,255], 
        [194,223, 35,255], [197,224, 33,255], [200,224, 32,255], [202,225, 31,255], [205,225, 29,255], [208,225, 28,255], [210,226, 27,255], [213,226, 26,255], 
        [216,226, 25,255], [218,227, 25,255], [221,227, 24,255], [223,227, 24,255], [226,228, 24,255], [229,228, 25,255], [231,228, 25,255], [234,229, 26,255], 
        [236,229, 27,255], [239,229, 28,255], [241,229, 29,255], [244,230, 30,255], [246,230, 32,255], [248,230, 33,255], [251,231, 35,255], [253,231, 37,255], 
    ];

    const instrument_coords = {
        'Grand Piano': [92, 157],
        'Electric Piano': [115, 228],
        'Vibraphone': [28, 149],
        'Church Organ': [228, 140],
        'Acoustic Guitar': [131, 191],
        'Pizzicato Strings': [48, 85],
        'Orchestral Harp': [71, 212],
        'String Ensemble': [178, 61],
        'Trumpet': [184, 186],
        'Synth Lead': [58, 28],
    }

    const loadingStatus = document.getElementById('loading');
    const downloadPercentage = document.getElementById('download-percentage');
    const content = document.getElementById('content');
    const embeddingSpace = document.getElementById('embedding');
    const melCanvas = document.getElementById('mel-canvas');
    const ctx = melCanvas.getContext('2d');
    const playingMarker = document.getElementById('playing-marker');

    const self = scope.explorer = {};
    self.mels = null;
    self.image = new Uint8ClampedArray(4 * 80 * 250);
    
    function draw(i, j) {
        const offset = (i * 64 + j) * 80 * 250;
        for (var y = 0; y < 80; y++) {
            for (var x = 0; x < 250; x++) {
                var k = y * 250 + x;
                var color = cmap[self.mels[offset + k]];
                self.image[4 * k + 0] = color[0];
                self.image[4 * k + 1] = color[1];
                self.image[4 * k + 2] = color[2];
                self.image[4 * k + 3] = color[3];
            }
        }

        ctx.putImageData(new ImageData(explorer.image, 250, 80), 0, 0)
    }
    self.draw = draw;

    content.onmouseover = content.onmousemove = e => {
        var rect = content.getBoundingClientRect()
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var i = Math.round(x / 4.0);
        var j = 63 - Math.round(y / 4.0);

        if (0 <= i && i < 64 && 0 <= j && j < 64) {
            var showtip = false;
            for (var key in instrument_coords) {
                if (Math.abs(instrument_coords[key][0] - i * 4) <= 20 && Math.abs(instrument_coords[key][1] - j * 4) <= 20) {
                    [...document.getElementsByClassName("tippy-content")].forEach(element => {
                        element.innerHTML = key;
                        showtip = true;
                    });
                }
            }
            [...document.getElementsByClassName('tippy-popper')].forEach(element => {
                element.style.display = showtip ? 'block' : 'none';
            });
            
            draw(i, j);
        }
    }

    content.onclick = e => {
        var rect = content.getBoundingClientRect()
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var i = Math.round(x / 4);
        var j = 63 - Math.round(y / 4);

        if (0 <= i && i < 64 && 0 <= j && j < 64) {
            var src = 'runpixels/mel-' + ('000' + (i*5+2)).slice(-3) + '-' + ('000' + (j*5+2)).slice(-3) + '.pt.flac';
            if (self.player.src != src) {
                playingMarker.style.display = 'block';
                playingMarker.style.left = x + 'px';
                playingMarker.style.top = y + 'px';
                self.player.src = src;
                self.player.play();
            }
        }
    }

    const embeddingOptions = [...document.getElementsByClassName("embedding-option")];

    embeddingOptions.forEach(element => {
        element.onmouseover = () => {
            if (!element.classList.contains('selected')) {
                embeddingOptions.forEach(element => {
                    element.classList.remove('selected');
                })
                element.classList.add('selected');
                embeddingSpace.src = element.getAttribute('data-image');
            }
        }
    });

    function download() {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = e => {
            if (e.lengthComputable) {
                var percent = Math.round(e.loaded / e.total * 100);
                downloadPercentage.innerHTML = percent + "%";
            }
        };
        xhr.onerror = e => loadingStatus.innerHTML = "Error: error";
        xhr.onabort = e => loadingStatus.innerHTML = "Error: aborted";
        xhr.ontimeout = e => loadingStatus.innerHTML = "Error: timeout";
        xhr.onreadystatechange = e => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    self.mels = new Uint8ClampedArray(xhr.response);
                    loadingStatus.style.display = 'none';
                    content.style.display = 'block';
                    self.draw(32, 32);
                } else {
                    loadingStatus.innerHTML = "Error: HTTP " + xhr.status;
                }
            }
        };
        xhr.open("GET", "mel-data.bin");
        xhr.send();
    }

    self.player = new MediaElementPlayer('player', {
        audioWidth: 625,
        audioHeight: 40,
		pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
		success: function(mediaElement, originalNode) {}
	});

    tippy.setDefaults({placement: 'bottom', followCursor: true, duration: 0});
    tippy('#embedding');
    download();
}(window);
