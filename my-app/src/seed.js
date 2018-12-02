import firebase from "../firebase";

// The Real Indies: A Close Look at Orphan Films (Academy Theater NYC, Oct. 31-Nov. 1, 2014)
// The Future of Obsolescence (EYE, Amsterdam, Mar. 30 - Apr. 2, 2014)
// Orphans Midwest: Materiality and the Moving Image (IU Bloomington, Sept. 26-28, 2013)
// The Real Indies: A Close Look at Orphan Films hosted by AMPAS (Hollywood, May 10-11, 2013)
// Made to Persuade (Museum of the Moving Image, 2012)
// Moving Pictures Around the World (2010)
// The State (2008)
// Science, Industry, and Education (2006)
// On Location (2004)
// Sound/Music/Voice (2002)
// Documenting the 20th Century (2001)
// Saving Orphan Films in the Digital Age (1999)

// const addConf = (num, obj) => {
//     firebase.auth().onAuthStateChanged(function(user) {
//       // let n = 0;
//       // if (user && n === 0) {
//       //   n++;
//       //   const uid = user.uid;

//       let uid = num;
//       firebase
//         .database()
//         .ref("conferences/" + uid)
//         .set(obj);
//     });
//   };

// const obj = {
//   vol: 4,
//   title: "On Location : Place and Region in Forgotton Films ",
//   year: 2004,
//   location: "University of South Carolina",
//   dates: "March 24-27, 2004"
// };
// addConf(4, obj);

// const obj = {
//   vol: 5,
//   title: "Science, Industry, and Education",
//   year: 2006,
//   location: "University of South Carolina",
//   dates: "March 22-25, 2006"
// };
// addConf(5, obj);

// const obj = {
//   vol: 6,
//   title: "The State",
//   year: 2008,
//   location: "New York University",
//   dates: "March 26-29, 2008"
// };
// addConf(6, obj);
// const obj = {
//   vol: 7,
//   title: "Moving Pictures Around the World",
//   year: 2010,
//   location: "New York University",
//   dates: "April 7-10, 2010"
// };
// addConf(7, obj);
// const obj = {
//   vol: 8,
//   title: "Made to Persuade",
//   year: 2012,
//   location: "Museum of the Moving Image",
//   dates: "April 11-14, 2012"
// };
// addConf(8, obj);

// const obj = {
//   vol: 8.2,
//   title: "The Real Indies: A Close Look at Orphan Films ",
//   year: 2013,
//   host: "Academy of Motion Picture and Arts and Sciences",
//   location: "Hollywood,CA",
//   dates: "May 10-11, 2013",
//   OriginalWebsite:
//     "https://www.oscars.org/events/real-indies-close-look-orphan-films"
// };
// addConf("8B", obj);

// const obj = {
//   vol: 8.5,
//   title: "Orphans Midwest: Materiality and the Moving Image",
//   year: 2013,
//   location: "Indiana University, Bloomington",
//   dates: "September 26-28, 2013"
// };
// addConf("8MW", obj);

// const obj = {
//   vol: 9,
//   title: "The Future of Obsolescence",
//   year: 2014,
//   location: "EYE Institute, Amsterdam",
//   dates: "March 30 - April 2, 2014"
// };
// addConf(9, obj);
// const obj = {
//   vol: 10,
//   title: "Orphans X : Sound",
//   year: 2016,
//   location: "Library of Congress National Audio-Visual Conservation Center",
//   dates: "April 6-9, 2016"
// };
// addConf(10, obj);

// const obj = {
//   vol: "10SE",
//   title: "Tests, essais et expérimentations",
//   year: 2017,
//   location: "Cinémathèque française, Paris",
//   dates: "March 2-4, 2017"
// };
// addConf("10SE", obj);

// const obj = {
//   vol: 11,
//   title: "Love",
//   year: 2018,
//   location: "Museum of the Moving Image",
//   dates: "April 11-14, 2018"
// };
// addConf(11, obj);
// const obj = {
//   vol: "11SE",
//   title: "Radicals",
//   year: 2019,
//   location: "Austrian Film Museum, Vienna",
//   dates: "June 7 - 8, 2019"
// };
// addConf("11SE", obj);

// const addPhoto = obj => {
//     firebase.auth().onAuthStateChanged(async function(user) {
//       // let n = 0;
//       // if (user && n === 0) {
//       //   n++;
//       //   const uid = user.uid;

//       const newKey = await firebase
//         .database()
//         .ref(`photos/`)
//         .push().key;

//       firebase
//         .database()
//         .ref(`photos/`)
//         .child(newKey)
//         .set(obj);
//     });
//   };

//addPhoto()
//   const obj1 = {
//     link:
//       "https://wp.nyu.edu/orphanfilm/wp-content/uploads/sites/75/2018/03/matinggame1.png",
//     title: "Mating Games(2018)"
//   };

// const obj1 = {
//     link:
//       "https://wp.nyu.edu/orphanfilm/wp-content/uploads/sites/75/2014/05/13701092635_4a0cd2391f_z.jpg",
//     title: "TBD"
//   };
//   addPhoto(obj1);
