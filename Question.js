class Question {
    constructor() {
      this.input=createInput("Name")
      this.button=createButton("Enter correct option no.")
      this.options=createElement("1:West Indies  2:Australia 3:South Africa 4:India")
    }
  
    display(){
      var title = createElement('h2')
      title.html("My Quiz Game");
      title.position(130, 0);
      
     this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
        playerCount+=1;
        player.index=playerCount;+
        player.update()
        player.updateCount(playerCount);
        this.question.html("Question:-  Which team won the first 20-20 cricket WorldCup ")
        this.greeting.position(130, 160)
      });
  
    }
  }