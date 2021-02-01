const images = [
  "65wat.jpeg",
  "emma-watson.jpg",
  "jabbawat.jpg",
  "konichiwat.jpg",
  "sqwat.jpg",
  "watchdogs.jpg",
  "watgun.gif",
  "watican.jpg",
  "watmakes.png",
  "watman.jpeg",
  "watsapp.jpg"
]

const random = Math.floor(Math.random() * images.length)

watbg.setAttribute("src", `wat/${images[random]}`)
watmain.setAttribute("src", `wat/${images[random]}`)
