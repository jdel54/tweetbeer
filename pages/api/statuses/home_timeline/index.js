const timeline = [
    {
      id: "0",
      avatar:
        "https://images.vexels.com/media/users/3/132192/isolated/lists/1ab8dd5081a7d67b514e2c5ba532b934-cabeza-de-dibujos-animados-de-nina-sonriente.png",
      email: "wongmjane",
      content: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    * Chrome 79+, Safari 14+, Firefox 68+`,
    },
    {
      id: "1",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNv7fFvMyI7DhwptzOTgcntTgBBWq5LLPvD2wwgj47GBr3gPFc2HtIUFrLFye7BDUxRk0&usqp=CAU",
      email: "Paolho",
      content: "Wow, Tweetbeer is live and working🦉",
      name: "Paolo Coelho",
    },
    {
      id: "2",
      email: "Jack",
      name: "Jack Griffin",
      avatar:
        "http://microlancer.lancerassets.com/v2/services/bf/56f0a0434111e6aafc85259a636de7/thumbnail__original_PAT.jpg",
      content: `I grab my beer and publish the first bweet`,
    },
    {
    id: "3",
      email: "jdel54",
      name: "Jorge Del Castillo",
      avatar:
        "https://avatars.githubusercontent.com/u/101069613?v=4",
      content: `Hello, I am Jorge, the founder of tweetbeer :) 🍺`,
    },
    {
        id: "0",
        avatar:
          "https://images.vexels.com/media/users/3/132192/isolated/lists/1ab8dd5081a7d67b514e2c5ba532b934-cabeza-de-dibujos-animados-de-nina-sonriente.png",
        email: "wongmjane",
        content: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
      (gzipped size went from 16.6 KB down to 2.7 KB!!)
      * Chrome 79+, Safari 14+, Firefox 68+`,
      },
      {
        id: "1",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNv7fFvMyI7DhwptzOTgcntTgBBWq5LLPvD2wwgj47GBr3gPFc2HtIUFrLFye7BDUxRk0&usqp=CAU",
        email: "Paolho",
        content: "Wow, Tweetbeer is live and working🦉",
        name: "Paolo Coelho",
      },
      {
        id: "2",
        email: "Jack",
        name: "Jack Griffin",
        avatar:
          "http://microlancer.lancerassets.com/v2/services/bf/56f0a0434111e6aafc85259a636de7/thumbnail__original_PAT.jpg",
        content: `I grab my beer and publish the first bweet`,
      },
      
      {
      id: "3",
        email: "jdel54",
        name: "Jorge Del Castillo",
        avatar:
          "https://avatars.githubusercontent.com/u/101069613?v=4",
        content: `Hello, I am Jorge, the founder of tweetbeer :) 🍺`,
      },
    
  ]
  
  export default (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.send(JSON.stringify(timeline))
  }