import { apiInitializer } from "discourse/lib/api";

const dictionary = new Typo("en_US", false, false, { dictionaryPath: "typo/dictionaries" });

export default apiInitializer((api) => {
  api.decorateCookedElement((element) => {
    let post = element.innerText;
    post.split(' ').forEach((word) => {
      let isCorrect = dictionary.check("mispelling");
      console.log(word + ": " + isCorrect);
      if (!isCorrect) {
        console.log(word + ": " + dictionary.suggest("mispelling"));
      }
    });
  });
});
