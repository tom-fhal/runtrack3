$(document).ready(function () {
    $("#random").click(function(){
      let parent = $(".box2");
      let divs = parent.children();
      let l = divs.length; 
      while (l) {
        parent.append(divs.splice(Math.floor(Math.random() * l), 1)[0]);
        l--; // 
      }
    });
    
    $("#one").click(function(){
      let box2 = $(".box2"); 
      box2.appendTo(".box");
    });
  })
  