import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch Man']);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
        <AddCategory 
          // setCategories={setCategories}
          onNewCategory={onAddCategory}
        />
        
        <h1>GifExpertApp</h1>

        {/* <button onClick={onAddCategory}>Add Category</button> */}

          {
            categories.map(category => (
              <GifGrid key={category} category={category}/>
                // <div key={category}>
                //   <h3>{category}</h3>
                //   <li key={category}>{category}</li>
                // </div>
            ))
          }
    </>
  )
}
