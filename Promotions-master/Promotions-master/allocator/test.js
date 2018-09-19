const { exec } = require('child_process');
exec('./Step testinput 2 1', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout:\n${stdout}`);
  console.log(`stderr:\n${stderr}`);
  var arr = stdout.split(/[\t\n]+/);
  console.log(`split:\n${arr.toString()}`);

  while(arr.length !== 0) {
    var shift = arr.shift();
    if (shift === "fin") {
      break;
    }
    console.log(`${shift}`);
    var next = arr.shift();
    while (next !== "done") {
      console.log(`\t${next}`);
      next = arr.shift();
    }
  }
});
