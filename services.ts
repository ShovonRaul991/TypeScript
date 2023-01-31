class person{
    name: string ; 
    email: string ;
    score: number;
    constructor(name?:string,score?:number,email?:string){
        this.name = name;
        this.email = email;
        this.score = score;
    }
}

let person1 = new person('Vijay Prakash',34,'vijay@technovert.com');
let person2 = new person('Sashi Pagadala',21,'sashi@technovert.com');
let person3 = new person(null,null,null);
let person4 = new person(null,null,null);
let person5 = new person(null,null,null);
let person6 = new person(null,null,null);
let person7 = new person(null,null,null);
let person8 = new person(null,null,null);

let IdentityArray = [person1,person2,person3,person4,person5,person6,person7,person8];

function addRow(){
    let myTable = document.getElementById("service-table") as HTMLTableElement;
     for(let i =0;i<IdentityArray.length;i++){
        let row = myTable.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        
        //checkbox creation
        var cBox = document.createElement('input');
        cBox.setAttribute('type', 'checkbox');
        cell1.appendChild(cBox);

        cell2.innerHTML = IdentityArray[i].name;
        cell3.innerHTML = String(IdentityArray[i].score);
        cell4.innerHTML = IdentityArray[i].email;
     }

}