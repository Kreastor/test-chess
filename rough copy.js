// let unitsArr = [this.trianglePlayer1,
//   this.trianglePlayer1,
//   this.trianglePlayer2,
//   this.squarePlayer1,
//   this.squarePlayer2,
//   this.circlePlayer1,
//   this.circlePlayer2,
// ]
// console.log(unitsArr[index]);




/* <!-- <div class="pole">
    <div class="kletka"></div>
    <div class="kletka"><span class="triangle-look-down"></span></div>
    <div class="kletka"><span class="square-look-down"></span></div>
    <div class="kletka"><span class="triangle-look-down"></span></div>
    <div class="kletka"></div>
    <div class="kletka"></div>
    <div class="kletka"><span class="circle-look-down"></span></div>
    <div class="kletka"><span class="circle-look-down"></span></div>
    <div class="kletka"><span class="circle-look-down"></span></div>
    <div class="kletka"></div>
    <div class="kletka"></div>
    <div class="kletka"></div>
    <div class="kletka"></div>
    <div class="kletka"></div>
    <div class="kletka"></div>
    <div class="kletka"></div>
    <div class="kletka"><span class="circle-look-up"></span></div>
    <div class="kletka"><span class="circle-look-up"></span></div>
    <div class="kletka"><span class="circle-look-up"></span></div>
    <div class="kletka"></div>
    <div class="kletka"></div>
    <div class="kletka"><span class="triangle-look-up"></span></div>
    <div class="kletka"><span class="square-look-up"></span></div>
    <div class="kletka"><span class="triangle-look-up"></span></div>
    <div class="kletka"></div>
  </div> --> */


  

  /* .pole {
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 10%;
  }

  .kletka {
    position: relative;
    border: 3px solid #fff;
    width: 120px;
    height: 120px;
  }
 */


     /*        if(this.field[i].classList.contains("pre-move")) {
                this.field[i].innerHTML = "";
                this.field[i].classList.remove("pre-move");
              }
            }
         
            

            if(this.field[i].classList.contains("pre-move")) {
              this.field[i].innerHTML = "";
              this.field[i].classList.remove("pre-move");
            } */




            
      // if (i === 2 || i === 4) {
      //   let triangleLookDown = document.createElement("span");
      //   triangleLookDown.className = "triangle-look-down";
      //   cage.append(triangleLookDown);
      //   cage.className = "cage triangle-look-down-unit";
      //   this.trianglePlayer2.push(triangleLookDown);
      // } else if (i === 3) {
      //   let squareLookDown = document.createElement("span");
      //   squareLookDown.className = "square-look-down";
      //   cage.append(squareLookDown);
      //   cage.className = "cage square-look-down-unit";
      //   this.squarePlayer2.push(squareLookDown);
      // } else if (i === 7 || i === 8 || i === 9) {
      //   let circleLookDown = document.createElement("span");
      //   circleLookDown.className = "circle-look-down";
      //   cage.append(circleLookDown);
      //   cage.className = "cage circle-look-down-unit";
      //   this.circlePlayer2.push(circleLookDown);
      // } else if (i === 22 || i === 24) {
      //   let triangleLookUp = document.createElement("span");
      //   triangleLookUp.className = "triangle-look-up";
      //   cage.append(triangleLookUp);
      //   cage.className = "cage triangle-look-up-unit";
      //   this.trianglePlayer1.push(triangleLookUp);
      // } else if (i === 23) {
      //   let squareLookUp = document.createElement("span");
      //   squareLookUp.className = "square-look-up";
      //   cage.append(squareLookUp);
      //   cage.className = "cage square-look-up-unit";
      //   this.squarePlayer1.push(squareLookUp);
      // } else if (i === 17 || i === 18 || i === 19) {
      //   let circleLookUp = document.createElement("span");
      //   circleLookUp.className = "circle-look-up";
      //   cage.append(circleLookUp);
      //   cage.className = "cage circle-look-up-unit";
      //   this.circlePlayer1.push(circleLookUp);
      // } 



 /*    } else if (this.field[index-6].classList.contains("circle-look-down-unit") 
    || this.field[index-6].classList.contains("triangle-look-down-unit")  
    || this.field[index-6].classList.contains("square-look-down-unit")) {
      // preMovePoint.className = "";
      this.field[index-6].classList.remove("pre-move");
      // preMovePoint.remove();
    } else {
      this.field[index-6].innerHTML = "";
      this.field[index-6].classList.remove("pre-move");
    }  */



   /*  showUnits() {
      let request = prompt(`Какие юниты показать?
      0 - Треугольники игрока 1;
      1 - Треугольники игрока 2;
      2 - Квадраты игрока 1;
      3 - Квадраты игрока 2;
      4 - Курги игрока 1;
      5 - Круги игрока 2.
      6 - Показать в консоли`,);
  
      if (+request === 0) {
        alert(this.trianglePlayer1);
      } else if (+request === 1) {
        alert(this.trianglePlayer2);
      } else if (+request === 2) {
        alert(this.squarePlayer1);
      } else if (+request === 3) {
        alert(this.squarePlayer2);
      } else if (+request === 4) {
        alert(this.circlePlayer1);
      } else if (+request === 5) {
        alert(this.circlePlayer2);
      } else if (+request === 6) {
        let unitsArr = [
          this.trianglePlayer1,
          this.trianglePlayer1,
          this.trianglePlayer2,
          this.squarePlayer1,
          this.squarePlayer2,
          this.circlePlayer1,
          this.circlePlayer2,
        ]
        let enteringConsole = prompt(`Какие юниты показать в консоли?
        0 - Треугольники игрока 1;
        1 - Треугольники игрока 2;
        2 - Квадраты игрока 1;
        3 - Квадраты игрока 2;
        4 - Курги игрока 1;
        5 - Круги игрока 2.
        6 - Всех`,);
        if (+enteringConsole === 6) {
          console.log(this.trianglePlayer1);  // Array [ span.triangle-look-up, span.triangle-look-up]
          console.log(this.trianglePlayer2); // Array [ span.triangle-look-down, span.triangle-look-down]
          console.log(this.squarePlayer1); // Array [ span.square-look-up]
          console.log(this.squarePlayer2); // Array [ span.square-look-down]
          console.log(this.circlePlayer1); // Array(3) [ span.circle-look-up, span.circle-look-up, span.circle-look-up]
          console.log(this.circlePlayer2); // Array(3) [ span.circle-look-down, span.circle-look-down, span.circle-look-down]
        } else if (typeof enteringConsole === null) {
          return
        } else
          console.log(unitsArr[enteringConsole]);
  
      } else if (typeof request === null) {
        return
      } else {
        alert("Ошибка ввода, попробуй ещё раз");
        this.showUnits();
      }
    } */
