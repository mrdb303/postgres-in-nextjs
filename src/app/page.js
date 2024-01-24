import { sql } from "@vercel/postgres";
import styles from "./page.module.css";

export default async function Home() {

  const names = await sql`SELECT * FROM names`;
  let results = await response.json();

  return (
    <>
    <h1>Skeleton App</h1>

         {results.map((result) => {
          return (
            <>
              <div key={result.id}>
               <li>{'${result.name}} {result.age} '}  {/* */}
               </li>
             </div> 
            </>
          );
        })}

        </>
  );
}

/*
const likes = 100;

const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;

*/
