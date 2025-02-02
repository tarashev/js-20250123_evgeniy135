const trimSymbols = (string, count) => {
  return string.split('').reduce((acc, value) =>
    acc.endsWith(value.repeat(count)) ? acc : acc + value
  );
};

const uniq = (array) => {
  return array.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value);
    }

    return acc;
  }
  , []);
};

console.log(trimSymbols('dgdggggdfffff', 6));
console.log(uniq(['4', 4, '23', 4, '4']));
