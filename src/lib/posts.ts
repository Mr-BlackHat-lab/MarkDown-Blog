import matter from "gray-matter";  // Import the 'matter' function from the 'gray-matter' library
import fs from "fs";  // Import the 'fs' module for file system operations
import path from "path";  // Import the 'path' module for handling file paths

// Define the absolute path to the 'posts' directory
const postsDirectory = path.join(process.cwd(), 'src' ,'posts');

// Define the expected shape of the data for each post
interface PostData{
    slug: string;
    title: string;
    date:string;        // Keep as string for now, parsing/formatting can happen later
    author:string;
    description:string;
    // You can add any other frontmatter fields here later
}

export function getStoredPostsData(): PostData[]{

    const fileNames = fs.readdirSync(postsDirectory); // Read all file names in the 'posts' directory
    const allPostsData = fileNames.map((fileName): PostData => {
        
        const slug = fileName.replace(/\.md$/ , ''); // Remove the '.md' extension to get the slug
        const fullPath = path.join(postsDirectory, fileName); // Get the full path to the markdown file
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents); // Parse the file contents to get frontmatter and content
        const postDataObject :PostData ={
            slug,
            ...(matterResult.data as {title:string; date:string; author:string; description:string;})
        }
        

        return postDataObject;
    });

    allPostsData.sort((a,b)=>{
        if(a.date < b.date){
            return 1;
        } else if(a.date > b.date){
            return -1;
        }else{
            return 0;
        }

    })

    return allPostsData as PostData[];
}