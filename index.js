function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${[...katzDeliLine, name].length} in line.`;
}