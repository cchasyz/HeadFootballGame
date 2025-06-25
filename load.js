const animations = {
  idle1: [],
  forward1: [],
  backward1: [],
  jump1: [],
  fall1: [],
  kick1: [],
  idle2: [],
  forward2: [],
  backward2: [],
  jump2: [],
  fall2: [],
  kick2: []
};

function loadImages(array, animationType, callback) {
  let loadedImages = 0;

  array.forEach((src, i) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loadedImages++;
      if (loadedImages === array.length) {
        callback();
      }
    };
    animations[animationType][i] = img;
  });
}

function checkPlayer(playernumber) {
  const country = document.getElementById(`player${playernumber}country`);
  
  if (country.value == 'Brazil') {
    loadImages([
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_000.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_001.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_002.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_003.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_004.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_005.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_006.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_007.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_008.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_009.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_010.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_011.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_012.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_013.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_014.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_015.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_016.png',
  'Sprites/Characters/Character 01 - Brazil/Idle/Idle_017.png'
], `idle${playernumber}`, () => {
  console.log('Idle animation loaded.');
});

loadImages([
'Sprites/Characters/Character 01 - Brazil/Move Forward/Move Forward_000.png',
'Sprites/Characters/Character 01 - Brazil/Move Forward/Move Forward_001.png',
'Sprites/Characters/Character 01 - Brazil/Move Forward/Move Forward_002.png',
'Sprites/Characters/Character 01 - Brazil/Move Forward/Move Forward_003.png',
'Sprites/Characters/Character 01 - Brazil/Move Forward/Move Forward_004.png',
'Sprites/Characters/Character 01 - Brazil/Move Forward/Move Forward_005.png',
'Sprites/Characters/Character 01 - Brazil/Move Forward/Move Forward_006.png',
'Sprites/Characters/Character 01 - Brazil/Move Forward/Move Forward_007.png',
'Sprites/Characters/Character 01 - Brazil/Move Forward/Move Forward_008.png',
'Sprites/Characters/Character 01 - Brazil/Move Forward/Move Forward_009.png'
], `forward${playernumber}`, () => {
  console.log('forward animation loaded');
});

loadImages([
'Sprites/Characters/Character 01 - Brazil/Move Backward/Move Backward_000.png',
'Sprites/Characters/Character 01 - Brazil/Move Backward/Move Backward_001.png',
'Sprites/Characters/Character 01 - Brazil/Move Backward/Move Backward_002.png',
'Sprites/Characters/Character 01 - Brazil/Move Backward/Move Backward_003.png',
'Sprites/Characters/Character 01 - Brazil/Move Backward/Move Backward_004.png',
'Sprites/Characters/Character 01 - Brazil/Move Backward/Move Backward_005.png',
'Sprites/Characters/Character 01 - Brazil/Move Backward/Move Backward_006.png',
'Sprites/Characters/Character 01 - Brazil/Move Backward/Move Backward_007.png',
'Sprites/Characters/Character 01 - Brazil/Move Backward/Move Backward_008.png',
'Sprites/Characters/Character 01 - Brazil/Move Backward/Move Backward_009.png'
], `backward${playernumber}`, () => {
  console.log('backward animation loaded');
});

loadImages([
'Sprites/Characters/Character 01 - Brazil/Jump/Jump_000.png',
'Sprites/Characters/Character 01 - Brazil/Jump/Jump_001.png',
'Sprites/Characters/Character 01 - Brazil/Jump/Jump_002.png',
'Sprites/Characters/Character 01 - Brazil/Jump/Jump_003.png',
'Sprites/Characters/Character 01 - Brazil/Jump/Jump_004.png',
], `jump${playernumber}`, ()=>{
  console.log('jump loaded');
});

loadImages([
'Sprites/Characters/Character 01 - Brazil/Falling Down/Falling Down_000.png',
'Sprites/Characters/Character 01 - Brazil/Falling Down/Falling Down_001.png',
'Sprites/Characters/Character 01 - Brazil/Falling Down/Falling Down_002.png',
'Sprites/Characters/Character 01 - Brazil/Falling Down/Falling Down_003.png',
'Sprites/Characters/Character 01 - Brazil/Falling Down/Falling Down_004.png',
], `fall${playernumber}`, ()=>{
  console.log('fall loaded');
});

loadImages([
'Sprites/Characters/Character 01 - Brazil/Kick/Kick_000.png',
'Sprites/Characters/Character 01 - Brazil/Kick/Kick_001.png',
'Sprites/Characters/Character 01 - Brazil/Kick/Kick_002.png',
'Sprites/Characters/Character 01 - Brazil/Kick/Kick_003.png',
'Sprites/Characters/Character 01 - Brazil/Kick/Kick_004.png',
'Sprites/Characters/Character 01 - Brazil/Kick/Kick_005.png',
'Sprites/Characters/Character 01 - Brazil/Kick/Kick_006.png',
'Sprites/Characters/Character 01 - Brazil/Kick/Kick_007.png',
'Sprites/Characters/Character 01 - Brazil/Kick/Kick_008.png',
], `kick${playernumber}`, ()=>{
  console.log('kick loaded');
})
  } else if (country.value == 'England'){
    loadImages([
  'Sprites/Characters/Character 02 - England/Idle/Idle_000.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_001.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_002.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_003.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_004.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_005.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_006.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_007.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_008.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_009.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_010.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_011.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_012.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_013.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_014.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_015.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_016.png',
  'Sprites/Characters/Character 02 - England/Idle/Idle_017.png'
], `idle${playernumber}`, () => {
  console.log('Idle animation loaded.');
});

loadImages([
  'Sprites/Characters/Character 02 - England/Move Forward/Move Forward_000.png',
  'Sprites/Characters/Character 02 - England/Move Forward/Move Forward_001.png',
  'Sprites/Characters/Character 02 - England/Move Forward/Move Forward_002.png',
  'Sprites/Characters/Character 02 - England/Move Forward/Move Forward_003.png',
  'Sprites/Characters/Character 02 - England/Move Forward/Move Forward_004.png',
  'Sprites/Characters/Character 02 - England/Move Forward/Move Forward_005.png',
  'Sprites/Characters/Character 02 - England/Move Forward/Move Forward_006.png',
  'Sprites/Characters/Character 02 - England/Move Forward/Move Forward_007.png',
  'Sprites/Characters/Character 02 - England/Move Forward/Move Forward_008.png',
  'Sprites/Characters/Character 02 - England/Move Forward/Move Forward_009.png',
], `forward${playernumber}`, () => {
  console.log('forward animation loaded');
});

loadImages([
  'Sprites/Characters/Character 02 - England/Move Backward/Move Backward_000.png',
  'Sprites/Characters/Character 02 - England/Move Backward/Move Backward_001.png',
  'Sprites/Characters/Character 02 - England/Move Backward/Move Backward_002.png',
  'Sprites/Characters/Character 02 - England/Move Backward/Move Backward_003.png',
  'Sprites/Characters/Character 02 - England/Move Backward/Move Backward_004.png',
  'Sprites/Characters/Character 02 - England/Move Backward/Move Backward_005.png',
  'Sprites/Characters/Character 02 - England/Move Backward/Move Backward_006.png',
  'Sprites/Characters/Character 02 - England/Move Backward/Move Backward_007.png',
  'Sprites/Characters/Character 02 - England/Move Backward/Move Backward_008.png',
  'Sprites/Characters/Character 02 - England/Move Backward/Move Backward_009.png',
], `backward${playernumber}`, () => {
  console.log('backward animation loaded');
});

loadImages([
  'Sprites/Characters/Character 02 - England/Jump/Jump_000.png',
  'Sprites/Characters/Character 02 - England/Jump/Jump_001.png',
  'Sprites/Characters/Character 02 - England/Jump/Jump_002.png',
  'Sprites/Characters/Character 02 - England/Jump/Jump_003.png',
  'Sprites/Characters/Character 02 - England/Jump/Jump_004.png',
], `jump${playernumber}`, ()=>{
  console.log('jump loaded');
});

loadImages([
  'Sprites/Characters/Character 02 - England/Falling Down/Falling Down_000.png',
  'Sprites/Characters/Character 02 - England/Falling Down/Falling Down_001.png',
  'Sprites/Characters/Character 02 - England/Falling Down/Falling Down_002.png',
  'Sprites/Characters/Character 02 - England/Falling Down/Falling Down_003.png',
  'Sprites/Characters/Character 02 - England/Falling Down/Falling Down_004.png',
], `fall${playernumber}`, ()=>{
  console.log('fall loaded');
});

loadImages([
  'Sprites/Characters/Character 02 - England/Kick/Kick_000.png',
  'Sprites/Characters/Character 02 - England/Kick/Kick_001.png',
  'Sprites/Characters/Character 02 - England/Kick/Kick_002.png',
  'Sprites/Characters/Character 02 - England/Kick/Kick_003.png',
  'Sprites/Characters/Character 02 - England/Kick/Kick_004.png',
  'Sprites/Characters/Character 02 - England/Kick/Kick_005.png',
  'Sprites/Characters/Character 02 - England/Kick/Kick_006.png',
  'Sprites/Characters/Character 02 - England/Kick/Kick_007.png',
  'Sprites/Characters/Character 02 - England/Kick/Kick_008.png',
], `kick${playernumber}`, ()=>{
  console.log('kick loaded');
});
  } else if (country.value == 'Spain'){
    loadImages([
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_000.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_001.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_002.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_003.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_004.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_005.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_006.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_007.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_008.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_009.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_010.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_011.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_012.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_013.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_014.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_015.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_016.png',
      'Sprites/Characters/Character 03 - Spain/Idle/Idle_017.png',
    ], `idle${playernumber}`, () => {
      console.log('Idle animation loaded.');
    });
    
    loadImages([
      'Sprites/Characters/Character 03 - Spain/Move Forward/Move Forward_000.png',
      'Sprites/Characters/Character 03 - Spain/Move Forward/Move Forward_001.png',
      'Sprites/Characters/Character 03 - Spain/Move Forward/Move Forward_002.png',
      'Sprites/Characters/Character 03 - Spain/Move Forward/Move Forward_003.png',
      'Sprites/Characters/Character 03 - Spain/Move Forward/Move Forward_004.png',
      'Sprites/Characters/Character 03 - Spain/Move Forward/Move Forward_005.png',
      'Sprites/Characters/Character 03 - Spain/Move Forward/Move Forward_006.png',
      'Sprites/Characters/Character 03 - Spain/Move Forward/Move Forward_007.png',
      'Sprites/Characters/Character 03 - Spain/Move Forward/Move Forward_008.png',
      'Sprites/Characters/Character 03 - Spain/Move Forward/Move Forward_009.png'
    ], `forward${playernumber}`, () => {
      console.log('forward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 03 - Spain/Move Backward/Move Backward_000.png',
      'Sprites/Characters/Character 03 - Spain/Move Backward/Move Backward_001.png',
      'Sprites/Characters/Character 03 - Spain/Move Backward/Move Backward_002.png',
      'Sprites/Characters/Character 03 - Spain/Move Backward/Move Backward_003.png',
      'Sprites/Characters/Character 03 - Spain/Move Backward/Move Backward_004.png',
      'Sprites/Characters/Character 03 - Spain/Move Backward/Move Backward_005.png',
      'Sprites/Characters/Character 03 - Spain/Move Backward/Move Backward_006.png',
      'Sprites/Characters/Character 03 - Spain/Move Backward/Move Backward_007.png',
      'Sprites/Characters/Character 03 - Spain/Move Backward/Move Backward_008.png',
      'Sprites/Characters/Character 03 - Spain/Move Backward/Move Backward_009.png',
    ], `backward${playernumber}`, () => {
      console.log('backward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 03 - Spain/Jump/Jump_000.png',
      'Sprites/Characters/Character 03 - Spain/Jump/Jump_001.png',
      'Sprites/Characters/Character 03 - Spain/Jump/Jump_002.png',
      'Sprites/Characters/Character 03 - Spain/Jump/Jump_003.png',
      'Sprites/Characters/Character 03 - Spain/Jump/Jump_004.png',
    ], `jump${playernumber}`, ()=>{
      console.log('jump loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 03 - Spain/Falling Down/Falling Down_000.png',
      'Sprites/Characters/Character 03 - Spain/Falling Down/Falling Down_001.png',
      'Sprites/Characters/Character 03 - Spain/Falling Down/Falling Down_002.png',
      'Sprites/Characters/Character 03 - Spain/Falling Down/Falling Down_003.png',
      'Sprites/Characters/Character 03 - Spain/Falling Down/Falling Down_004.png',
    ], `fall${playernumber}`, ()=>{
      console.log('fall loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 03 - Spain/Kick/Kick_000.png',
      'Sprites/Characters/Character 03 - Spain/Kick/Kick_001.png',
      'Sprites/Characters/Character 03 - Spain/Kick/Kick_002.png',
      'Sprites/Characters/Character 03 - Spain/Kick/Kick_003.png',
      'Sprites/Characters/Character 03 - Spain/Kick/Kick_004.png',
      'Sprites/Characters/Character 03 - Spain/Kick/Kick_005.png',
      'Sprites/Characters/Character 03 - Spain/Kick/Kick_006.png',
      'Sprites/Characters/Character 03 - Spain/Kick/Kick_007.png',
      'Sprites/Characters/Character 03 - Spain/Kick/Kick_008.png',
    ], `kick${playernumber}`, ()=>{
      console.log('kick loaded');
    })
  } else if (country.value == 'Japan'){
    loadImages([
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_000.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_001.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_002.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_003.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_004.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_005.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_006.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_007.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_008.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_009.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_010.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_011.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_012.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_013.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_014.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_015.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_016.png',
      'Sprites/Characters/Character 04 - Japan/Idle/Idle_017.png',
    ], `idle${playernumber}`, () => {
      console.log('Idle animation loaded.');
    });
    
    loadImages([
      'Sprites/Characters/Character 04 - Japan/Move Forward/Move Forward_000.png',
      'Sprites/Characters/Character 04 - Japan/Move Forward/Move Forward_001.png',
      'Sprites/Characters/Character 04 - Japan/Move Forward/Move Forward_002.png',
      'Sprites/Characters/Character 04 - Japan/Move Forward/Move Forward_003.png',
      'Sprites/Characters/Character 04 - Japan/Move Forward/Move Forward_004.png',
      'Sprites/Characters/Character 04 - Japan/Move Forward/Move Forward_005.png',
      'Sprites/Characters/Character 04 - Japan/Move Forward/Move Forward_006.png',
      'Sprites/Characters/Character 04 - Japan/Move Forward/Move Forward_007.png',
      'Sprites/Characters/Character 04 - Japan/Move Forward/Move Forward_008.png',
      'Sprites/Characters/Character 04 - Japan/Move Forward/Move Forward_009.png',
    ], `forward${playernumber}`, () => {
      console.log('forward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 04 - Japan/Move Backward/Move Backward_000.png',
      'Sprites/Characters/Character 04 - Japan/Move Backward/Move Backward_001.png',
      'Sprites/Characters/Character 04 - Japan/Move Backward/Move Backward_002.png',
      'Sprites/Characters/Character 04 - Japan/Move Backward/Move Backward_003.png',
      'Sprites/Characters/Character 04 - Japan/Move Backward/Move Backward_004.png',
      'Sprites/Characters/Character 04 - Japan/Move Backward/Move Backward_005.png',
      'Sprites/Characters/Character 04 - Japan/Move Backward/Move Backward_006.png',
      'Sprites/Characters/Character 04 - Japan/Move Backward/Move Backward_007.png',
      'Sprites/Characters/Character 04 - Japan/Move Backward/Move Backward_008.png',
      'Sprites/Characters/Character 04 - Japan/Move Backward/Move Backward_009.png',
    ], `backward${playernumber}`, () => {
      console.log('backward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 04 - Japan/Jump/Jump_000.png',
      'Sprites/Characters/Character 04 - Japan/Jump/Jump_001.png',
      'Sprites/Characters/Character 04 - Japan/Jump/Jump_002.png',
      'Sprites/Characters/Character 04 - Japan/Jump/Jump_003.png',
      'Sprites/Characters/Character 04 - Japan/Jump/Jump_004.png',
    ], `jump${playernumber}`, ()=>{
      console.log('jump loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 04 - Japan/Falling Down/Falling Down_000.png',
      'Sprites/Characters/Character 04 - Japan/Falling Down/Falling Down_001.png',
      'Sprites/Characters/Character 04 - Japan/Falling Down/Falling Down_002.png',
      'Sprites/Characters/Character 04 - Japan/Falling Down/Falling Down_003.png',
      'Sprites/Characters/Character 04 - Japan/Falling Down/Falling Down_004.png',
    ], `fall${playernumber}`, ()=>{
      console.log('fall loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 04 - Japan/Kick/Kick_000.png',
      'Sprites/Characters/Character 04 - Japan/Kick/Kick_001.png',
      'Sprites/Characters/Character 04 - Japan/Kick/Kick_002.png',
      'Sprites/Characters/Character 04 - Japan/Kick/Kick_003.png',
      'Sprites/Characters/Character 04 - Japan/Kick/Kick_004.png',
      'Sprites/Characters/Character 04 - Japan/Kick/Kick_005.png',
      'Sprites/Characters/Character 04 - Japan/Kick/Kick_006.png',
      'Sprites/Characters/Character 04 - Japan/Kick/Kick_007.png',
      'Sprites/Characters/Character 04 - Japan/Kick/Kick_008.png',
    ], `kick${playernumber}`, ()=>{
      console.log('kick loaded');
    })
  } else if (country.value == 'Netherlands'){
    loadImages([
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_000.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_001.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_002.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_003.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_004.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_005.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_006.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_007.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_008.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_009.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_010.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_011.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_012.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_013.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_014.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_015.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_016.png',
      'Sprites/Characters/Character 05 - Netherlands/Idle/Idle_017.png',
    ], `idle${playernumber}`, () => {
      console.log('Idle animation loaded.');
    });
    
    loadImages([
      'Sprites/Characters/Character 05 - Netherlands/Move Forward/Move Forward_000.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Forward/Move Forward_001.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Forward/Move Forward_002.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Forward/Move Forward_003.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Forward/Move Forward_004.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Forward/Move Forward_005.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Forward/Move Forward_006.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Forward/Move Forward_007.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Forward/Move Forward_008.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Forward/Move Forward_009.png',
    ], `forward${playernumber}`, () => {
      console.log('forward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 05 - Netherlands/Move Backward/Move Backward_000.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Backward/Move Backward_001.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Backward/Move Backward_002.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Backward/Move Backward_003.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Backward/Move Backward_004.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Backward/Move Backward_005.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Backward/Move Backward_006.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Backward/Move Backward_007.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Backward/Move Backward_008.png',
      'Sprites/Characters/Character 05 - Netherlands/Move Backward/Move Backward_009.png',
    ], `backward${playernumber}`, () => {
      console.log('backward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 05 - Netherlands/Jump/Jump_000.png',
      'Sprites/Characters/Character 05 - Netherlands/Jump/Jump_001.png',
      'Sprites/Characters/Character 05 - Netherlands/Jump/Jump_002.png',
      'Sprites/Characters/Character 05 - Netherlands/Jump/Jump_003.png',
      'Sprites/Characters/Character 05 - Netherlands/Jump/Jump_004.png',
    ], `jump${playernumber}`, ()=>{
      console.log('jump loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 05 - Netherlands/Falling Down/Falling Down_000.png',
      'Sprites/Characters/Character 05 - Netherlands/Falling Down/Falling Down_001.png',
      'Sprites/Characters/Character 05 - Netherlands/Falling Down/Falling Down_002.png',
      'Sprites/Characters/Character 05 - Netherlands/Falling Down/Falling Down_003.png',
      'Sprites/Characters/Character 05 - Netherlands/Falling Down/Falling Down_004.png',
    ], `fall${playernumber}`, ()=>{
      console.log('fall loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 05 - Netherlands/Kick/Kick_000.png',
      'Sprites/Characters/Character 05 - Netherlands/Kick/Kick_001.png',
      'Sprites/Characters/Character 05 - Netherlands/Kick/Kick_002.png',
      'Sprites/Characters/Character 05 - Netherlands/Kick/Kick_003.png',
      'Sprites/Characters/Character 05 - Netherlands/Kick/Kick_004.png',
      'Sprites/Characters/Character 05 - Netherlands/Kick/Kick_005.png',
      'Sprites/Characters/Character 05 - Netherlands/Kick/Kick_006.png',
      'Sprites/Characters/Character 05 - Netherlands/Kick/Kick_007.png',
      'Sprites/Characters/Character 05 - Netherlands/Kick/Kick_008.png',
    ], `kick${playernumber}`, ()=>{
      console.log('kick loaded');
    })
  } else if (country.value == 'Portugal'){
    loadImages([
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_000.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_001.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_002.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_003.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_004.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_005.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_006.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_007.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_008.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_009.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_010.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_011.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_012.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_013.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_014.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_015.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_016.png',
      'Sprites/Characters/Character 06 - Portugal/Idle/Idle_017.png',
    ], `idle${playernumber}`, () => {
      console.log('Idle animation loaded.');
    });
    
    loadImages([
      'Sprites/Characters/Character 06 - Portugal/Move Forward/Move Forward_000.png',
      'Sprites/Characters/Character 06 - Portugal/Move Forward/Move Forward_001.png',
      'Sprites/Characters/Character 06 - Portugal/Move Forward/Move Forward_002.png',
      'Sprites/Characters/Character 06 - Portugal/Move Forward/Move Forward_003.png',
      'Sprites/Characters/Character 06 - Portugal/Move Forward/Move Forward_004.png',
      'Sprites/Characters/Character 06 - Portugal/Move Forward/Move Forward_005.png',
      'Sprites/Characters/Character 06 - Portugal/Move Forward/Move Forward_006.png',
      'Sprites/Characters/Character 06 - Portugal/Move Forward/Move Forward_007.png',
      'Sprites/Characters/Character 06 - Portugal/Move Forward/Move Forward_008.png',
      'Sprites/Characters/Character 06 - Portugal/Move Forward/Move Forward_009.png',
    ], `forward${playernumber}`, () => {
      console.log('forward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 06 - Portugal/Move Backward/Move Backward_000.png',
      'Sprites/Characters/Character 06 - Portugal/Move Backward/Move Backward_001.png',
      'Sprites/Characters/Character 06 - Portugal/Move Backward/Move Backward_002.png',
      'Sprites/Characters/Character 06 - Portugal/Move Backward/Move Backward_003.png',
      'Sprites/Characters/Character 06 - Portugal/Move Backward/Move Backward_004.png',
      'Sprites/Characters/Character 06 - Portugal/Move Backward/Move Backward_005.png',
      'Sprites/Characters/Character 06 - Portugal/Move Backward/Move Backward_006.png',
      'Sprites/Characters/Character 06 - Portugal/Move Backward/Move Backward_007.png',
      'Sprites/Characters/Character 06 - Portugal/Move Backward/Move Backward_008.png',
      'Sprites/Characters/Character 06 - Portugal/Move Backward/Move Backward_009.png',
    ], `backward${playernumber}`, () => {
      console.log('backward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 06 - Portugal/Jump/Jump_000.png',
      'Sprites/Characters/Character 06 - Portugal/Jump/Jump_001.png',
      'Sprites/Characters/Character 06 - Portugal/Jump/Jump_002.png',
      'Sprites/Characters/Character 06 - Portugal/Jump/Jump_003.png',
      'Sprites/Characters/Character 06 - Portugal/Jump/Jump_004.png',
    ], `jump${playernumber}`, ()=>{
      console.log('jump loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 06 - Portugal/Falling Down/Falling Down_000.png',
      'Sprites/Characters/Character 06 - Portugal/Falling Down/Falling Down_001.png',
      'Sprites/Characters/Character 06 - Portugal/Falling Down/Falling Down_002.png',
      'Sprites/Characters/Character 06 - Portugal/Falling Down/Falling Down_003.png',
      'Sprites/Characters/Character 06 - Portugal/Falling Down/Falling Down_004.png',
    ], `fall${playernumber}`, ()=>{
      console.log('fall loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 06 - Portugal/Kick/Kick_000.png',
      'Sprites/Characters/Character 06 - Portugal/Kick/Kick_001.png',
      'Sprites/Characters/Character 06 - Portugal/Kick/Kick_002.png',
      'Sprites/Characters/Character 06 - Portugal/Kick/Kick_003.png',
      'Sprites/Characters/Character 06 - Portugal/Kick/Kick_004.png',
      'Sprites/Characters/Character 06 - Portugal/Kick/Kick_005.png',
      'Sprites/Characters/Character 06 - Portugal/Kick/Kick_006.png',
      'Sprites/Characters/Character 06 - Portugal/Kick/Kick_007.png',
      'Sprites/Characters/Character 06 - Portugal/Kick/Kick_008.png',
    ], `kick${playernumber}`, ()=>{
      console.log('kick loaded');
    })
  } else if (country.value == 'Germany'){
    loadImages([
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_000.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_001.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_002.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_003.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_004.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_005.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_006.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_007.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_008.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_009.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_010.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_011.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_012.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_013.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_014.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_015.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_016.png',
      'Sprites/Characters/Character 07 - Germany/Idle/Idle_017.png',
    ], `idle${playernumber}`, () => {
      console.log('Idle animation loaded.');
    });
    
    loadImages([
      'Sprites/Characters/Character 07 - Germany/Move Forward/Move Forward_000.png',
      'Sprites/Characters/Character 07 - Germany/Move Forward/Move Forward_001.png',
      'Sprites/Characters/Character 07 - Germany/Move Forward/Move Forward_002.png',
      'Sprites/Characters/Character 07 - Germany/Move Forward/Move Forward_003.png',
      'Sprites/Characters/Character 07 - Germany/Move Forward/Move Forward_004.png',
      'Sprites/Characters/Character 07 - Germany/Move Forward/Move Forward_005.png',
      'Sprites/Characters/Character 07 - Germany/Move Forward/Move Forward_006.png',
      'Sprites/Characters/Character 07 - Germany/Move Forward/Move Forward_007.png',
      'Sprites/Characters/Character 07 - Germany/Move Forward/Move Forward_008.png',
      'Sprites/Characters/Character 07 - Germany/Move Forward/Move Forward_009.png',
    ], `forward${playernumber}`, () => {
      console.log('forward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 07 - Germany/Move Backward/Move Backward_000.png',
      'Sprites/Characters/Character 07 - Germany/Move Backward/Move Backward_001.png',
      'Sprites/Characters/Character 07 - Germany/Move Backward/Move Backward_002.png',
      'Sprites/Characters/Character 07 - Germany/Move Backward/Move Backward_003.png',
      'Sprites/Characters/Character 07 - Germany/Move Backward/Move Backward_004.png',
      'Sprites/Characters/Character 07 - Germany/Move Backward/Move Backward_005.png',
      'Sprites/Characters/Character 07 - Germany/Move Backward/Move Backward_006.png',
      'Sprites/Characters/Character 07 - Germany/Move Backward/Move Backward_007.png',
      'Sprites/Characters/Character 07 - Germany/Move Backward/Move Backward_008.png',
      'Sprites/Characters/Character 07 - Germany/Move Backward/Move Backward_009.png',
    ], `backward${playernumber}`, () => {
      console.log('backward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 07 - Germany/Jump/Jump_000.png',
      'Sprites/Characters/Character 07 - Germany/Jump/Jump_001.png',
      'Sprites/Characters/Character 07 - Germany/Jump/Jump_002.png',
      'Sprites/Characters/Character 07 - Germany/Jump/Jump_003.png',
      'Sprites/Characters/Character 07 - Germany/Jump/Jump_004.png',
    ], `jump${playernumber}`, ()=>{
      console.log('jump loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 07 - Germany/Falling Down/Falling Down_000.png',
      'Sprites/Characters/Character 07 - Germany/Falling Down/Falling Down_001.png',
      'Sprites/Characters/Character 07 - Germany/Falling Down/Falling Down_002.png',
      'Sprites/Characters/Character 07 - Germany/Falling Down/Falling Down_003.png',
      'Sprites/Characters/Character 07 - Germany/Falling Down/Falling Down_004.png',
    ], `fall${playernumber}`, ()=>{
      console.log('fall loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 07 - Germany/Kick/Kick_000.png',
      'Sprites/Characters/Character 07 - Germany/Kick/Kick_001.png',
      'Sprites/Characters/Character 07 - Germany/Kick/Kick_002.png',
      'Sprites/Characters/Character 07 - Germany/Kick/Kick_003.png',
      'Sprites/Characters/Character 07 - Germany/Kick/Kick_004.png',
      'Sprites/Characters/Character 07 - Germany/Kick/Kick_005.png',
      'Sprites/Characters/Character 07 - Germany/Kick/Kick_006.png',
      'Sprites/Characters/Character 07 - Germany/Kick/Kick_007.png',
      'Sprites/Characters/Character 07 - Germany/Kick/Kick_008.png',
    ], `kick${playernumber}`, ()=>{
      console.log('kick loaded');
    })
  } else if (country.value == 'Italy'){
    loadImages([
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_000.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_001.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_002.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_003.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_004.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_005.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_006.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_007.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_008.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_009.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_010.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_011.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_012.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_013.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_014.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_015.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_016.png',
      'Sprites/Characters/Character 08 - Italy/Idle/Idle_017.png',
    ], `idle${playernumber}`, () => {
      console.log('Idle animation loaded.');
    });
    
    loadImages([
      'Sprites/Characters/Character 08 - Italy/Move Forward/Move Forward_000.png',
      'Sprites/Characters/Character 08 - Italy/Move Forward/Move Forward_001.png',
      'Sprites/Characters/Character 08 - Italy/Move Forward/Move Forward_002.png',
      'Sprites/Characters/Character 08 - Italy/Move Forward/Move Forward_003.png',
      'Sprites/Characters/Character 08 - Italy/Move Forward/Move Forward_004.png',
      'Sprites/Characters/Character 08 - Italy/Move Forward/Move Forward_005.png',
      'Sprites/Characters/Character 08 - Italy/Move Forward/Move Forward_006.png',
      'Sprites/Characters/Character 08 - Italy/Move Forward/Move Forward_007.png',
      'Sprites/Characters/Character 08 - Italy/Move Forward/Move Forward_008.png',
      'Sprites/Characters/Character 08 - Italy/Move Forward/Move Forward_009.png',
    ], `forward${playernumber}`, () => {
      console.log('forward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 08 - Italy/Move Backward/Move Backward_000.png',
      'Sprites/Characters/Character 08 - Italy/Move Backward/Move Backward_001.png',
      'Sprites/Characters/Character 08 - Italy/Move Backward/Move Backward_002.png',
      'Sprites/Characters/Character 08 - Italy/Move Backward/Move Backward_003.png',
      'Sprites/Characters/Character 08 - Italy/Move Backward/Move Backward_004.png',
      'Sprites/Characters/Character 08 - Italy/Move Backward/Move Backward_005.png',
      'Sprites/Characters/Character 08 - Italy/Move Backward/Move Backward_006.png',
      'Sprites/Characters/Character 08 - Italy/Move Backward/Move Backward_007.png',
      'Sprites/Characters/Character 08 - Italy/Move Backward/Move Backward_008.png',
      'Sprites/Characters/Character 08 - Italy/Move Backward/Move Backward_009.png',
    ], `backward${playernumber}`, () => {
      console.log('backward animation loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 08 - Italy/Jump/Jump_000.png',
      'Sprites/Characters/Character 08 - Italy/Jump/Jump_001.png',
      'Sprites/Characters/Character 08 - Italy/Jump/Jump_002.png',
      'Sprites/Characters/Character 08 - Italy/Jump/Jump_003.png',
      'Sprites/Characters/Character 08 - Italy/Jump/Jump_004.png',
    ], `jump${playernumber}`, ()=>{
      console.log('jump loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 08 - Italy/Falling Down/Falling Down_000.png',
      'Sprites/Characters/Character 08 - Italy/Falling Down/Falling Down_001.png',
      'Sprites/Characters/Character 08 - Italy/Falling Down/Falling Down_002.png',
      'Sprites/Characters/Character 08 - Italy/Falling Down/Falling Down_003.png',
      'Sprites/Characters/Character 08 - Italy/Falling Down/Falling Down_004.png',
    ], `fall${playernumber}`, ()=>{
      console.log('fall loaded');
    });
    
    loadImages([
      'Sprites/Characters/Character 08 - Italy/Kick/Kick_000.png',
      'Sprites/Characters/Character 08 - Italy/Kick/Kick_001.png',
      'Sprites/Characters/Character 08 - Italy/Kick/Kick_002.png',
      'Sprites/Characters/Character 08 - Italy/Kick/Kick_003.png',
      'Sprites/Characters/Character 08 - Italy/Kick/Kick_004.png',
      'Sprites/Characters/Character 08 - Italy/Kick/Kick_005.png',
      'Sprites/Characters/Character 08 - Italy/Kick/Kick_006.png',
      'Sprites/Characters/Character 08 - Italy/Kick/Kick_007.png',
      'Sprites/Characters/Character 08 - Italy/Kick/Kick_008.png',
    ], `kick${playernumber}`, ()=>{
      console.log('kick loaded');
    })
  } else {
    console.log('error');
  }
}