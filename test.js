// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript?fbclid=IwAR1V1JUTzlAiCOiZIg5BA04DMcICSsJHThKW_wjqxL5a2J1NgUiGHea3hmQ

function stringToArray(string) {
  return string.split(' ');
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript?fbclid=IwAR2kovrpho_c71HBlvmwh0Tj3_K7JYTrCMYXzoulE-Qs3e6Sg_8Mxfol9iQ

function DNAtoRNA(dna) {
  return dna.split('T').join('U');
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript?fbclid=IwAR1Qj_v5YUbJWWrWNKaxwZ30glNLMPwlOETGIX6J5SsdhR77W4sH1crN5ns

var min = function(list) {
  list[0] = Math.min(...list);
  return list[0];
};

var max = function(list) {
  list[0] = Math.max(...list);
  return list[0];
};

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x) {
  return (map1 = x.map(x => x * 2));
}

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript?fbclid=IwAR2zaYi8Nv1yeCrLknLcoO-PPYTksoYffO7ODxj-V7V4FR2pknheYpZ9BdI

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i + 1];
    }
  }
  return null;
}
