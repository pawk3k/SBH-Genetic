import React from "react";
import { chunk , forEachRight , forEach , range} from "lodash";
export default function Main() {
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const splitNucleotides = (
    fullNucleotide: string,
    outputNucleotideSize: number
  ) => {
    const result = [];
    for (
      let index = 0;
      index < fullNucleotide.length - outputNucleotideSize;
      index++
    ) {
      let innerResult: string = "";
      for (let j = index; j < index + outputNucleotideSize; j++) {
        innerResult += fullNucleotide[j];
      }
      result.push(innerResult);
    }
    shuffleArray(result);
    return result;
  };

  /**
   * Creates a normalized "hill" or function with
   * given number of data points.
   * @return {[number]}         [description]
   */

  const calculateEdgeValue = (
    firstOligoNucleotide: string,
    secondOligoNucleotide: string
  ): number => {
    const trimedFirstNucleotide = firstOligoNucleotide.substring(1);
    const trimedSecondNucleotide = secondOligoNucleotide.substring(0, 3);
    const firstNucleotide = [...trimedFirstNucleotide];
    const secondNucleotide = [...trimedSecondNucleotide]
    console.log(trimedFirstNucleotide, trimedSecondNucleotide)
    let result = 0
    forEachRight(firstNucleotide,(element,index) => {
      const secondN = secondNucleotide[2-index];
      if(element === secondN && result !==   -1){
        result++  
      }else{
        result = -1
      }
      console.log(element, secondN);
    });
    console.log(trimedSecondNucleotide);


    // firstOligoNucleotide.forEach((firstNucleotide, index) => {
    //   const secondNucleotide = secondOligoNucleotide[index];
    //   console.log(num1, num2);
    // });
    return result;
  };
  const greedy = (firstNucleotide: string, allNucleotides: string[]) => {
    let result = firstNucleotide;
    const nucleotides = allNucleotides.filter((nuc) => nuc !== firstNucleotide);

    // console.log(nucleotides)

    return nucleotides;
  };

  const nucleotides = splitNucleotides("ACGTAACTGG", 4);
  // const nucleotides = chunk("ACGTAACTGG", 4).map(x=>x.join(''))

  return (
    <div>
      <div>
        <p>{nucleotides.join(",")}</p>
      </div>
      <div>
        {greedy("ACGT", nucleotides).map((elem) => (
          <p>{elem}</p>
        ))}

        <p>{calculateEdgeValue("ACGT", "GTAA")}</p>
      </div>
    </div>
  );
}
