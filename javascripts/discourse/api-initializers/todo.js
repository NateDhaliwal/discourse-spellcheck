import { apiInitializer } from "discourse/lib/api";

async function checkWord(word) {
  const url = 'https://webspellchecker-webspellcheckernet.p.rapidapi.com/api';
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-host': 'webspellchecker-webspellcheckernet.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: {
      cmd: 'check',
      lang: 'en_US',
      text: word.trim(),
      disable_grammar: 'true',
      disable_spelling: 'false',
      disable_style_guide: 'true',
      user_dictionary: '',
      user_wordlist: 'word1,word2',
      ignore_all_caps: '0',
      ignore_words_with_numbers: '0',
      ignore_mixed_case: '0',
      ignore_domain_names: '0'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export default apiInitializer((api) => {
  api.decorateCookedElement(async function (element) {
    let post = element.innerText;
    post.split("[\\s]").forEach((word) => {
      await checkWord(word);
    });
  });
});
