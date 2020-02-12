let beep = process.stdout.write('\x07');
let test = process.argv.slice(2);

for(var i = 0; i < test.length; i++){
  let seconds = Number(test);
  if(test > 0|| typeof seconds === "string"){
    setTimeout(() => { process.stdout.write('\x07');
  }, seconds * 1000);


  }
}