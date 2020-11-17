var dog,happyDog,database,foods,foodStock
var petButton,addFoodButton,lastFed,fedTime,foodobj
var gState
var bedroom,garden,washroom
function preload()
{
  dogImage = loadImage("images/dogimg.png")
  dogIImage = loadImage("images/dogimg1.png")
  milkimg = loadImage("images/milk.png")
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(10,10,10,10)
  dog.addImage(dogImage)
  database.add(database)

  foodStock = database.ref("food")
  foodStock.on("value",readStock)
  foodobj = new food()

  feed = createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)
  
  addFood = createButton("Add food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
  
}


function draw() {  

  background(46,139,87)

 feedTime = database.ref("feedTime")
 feedtime.on("value", function(data){
lastFed = data.val()
 })

  text("foodStock,250,250")

  foodobj.display()


  drawSprites();
  //add styles here

}

function writeStock(){
  database
  .ref("/")
  .update({foodStock:foodStock})
}

function addFood(){
  foodStock = foodStock + 1
}

function readGameState(){
  database
  .ref("/gamestate")
  .on("value", function(data){

  })

  function updateGameState(){
    database
    .ref("/gamestate")
.update({gamestate:gState})
  }
  data.val(gState)
}