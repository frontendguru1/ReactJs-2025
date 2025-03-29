import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await fetch(url, options);
        const jsonResponse = await response.json();
        if (jsonResponse.length) {
          console.log('jsonResponse inner block', jsonResponse);
          setData(jsonResponse);
        }
        setLoader(false);
      } catch (error) {
        console.log('Error while fetching the data', error);
        setError('Something went wrong!')
      } finally {
        setLoader(false);
      }

    }

    fetchData();

  }, [url])


  return { data, loader, error }


}
export default useFetch;
