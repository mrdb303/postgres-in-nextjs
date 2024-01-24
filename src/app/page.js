import { sql } from "@vercel/postgres";
import styles from "./page.module.css";

export default async function Home() {

  const names = await sql`SELECT * FROM names`;

  return (
    <>
    <h1>Skeleton App</h1>

      {names.rows.map((name) => {
        return (
          
          <div key={name.id}>
            <li key={name.id}>{`${name.id} ${name.name} ${name.age} `}  {/* */}
            </li>
          </div> 
          );
        })}

        </>
  );
}

/*
const likes = 100;

const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;

*/
