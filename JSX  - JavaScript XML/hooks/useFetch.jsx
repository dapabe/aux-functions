//  TODO: NOTES

const responseType = {
  clientRes: null,
  serverRes: null,
};

export default function useFetch(url) {
  const [response, setResponse] = useState(responseType);
  const [isLoading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);

    //  refactor setResponses
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResponse({ ...response, data });
        setLoading(false);
      })
      .catch((error) => {
        setResponse(error);
        setLoading(false);
      });

    return () => setResponse(null), setLoading(false);
  }, [url]);

  return { response, isLoading };
}
