import { useEffect, useState } from "react";

export const useFetch = (url, id = 0) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({ ...state, isLoading: true})
    const resp = await fetch(url);
    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
    return () => {};
  }, [id]);

  return {
    ...state
  };
};
