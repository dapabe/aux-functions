//  [HowWorks]    Detects if the pixel threshold as been reached
//                then return a boolean.

function usePageOffset(pixels = globalThis.innerHeight) {
  const [isOffset, handleOffset] = useToggle(false);
  
  const checkTopScroll = () => {
    const pageOffset = globalThis.scrollY ?? globalThis.pageYOffset;
    !isOffset && pageOffset >= pixels && handleOffset();
    isOffset && pageOffset <= pixels && handleOffset();
  };

  useEffect(() => {
    globalThis.addEventListener("scroll", checkTopScroll);
    return () => globalThis.removeEventListener("scroll", checkTopScroll);
  }, [isOffset]);

  return { isOffset };
}
