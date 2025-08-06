let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

let line = csvStr.split(`\n`);
let header = line[0].split(",");
console.log(line);

let firstLine = line[0];
console.log(firstLine);
let commaResult;
let lines;
let result =  []

for(let i = 1; i < line.length; i++){
  let rowObj = {};
  lines = line[i].split(",");
  for(let j = 0; j < header.length; j++){
    rowObj[header[j]] = lines[j]
  }
  console.log(lines);

  result.push(rowObj);

}

console.log("Nomber total people :")
