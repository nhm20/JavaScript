let quotesList = [
     {
          quote: "All that we are is the result of what we have thought The mind is everything",
          author: " Gautama Buddha"
     },
     {quote: "The tree laden with fruits always bends low. If you wish to be great, be lowly and meek.",
     author: " Sri Ramakrishna Paramahamsa"
     },
     {quote: "Arise, Awake and Stop not until the goal is reached.",
     author: " Swami Vivekananda"
     },
     {quote: "You must be the change you want to see in the world.",
     author: " Mahatma Gandhi"
     },
     {quote: "To succeed in your mission, you must have single  minded devotion to your goal.",
     author: " Abdul Kalam"
     },
{
     quote:"Winners dont do different things they do things differently",
     author: "Shiv Khera"
     }
]

// let quoteEle = document.getElementById("quote")
// let authorEle = document.getElementById("author")
// function getLocalQuotes() {
//      let i = Math.floor(Math.random() * quotesList.length)
//      quoteEle.innerText = quotesList[i].quote
//      authorEle.innerText = "-" + " " + quotesList[i].author
// }
// document.getElementById("getQuote").onclick = getLocalQuotes


async function quoteAPI() {
     let response = await fetch("https://api.quotable.io/random");
     let quote = await response.json()
     console.log(quote)
     quoteEle.innerText = quote.content
     authorEle.innerText = "--" + " " + quote.author
     
}
document.getElementById("getQuote").onclick = quoteAPI;

