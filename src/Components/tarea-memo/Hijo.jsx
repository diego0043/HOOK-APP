import React from "react";

export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button
      className="btn btn-outline-primary mr-3 shadow w-20"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
}
);
