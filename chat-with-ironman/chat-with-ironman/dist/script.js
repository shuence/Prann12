var send = document.querySelector('.chatbox__input svg');
var body = document.querySelector('.chatbox__body')
var input = document.querySelector('input');

var messageController = (function(){
  
  var starkQuotes = [
    "Wassup cutie 😌",
    "LOVE YOU 6600 ✨ .",
    "You Know I wish You to be in our team",
    "Why Are you so cute ",
    "HOW DO YOU GO TO THE BATHROOM IN THE SUIT?” [LONG PAUSE.] “JUST LIKE THAT.",
    "SOMETIMES YOU GOTTA RUN BEFORE YOU CAN WALK.",
    "HAVE YOU EVER TRIED SHAWARMA… I DON’T KNOW WHAT IT IS, BUT I WANNA TRY IT.",
    "IF THERE’S ONE THING I’VE PROVEN IT’S THAT YOU CAN COUNT ON ME TO PLEASURE MYSELF.",
    "WE HAVE A HULK.",
    "GENIUS, BILLIONAIRE, PLAYBOY, PHILANTHROPIST.",
    "I AM IRON MAN"
  ];
  
  return {
    sendMessage: function(){
      var message_container = document.createElement("div");
      var message = `<img src="https://orig00.deviantart.net/f144/f/2016/273/b/3/black_widow_3_by_saturnsam-dajg3hy.jpg"/>
      <div class="message_text"> ${input.value} </div>`;
      message_container.className = "message sender";
      message_container.innerHTML = message;      
      body.insertBefore(message_container, body.firstChild);
      input.value = "";
    },
    starkReply: function(){
      var reply = starkQuotes[Math.floor(Math.random() * starkQuotes.length-1) ];
      var message_container = document.createElement("div");
      var message = `<img src="https://d2gcv4sxt84gxu.cloudfront.net/uploads/avatars/995064/original.png?1450125781"/>
      <div class="message_text"> ${reply} </div>`;
      message_container.className = "message receive";
      message_container.innerHTML = message;      
      body.insertBefore(message_container, body.firstChild);
    }
  }
})();

var init = (function(messageController){
  ['click', 'keyup'].forEach(event => document.addEventListener(event, handler));
  
  function handler(e){
      if(e.target == send  || e.keyCode == 13 ){
      messageController.sendMessage();
      setTimeout(messageController.starkReply, 1000);
    }
  }
})(messageController);