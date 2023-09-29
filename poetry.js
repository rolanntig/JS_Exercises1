function frontDoorResponse(line) {
  const words = line.split(" ");
  if (words.length > 0) {
    return words[0][0];
  } else {
    return "";
  }
}

function frontDoorPassword(letters) {
  return letters.charAt(0).toUpperCase() + letters.slice(1).toLowerCase();
}

function backDoorResponse(line) {
 
  line = line.trimRight();
  for (let i = line.length - 1; i >= 0; i--) {
    if (line[i].match(/[a-zA-Z]/)) {
      return line[i];
    }
  }
  return "";
}


function backDoorPassword(letters) {
  return (
    letters.charAt(0).toUpperCase() +
    letters.slice(1).toLowerCase() +
    ", please"
  );
}


console.log(frontDoorResponse("Stands so high")); 
console.log(frontDoorPassword("SHIRE")); 
console.log(backDoorResponse("Stands so high"));
console.log(backDoorPassword("horse"));
