//  [HowWorks]    Takes a string[] as 1st parameter.
//                Returns the concidence else Null.
 function arrayCompareAndRetrieve({ aToLook, aToSearch, kToSearch }) {
  const foundValues = aToSearch.filter((item1) =>
    aToLook.find((item2) => item2 === item1[kToSearch])
  );
  return foundValues.length === 0 ? null : foundValues;
}
