//THE GAME//
let box = document.querySelector('.box')
let boy = document.querySelector('.one')
let boy2 = document.querySelector('.two')        // grabs the boy (red ssquare)

class Person {
    constructor(x, y) {
        this._x = x
        this._y = y
    }
    moveLeft() {
        this._x -= 10
    }
    moveRight() {
        this._x += 10
    }
    moveUp() {
        this._y -= 10
    }
    moveDown() {
        this._y += 10
    }

}
const ludzik = new Person(0, 0)         // stworozny nowa zmienna kwadrat o x i y = 0, 
const ludzik2 = new Person(380, 380)
/// klasa Interface a w niej metoda, ktora przypisuje wartośc element.x z Person

class Interface {
    static RenderElement(element, document) {
        document.style.left = element._x + "px"
        document.style.top = element._y + "px"
    }
    /*
    static controlKeysWSAD(element) {
        if (event.key === 's') {
            element.moveDown()
        }
        if (event.key === 'w') {
            element.moveUp()
        }
        if (event.key === 'a') {
            element.moveLeft()
        }
        if (event.key === 'd') {
            element.moveRight()
        }
    } */
    /*
    static controlKeysArrows(element) {
        if (event.key === 'ArrowDown') {
            element.moveDown()
        }
        if (event.key === 'ArrowUp') {
            element.moveUp()
        }
        if (event.key === 'ArrowLeft') {
            element.moveLeft()
        }
        if (event.key === 'ArrowRight') {
            element.moveRight()
        }
    } 
    */

    static checkBorders(document, element) {
        if (document.offsetTop > 380 || document.offsetTop < 0 || document.offsetLeft < 0 || document.offsetLeft > 380 ) {
            element._x = 0;
            element._y = 0;
            document.style.left = '0px'
            document.style.top = '0px'
            alert('Przejebałeś. Spróbuj jeszcze raz. pzdr')
        }
    }

    static keySupport(event, element) {
        switch(event.code) {
            case 'ArrowLeft':
                    element.moveLeft()
                break;
                case 'ArrowRight':
                        element.moveRight()
                        break;
                        case 'ArrowUp':
                                element.moveUp();
                                break;
                                case 'ArrowDown':
                                        element.moveDown()
                                        break;

        }

    }
}
function move() {
    Interface.keySupport(ludzik)
    /* Interface.controlKeysWSAD(ludzik) */
    /*Interface.controlKeysArrows(ludzik2)*/ 
    Interface.RenderElement(ludzik, boy)
    Interface.RenderElement(ludzik2, boy2)
    Interface.checkBorders(boy, ludzik)
    Interface.checkBorders(boy2, ludzik2)
    console.log(ludzik._x, ludzik._y)
}
addEventListener('keydown', move)

document.addEventListener('keydown', (event) => Interface.keySupport(event, ludzik))



/* person1 = new Person(boy.style.left,boy.style.top)


function move(){
    Interface.RenderElement(ludzik, boy)
        console.log('click!')
        boy.style.top = boy.offsetTop + 10 + "px"

} */

/* hey whats up */


