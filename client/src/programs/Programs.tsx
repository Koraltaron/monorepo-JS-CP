import { useEffect, useState } from "react";

interface DataI {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [data, setData] = useState<DataI[] | []>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>Coucou</h1>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <h2>{el.title}</h2>
            <figure>
              <img src={el.poster} alt={el.title} />
              <figcaption>
                {el.title} {el.country} {el.year}
              </figcaption>
            </figure>
            <p>{el.synopsis}</p>
          </div>
        );
      })}
    </>
  );
}

export default Programs;
