function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    const firstPerson = katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(katzDeliLine) {
  let currentLine = ''
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      
    }
  }
}