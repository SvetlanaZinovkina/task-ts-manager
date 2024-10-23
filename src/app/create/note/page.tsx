import { getTags } from "@/app/api/notes";
import NewNote from "@/components/NewNote";
import { Tag } from "@/types/types";

const NewNotePage = async () => {
  const fetchedTags: Tag[] = await getTags();


  return (
    <main className="container-fluid min-vh-100">
      <NewNote tags={fetchedTags} />
    </main>
  );
}

export default NewNotePage;