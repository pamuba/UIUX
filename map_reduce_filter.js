var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

  //[20, 24, 56, 88]

  //forEach

// var officersIds = [];

// officers.forEach(function (officer) {
//   officersIds.push(officer.id);
// });

// var officersIds = officers.map(officer=> officer.id);

// console.log(officersIds)

// var pilots = [
//     {
//       id: 10,
//       name: "Poe Dameron",
//       years: 14,
//     },
//     {
//       id: 2,
//       name: "Temmin 'Snap' Wexley",
//       years: 30,
//     },
//     {
//       id: 41,
//       name: "Tallissan Lintra",
//       years: 16,
//     },
//     {
//       id: 99,
//       name: "Ello Asty",
//       years: 22,
//     }
//   ];

//   var totalYears = pilots.reduce(function (accumulator, pilot) {
//     return accumulator + pilot.years;
//   }, 0);

//   console.log(totalYears)

var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];

  var rebels = pilots.filter(function (pilot) {
    return pilot.faction === "Rebels";
  });
  var empire = pilots.filter(function (pilot) {
    return pilot.faction === "Empire";
  });

  console.log(rebels)
  console.log(empire)

// const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
// const empire = pilots.filter(pilot => pilot.faction === "Empire");