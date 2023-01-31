let allCheckbox = document.getElementById("form-checkbox") as HTMLInputElement | null;
let checkbox = document.getElementById("checkbox") as HTMLInputElement | null;

class identity{
    public constructor(protected name:String,protected score:number,protected email:string){};

    public getName(){
        return this.name;
    }

    public getEmail(){
        return this.email;
    }

    public getScore(){
        return this.score;
    }

    public setName(name: string){
        this.name = name;
    }

    public setEmail(email: string){
        this.email = email;
    }

    public setScore(score: number){
        this.score = score;
    }
}

class person extends identity{
    
}

function checkboxChecking(){
    if(allCheckbox){
        checkbox.checked;
    }
}
