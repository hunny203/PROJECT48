class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("Code1")
        this.access1.position(720,150);
        
        this.button1 = createButton('Check');
        this.button1.position(720,170);


        this.access2 = createInput("Code1")
        this.access2.position(720,330);
        
        this.button2 = createButton('Check');
        this.button2.position(720,350);
         
        this.access3 = createInput("Code1")
        this.access3.position(720,510);
        
        this.button3 = createButton('Check');
        this.button3.position(720,530);

    }

    display(){

        // Add code to make the buttons function as expected
       this.button1.mousePressed(() => {
           if(system.authenticate(accessCode1,this.access1.value())){
               this.button1.hide();
               this.access1.hide();
            score++;
               fill("orangered")
               textSize(25)
               text("CORRECT", 720,180)
                  
           }
       });

       this.button2.mousePressed(() => {
        if(system.authenticate(accessCode2,this.access2.value())){
            this.button2.hide();
            this.access2.hide();
            score++;
           
            fill("white");
               textSize(25);
               text("CORRECT", 720,360);
        }
    });

    this.button3.mousePressed(() => {
        if(system.authenticate(accessCode3,this.access3.value())){
            this.button3.hide();
            this.access3.hide();
            score++;
            fill("green")
               textSize(25)
               text("CORRECT", 720,530)
        }
    });

    }
}