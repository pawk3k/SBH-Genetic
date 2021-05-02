import { shuffle } from "lodash";
function calculateEdgeValue(
  firstOligoNucleotide: string,
  secondOligoNucleotide: string
): number {
  const trimedFirstNucleotide = firstOligoNucleotide.slice(1);
  const trimedSecondNucleotide = secondOligoNucleotide.slice(0, 3);
  const firstNucleotide = [...trimedFirstNucleotide];
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
const nucleotides = shuffle(splitNucleotides("ACGTAACTGG", 4));
interface OligoAndValue {
  oligo: string;
  value: number;
}
function calculateAllEdgeValue(
  firstEdge: string,
  restEdges: string[]
): OligoAndValue[] {
  const resultArray = restEdges.map((edge) => {
    const edgeValue = calculateEdgeValue(firstEdge, edge);
    return { oligo: edge, value: edgeValue };
  });

  return resultArray;
}

const firstEdge = "ACGT";
const restEdges = nucleotides.filter((edge) => edge !== firstEdge);

const greedy = (
  firstNucleotide: string,
  allNucleotides: string[],
  resultString = ""
): string => {
  const result = resultString == "" ? firstNucleotide : resultString;
  const results = calculateAllEdgeValue(firstNucleotide, allNucleotides);
  const mostValue = results.reduce((accumulator, current) =>
    accumulator.value > current.value ? accumulator : current
  );
  const appended_value = mostValue.oligo.slice(mostValue.value);
  const filteredNucleotides = allNucleotides.filter(
    (nucleotide) => nucleotide != mostValue.oligo
  );
  return filteredNucleotides.length > 0
    ? greedy(mostValue.oligo, filteredNucleotides, result + appended_value)
    : result + appended_value;
};

console.log(greedy(firstEdge, restEdges));
