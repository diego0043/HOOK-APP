import { useFetch, useCounter } from "../../hooks/index.js";
import { LoadingQuote, Quote } from "./index.js";

export const MultipleCustomHooks = () => {
  const { counter, addValue } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes",
    counter
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1 className="text-center mt-2 mb-2">BreakingBad Qoutes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <div className="flex justify-center mt-5">
        <button
          disabled={isLoading}
          onClick={() => addValue(1)}
          className="btn btn-outline-primary"
        >
          Next Quote
        </button>
      </div>
    </>
  );
};
