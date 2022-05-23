import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let savedSongs = {
  "song1": {
    "name": "new song",
    "artist": "empty",
    "tempo": 120,
    "beatsPerMeasure": 4,
    "stepsPerBeat": 4
  },
  "song2": {
    "name": "Star Wars theme",
    "artist": "John Williams",
    "tempo": 140,
    "beatsPerMeasure": 4,
    "stepsPerBeat": 3,
    "c1": ["C3,6,200,10, G3,6,200,10", "F3,1,200,10, E3,1,200,10, D3,1,200,10, C4,6,200,10, G3,3,200,10", "F3,1,200,10, E3,1,200,10, D3,1,200,10, C4,6,200,10, G3,3,200,10", "F3,1,200,10, E3,1,200,10, F3,1,200,10, D3,6,200,10, G2,1,200,10, G2,1,200,10, G2,1,200,10", "C3,6,200,10, G3,6,200,10", "F3,1,200,10, E3,1,200,10, D3,1,200,10, C4,6,200,10, G3,3,200,10", "F3,1,200,10, E3,1,200,10, D3,1,200,10, C4,6,200,10, G3,3,200,10", "F3,1,200,10, E3,1,200,10, F3,1,200,10, D3,6,200,10"],
    "c2": ["R,3,,, C2,4,200,10, R,2,,, C2,3,200,10", "F1,6,200,10, C2,4,200,10, R,2,,", "F1,6,200,10, C2,4,200,10, R,2,,", "Bb2,6,200,10, G1,4,200,10, R,2,,"],
    "c3": ["C1,50,200,10"],
    "c4": ["R,3,,, E4,1,200,10, R,8,,", "R,3,,, E4,1,200,10, R,8,,", "R,3,,, E4,1,200,10, R,8,,", "R,3,,, D4,1,200,10, R,2,,, Bb4,1,200,10, R,5,,", "R,3,,, E4,1,200,10, R,8,,", "R,3,,, E4,1,200,10, R,8,,", "R,3,,, E4,1,200,10, R,8,,", "R,3,,, D4,1,200,10, R,2,,, B4,1,200,10, R,2,,, R,2,,, G3,1,200,10, R,2,,"]
  },
  "song3": {
    "name": "songname",
    "artist": "",
    "tempo": 120,
    "beatsPerMeasure": 4,
    "stepsPerBeat": 4,
    "c6": ["G3,8,200,10, Gb3,2,200,10, G3,2,200,10, A3,4,200,10", "E3,8,200,10, D3,8,200,10", "C3,8,200,10, B3,2,200,10, C3,2,200,10, D3,4,200,10", "A2,12,200,10, R,4,,", "B3,8,200,10, C3,2,200,10, D3,4,200,10, E3,2,200,10", "G3,8,200,10, D3,8,200,10", "C4,8,200,10, C4,2,200,10, B4,4,200,10, A3,2,200,10", "G3,16,200,10"],
    "c3": ["G2,8,200,10, Gb2,8,200,10", "E2,8,200,10, D2,8,200,10", "C2,8,200,10, A1,8,200,10", "D2,8,200,10, D1,8,200,10", "C2,8,200,10, D2,8,200,10", "G2,8,200,10, G2,8,200,10", "A2,8,200,10, Gb2,8,200,10", "G2,16,200,10"],
  },
};

function drawKeys(keySpacing, keyAmount, width, height, ctx) {
  for (let i = 0; i < keyAmount && i * keySpacing + 50 < height; i++) {
    if (i % 12 === 2 || i % 12 === 9) {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, i * keySpacing + 50, 75, keySpacing - 2);
    }
    else {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, i * keySpacing + 50, 75, keySpacing - 2);
      ctx.beginPath();
      ctx.moveTo(100, i * keySpacing + 50);
      ctx.lineTo(width, i*  keySpacing + 50);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgb(36, 25, 94)";
      ctx.stroke();
      i++;
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, i * keySpacing + 50, 75, keySpacing - 2);
    }
    ctx.beginPath();
    ctx.moveTo(100, i * keySpacing + 50);
    ctx.lineTo(width, i * keySpacing + 50);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgb(36, 25, 94)";
    if (i % 12 === 2) {
      ctx.strokeStyle = "rgb(26, 20, 64)";
      ctx.lineWidth = 2;
    }
    ctx.stroke();
    ctx.strokeStyle = "#000000";
  }
}

function drawMeasures(zoom, keySpacing, currentMeasure, beatsPerMeasure, stepsPerBeat, width, height, ctx, nCtx) {
  var keybg = ctx.createLinearGradient(0, 0, width, 0);
  keybg.addColorStop(0, "#CCCCCC");
  keybg.addColorStop(1, "#CCCCDF");
  ctx.fillStyle = keybg;
  ctx.fillRect(0, 0, width, 50);
  ctx.fillStyle = "#998877";
  ctx.fillRect(8, 8, 80, 30);
  ctx.font = "20px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText("options", 15, 30);
  for (let i = 0; i < width; i++) {
    if (!(i % (beatsPerMeasure * stepsPerBeat))) {
      ctx.beginPath();
      ctx.moveTo(i * zoom * 5 + 100, 0);
      ctx.lineTo(i * zoom * 5 + 100, height);
      ctx.lineWidth = 5;
      ctx.stroke();
      nCtx.font = "20px Arial";
      nCtx.fillText(`${i / (beatsPerMeasure * stepsPerBeat) + currentMeasure}`, i * zoom * 5 + 110, 45);
    }
    else if (!(i % beatsPerMeasure)) {
      ctx.beginPath();
      ctx.moveTo(i * zoom * 5 + 100, 50);
      ctx.lineTo(i * zoom * 5 + 100, height);
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    else if (zoom > 3) {
      ctx.beginPath();
      ctx.moveTo(i * zoom * 5 + 100, 50);
      ctx.lineTo(i * zoom * 5 + 100, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgb(25, 24, 69)";
      ctx.setLineDash([7, 11]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeStyle = "#000000";
    }
  }
}

function notesHelper(channel, currentMeasure, max, keySpacing, nCtx, map, zoom, color) {
  let marker = 107;
  if (channel != undefined) {
    for (let i = currentMeasure; i < max && i < channel.length; i++) {
      let m = channel[i].split(", ");
      for (let j = 0; j < m.length; j++) {
        let n = m[j].split(",");
        let octave = n[0][1];
        let h = 1006;
        if (octave === "b") {
          octave = n[0][2];
          n[0] = n[0][0] + n[0][1];
        }
        else {
          n[0] = n[0][0];
        }
        h -= keySpacing * 12 * octave;
        h += keySpacing * map.get(n[0]);
        nCtx.fillStyle = color;
        nCtx.fillRect(marker - 3, h - keySpacing + 2, zoom * 5 * n[1] - 1, keySpacing);
        nCtx.font = "20px Arial";
        nCtx.fillStyle = "#000000";
        nCtx.fillText(`${n[0]}`, marker, h);
        marker += zoom * 5 * n[1];
      }
    }
  }
}

function drawNotes(song, keySpacing, zoom, currentMeasure, activeNote, width, height, nCtx) {
  nCtx.clearRect(0, 0, width, height);
  const map = new Map();
  map.set('A', 0);
  map.set('Ab', 1);
  map.set('G', 2);
  map.set('Gb', 3);
  map.set('F', 4);
  map.set('E', 5);
  map.set('Eb', 6);
  map.set('D', 7);
  map.set('Db', 8);
  map.set('C', 9);
  map.set('B', 10);
  map.set('Bb', 11);
  let max = width / (zoom * 5);
  notesHelper(song.c1, currentMeasure, max, keySpacing, nCtx, map, zoom, (activeNote === 1) ? "#DDDDDD" : "#CCA700");
  notesHelper(song.c2, currentMeasure, max, keySpacing, nCtx, map, zoom, (activeNote === 2) ? "#DDDDDD" : "#20B020");
  notesHelper(song.c3, currentMeasure, max, keySpacing, nCtx, map, zoom, (activeNote === 3) ? "#DDDDDD" : "#DD8000");
  notesHelper(song.c4, currentMeasure, max, keySpacing, nCtx, map, zoom, (activeNote === 4) ? "#DDDDDD" : "#00CCCC");
  notesHelper(song.c5, currentMeasure, max, keySpacing, nCtx, map, zoom, (activeNote === 5) ? "#DDDDDD" : "#F000FF");
  notesHelper(song.c6, currentMeasure, max, keySpacing, nCtx, map, zoom, (activeNote === 6) ? "#DDDDDD" : "#FF0055");
  notesHelper(song.c7, currentMeasure, max, keySpacing, nCtx, map, zoom, (activeNote === 7) ? "#DDDDDD" : "#777777");
  notesHelper(song.c8, currentMeasure, max, keySpacing, nCtx, map, zoom, (activeNote === 8) ? "#DDDDDD" : "#654321");
}

function draw(zoom,keySpacing, keyAmount, currentMeasure, activeNote, currentSong, width, height, ctx, nCtx) {
  ctx.clearRect(0, 0, width, height);
  
  var gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, "rgb(36, 36, 148)");
  gradient.addColorStop(1, "rgb(60, 36, 148)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  var image = new Image();
  image = document.getElementById("note");
  nCtx.drawImage(image, 40, 20);

  var keybg = ctx.createLinearGradient(0, 0, 100, 0);
  keybg.addColorStop(0, "rgb(36, 36, 148)");
  keybg.addColorStop(0.71, "rgb(36, 36, 148)");
  keybg.addColorStop(0.75, "#FFFFFF");
  keybg.addColorStop(1, "#000000");
  ctx.fillStyle = keybg;
  ctx.fillRect(0, 0, 100, height);
  drawKeys(keySpacing, keyAmount, width, height, ctx);
  drawNotes(currentSong, keySpacing, zoom, currentMeasure, activeNote, width, height, nCtx);
  drawMeasures(zoom, keySpacing, currentMeasure, currentSong.stepsPerBeat, currentSong.beatsPerMeasure, width, height, ctx, nCtx);
}

$(document).ready(function() {
  for (var song in savedSongs) {
    if (savedSongs.hasOwnProperty(song)) {
      $('#song-list').append(`

      <div class="card" id="${song}"><h4>${savedSongs[song].name}</h4><container><input type="radio" name="song-name" value="${song}"><p>made by: ${savedSongs[song].artist}</p><p>tempo: ${savedSongs[song].tempo} BPM</p><p>time signature: ${savedSongs[song].stepsPerBeat}/${savedSongs[song].beatsPerMeasure}</p></container</div>`);
    }
  }
  $('#main-form').submit(function() {
    event.preventDefault();
    $('#home').hide();
    var c = document.getElementById("mainCanvas");
    var n = document.getElementById("notesCanvas");
    c.style = "border:4px solid #555555";
    //c.style = "border-radius: 10px";
    c.width = $('#main').width() * 0.95;
    c.height = window.innerHeight * 0.95;
    n.width = $('#main').width() * 0.95;
    n.height = window.innerHeight * 0.95;

    var ctx = c.getContext("2d");
    var nCtx = n.getContext("2d");

    let zoom = 4;
    let keySpacing = 18;
    let keyAmount = 60;
    let currentMeasure = 0;
    let activeNote = 1;
    let currentSong = savedSongs[$("input:radio[name=song-name]:checked").val()];
    currentSong = (currentSong === undefined) ? savedSongs["song1"] : currentSong;
    console.log(currentSong);
    draw(zoom,keySpacing, keyAmount, currentMeasure, activeNote, currentSong, c.width, c.height, ctx, nCtx);
    
    window.addEventListener('keydown', function (e) {
      if (e.key > 0 && e.key < 9) {
        activeNote = parseInt(e.key);
        draw(zoom,keySpacing, keyAmount, currentMeasure, activeNote, currentSong, c.width, c.height, ctx, nCtx);
      }
    }, false);

    $(document).keydown(function(event){
      var key = event.which;
      if (key > 0 && key < 9) {
        activeNote = parseInt(e.key);
        draw(zoom,keySpacing, keyAmount, currentMeasure, activeNote, currentSong, c.width, c.height, ctx, nCtx);
      }
      if (key === 37) {
        currentMeasure = Math.max(0, currentMeasure - 1);
        draw(zoom,keySpacing, keyAmount, currentMeasure, activeNote, currentSong, c.width, c.height, ctx, nCtx);
      }
      if (key === 39) {
        currentMeasure = Math.min(300, currentMeasure + 1);
        draw(zoom,keySpacing, keyAmount, currentMeasure, activeNote, currentSong, c.width, c.height, ctx, nCtx);
      }
      if (key === 38) {
        console.log("up");
      }
      if (key === 40) {
        console.log("down");
      }
    });

    n.onwheel = function (event) {
      event.preventDefault();
      if (event.deltaY > 0) {
        zoom = Math.max(1, zoom - 1);
      }
      else {
        zoom = Math.min(10, zoom + 1);
      }
      draw(zoom, keySpacing, keyAmount, currentMeasure, activeNote, currentSong, c.width, c.height, ctx, nCtx);
    };
  });
});