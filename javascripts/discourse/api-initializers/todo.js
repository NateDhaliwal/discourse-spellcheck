import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  api.decorateCookedElement((element) => {
    console.log(element.innerHTML);
    const dictionary = new Typo("en_US", false, false, { dictionaryPath: "typo/dictionaries" }),
    
  });
});
