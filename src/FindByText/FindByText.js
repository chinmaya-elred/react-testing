import React, { useEffect, useState } from "react";

function FindByText() {
  const [data, setData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 4000);
  }, []);

  return (
    <div>
      <h1>findBy and findAllBy</h1>
      {data ? <h2>data found</h2> : <h2>No data found</h2>}
    </div>
  );
}

export default FindByText;
