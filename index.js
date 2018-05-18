function takeANumber(katzDeliLine, name) {
  return `Welcome, ${name}. You are number ${[...katzDeliLine, name].length} in line.`;
}