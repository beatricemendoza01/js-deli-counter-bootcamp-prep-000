var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli.push(`Welcome, ${name}. You are number ${[...katzDeliLine, name].length} in line.`);
  return katzDeli;
}