import { apiInitializer } from "discourse/lib/api";

const dictionary = new Typo("en_US");

export default apiInitializer((api) => {
  api.decorateCookedElement((element) => {
    let post = element.innerText;
    post.split(' ').forEach((word) => {
      let isCorrect = dictionary.check("mispelling");
      console.log(word + ": " + isCorrect);
      if (!isCorrect) {
        let suggestions = dictionary.suggest("mispelling");
        console.log(word + ": " + suggestions);
      }
    });
  });
});
