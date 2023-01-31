class person{
    checked: boolean;
    name: string ; 
    email: string ;
    score: number;
    constructor(name?:string,score?:number,email?:string){
        this.name = name;
        this.email = email;
        this.score = score;
        this.checked = false;
    }
}

let myTable = (document.getElementById("service-table") as HTMLTableElement);
let checkall = (document.getElementById('checkBoxAll') as HTMLInputElement);
let checkbox = document.getElementsByClassName('checklist') as HTMLCollection;


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
        cBox.setAttribute('class','checklist')
        cell1.appendChild(cBox);

        cell2.innerHTML = IdentityArray[i].name;
        cell3.innerHTML = String(IdentityArray[i].score);
        cell4.innerHTML = IdentityArray[i].email;
     }
    let row = myTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.style.height=cell2.style.height = '122px'
     /*
     for (let i = 0; i < checkedbox.length; i++) {
        checkedbox[i].addEventListener("click", function() {
          IdentityArray[i].checked = true;
        });
    }
    */
}

function averageCount(){
    let total=0,count=0;
    for(let i =0;i<IdentityArray.length;i++){
        if(IdentityArray[i].score!=null && IdentityArray[i].checked===true)
        {
            total+=IdentityArray[i].score;
            count +=1;
        }
    }
    let average = total/count;
    (document.getElementById('average') as HTMLInputElement).value = String(average);
}

function maxCount(){
    let max = 0;
    for(let i =0;i<IdentityArray.length;i++){
        if(max<IdentityArray[i].score && IdentityArray[i].checked===true)
        {
            max = IdentityArray[i].score;
        }
    }
    (document.getElementById('max') as HTMLInputElement).value = String(max);
}

function checkcount(){
    for(let i=0;i<checkbox.length;i++)
    {
        if((checkbox[i] as HTMLInputElement).checked==true){
            IdentityArray[i].checked = true;
        }
        else{
            checkall.checked = false;
        }
    }
}


function checking(){
    
    if(checkall.checked){
        for (var tbls=document.getElementsByTagName("table"), i=tbls.length; i--; )
        for (var bxs=tbls[i].getElementsByTagName("input"), j=bxs.length; j--; )
         if (bxs[j].type=="checkbox")
            bxs[j].checked = true;
    }
}



