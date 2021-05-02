// import { map, take, concatAll } from "rxjs/operators";
import { map, flatten, flatMap, forEach, zipWith, reduce } from "lodash";
// const object = [
//   { id: 1, title: "2" },
//   { id: 2, title: "2" },
// ];
// console.log(object);
// const array2 = [];

// object.forEach((element) => {
//   array2.push({ id: element.id, title: element.title });
// });

// console.log(array2);

// const calc = () => {
//   const movieLists = [
//     {
//       name: "New Releases",
//       videos: [
//         {
//           id: 70111470,
//           title: "Die Hard",
//           boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//           uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 4,
//           bookmark: [],
//         },
//         {
//           id: 654356453,
//           title: "Bad Boys",
//           boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//           uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 5,
//           bookmark: [{ id: 432534, time: 65876586 }],
//         },
//       ],
//     },
//     {
//       name: "Dramas",
//       videos: [
//         {
//           id: 65432445,
//           title: "The Chamber",
//           boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//           uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 4,
//           bookmark: [],
//         },
//         {
//           id: 675465,
//           title: "Fracture",
//           boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//           uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 5,
//           bookmark: [{ id: 432534, time: 65876586 }],
//         },
//       ],
//     },
//   ];

//   // ------------   INSERT CODE HERE!  -----------------------------------
//   // Use map and concatAll to flatten the movieLists in a list of video ids.
//   // ------------   INSERT CODE HERE!  -----------------------------------

//   return movieLists.map((element) =>
//     element.videos.map((innerElement) => innerElement.id)
//   ); // Complete this expression!
// };

// const k = calc();
// console.log(flatten(k));

// function calc1() {
//   const movieLists = [
//     {
//       name: "Instant Queue",
//       videos: [
//         {
//           id: 70111470,
//           title: "Die Hard",
//           boxarts: [
//             {
//               width: 150,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
//             },
//             {
//               width: 200,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
//             },
//           ],
//           url: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 4,
//           bookmark: [],
//         },
//         {
//           id: 654356453,
//           title: "Bad Boys",
//           boxarts: [
//             {
//               width: 200,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
//             },
//             {
//               width: 150,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
//             },
//           ],
//           url: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 5,
//           bookmark: [{ id: 432534, time: 65876586 }],
//         },
//       ],
//     },
//     {
//       name: "New Releases",
//       videos: [
//         {
//           id: 65432445,
//           title: "The Chamber",
//           boxarts: [
//             {
//               width: 150,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
//             },
//             {
//               width: 200,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
//             },
//           ],
//           url: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 4,
//           bookmark: [],
//         },
//         {
//           id: 675465,
//           title: "Fracture",
//           boxarts: [
//             {
//               width: 200,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
//             },
//             {
//               width: 150,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
//             },
//             {
//               width: 300,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
//             },
//           ],
//           url: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 5,
//           bookmark: [{ id: 432534, time: 65876586 }],
//         },
//       ],
//     },
//   ];

//   // Use one or more concatMap, map, and filter calls to create an array with the following items
//   // [
//   //	 {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
//   //	 {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
//   //	 {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
//   //	 {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
//   // ];

//   return flatMap(movieLists, (element) =>
//     element.videos.map((video) => {
//       return video.boxarts
//         .filter((boxart) => boxart.width === 150 && boxart.height === 200)
//         .map((boxart) => ({
//           id: video.id,
//           title: video.title,
//           boxart: boxart.url,
//         }));
//     })
//   );
//   // Complete this expression!
// }

// console.log(calc1());
// console.log(calc1()[1]);

// function redTest() {
//   const boxarts = [
//     {
//       width: 200,
//       height: 200,
//       url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
//     },
//     {
//       width: 150,
//       height: 200,
//       url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
//     },
//     {
//       width: 300,
//       height: 200,
//       url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
//     },
//     {
//       width: 425,
//       height: 150,
//       url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
//     },
//   ];

//   // You should return an array containing only the URL of the largest box art. Remember that reduce always
//   // returns an array with one item.
//   return boxarts.reduce((previous, current) =>
//     previous.width * previous.height > current.width * current.height
//       ? previous
//       : current
//   ); // Complete this expression
// }
// console.log(redTest());

// function redTest2() {
//   const videos = [
//     {
//       id: 65432445,
//       title: "The Chamber",
//     },
//     {
//       id: 675465,
//       title: "Fracture",
//     },
//     {
//       id: 70111470,
//       title: "Die Hard",
//     },
//     {
//       id: 654356453,
//       title: "Bad Boys",
//     },
//   ];

//   // Expecting this output...
//   // [
//   //	 {
//   //		 "65432445": "The Chamber",
//   //		 "675465": "Fracture",
//   //		 "70111470": "Die Hard",
//   //		 "654356453": "Bad Boys"
//   //	 }
//   // ]
//   return videos.reduce(
//     function (accumulatedMap, video) {
//       const object_ = {};

//       // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
//       // ----- NEW MAP USING THE VIDEO ID AS THE KEY	 ----

//       // Object.assign() takes all of the enumerable properties from
//       // the object listed in its second argument (obj) and assigns them
//       // to the object listed in its first argument (accumulatedMap).
//       // return Object.assign(accumulatedMap, object_);
//       return 1;
//     },
//     // Use an empty map as the initial value instead of the first item in
//     // the list.
//     {}
//   );
// }
// console.log(redTest2());

// function redResult() {
//   const videos = [
//     {
//       id: 65432445,
//       title: "The Chamber",
//     },
//     {
//       id: 675465,
//       title: "Fracture",
//     },
//     {
//       id: 70111470,
//       title: "Die Hard",
//     },
//     {
//       id: 654356453,
//       title: "Bad Boys",
//     },
//   ];

//   // Expecting this output...
//   // [
//   //     {
//   //         "65432445": "The Chamber",
//   //         "675465": "Fracture",
//   //         "70111470": "Die Hard",
//   //         "654356453": "Bad Boys"
//   //     }
//   // ]
//   return videos.reduce(
//     function (accumulatedMap, video) {
//       const object_ = {};

//       // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
//       // ----- NEW MAP USING THE VIDEO ID AS THE KEY	 ----
//       object_[video.id] = video.title;

//       // Object.assign() takes all of the enumerable properties from
//       // the object listed in its second argument (obj) and assigns them
//       // to the object listed in its first argument (accumulatedMap).
//       return Object.assign(accumulatedMap, object_);
//     },
//     // Use an empty map as the initial value instead of the first item in
//     // the list.
//     {}
//   );
// }
// console.log(redResult());

// function ex20() {
//   const movieLists = [
//     {
//       name: "New Releases",
//       videos: [
//         {
//           id: 70111470,
//           title: "Die Hard",
//           boxarts: [
//             {
//               width: 150,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
//             },
//             {
//               width: 200,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
//             },
//           ],
//           url: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 4,
//           bookmark: [],
//         },
//         {
//           id: 654356453,
//           title: "Bad Boys",
//           boxarts: [
//             {
//               width: 200,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
//             },
//             {
//               width: 140,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg",
//             },
//           ],
//           url: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 5,
//           bookmark: [{ id: 432534, time: 65876586 }],
//         },
//       ],
//     },
//     {
//       name: "Thrillers",
//       videos: [
//         {
//           id: 65432445,
//           title: "The Chamber",
//           boxarts: [
//             {
//               width: 130,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg",
//             },
//             {
//               width: 200,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
//             },
//           ],
//           url: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 4,
//           bookmark: [],
//         },
//         {
//           id: 675465,
//           title: "Fracture",
//           boxarts: [
//             {
//               width: 200,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
//             },
//             {
//               width: 120,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg",
//             },
//             {
//               width: 300,
//               height: 200,
//               url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
//             },
//           ],
//           url: "http://api.netflix.com/catalog/titles/movies/70111470",
//           rating: 5,
//           bookmark: [{ id: 432534, time: 65876586 }],
//         },
//       ],
//     },
//   ];

//   // Use one or more concatMap, map, and reduce calls to create an array with the following items (order matters)
//   // [
//   //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
//   //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
//   //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
//   //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
//   // ];

//   return movieLists.map((element) =>
//     element.videos.map((video) => {
//       return {
//         id: video.id,
//         title: video.title,
//         boxart: video.boxarts.reduce((accumulator, current) =>
//           accumulator.height * accumulator.width >
//           current.width * current.height
//             ? current
//             : accumulator
//         ).url,
//       };
//       // video.id;
//     })
//   );
//   // concatMap(function(movieList) {})
// }

// console.log(ex20());
const minimumBox = (boxArt1, boxArt2) =>
  boxArt1.width * boxArt1.height < boxArt2.width * boxArt2.height
    ? boxArt1
    : boxArt2;

interface boxArt {
  width: number;
  height: number;
  url: string;
}

function ex24() {
  const movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          id: 70111470,
          title: "Die Hard",
          boxarts: [
            {
              width: 150,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
            },
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
            },
          ],
          url: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 4,
          interestingMoments: [
            { type: "End", time: 213432 },
            { type: "Start", time: 64534 },
            { type: "Middle", time: 323133 },
          ],
        },
        {
          id: 654356453,
          title: "Bad Boys",
          boxarts: [
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
            },
            {
              width: 140,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg",
            },
          ],
          url: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 5,
          interestingMoments: [
            { type: "End", time: 54654754 },
            { type: "Start", time: 43524243 },
            { type: "Middle", time: 6575665 },
          ],
        },
      ],
    },
    {
      name: "Instant Queue",
      videos: [
        {
          id: 65432445,
          title: "The Chamber",
          boxarts: [
            {
              width: 130,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg",
            },
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
            },
          ],
          url: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 4,
          interestingMoments: [
            { type: "End", time: 132423 },
            { type: "Start", time: 54637425 },
            { type: "Middle", time: 3452343 },
          ],
        },
        {
          id: 675465,
          title: "Fracture",
          boxarts: [
            {
              width: 200,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
            },
            {
              width: 120,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg",
            },
            {
              width: 300,
              height: 200,
              url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
            },
          ],
          url: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 5,
          interestingMoments: [
            { type: "End", time: 45632456 },
            { type: "Start", time: 234534 },
            { type: "Middle", time: 3453434 },
          ],
        },
      ],
    },
  ];

  //------------ COMPLETE THIS EXPRESSION --------------
  return flatMap(movieLists, function (movieList) {
    return movieList.videos.map((video) => {
      return zipWith(
        video.boxarts,
        video.interestingMoments,
        (boxarts: boxArt, interestingMoments) => {
          return { boxart: boxarts, moment: interestingMoments };
          //  return  reduce(boxarts, (accumulator, current) =>
          //       accumulator.height * accumulator.width >
          //       current.width * current.height
          //         ? current
          //         : accumulator
          //     ),
        }
      )
        .filter(
          (element) =>
            element.moment.type == "Middle" &&
            element.boxart.width !== undefined
        )
        .reduce((accumulator, current) =>
          accumulator.boxart.height * accumulator.boxart.width >
          current.boxart.width * current.boxart.height
            ? current
            : accumulator
        );
      // return video.id;
    });
  });
}
console.log(ex24()[0][0]);
