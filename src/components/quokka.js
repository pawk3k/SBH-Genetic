// import { forEachRight, maxBy, rest, zip, spread, forEach } from "lodash";
// const shuffleArray = (array: string[]) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// };
// console.log(zip([3, 2, 1], [3, 2, 1]));
// forEach(
//   zip(["a", "b", "c"], [1, 2, 3]),
//   spread(function (name, score) {
//     console.log(name)
//     console.log(score)
//   })
// );
// const splitNucleotides = (
//   fullNucleotide: string,
//   outputNucleotideSize: number
// ): string[] => {
//   const result = [];
//   for (
//     let index = 0;
//     index < fullNucleotide.length - outputNucleotideSize;
//     index++
//   ) {
//     let innerResult = "";
//     for (let j = index; j < index + outputNucleotideSize; j++) {
//       innerResult += fullNucleotide[j];
//     }
//     result.push(innerResult);
//   }
//   return result;
// };
// /** Calculates edge value for two edges
//  *
//  * @return {[number]}         [description]
//  */
// function calculateEdgeValue(
//   firstOligoNucleotide: string,
//   secondOligoNucleotide: string
// ): number {
//   const trimedFirstNucleotide = firstOligoNucleotide.substring(1);
//   const trimedSecondNucleotide = secondOligoNucleotide.substring(0, 3);
//   const firstNucleotide = [...trimedFirstNucleotide];
//   const secondNucleotide = [...trimedSecondNucleotide];
//   console.log(trimedFirstNucleotide, trimedSecondNucleotide);
//   let result = 0;
//   firstNucleotide.forEach((element, index) => {
//     const firstComp = trimedFirstNucleotide.substring(index);
//     const secondComp = trimedSecondNucleotide.substring(
//       0,
//       trimedFirstNucleotide.length - index
//     );
//     if (firstComp == secondComp && firstComp.length > result)
//       result = firstComp.length;
//   });
//   return result;
// }
// // split and shuffle nucleotides
// const nucleotides = shuffleArray(splitNucleotides("ACGTAACTGG", 4));
// const result = calculateEdgeValue("ACGT", "GTAA");
// function calculateAllEdgeValue(
//   firstEdge: string,
//   restEdges: string[]
// ): number[] {
//   const resultArr = restEdges.map(
//     (edge) => {
//       const edge1: string = edge;
//       console.log(edge1);
//       const edgeValue = calculateEdgeValue(firstEdge);
//       return { oligo: edge, value: edgeValue };
//       // return { value: calculateEdgeValue(edge) };
//     }
//     // const obj = {};
//     // obj[edge] = calculateEdgeValue(firstEdge, edge);
//     // return obj;
//   );
//   return resultArr;
// }
// const first_edge = 32;
// const firstEdge = "ACGT";
// const restEdges = nucleotides.filter((edge) => edge !== firstEdge);
// console.log(calculateAllEdgeValue("ACGT", restEdges));
// console.log(nucleotides);
// const greedy = (firstNucleotide: string, allNucleotides: string[]) => {
//   const result = firstNucleotide;
//   const currNucleotide = firstNucleotide;
//   const results = calculateAllEdgeValue(firstEdge, allNucleotides);
//   console.log(results);
//   return nucleotides;
// };
// greedy(firstEdge, restEdges);
var add1 = function (a, b) {
    return a + b;
};
console.log(add1(1, 2));
