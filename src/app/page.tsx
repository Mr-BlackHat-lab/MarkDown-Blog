import Image from "next/image";
import { getSortedPostsData} from "@/lib/posts";

export default function Home() {


  const allPostsData = getSortedPostsData();
  // console.log("All Posts Data:", allPostsData);



  return (
   <>
   hello
   </>
  );
}
