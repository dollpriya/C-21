function bounceOff(a,b){
    if (a.x - b.x < b.width/2 + a.width/2
          && b.x - a.x < b.width/2 + a.width/2) {
        a.velocityX = a.velocityX * (-1);
        b.velocityX = b.velocityX * (-1);
      }
      if (a.y - b.y < b.height/2 + a.height/2
        && b.y - a.y < b.height/2 + a.height/2){
        a.velocityY = a.velocityY * (-1);
        b.velocityY = b.velocityY * (-1);
      }
    }


    function isTouching(object1, object2){
        if (object1.x - object2.x < object2.width/2 + object1.width/2
          && object2.x - object1.x < object2.width/2 + object1.width/2
          && object1.y - object2.y < object2.height/2 + object1.height/2
          && object2.y - object1.y < object2.height/2 + object1.height/2) {
      
            return true;
        }
        else {
          return false
        }
      }