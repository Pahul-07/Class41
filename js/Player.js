class Player{

    constructor(){
        this.name= null
        this.index= null
    }

    getCount(){
        database.ref('playerCount').on("value", (data)=>{
            playerCount= data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    
   update(){

    database.ref('players/player'+this.index).set({
        name:this.name
    })
   }

   getInfoPlayer(){

    database.ref('players').on("values",(data)=>{

        allPlayers= data.val()
    })
   }
            
}
