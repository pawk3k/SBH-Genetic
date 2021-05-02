import {
  forEachRight,
  maxBy,
  rest,
  zip,
  spread,
  forEach,
  values,
  shuffle,
} from "lodash";

// const shuffleArray = (array: string[]) => {
//   // eslint-disable-next-line no-loops/no-loops
//   for (let index = array.length - 1; index > 0; index--) {
//     const index_ = Math.floor(Math.random() * (index + 1));
//     const temporary = array[index];
//     array[index] = array[index_];
//     array[index_] = temporary;
//   }
//   return array;
// };

// const splitNucleotides = (
//   fullNucleotide: string,
//   outputNucleotideSize: number
// ): string[] => {
//   const result = [];
//   // for (
//   //   let index = 0;
//   //   index < fullNucleotide.length - outputNucleotideSize;
//   //   index++
//   // ) {
//   //   let innerResult = "";
//   //   for (let index_ = index; index_ < index + outputNucleotideSize; index_++) {
//   //     innerResult += fullNucleotide[index_];
//   //   }
//   //   result.push(innerResult);
//   // }
//   return result;
// };

// /** Calculates edge value for two edges
//  *
//  * @return {[number]}         [description]
//  */

function calculateEdgeValue(
  firstOligoNucleotide: string,
  secondOligoNucleotide: string
): number {
  const trimedFirstNucleotide = firstOligoNucleotide.slice(1);
  const trimedSecondNucleotide = secondOligoNucleotide.slice(0, 3);
  const firstNucleotide = [...trimedFirstNucleotide];
  const secondNucleotide = [...trimedSecondNucleotide];
  console.log(trimedFirstNucleotide, trimedSecondNucleotide);

  let result = 0;

  firstNucleotide.forEach((_element, index) => {
    const firstComp = trimedFirstNucleotide.slice(Math.max(0, index));
    const secondComp = trimedSecondNucleotide.slice(
      0,
      Math.max(0, trimedFirstNucleotide.length - index)
    );
    if (firstComp == secondComp && firstComp.length > result)
      result = firstComp.length;
  });
  return result;
}
/** Splits to array of oligonecleotides
 *
 * @param fullNucleotide {[string]}
 * @param outputNucleotideSize {[number]}
 * @returns {[string[]]}
 */
const splitNucleotides = (
  fullNucleotide: string,
  outputNucleotideSize: number
): string[] => {
  const result: string[] = [];
  [...fullNucleotide]
    .slice(0, fullNucleotide.length - outputNucleotideSize + 1)
    .forEach((_element, index) =>
      result.push(fullNucleotide.slice(index, index + outputNucleotideSize))
    );
  return result;
};

// // split and shuffle nucleotides
const nucleotides = shuffle(splitNucleotides("ACGTAACTGG", 4));
// const nucleotides = "ACGTAACTGG";

console.log(nucleotides);

interface OligoAndValue {
  oligo: string;
  value: number;
}

function calculateAllEdgeValue(
  firstEdge: string,
  restEdges: string[]
): OligoAndValue[] {
  const resultArray = restEdges.map((edge) => {
    const edge1: string = edge;
    console.log(edge1);
    const edgeValue = calculateEdgeValue(firstEdge, edge);
    return { oligo: edge, value: edgeValue };
  });

  return resultArray;
}

const firstEdge = "ACGT";
const restEdges = nucleotides.filter((edge) => edge !== firstEdge);
console.log(calculateAllEdgeValue("ACGT", restEdges));

console.log(nucleotides);

const greedy = (firstNucleotide: string, allNucleotides: string[]) => {
  const result = firstNucleotide;
  let currentNucleotide = firstNucleotide;
  let results = calculateAllEdgeValue(firstEdge, allNucleotides);

  const mostValue = results.reduce((accumulator, current) =>
    accumulator.value > current.value ? accumulator : current
  );
  allNucleotides;

  const result1 = allNucleotides.reduce((accumulator, current) => {
    currentNucleotide = current;
    const mostValue = results.reduce((previous, current_) =>
      previous.value > current_.value ? previous : current_
    );

    mostValue;
    const apendedValue = mostValue.oligo.slice(
      mostValue.oligo.length - mostValue.value
    );
    apendedValue;
    results = results.filter((oligo) => oligo != mostValue);
    results = calculateAllEdgeValue(
      mostValue.oligo,
      results.map((oligo) => oligo.oligo)
    );
    return accumulator + apendedValue;
  }, firstNucleotide);
  //ACGTAACTGG"
  nucleotides;
  result1;
  mostValue;
  const appended_value = mostValue.oligo.slice(
    mostValue.oligo.length - mostValue.value
  );
  console.log(appended_value);

  console.log(results);
  return nucleotides;
};
greedy(firstEdge, restEdges);

const array = [
  { name: "loeg1", age: 12 },
  { name: "loeg1", age: 22 },
  { name: "loeg2", age: 22 },
].reduce(
  (previous, current) => ({
    users: previous.users + 1,
    age: previous.age + current.age,
  }),
  { users: 0, age: 0 }
);
array;
