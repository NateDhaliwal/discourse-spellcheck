import { apiInitializer } from "discourse/lib/api";

async function checkText(text) {
  const url = 'https://ginger4.p.rapidapi.com/correction?lang=US&generateRecommendations=false&flagInfomralLanguage=true';
  const options = {
  	method: 'POST',
  	headers: {
  		'x-rapidapi-host': 'ginger4.p.rapidapi.com',
  		'Content-Type': 'text/plain',
  		'Accept-Encoding': 'identity'
  	},
  	body: text
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
    await checkWord(post.toString());
    // post.split("[\\s]").forEach(async function eachWord(word) {
      
    // });
  });
});
