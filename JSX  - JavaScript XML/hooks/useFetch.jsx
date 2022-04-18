import { useEffect, useState } from "react";

//                                                          Optional
export default async function useFetch({ POST = false, url, postResponse }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [inputData, setInputData] = useState(null);

  //  [NOTE]  Using Computing Properties
  //          to overwrite previous data
  //          from the state.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    //  fetchs defaults to GET, POST = false = GET
    if (!POST) {
      return await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setResponse(data);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          setResponse(null);
          setLoading(false);
          setError(error);
        });
    } else {
      try {
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json",
          },
          body: JSON.stringify(inputData),
        });
        setResponse(postResponse.ok); //  Needs testing
        setLoading(false);
        setError(null);
      } catch (error) {
        setResponse(postResponse.error);
        setLoading(false);
        setError(error);
      }
    }

    return () => setResponse(null), setError(null), setLoading(false);
  }, []);

  //      GET                          POST       form.onChange
  return { response, error, isLoading, inputData, handleChange };
}
