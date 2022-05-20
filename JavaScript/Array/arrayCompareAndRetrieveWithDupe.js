function arrayCompareAndRetrieveWithDupe({ aToLook, aToSearch, kToSearch }) {
  const foundValues = aToSearch.filter((item1) =>
    aToLook.find((item2) => item2 === item1[kToSearch])
  );
  const dupedArr = [...foundValues];
  dupedArr.push(...foundValues);
  return foundValues.length === 0 ? null : dupedArr;
}
