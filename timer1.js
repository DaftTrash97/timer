const timer = function() {
  const delay = process.argv[2];

  let runTimer = true;
    
    if (isNaN(delay)) {
      console.log("No can do boss");
      runTimer = false;
    }
    
    if (delay === undefined || delay === '') {
      console.log("Missing input");
      runTimer = false;
    }
    
    if ((Math.sign(delay) === -1)) {
      console.log("leave the past behind");
      runTimer = false;
    }
    
    if (runTimer) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay * 1000);
    }
  };

timer();

