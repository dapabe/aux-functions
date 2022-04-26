//  [HowWorks]    Detects if the pixel threshold as been reached
//                then return a boolean.

function usePageOffset(pixels = globalThis.innerHeight) {
  const [isOffset, setOffset] = useState(false);

  const pageOffset = globalThis.scrollY ?? globalThis.pageYOffset;

  const checkTopScroll = () => {
    !isOffset && pageOffset >= pixels && setOffset(true);
    isOffset && pageOffset <= pixels && setOffset(false);
  };
  useEffect(() => {
    globalThis.addEventListener("scroll", checkTopScroll);
    return () => globalThis.removeEventListener("scroll", checkTopScroll);
  }, [isOffset]);

  return { isOffset };
}
