class food{
    constructor(){
var foodStock
var lastFed
    }
    display(){

        var x=80,y=100

        if (lastFed>=12){
            text("Last Fed:" lastFed%12 + "PM" ,350,30) 
        }
        else if (lastFed == 0){
            text("last fed: 12AM" 350,50)
        }
        else(){
            text("Last Fed:" lastFed + "AM" ,350,30) 
        }

        image(milkimg,200,200)

        getFoodStock(){
database
.ref("/food")
.on("value", function(data){

})
foodStock = data.val()
        }

        updateFoodStock(){
            database
            .on("/food")
            .update(food:foodStock)
        }

    }
}