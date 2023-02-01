class person{
    checked: boolean;
    name: string ; 
    email: string ;
    score: number;
    constructor(name:string,score:number,email:string){
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

let person3 = new person('Subhas Raju',24,'subhas@technovert.com');
let person4 = new person('Shekhar Chandra',35,'shekhar@technovert.com');
let person5 = new person('Ajit Maheshwari',30,'ajit@technovert.com');
let person6 = new person('Mukesh Roy',34,'mukesh@technovert.com');
let person7 = new person('Rehan Sharma',32,'rehan@technovert.com');
let person8 = new person('Raj Thakur',29,'raj@technovert.com');
//person3,person4,person5,person6,person7,person8

let IdentityArray = [person1,person2,person3,person4,person5,person6,person7,person8];

function addRow(){
    
     for(let i =0;i<IdentityArray.length;i++){
        let row = myTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        
        //checkbox creation
        var Box = document.createElement('label');
        Box.setAttribute('class','checkbox_Container');
        cell1.appendChild(Box);
        
        var cBoxHide = document.createElement('input');
        cBoxHide.setAttribute('type', 'checkbox');
        cBoxHide.setAttribute('class','checklist')
        
        var cBoxShow = document.createElement('span');
        cBoxShow.setAttribute('class','showedChecklist')

        Box.appendChild(cBoxHide);
        Box.appendChild(cBoxShow);

        cell2.innerHTML = '<span class="content">' +IdentityArray[i].name + '</span>';
        cell3.innerHTML = '<span class="content">'+String(IdentityArray[i].score) + '</span>';
        cell4.innerHTML = '<span class="content">'+IdentityArray[i].email + '</span>';
     }
    let row = myTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.style.height=cell2.style.height=cell3.style.height=cell4.style.height=cell5.style.height ='100px'
     /*
     for (let i = 0; i < checkedbox.length; i++) {
        checkedbox[i].addEventListener("click", function() {
          IdentityArray[i].checked = true;
        });
    }
    */
}

function averageCount(){
    /*
    let total=0,count=0;
    for(let i =0;i<IdentityArray.length;i++){
        if(IdentityArray[i].score && IdentityArray[i].checked)
        {
            total+=IdentityArray[i].score;
            count +=1;
        }
    }
    let average: number = (total/count) || 0;
    */
    let checkedArray = IdentityArray.filter(person=> person.checked).map(person=>person.score);
    let average: number = checkedArray.reduce(function(sum,value){return sum+value;},0)/checkedArray.length || 0;
    (document.getElementById('average') as HTMLInputElement).value = String(average.toFixed(2));
}

function maxCount(){
    /*
    let max = 0;
    for(let i =0;i<IdentityArray.length;i++){
        if(max<IdentityArray[i].score && IdentityArray[i].checked)
        {
            max = IdentityArray[i].score;
        }
    }
    */
    let checkedArray = IdentityArray.filter(person=> person.checked).map(person=>person.score);
    let max = Math.max(...checkedArray) || 0;    //spread syntax or spread operator
    (document.getElementById('max') as HTMLInputElement).value = String(max);
}

/*function for each checkbox*/
function rowCheckboxFunction(){
    let number = 0;
    for(let i=0;i<checkbox.length;i++)
    {
        if((checkbox[i] as HTMLInputElement).checked){
            IdentityArray[i].checked = true;
            number+=1;
        }
        else{
            checkall.checked = false;
            IdentityArray[i].checked = false;
        }
    }
    if(number==IdentityArray.length){
        checkall.checked=true;
    }
}

/* function for select all*/
function SelectAll(){
    
    if(checkall.checked){
        for(let i=0;i<checkbox.length;i++)
        {
            (checkbox[i] as HTMLInputElement).checked = true;
        }
    }
    else{
        for(let i=0;i<checkbox.length;i++)
        {
            (checkbox[i] as HTMLInputElement).checked = false;
        }
    }
}



function searching(){
    let inputs = document.getElementById('search-box') as HTMLInputElement;
    let value:string = inputs.value;
    const names = document.querySelectorAll('.content') as NodeListOf<HTMLSpanElement>;
    let regex : RegExp = new RegExp(value,"gi");
    names.forEach((ele: HTMLSpanElement)=>{
        ele.innerHTML = (ele.innerText).replace(regex,"<mark>$&</mark>")
    })
}


