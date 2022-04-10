//  Takes 2 array of objects as parameters, look for a key in
//  the 1st array and returns an object with the specified
//  property from the 2nd array.
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
