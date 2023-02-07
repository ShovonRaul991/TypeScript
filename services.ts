class Person{
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

let formTable = (document.getElementById("ServiceTable") as HTMLTableElement);
let checkAll = (document.getElementById('CheckBoxAll') as HTMLInputElement);
let checkBox = document.getElementsByClassName('checklist') as HTMLCollection;



let person1 = new Person('Vijay Prakash',34,'vijay@technovert.com');
let person2 = new Person('Sashi Pagadala',21,'sashi@technovert.com');

let person3 = new Person('Subhas Raju',24,'subhas@technovert.com');
let person4 = new Person('Shekhar Chandra',35,'shekhar@technovert.com');
let person5 = new Person('Ajit Maheshwari',30,'ajit@technovert.com');
let person6 = new Person('Mukesh Roy',34,'mukesh@technovert.com');
let person7 = new Person('Rehan Sharma',32,'rehan@technovert.com');
let person8 = new Person('Raj Thakur',29,'raj@technovert.com');
//person3,person4,person5,person6,person7,person8

let personArray = [person1,person2,person3,person4,person5,person6,person7,person8];

function addRow(){
    
     for(let i =0;i<personArray.length;i++){
        let row = formTable.insertRow();
        let checkBoxCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let scoreCell = row.insertCell(2);
        let emailCell = row.insertCell(3);
        let blanckCell = row.insertCell(4);
        
        //checkbox creation
        var checkBoxLabel = document.createElement('label');
        checkBoxLabel.setAttribute('class','checkbox_Container');
        checkBoxCell.appendChild(checkBoxLabel);
        
        var checkBoxHide = document.createElement('input');
        checkBoxHide.setAttribute('type', 'checkbox');
        checkBoxHide.setAttribute('class','checklist')
        
        var checkBoxShow = document.createElement('span');
        checkBoxShow.setAttribute('class','showedChecklist')

        checkBoxLabel.appendChild(checkBoxHide);
        checkBoxLabel.appendChild(checkBoxShow);

        nameCell.innerHTML = '<span class="content">' +personArray[i].name + '</span>';
        scoreCell.innerHTML = '<span class="content">'+String(personArray[i].score) + '</span>';
        emailCell.innerHTML = '<span class="content">'+personArray[i].email + '</span>';
     }
    let row = formTable.insertRow();
    let checkBoxCell = row.insertCell(0);
    let nameCell = row.insertCell(1);
    let scoreCell = row.insertCell(2);
    let emailCell = row.insertCell(3);
    let blanckCell = row.insertCell(4);
    checkBoxCell.style.height=nameCell.style.height=scoreCell.style.height=emailCell.style.height=blanckCell.style.height ='100px'
     /*
     for (let i = 0; i < checkedbox.length; i++) {
        checkedbox[i].addEventListener("click", function() {
          personArray[i].checked = true;
        });
    }
    */
}

function averageCalculate(){
    /*
    let total=0,count=0;
    for(let i =0;i<personArray.length;i++){
        if(personArray[i].score && personArray[i].checked)
        {
            total+=personArray[i].score;
            count +=1;
        }
    }
    let average: number = (total/count) || 0;
    */
    let checkedArray = personArray.filter(person=> person.checked).map(person=>person.score);
    let average: number = checkedArray.reduce(function(sum,value){return sum+value;},0)/checkedArray.length || 0;
    (document.getElementById('Average') as HTMLInputElement).value = String(average.toFixed(2));
}

function maxCalculate(){
    /*
    let max = 0;
    for(let i =0;i<personArray.length;i++){
        if(max<personArray[i].score && personArray[i].checked)
        {
            max = personArray[i].score;
        }
    }
    */
   let max = 0;
    let checkedArray = personArray.filter(person=> person.checked).map(person=>person.score);
    if(checkedArray.length>0){
        max = Math.max(...checkedArray);  
    }
      //spread syntax or spread operator
    (document.getElementById('Max') as HTMLInputElement).value = String(max);
}

/*function for each checkbox*/
function checkboxChecked(){
    let number = 0;
    for(let i=0;i<checkBox.length;i++)
    {
        if((checkBox[i] as HTMLInputElement).checked){
            personArray[i].checked = true;
            number+=1;
        }
        else{
            checkAll.checked = false;
            personArray[i].checked = false;
        }
    }
    if(number==personArray.length){
        checkAll.checked=true;
    }
}

/* function for select all*/
function selectAllCheckBox(){
    
    if(checkAll.checked){
         
        for(let i=0;i<checkBox.length;i++)
        {
            (checkBox[i] as HTMLInputElement).checked = true;
        }
        
    }
    else{
        for(let i=0;i<checkBox.length;i++)
        {
            (checkBox[i] as HTMLInputElement).checked = false;
        }
    }
}



function searchingInTable(){
    let inputs = document.getElementById('SearchBox') as HTMLInputElement;
    let value:string = inputs.value;
    const names = document.querySelectorAll('.content') as NodeListOf<HTMLSpanElement>;
    let regex : RegExp = new RegExp(value,"gi");
    names.forEach((ele: HTMLSpanElement)=>{
        ele.innerHTML = (ele.innerText).replace(regex,"<mark>$&</mark>")
    })
}


