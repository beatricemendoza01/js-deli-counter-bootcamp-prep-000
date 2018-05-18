function takeANumber(katzDeliLine, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${[...katzDeliLine, name].length} in line.`;
}