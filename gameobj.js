const GAME = {

  createGame() {
    const field = document.createElement("div");
    field.className = "field";
    document.body.append(field);

    for (let i = 1; i < 26; i++) {
      let cage = document.createElement("div");
      cage.className = "cage empty-cage"; 
      cage.id = `cage${i}`;
      field.append(cage);
      this.field.push(cage);

      if (i === 2 || i === 4) {
        this.createUnit("triangle-look-down", "cage triangle-look-down-unit", cage);
      } else if (i === 3) {
        this.createUnit("square-look-down", "cage square-look-down-unit", cage);
      } else if (i === 7 || i === 8 || i === 9) {
        this.createUnit("circle-look-down", "cage circle-look-down-unit", cage);
      } else if (i === 22 || i === 24) {
        this.createUnit("triangle-look-up", "cage triangle-look-up-unit", cage);
      } else if (i === 23) {
        this.createUnit("square-look-up", "cage square-look-up-unit", cage);
      } else if (i === 17 || i === 18 || i === 19 ) {
        this.createUnit("circle-look-up", "cage circle-look-up-unit", cage);
      }
    };
    return this;
  },

  createUnit(unitClassName, cageClassName, cage) {
    let unit = document.createElement("span");
    unit.className = unitClassName;
    cage.append(unit);
    cage.className = cageClassName;
  },

  player1: true,
  player2: false,

  field: [],

  whoseMove: document.querySelector("#whose-move"),

  selectUnit() {
    const cage = document.querySelectorAll(".cage");
    
    for (let i = 0; i < cage.length; i++) {
      cage[i].addEventListener("click", (event) => {
        if (this.player1) {
          if (cage[i].classList.contains("circle-look-up-unit")) {
            this.field.find((item, index) => {
              if (item.classList.contains("player1-ability-table-on")) {
                cage[index].classList.remove("player1-ability-table-on");
                let abilityWindow = document.querySelector(".player1-abilities-window");
                abilityWindow.remove();
              }
            });
            this.field.find((item, index) => {
              if (index === i) {
                plug?? = null;
              } else {
                if (item.classList.contains("active")) {
                  this.clearActive(index);
                  cage[index].classList.remove("active");
                }
              }
            }); 
            if (cage[i].classList.contains("active")) {
              this.clearActive(i);
              cage[i].classList.remove("active");
            } else {
              cage[i].classList.add("active");
              if (i === 5 || i === 10 || i === 15 || i === 20) {
                this.createPremoves(i, 5);
                this.createPremoves(i, 4); 
              } else if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4) {
                cage[i].classList.remove("active");
                alert("???????????? ???????? ???? ?????????? ????????????");
              } else if (i === 9 || i === 14 || i === 19 || i === 24) {
                this.createPremoves(i, 6);
                this.createPremoves(i, 5);
              } else {
                this.createPremoves(i, 6);
                this.createPremoves(i, 5);
                this.createPremoves(i, 4);
              }
            }
          } else if (cage[i].classList.contains("triangle-look-up-unit")) {
            this.field.find((item, index) => {
              if (item.classList.contains("player1-ability-table-on")) {
                cage[index].classList.remove("player1-ability-table-on");
                let abilityWindow = document.querySelector(".player1-abilities-window");
                abilityWindow.remove();
              }
            });
            this.field.find((item, index) => {
              if (index === i) {
                plug?? = null;
              } else {
                if (item.classList.contains("active")) {
                  this.clearActive(index); 
                  cage[index].classList.remove("active");
                }
              }
            }); 
            if (cage[i].classList.contains("active")) {
              this.clearActive(i);
              cage[i].classList.remove("active");
            } else {
              cage[i].classList.add("active");
              if (i === 5 || i === 15) {
                this.createPremoves(i, 4);
                this.createPremoves(i, -6); 
              } else if (i === 1 || i === 3) {
                this.createPremoves(i, -4);
                this.createPremoves(i, -6);
              } else if (i === 9 || i === 19) {
                this.createPremoves(i, 6);
                this.createPremoves(i, -4);
              } else if (i === 21 || i === 23) {
                this.createPremoves(i, 6); 
                this.createPremoves(i, 4);  
              } else {
                this.createPremoves(i, 6);
                this.createPremoves(i, 4); 
                this.createPremoves(i, -6);  
                this.createPremoves(i, -4);
              }
            }
          } else if (cage[i].classList.contains("square-look-up-unit")) {
            this.field.find((item, index) => {
              if (item.classList.contains("player1-ability-table-on")) {
                cage[index].classList.remove("player1-ability-table-on");
                let abilityWindow = document.querySelector(".player1-abilities-window");
                abilityWindow.remove();
              }
            });
            this.field.find((item, index) => {
              if (index === i) {
                plug?? = null;
              } else {
                if (item.classList.contains("active")) {
                  this.clearActive(index);
                  cage[index].classList.remove("active");
                }
              }
            }); 
            if (cage[i].classList.contains("active")) {
              this.clearActive(i);
              cage[i].classList.remove("active");
            } else {
              cage[i].classList.add("active");
              if (i === 5 || i === 10 || i === 15) {
                this.createPremoves(i, 5);
                this.createPremoves(i, 4); 
                this.createPremoves(i, -1);
                this.createPremoves(i, -5); 
                this.createPremoves(i, -6);
              } else if (i === 0) {
                this.createPremoves(i, -1);
                this.createPremoves(i, -5); 
                this.createPremoves(i, -6);
              } else if (i === 20) {
                this.createPremoves(i, 5);
                this.createPremoves(i, 4); 
                this.createPremoves(i, -1);
              } else if (i === 1 || i === 2 || i === 3) {
                this.createPremoves(i, 1); 
                this.createPremoves(i, -1);
                this.createPremoves(i, -4);
                this.createPremoves(i, -5); 
                this.createPremoves(i, -6);
              } else if (i === 4) {
                this.createPremoves(i, 1)
                this.createPremoves(i, -4);
                this.createPremoves(i, -5); 
              } else if (i === 24) {
                this.createPremoves(i, 6);
                this.createPremoves(i, 5); 
                this.createPremoves(i, 1);
              } else if (i === 9 || i === 14 || i === 19) {
                this.createPremoves(i, 6);
                this.createPremoves(i, 5); 
                this.createPremoves(i, 1);
                this.createPremoves(i, -4);
                this.createPremoves(i, -5);
              } else if (i === 21 || i === 22 || i === 23) {
                this.createPremoves(i, 6);
                this.createPremoves(i, 5); 
                this.createPremoves(i, 4); 
                this.createPremoves(i, 1);
                this.createPremoves(i, -1);
              } else {
                this.createPremoves(i, 6);
                this.createPremoves(i, 5); 
                this.createPremoves(i, 4); 
                this.createPremoves(i, 1);
                this.createPremoves(i, -1);
                this.createPremoves(i, -4); 
                this.createPremoves(i, -5); 
                this.createPremoves(i, -6);
              }
            }
          } else {
            if (cage[i].classList.contains("pre-move")) {
              this.move(i); 
              let arr = [];

              for (let prop of cage) {
                if (prop.classList.contains("circle-look-down-unit") 
                || prop.classList.contains("triangle-look-down-unit")
                || prop.classList.contains("square-look-down-unit")) {
                  arr.push(prop);
                } 
              }
              
              if (arr.length === 0) {
                console.log("?????????? 1 ??????????????");
                this.result();
              } 

              this.player1 = false;
              this.whoseMove.style.cssText = `display: block;
                                              color: rgb(0, 0, 255);
                                              border-color: rgb(0, 0, 255);`
              this.whoseMove.innerHTML = "?????? ???????????? 2";
            } else {
              this.field.find((item, index) => {
                if (item.classList.contains("player1-ability-table-on")) {
                  cage[index].classList.remove("player1-ability-table-on");
                  let abilityWindow = document.querySelector(".player1-abilities-window");
                  abilityWindow.remove();
                }
              });
              this.field.find((item, index) => {
                if (item.classList.contains("active")) {
                  this.clearActive(index);
                  cage[index].classList.remove("active");
                } 
              });  
            }      
          }
        // Player 2 
        } else {
          if (cage[i].classList.contains("circle-look-down-unit")) {
            this.field.find((item, index) => {
              if (item.classList.contains("player2-ability-table-on")) {
                cage[index].classList.remove("player2-ability-table-on");
                let abilityWindow = document.querySelector(".player2-abilities-window");
                abilityWindow.remove();
              }
            });
            this.field.find((item, index) => {
              if (index === i) {
                plug?? = null;
              } else {
                if (item.classList.contains("active")) {
                  this.clearActive(index);
                  cage[index].classList.remove("active");
                }
              }
            }); 
            if (cage[i].classList.contains("active")) {
              this.clearActive(i);
              cage[i].classList.remove("active");
            } else {
              cage[i].classList.add("active");
              if (i === 10 || i === 15) {
                this.createPremoves(i, -5);
                this.createPremoves(i, -6); 
              } else if (i === 20 || i === 21 || i === 22 || i === 23 || i === 24) {
                cage[i].classList.remove("active");
                alert("???????????? ???????? ???? ?????????? ????????????");
              } else if (i === 14 || i === 19) {
                this.createPremoves(i, -4);
                this.createPremoves(i, -5);
              } else {
                this.createPremoves(i, -4);
                this.createPremoves(i, -5);
                this.createPremoves(i, -6);
              }
            }
          } else if (cage[i].classList.contains("triangle-look-down-unit")) {
            this.field.find((item, index) => {
              if (item.classList.contains("player2-ability-table-on")) {
                cage[index].classList.remove("player2-ability-table-on");
                let abilityWindow = document.querySelector(".player2-abilities-window");
                abilityWindow.remove();
              }
            });
            this.field.find((item, index) => {
              if (index === i) {
                plug?? = null;
              } else {
                if (item.classList.contains("active")) {
                  this.clearActive(index); 
                  cage[index].classList.remove("active");
                }
              }
            }); 
            if (cage[i].classList.contains("active")) {
              this.clearActive(i);
              cage[i].classList.remove("active");
            } else {
              cage[i].classList.add("active");
              if (i === 5 || i === 15) {
                this.createPremoves(i, 4);
                this.createPremoves(i, -6); 
              } else if (i === 1 || i === 3) {
                this.createPremoves(i, -4);
                this.createPremoves(i, -6);
              } else if (i === 9 || i === 19) {
                this.createPremoves(i, 6);
                this.createPremoves(i, -4);
              } else if (i === 21 || i === 23) {
                this.createPremoves(i, 6); 
                this.createPremoves(i, 4);  
              } else {
                this.createPremoves(i, 6);
                this.createPremoves(i, 4); 
                this.createPremoves(i, -6);  
                this.createPremoves(i, -4);
              }
            }
          } else if (cage[i].classList.contains("square-look-down-unit")) {
            this.field.find((item, index) => {
              if (item.classList.contains("player2-ability-table-on")) {
                cage[index].classList.remove("player2-ability-table-on");
                let abilityWindow = document.querySelector(".player2-abilities-window");
                abilityWindow.remove();
              }
            });
            this.field.find((item, index) => {
              if (index === i) {
                plug?? = null;
              } else {
                if (item.classList.contains("active")) {
                  this.clearActive(index);
                  cage[index].classList.remove("active");
                }
              }
            }); 
            if (cage[i].classList.contains("active")) {
              this.clearActive(i);
              cage[i].classList.remove("active");
            } else {
              cage[i].classList.add("active");
              if (i === 5 || i === 10 || i === 15) {
                this.createPremoves(i, 5);
                this.createPremoves(i, 4); 
                this.createPremoves(i, -1);
                this.createPremoves(i, -5); 
                this.createPremoves(i, -6);
              } else if (i === 0) {
                this.createPremoves(i, -1);
                this.createPremoves(i, -5); 
                this.createPremoves(i, -6);
              } else if (i === 20) {
                this.createPremoves(i, 5);
                this.createPremoves(i, 4); 
                this.createPremoves(i, -1);
              } else if (i === 1 || i === 2 || i === 3) {
                this.createPremoves(i, 1); 
                this.createPremoves(i, -1);
                this.createPremoves(i, -4);
                this.createPremoves(i, -5); 
                this.createPremoves(i, -6);
              } else if (i === 4) {
                this.createPremoves(i, 1)
                this.createPremoves(i, -4);
                this.createPremoves(i, -5); 
              } else if (i === 24) {
                this.createPremoves(i, 6);
                this.createPremoves(i, 5); 
                this.createPremoves(i, 1);
              } else if (i === 9 || i === 14 || i === 19) {
                this.createPremoves(i, 6);
                this.createPremoves(i, 5); 
                this.createPremoves(i, 1);
                this.createPremoves(i, -4);
                this.createPremoves(i, -5);
              } else if (i === 21 || i === 22 || i === 23) {
                this.createPremoves(i, 6);
                this.createPremoves(i, 5); 
                this.createPremoves(i, 4); 
                this.createPremoves(i, 1);
                this.createPremoves(i, -1);
              } else {
                this.createPremoves(i, 6);
                this.createPremoves(i, 5); 
                this.createPremoves(i, 4); 
                this.createPremoves(i, 1);
                this.createPremoves(i, -1);
                this.createPremoves(i, -4); 
                this.createPremoves(i, -5); 
                this.createPremoves(i, -6);
              }
            }
          } else {
            if (cage[i].classList.contains("pre-move")) {
              this.move(i);
              let arr = [];

              for (let prop of cage) {
                if (prop.classList.contains("circle-look-up-unit") 
                || prop.classList.contains("triangle-look-up-unit")
                || prop.classList.contains("square-look-up-unit")) {
                  arr.push(prop);
                } 
              }
              if (arr.length === 0) {
                alert("?????????? 2 ??????????????");
                console.log("?????????? 2 ??????????????");
                this.result();
              } 

              this.player1 = true;
              this.whoseMove.style.cssText = `display: block;
                                              color: rgb(255, 0, 0);
                                              border-color: rgb(255, 0, 0);`
              this.whoseMove.innerHTML = "?????? ???????????? 1";
            } else {
              this.field.find((item, index) => {
                if (item.classList.contains("player2-ability-table-on")) {
                  cage[index].classList.remove("player2-ability-table-on");
                  let abilityWindow = document.querySelector(".player2-abilities-window");
                  abilityWindow.remove();
                }
              });
              this.field.find((item, index) => {
                if (item.classList.contains("active")) {
                  this.clearActive(index);
                  cage[index].classList.remove("active");
                } 
              });  
            }      
          }
        }
      })
    }
  },

  createPremoves(i, premoveLocation) {
    let preMovePoint = document.createElement("span");
    if (this.player1) {
      if (this.field[i-premoveLocation].classList.contains("circle-look-up-unit")
      || this.field[i-premoveLocation].classList.contains("triangle-look-up-unit")
      || this.field[i-premoveLocation].classList.contains("square-look-up-unit")) {
        plug?? = 0;
      } else {
        if (this.field[i-premoveLocation].classList.contains("circle-look-down-unit") 
        || this.field[i-premoveLocation].classList.contains("triangle-look-down-unit")  
        || this.field[i-premoveLocation].classList.contains("square-look-down-unit")) {
          if (this.field[i].classList.contains("square-look-up-unit")) {
            plug?? = 0;
          } else {
            preMovePoint.className = "attack-move-point";
            this.field[i-premoveLocation].classList.add("pre-move");
            this.field[i-premoveLocation].append(preMovePoint);
          }
        } else {
          preMovePoint.className = "pre-move-point";
          this.field[i-premoveLocation].append(preMovePoint);
          this.field[i-premoveLocation].classList.add("pre-move");
        }
      }
    } else {
      if (this.field[i-premoveLocation].classList.contains("circle-look-down-unit")
      || this.field[i-premoveLocation].classList.contains("triangle-look-down-unit")
      || this.field[i-premoveLocation].classList.contains("square-look-down-unit")) {
        plug?? = 0;
      } else {
        if (this.field[i-premoveLocation].classList.contains("circle-look-up-unit") 
        || this.field[i-premoveLocation].classList.contains("triangle-look-up-unit")  
        || this.field[i-premoveLocation].classList.contains("square-look-up-unit")) {
          if (this.field[i].classList.contains("square-look-down-unit")) {
            plug?? = 0;
          } else {
            preMovePoint.className = "attack-move-point";
            this.field[i-premoveLocation].classList.add("pre-move");
            this.field[i-premoveLocation].append(preMovePoint);
          }
        } else {
          preMovePoint.className = "pre-move-point";
          this.field[i-premoveLocation].append(preMovePoint);
          this.field[i-premoveLocation].classList.add("pre-move");
        }
      }
    }      
  },

  move(i) {
    const cage = document.querySelectorAll(".cage");
    if (this.player1) {
      this.field.find((item, index) => {
        if (item.classList.contains("active") && item.classList.contains("circle-look-up-unit")) {
          this.clearActive(index);
          this.step(cage, index, i, "circle-look-up", "cage circle-look-up-unit");
        } else if (item.classList.contains("active") && item.classList.contains("triangle-look-up-unit")) {
          this.clearActive(index);
          this.step(cage, index, i, "triangle-look-up", "cage triangle-look-up-unit");
          this.field.filter((item) => {
            if (item.classList.contains("pre-move") 
            && !item.classList.contains("circle-look-down-unit")
            && !item.classList.contains("triangle-look-down-unit")
            && !item.classList.contains("square-look-down-unit")) {
              item.innerHTML="";
              item.classList.remove("pre-move");
            }
          })
        } else if (item.classList.contains("active") && item.classList.contains("square-look-up-unit")) {
          this.clearActive(index);
          this.step(cage, index, i, "square-look-up", "cage square-look-up-unit");
        }
      });  
    } else {
      this.field.find((item, index) => {
        if (item.classList.contains("active") && item.classList.contains("circle-look-down-unit")) {
          this.clearActive(index);
          this.step(cage, index, i, "circle-look-down", "cage circle-look-down-unit");
        } else if (item.classList.contains("active") && item.classList.contains("triangle-look-down-unit")) {
          this.clearActive(index);
          this.step(cage, index, i, "triangle-look-down", "cage triangle-look-down-unit");
          this.field.filter((item) => {
            if (item.classList.contains("pre-move") 
            && !item.classList.contains("circle-look-down-unit")
            && !item.classList.contains("triangle-look-down-unit")
            && !item.classList.contains("square-look-down-unit")) {
              item.innerHTML="";
              item.classList.remove("pre-move");
            }
          })
        } else if (item.classList.contains("active") && item.classList.contains("square-look-down-unit")) {
          this.clearActive(index);
          this.step(cage, index, i, "square-look-down", "cage square-look-down-unit");
        }
      });  
    }
  },

  step(cage, indexOfUnite, indexOfPremove, unitClassName, cageClassName) {
    cage[indexOfUnite].classList.remove("active");
    cage[indexOfUnite].innerHTML = "";
    cage[indexOfUnite].className = "cage empty-cage"; 
    cage[indexOfPremove].innerHTML = "";

    let newSpan = document.createElement("span");
    newSpan.className = unitClassName;
    cage[indexOfPremove].append(newSpan);
    cage[indexOfPremove].className = cageClassName;
  },
  
  clearActive(index) { 
    if (this.player1) {
      // circleLookUp  
      if (this.field[index].classList.contains("circle-look-up-unit")) {
        if (index === 5 || index === 10 || index === 15 || index === 20) {
          this.clear(index, 5);
          this.clear(index, 4);
        } else {
          this.clear(index, 6);
          this.clear(index, 5);
          this.clear(index, 4);
        }
        // triangleLookUp
      } else if (this.field[index].classList.contains("triangle-look-up-unit")) {
          if (index === 5 || index === 15) {
            this.clear(index, 4);
            this.clear(index, -6);
          } else if (index === 21 || index === 23) {
            this.clear(index, 6);
            this.clear(index, 4);
          } else if (index === 9 || index === 19) {
            this.clear(index, 6);
            this.clear(index, -4);
          } else if (index === 1 || index === 3) {
            this.clear(index, -6); 
            this.clear(index, -4);
          } else {
            this.clear(index, 6);
            this.clear(index, 4);
            this.clear(index, -4);
            this.clear(index, -6);
          } 
        // squareLookUp 
      } else if (this.field[index].classList.contains("square-look-up-unit")) {
        if (index === 5 || index === 5 || index === 15) {
          this.clear(index, 5);
          this.clear(index, 4);
          this.clear(index, -1);
          this.clear(index, -5);
          this.clear(index, -6);
        } else if (index === 0) {
          this.clear(index, -1);
          this.clear(index, -5);
          this.clear(index, -6);
        } else if (index === 20) {
          this.clear(index, 5);
          this.clear(index, 4);
          this.clear(index, -1);
        } else if (index === 1 || index === 2 || index === 3) {
          this.clear(index, 1);
          this.clear(index, -1);
          this.clear(index, -4);
          this.clear(index, -5);
          this.clear(index, -6);
        } else if (index === 4) {
          this.clear(index, 1);
          this.clear(index, -4);
          this.clear(index, -5);
        } else if (index === 24) {
          this.clear(index, 6);
          this.clear(index, 5);
          this.clear(index, 1);
        } else if (index === 9 || index === 14 || index === 19) {
          this.clear(index, 6);
          this.clear(index, 5);
          this.clear(index, 1);
          this.clear(index, -4);
          this.clear(index, -5);
        } else if (index === 21 || index === 22 || index === 23) {
          this.clear(index, 6);
          this.clear(index, 5);
          this.clear(index, 4);
          this.clear(index, 1);
          this.clear(index, -1);
        } else {
          this.clear(index, 6);
          this.clear(index, 5);
          this.clear(index, 4);
          this.clear(index, 1);
          this.clear(index, -1);
          this.clear(index, -4);
          this.clear(index, -5);
          this.clear(index, -6);
        }
      }
    } else {
      // circleLookDown 
      if (this.field[index].classList.contains("circle-look-down-unit")) {
        if (index === 10 || index === 15) {
          this.clear(index, -5);
          this.clear(index, -6);
        } else {
          this.clear(index, -4);
          this.clear(index, -5);
          this.clear(index, -6);
        }
      // triangleLookDown
      } else if (this.field[index].classList.contains("triangle-look-down-unit")) {
        if (index === 5 || index === 15) {
          this.clear(index, 4);
          this.clear(index, -6);
        } else if (index === 21 || index === 23) {
          this.clear(index, 6);
          this.clear(index, 4);
        } else if (index === 9 || index === 19) {
          this.clear(index, 6);
          this.clear(index, -4);
        } else if (index === 1 || index === 3) {
          this.clear(index, -6); 
          this.clear(index, -4);
        } else {
          this.clear(index, 6);
          this.clear(index, 4);
          this.clear(index, -4);
          this.clear(index, -6);
        } 
      // squareLookDown
      } else if (this.field[index].classList.contains("square-look-down-unit")) {
        if (index === 5 || index === 5 || index === 15) {
          this.clear(index, 5);
          this.clear(index, 4);
          this.clear(index, -1);
          this.clear(index, -5);
          this.clear(index, -6);
        } else if (index === 0) {
          this.clear(index, -1);
          this.clear(index, -5);
          this.clear(index, -6);
        } else if (index === 20) {
          this.clear(index, 5);
          this.clear(index, 4);
          this.clear(index, -1);
        } else if (index === 1 || index === 2 || index === 3) {
          this.clear(index, 1);
          this.clear(index, -1);
          this.clear(index, -4);
          this.clear(index, -5);
          this.clear(index, -6);
        } else if (index === 4) {
          this.clear(index, 1);
          this.clear(index, -4);
          this.clear(index, -5);
        } else if (index === 24) {
          this.clear(index, 6);
          this.clear(index, 5);
          this.clear(index, 1);
        } else if (index === 9 || index === 14 || index === 19) {
          this.clear(index, 6);
          this.clear(index, 5);
          this.clear(index, 1);
          this.clear(index, -4);
          this.clear(index, -5);
        } else if (index === 21 || index === 22 || index === 23) {
          this.clear(index, 6);
          this.clear(index, 5);
          this.clear(index, 4);
          this.clear(index, 1);
          this.clear(index, -1);
        } else {
          this.clear(index, 6);
          this.clear(index, 5);
          this.clear(index, 4);
          this.clear(index, 1);
          this.clear(index, -1);
          this.clear(index, -4);
          this.clear(index, -5);
          this.clear(index, -6);
        }
      }
    }
  },

  clear(index, clearLocation) {
    if (this.player1) {
      if (this.field[index-clearLocation].classList.contains("circle-look-up-unit")
      || this.field[index-clearLocation].classList.contains("triangle-look-up-unit")
      || this.field[index-clearLocation].classList.contains("square-look-up-unit")) {
        plug?? = 0;
      } else if (this.field[index-clearLocation].classList.contains("circle-look-down-unit")) {
        this.clearEnemy(index, clearLocation, "circle-look-down", "cage circle-look-down-unit");
      } else if (this.field[index-clearLocation].classList.contains("square-look-down-unit")) {
        this.clearEnemy(index, clearLocation, "square-look-down", "cage square-look-down-unit");
      } else if (this.field[index-clearLocation].classList.contains("triangle-look-down-unit")) {
        this.clearEnemy(index, clearLocation, "triangle-look-down", "cage triangle-look-down-unit");
      } else {
        this.field[index-clearLocation].innerHTML = "";
        this.field[index-clearLocation].classList.remove("pre-move");
      } 
    } else {
      if (this.field[index-clearLocation].classList.contains("circle-look-down-unit")
      || this.field[index-clearLocation].classList.contains("triangle-look-down-unit")
      || this.field[index-clearLocation].classList.contains("square-look-down-unit")) {
        plug?? = 0;
      } else if (this.field[index-clearLocation].classList.contains("circle-look-up-unit")) {
        this.clearEnemy(index, clearLocation, "circle-look-up", "cage circle-look-up-unit");
      } else if (this.field[index-clearLocation].classList.contains("square-look-up-unit")) {
        this.clearEnemy(index, clearLocation, "square-look-up", "cage square-look-up-unit");
      } else if (this.field[index-clearLocation].classList.contains("triangle-look-up-unit")) {
        this.clearEnemy(index, clearLocation, "triangle-look-up", "cage triangle-look-up-unit");
      } else {
        this.field[index-clearLocation].innerHTML = "";
        this.field[index-clearLocation].classList.remove("pre-move");
      } 
    }
  },

  clearEnemy(index, enemyLocation, unitClassName, cageClassName) {
    this.field[index-enemyLocation].innerHTML = "";
    this.field[index-enemyLocation].classList.remove("pre-move");

    let unite = document.createElement("span");
    unite.className = unitClassName;
    this.field[index-enemyLocation].append(unite);
    this.field[index-enemyLocation].className = cageClassName;
  },

  callRoyalAbilities() {
    const cage = document.querySelectorAll(".cage");

      for (let i = 0; i < cage.length; i++) {
        cage[i].addEventListener("contextmenu", (event) => {
          event.preventDefault();
          if (this.player1) {
            this.field.find((item, index) => {
              if (item.classList.contains("active")) {
                this.clearActive(index);
                cage[index].classList.remove("active");
              }
            });
            if (cage[i].classList.contains("active")) {
              this.clearActive(i);
              cage[i].classList.remove("active");
            }
            if (cage[i].classList.contains("player1-ability-table-on")) {
              cage[i].classList.remove("player1-ability-table-on");
              cage[i].classList.remove("active");
              let abilityWindow = document.querySelector(".player1-abilities-window");
              abilityWindow.remove();
            } else if (cage[i].classList.contains("square-look-up-unit")) {
              this.field.filter((item, index) => {
                if (item.classList.contains("pre-move") 
                && !item.classList.contains("circle-look-down-unit")
                && !item.classList.contains("triangle-look-down-unit")
                && !item.classList.contains("square-look-down-unit")) {
                  item.innerHTML = "";
                  item.classList.remove("pre-move");
                }
              });
    
            let abilitiesWindow = document.createElement("div");
            abilitiesWindow.className = "player1-abilities-window";
          
            let headerAbilitiesWindow = document.createElement("h1");
            headerAbilitiesWindow.className = "header-player1-abilities-window";
            headerAbilitiesWindow.innerHTML = "???????????????? ???????????? ??????????";
            abilitiesWindow.prepend(headerAbilitiesWindow);
    
            let abilityBTN1 = document.createElement("button");
            abilityBTN1.className = "player1-ability-BTN1";
            abilityBTN1.innerHTML = "?????? 1";
            abilitiesWindow.append(abilityBTN1);           
            cage[i].classList.add("player1-ability-table-on");
            cage[i].classList.add("active");
    
            let abilityBTN2 = document.createElement("button");
            abilityBTN2.className = "player1-ability-BTN2";
            abilityBTN2.innerHTML = "?????? 2";
            abilitiesWindow.append(abilityBTN2);           
            cage[i].classList.add("player1-ability-table-on");
            cage[i].classList.add("active");
    
            document.body.append(abilitiesWindow);
            this.targetingAbilities(i);
            } else plug?? = 0;
          } else {
            this.field.find((item, index) => {
              if (item.classList.contains("active")) {
                this.clearActive(index);
                cage[index].classList.remove("active");
              }
            });
            if (cage[i].classList.contains("active")) {
              this.clearActive(i);
              cage[i].classList.remove("active");
            }
            if (cage[i].classList.contains("player2-ability-table-on")) {
              cage[i].classList.remove("player2-ability-table-on");
              cage[i].classList.remove("active");
              let abilityWindow = document.querySelector(".player2-abilities-window");
              abilityWindow.remove();
            } else if (cage[i].classList.contains("square-look-down-unit")) {
              this.field.filter((item, index) => {
                if (item.classList.contains("pre-move") 
                && !item.classList.contains("circle-look-down-unit")
                && !item.classList.contains("triangle-look-down-unit")
                && !item.classList.contains("square-look-down-unit")) {
                  item.innerHTML = "";
                  item.classList.remove("pre-move");
                }
              });
    
            let abilitiesWindow = document.createElement("div");
            abilitiesWindow.className = "player2-abilities-window";
          
            let headerAbilitiesWindow = document.createElement("h1");
            headerAbilitiesWindow.className = "header-player2-abilities-window";
            headerAbilitiesWindow.innerHTML = "???????????????? ???????????? ??????????";
            abilitiesWindow.prepend(headerAbilitiesWindow);
    
            let abilityBTN1 = document.createElement("button");
            abilityBTN1.className = "player2-ability-BTN1";
            abilityBTN1.innerHTML = "?????? 1";
    
            abilitiesWindow.append(abilityBTN1);           
            cage[i].classList.add("player2-ability-table-on");
            cage[i].classList.add("active");
    
            let abilityBTN2 = document.createElement("button");
            abilityBTN2.className = "player2-ability-BTN2";
            abilityBTN2.innerHTML = "?????? 2";
    
            abilitiesWindow.append(abilityBTN2);           
            cage[i].classList.add("player2-ability-table-on");
            cage[i].classList.add("active");
    
            document.body.append(abilitiesWindow);
            this.targetingAbilities(i);
            } else plug?? = 0;
          }
      });
    };
  },

  targetingAbilities(index) {

    const cage = document.querySelectorAll(".cage");
    const player1BTN1 = document.querySelector(".player1-ability-BTN1");
    const player1BTN2 = document.querySelector(".player1-ability-BTN2");
    const player2BTN1 = document.querySelector(".player2-ability-BTN1");
    const player2BTN2 = document.querySelector(".player2-ability-BTN2");

    if (this.player1) {
      player1BTN1.addEventListener("mouseover", (event) => {
        event.preventDefault();
        if (index === 0
          || index === 1
          || index === 2
          || index === 3
          || index === 4) {
          alert("?????????? ?????????? ???? ????????????????");
        } else if (index === 5
          || index === 10
          || index === 15
          || index === 20) {
            alert("?????????? ?????????? 1 ????????????????????");
          } else {
          let laserLine1 = document.createElement("span");
          laserLine1.className = "player1-laser1";
          cage[index-6].append(laserLine1);
          cage[index-6].classList.add("laser-start");
          this.usingAbilities();
        }
      });

      player1BTN1.addEventListener("mouseout", (event) => {
        event.preventDefault();
        this.field.find((item) => {
          if (item.classList.contains("laser-start")) {
            for (let i = 0; i < item.childNodes.length; i++) {
              if (item.childNodes[i].classList.contains("player1-laser1")) {
                item.childNodes[i].remove();
                item.classList.remove("laser-start");
              }
            }
          }
        })
      });

      player1BTN2.addEventListener("mouseover", (event) => {
        event.preventDefault();
        if (index === 0
          || index === 1
          || index === 2
          || index === 3
          || index === 4) {
          alert("?????????? ?????????? ???? ????????????????");
        } else if (index === 9
          || index === 14
          || index === 19
          || index === 24) {
            alert("?????????? ?????????? 2 ????????????????????");
          } else {
        let laserLine2 = document.createElement("span");
        laserLine2.className = "player1-laser2";
        cage[index-4].append(laserLine2);
        cage[index-4].classList.add("laser-start");
        this.usingAbilities();
        }
      });

      player1BTN2.addEventListener("mouseout", (event) => {
        event.preventDefault();
        this.field.find((item) => {
          if (item.classList.contains("laser-start")) {
            for (let i = 0; i < item.childNodes.length; i++) {
              if (item.childNodes[i].classList.contains("player1-laser2")) {
                item.childNodes[i].remove();
                item.classList.remove("laser-start");
              }
            }
          }
        })
      })

    } else {
      player2BTN1.addEventListener("mouseover", (event) => {
        event.preventDefault();
        if (index === 20
          || index === 21
          || index === 22
          || index === 23
          || index === 24) {
          alert("?????????? ?????????? ???? ????????????????");
        } else if (index === 0
          || index === 5
          || index === 10
          || index === 25) {
            alert("?????????? ?????????? 1 ????????????????????");
          } else {
          let laserLine1 = document.createElement("span");
          laserLine1.className = "player2-laser1";
          cage[index+4].append(laserLine1);
          cage[index+4].classList.add("laser-start");
          this.usingAbilities();
        }
      });
      
      player2BTN1.addEventListener("mouseout", (event) => {
        event.preventDefault();
        this.field.find((item) => {
          if (item.classList.contains("laser-start")) {
            for (let i = 0; i < item.childNodes.length; i++) {
              if (item.childNodes[i].classList.contains("player2-laser1")) {
                item.childNodes[i].remove();
                item.classList.remove("laser-start");
              }
            }
          }
        })
      });
  
      player2BTN2.addEventListener("mouseover", (event) => {
        event.preventDefault();
        if (index === 20
          || index === 21
          || index === 22
          || index === 23
          || index === 24) {
          alert("?????????? ?????????? ???? ????????????????");
        } else if (index === 4
          || index === 9
          || index === 14
          || index === 19) {
            alert("?????????? ?????????? 2 ????????????????????");
          } else {
        let laserLine2 = document.createElement("span");
        laserLine2.className = "player2-laser2";
        cage[index+6].append(laserLine2);
        cage[index+6].classList.add("laser-start");
        this.usingAbilities();
        }
      });
  
      player2BTN2.addEventListener("mouseout", (event) => {
        event.preventDefault();
        this.field.find((item) => {
          if (item.classList.contains("laser-start")) {
            for (let i = 0; i < item.childNodes.length; i++) {
              if (item.childNodes[i].classList.contains("player2-laser2")) {
                item.childNodes[i].remove();
                item.classList.remove("laser-start");
              }
            }
          }
        })
      })
    }
  },

  usingAbilities() {
    const cage = document.querySelectorAll(".cage");
    const player1AbilityBTN1 = document.querySelector(".player1-ability-BTN1");
    const player1AbilityBTN2 = document.querySelector(".player1-ability-BTN2");  
    const player2AbilityBTN1 = document.querySelector(".player2-ability-BTN1");
    const player2AbilityBTN2 = document.querySelector(".player2-ability-BTN2"); 

    if (this.player1) {
      player1AbilityBTN1.addEventListener("click", (event) => {
        this.field.find((item, index) => {
          if (item.classList.contains("laser-start")) {
            if (index === 0
            || index === 1
            || index === 2
            || index === 3
            || index === 4) {
              item.innerHTML = "";
              item.className = "cage empty-cage";
            } else {
              setTimeout(() => {
                item.innerHTML = "";
                item.className = "cage empty-cage";
              }, 300);
          
              setTimeout(() => {
                cage[index-4].innerHTML = "";
                cage[index-4].className = "cage empty-cage";
              }, 500);

              setTimeout(() => {
                let arr = [];

                for (let prop of cage) {
                  if (prop.classList.contains("circle-look-down-unit") 
                  || prop.classList.contains("triangle-look-down-unit")
                  || prop.classList.contains("square-look-down-unit")) {
                    arr.push(prop);
                  } 
                }
                
                if (arr.length === 0) {
                  alert("?????????? 1 ??????????????");
                  console.log("?????????? 1 ??????????????");
                  this.result();
                } 
              }, 600)

              this.player1 = false;
              this.field.find((item, index) => {
                if (cage[index].classList.contains("player1-ability-table-on")) {
                  cage[index].classList.remove("player1-ability-table-on");
                  cage[index].classList.remove("active");
                  let abilityWindow = document.querySelector(".player1-abilities-window");
                  abilityWindow.remove();
                }
              });
              this.whoseMove.style.cssText = `display: block;
                                              color: rgb(0, 0, 255);
                                              border-color: rgb(0, 0, 255);`
              this.whoseMove.innerHTML = "?????? ???????????? 2";
            }
          } 
        })

      })

      player1AbilityBTN2.addEventListener("click", (event) => {
        this.field.find((item, index) => {
          if (item.classList.contains("laser-start")) {
            if (index === 0
            || index === 1
            || index === 2
            || index === 3
            || index === 4) {
              item.innerHTML = "";
              item.className = "cage empty-cage";
            } else {
              setTimeout(() => {
                item.innerHTML = "";
                item.className = "cage empty-cage";
              }, 300);
        
              setTimeout(() => {
                cage[index-6].innerHTML = "";
                cage[index-6].className = "cage empty-cage";
              }, 500);

              setTimeout(() => {
                let arr = [];

                for (let prop of cage) {
                  if (prop.classList.contains("circle-look-down-unit") 
                  || prop.classList.contains("triangle-look-down-unit")
                  || prop.classList.contains("square-look-down-unit")) {
                    arr.push(prop);
                  } 
                }
                
                if (arr.length === 0) {
                  alert("?????????? 1 ??????????????");
                  console.log("?????????? 1 ??????????????");
                  this.result();
                } 
              }, 600)

              this.player1 = false;
              this.field.find((item, index) => {
                if (cage[index].classList.contains("player1-ability-table-on")) {
                  cage[index].classList.remove("player1-ability-table-on");
                  cage[index].classList.remove("active");
                  let abilityWindow = document.querySelector(".player1-abilities-window");
                  abilityWindow.remove();
                }
              });
              this.whoseMove.style.cssText = `display: block;
                                              color: rgb(0, 0, 255);
                                              border-color: rgb(0, 0, 255);`
              this.whoseMove.innerHTML = "?????? ???????????? 2";
            }
          } 
        })
      })

    } else {
      player2AbilityBTN1.addEventListener("click", (event) => {
        this.field.find((item, index) => {
          if (item.classList.contains("laser-start")) {
            if (index === 20
            || index === 21
            || index === 22
            || index === 23
            || index === 24) {
              item.innerHTML = "";
              item.className = "cage empty-cage";
            } else {
              setTimeout(() => {
                item.innerHTML = "";
                item.className = "cage empty-cage";
              }, 300);
        
              setTimeout(() => {
                cage[index+6].innerHTML = "";
                cage[index+6].className = "cage empty-cage";
              }, 500);

              setTimeout(() => {
                let arr = [];

                for (let prop of cage) {
                  if (prop.classList.contains("circle-look-up-unit") 
                  || prop.classList.contains("triangle-look-up-unit")
                  || prop.classList.contains("square-look-up-unit")) {
                    arr.push(prop);
                  } 
                }
                
                if (arr.length === 0) {
                  alert("?????????? 2 ??????????????");
                  console.log("?????????? 2 ??????????????");
                  this.result();
                } 
              }, 600)

              this.player1 = true;
              this.field.find((item, index) => {
                if (cage[index].classList.contains("player2-ability-table-on")) {
                  cage[index].classList.remove("player2-ability-table-on");
                  cage[index].classList.remove("active");
                  let abilityWindow = document.querySelector(".player2-abilities-window");
                  abilityWindow.remove();
                }
              });
              this.whoseMove.style.cssText = `display: block;
                                              color: rgb(255, 0, 0);
                                              border-color: rgb(255, 0, 0);`
              this.whoseMove.innerHTML = "?????? ???????????? 1";
            }
          } 
        })
      })
  
      player2AbilityBTN2.addEventListener("click", (event) => {
        this.field.find((item, index) => {
          if (item.classList.contains("laser-start")) {
            if (index === 20
            || index === 21
            || index === 22
            || index === 23
            || index === 24) {
              item.innerHTML = "";
              item.className = "cage empty-cage";
            } else {
              setTimeout(() => {
                item.innerHTML = "";
                item.className = "cage empty-cage";
              }, 300);
        
              setTimeout(() => {
                cage[index+4].innerHTML = "";
                cage[index+4].className = "cage empty-cage";
              }, 500);
              
              setTimeout(() => {
                let arr = [];

                for (let prop of cage) {
                  if (prop.classList.contains("circle-look-up-unit") 
                  || prop.classList.contains("triangle-look-up-unit")
                  || prop.classList.contains("square-look-up-unit")) {
                    arr.push(prop);
                  } 
                }
                
                if (arr.length === 0) {
                  alert("?????????? 2 ??????????????");
                  console.log("?????????? 2 ??????????????");
                  this.result();
                } 
              }, 600)

              this.player1 = true;
              this.field.find((item, index) => {
                if (cage[index].classList.contains("player2-ability-table-on")) {
                  cage[index].classList.remove("player2-ability-table-on");
                  cage[index].classList.remove("active");
                  let abilityWindow = document.querySelector(".player2-abilities-window");
                  abilityWindow.remove();
                }
              });
              this.whoseMove.style.cssText = `display: block;
                                              color: rgb(255, 0, 0);
                                              border-color: rgb(255, 0, 0);`
              this.whoseMove.innerHTML = "?????? ???????????? 1";
            }
          } 
        })
      })
    }
  },

  result() {
    document.body.innerHTML = "";
  
    let newGameContainer = document.createElement("div");
    newGameContainer.className = "new-game-container";
    document.body.prepend(newGameContainer);

    let newGameContainerHeader = document.createElement("h1");
    newGameContainerHeader.className = "new-game-container-header";
    newGameContainerHeader.innerHTML = "?????????????? ?????? ???????"
    newGameContainer.append(newGameContainerHeader);

    let newGameContainer__buttonsBox = document.createElement("div");
    newGameContainer__buttonsBox.className = "new-game-container__button-box";
    newGameContainer.append(newGameContainer__buttonsBox);

    let newGameContainerBTNYes = document.createElement("button");
    newGameContainerBTNYes.className = "new-game-container-btn";
    newGameContainerBTNYes.id = "yes";
    newGameContainerBTNYes.innerHTML = "????"
    newGameContainer__buttonsBox.append(newGameContainerBTNYes);
    
    let newGameContainerBTNNo = document.createElement("button");
    newGameContainerBTNNo.className = "new-game-container-btn";
    newGameContainerBTNNo.id = "no";
    newGameContainerBTNNo.innerHTML = "??????"
    newGameContainer__buttonsBox.append(newGameContainerBTNNo);

    this.playAgain();
    return this;
  },

  playAgain() {

    // let newGameContainer = document.querySelector(".new-game-container");
    let yesBtn = document.getElementById("yes");

    yesBtn.addEventListener("click", (event) => {

      document.body.innerHTML = "";
      // // newGameContainer.style = "display:none";
      // let whoseMove = document.createElement("h1");
      // whoseMove.id = "whose-move";
      // document.body.prepend(whoseMove);
      // whoseMove.style.cssText =  `display: block;
      //                             color: rgb(255, 0, 0);
      //                             border-color: rgb(255, 0, 0);`
      // whoseMove.innerHTML = "?????? ???????????? 1";

      
      // setTimeout(() => this.createGame(), 100); 
      // setTimeout(() => this.selectUnit(), 500);
      // setTimeout(() => this.callRoyalAbilities(), 600);
    })

    let noBtn = document.getElementById("no");

    noBtn.addEventListener("click", (event) => {
      document.body.innerHTML = "";
    })

  }


}

const startGameBTN = document.querySelector(".border-menu__item");


startGameBTN.addEventListener("click", () => {
  let whoseMove = document.querySelector("#whose-move");
  document.querySelector(".border-menu").style = "display:none";
  whoseMove.style.cssText =  `display: block;
                            color: rgb(255, 0, 0);
                            border-color: rgb(255, 0, 0);`
  whoseMove.innerHTML = "?????? ???????????? 1";
  setTimeout(() => GAME.createGame(), 100); 
  setTimeout(() => GAME.selectUnit(), 500);
  setTimeout(() => GAME.callRoyalAbilities(), 600);
});

