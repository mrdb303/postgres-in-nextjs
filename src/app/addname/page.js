import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import AddPersonButton from "../components/addPersonButton";

export default function AddName() {
  async function handleAddName(formData) {
    "use server";

    // get the things from our formData object
    const name = formData.get("name");
    const age = formData.get("age");

    // make our sql request
    await sql`INSERT INTO names (name, age) VALUES (${name}, ${age})`;

    // revalidate the path so the new item shows
    revalidatePath("/");

    // take me to the home page
    redirect("/");
  }

  return (
    <div>
      <h2>Add a Person</h2>
      <form action={handleAddName}>
        <label htmlFor="nameform">Name</label>
        <input name="name" id="name" placeholder="Name" />

        <label htmlFor="age">Age</label>
        <input name="age" id="age" placeholder="age" />

        <AddPersonButton/>
      </form>
    </div>
  );
}