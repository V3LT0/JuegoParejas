class Box {
    #col;
    #row;
    #color;
    #free;
    #open;
    #element;

    constructor(row, col, color, free=true, open=false) {
        this.#col = col;
        this.#row = row;
        this.#color = color;
        this.#free = free;
        this.#open = open;
        console.log('Se ha creado un objeto de tipo Box');
    }

    get row() {
        return this.#row;
    }

    get col() {
        return this.#col;
    }

    get open(){
        return this.#open;
    }

    get free(){
        return this.#free;
    }

    get color(){
        return this.#color;
    }

    set element(element) {
        this.#element = element;
    }

    set free(newValue) {
        this.#free = newValue;
    }

    addEventClick() {
        if(this.#element) {
            this.#element.addEventListener('click', (e) => {
                if(!this.#open){
                    this.#element.style.backgroundColor = this.#color;
                    this.#open = true;
                    console.log("Has hecho click en una tarjeta")
                }
                return false;
            });
        }
    }

    resetColor() {
        setTimeout(()=>{
            this.#element.style.backgroundColor = "black";
            this.#open = false;
        },400);

    }
}

export default Box;