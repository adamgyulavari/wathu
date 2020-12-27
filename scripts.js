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

wat.setAttribute("src", `wat/${images[random]}`)
