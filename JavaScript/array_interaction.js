
   
//  Takes 2 array of objects as parameters, look for a key in
//  the 1st array, find if it exists in the 2nd array and returns
//  an object with the specified property from the 2nd array.
function CompareAndRetrieve({
  aLook,
  aSearch,
  kSearch,
  kReturn,
}) {
  const returnedValues = aSearch.filter((item1) => {
    const foundValues = aLook.find(
      (item2) => item2[kSearch] === item1[kSearch]
    );
    return foundValues && item1[kReturn];
  });
  return returnedValues.length !== 0 ? returnedValues : null;
}
//  EX:
//  const skills = 
//  [
//    { name: "HTML" },
//    { name: "CSS" },
//  ]
//  const icons = 
//  [
//    { name: "HTML", file: "HTML.svg", img_desc: "HTML5 Logo" },
//    { name: "CSS", file: "CSS.svg", img_desc: "CSS Logo" },
//    { name: "NodeJS", file: "NodeJS.svg", img_desc: "NodeJS Logo" },
//  ]
//    [use case]
//  CompareAndRetrieve({
//  aLook: skills,
//  aSearch: icons,
//  kSearch: "name",
//  kReturn: "file"
//  }).forEach((item)=> console.log(i)) --> Should log every coincidence.
