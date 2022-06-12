const GAME = {

  player1: true,
  player2: false,

  createGame(p1, p2,) {
    const pole = document.createElement("div");
    pole.className = "pole";
    pole.style.cssText = `width: 600px;
                        display: flex;
                        flex-wrap: wrap;
                        margin: 0 auto;
                        margin-top: 10%;`

    document.body.append(pole);
    
    let i = 1;
    while (i < 26) {
      let kletka = document.createElement("div");
      kletka.className = "kletka";
      kletka.style.cssText = `position: relative;
                              border: 3px solid #fff;
                              width: 120px;
                              height: 120px;`
      pole.append(kletka);
      if (i === 2 || i === 4) {
        let triangleLookDown = document.createElement("span");
        triangleLookDown.style.cssText =` position: absolute;
                                          top: 50%;
                                          left: 50%;
                                          transform: translate(-50%, -50%);
                                          width: 0;
                                          height: 0;
                                          border-left: 20px solid transparent;
                                          border-right: 20px solid transparent;
                                          border-top: 40px solid rgb(255, 0, 0);`
        kletka.append(triangleLookDown);
      } else if (i === 3) {
        let squareLookDown = document.createElement("span");
        squareLookDown.style.cssText = `position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                        border: 1px solid rgb(255, 0, 0);
                                        background-color: rgb(255, 0, 0);
                                        width: 50px;
                                        height: 50px;`
        kletka.append((squareLookDown));
      } else if (i === 7 || i === 8 || i === 9) {
        let circleLookDown = document.createElement("span");
        circleLookDown.style.cssText = `position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                        border: 1px solid rgb(255, 0, 0);
                                        background-color: rgb(255, 0, 0);
                                        border-radius: 100%;
                                        width: 40px;
                                        height: 40px;`
        kletka.append((circleLookDown));
      } else if (i === 22 || i === 24) {
        let triangleLookUp = document.createElement("span");
        triangleLookUp.style.cssText = `position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                        width: 0;
                                        height: 0;
                                        border-left: 20px solid transparent;
                                        border-right: 20px solid transparent;
                                        border-bottom: 40px solid rgb(0, 255, 0);`
        kletka.append(triangleLookUp);
      } else if (i === 23) {
        let squareLookUp = document.createElement("span");
        squareLookUp.style.cssText = `position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                        border: 1px solid rgb(0, 255, 0);
                                        background-color: rgb(0, 255, 0);
                                        width: 50px;
                                        height: 50px;`
        kletka.append((squareLookUp));
      } else if (i === 17 || i === 18 || i === 19) {
        let circleLookUp = document.createElement("span");
        circleLookUp.style.cssText = `position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                        border: 1px solid rgb(0, 255, 0);
                                        background-color: rgb(0, 255, 0);
                                        border-radius: 100%;
                                        width: 40px;
                                        height: 40px;`
        kletka.append((circleLookUp));
      } 
      i++;
    };

    return this;
  },

  circle: `document.querySelectorAll(".circleLookDown")`,
  // [this.circleLookDown, this.circleLookUp],
}


const startGameBTN = document.querySelector(".border-menu__item");

startGameBTN.addEventListener("click", () => {
  document.querySelector(".border-menu").style = "display:none";
  setTimeout(() => GAME.createGame(), 100); 
});