//  TODO: NOTES

//  [HowWorks]  postResponse, is the server response.
//              inputValues, initialized as null but
//              the inputs are always an empty string.
//              handleChange, a callback to be used in
//              the input with the onChange event.
//              formSubmit, a callback function to be used
//              in the form element with the event onSubmit.
const postResponse = {
  ok: "Success",
  error: "Error",
}

function usePost({ url, postResponse, inputValues = null }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [inputData, setInputData] = useState(inputValues);

  //  Computed properties overwriting a
  //  copy of previous prop values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then(() => {
        setResponse(postResponse.ok);
        setLoading(false);
      })
      .catch(() => {
        //  Do somethig...
        setResponse(postResponse.error);
        setLoading(false);
        });
      });
  };

  return { response, isLoading, inputData, handleChange, formSubmit };
}
