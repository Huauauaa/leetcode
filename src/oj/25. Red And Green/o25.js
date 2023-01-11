function solution(input) {
  const chars = input.split('');
  let result = countChar(chars, 'G');

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === 'G') {
      result = Math.min(
        result,
        countChar(chars.slice(0, i), 'G') + countChar(chars.slice(i), 'R'),
      );
    }
  }

  console.log(result);
}

function countChar(arr, target) {
  return arr.filter((item) => item === target).length;
}

solution('RGRGR');
solution('RG');
solution('RGR');
