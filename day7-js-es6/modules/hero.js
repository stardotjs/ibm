import { Person } from "./person.js";

class Hero extends Person{
    firstname = "default firstname";
    lastname = "default lastname";
    #mission = "my secret mission";
    static version = 101;
    constructor(hfname, hlname, hcw){
        super(hcw)
        this.firstname = hfname;
        this.lastname = hlname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this.#mission;
    }
    set mission(nmission){
        this.#mission = nmission;
    }
   }

   export { Hero };