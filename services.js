var person = /** @class */ (function () {
    function person(name, score, email) {
        this.name = name;
        this.email = email;
        this.score = score;
        this.checked = false;
    }
    return person;
}());
var myTable = document.getElementById("service-table");
var checkall = document.getElementById('checkBoxAll');
var checkbox = document.getElementsByClassName('checklist');
var person1 = new person('Vijay Prakash', 34, 'vijay@technovert.com');
var person2 = new person('Sashi Pagadala', 21, 'sashi@technovert.com');
var person3 = new person('Subhas Raju', 24, 'subhas@technovert.com');
var person4 = new person('Shekhar Chandra', 35, 'shekhar@technovert.com');
var person5 = new person('Ajit Maheshwari', 30, 'ajit@technovert.com');
var person6 = new person('Mukesh Roy', 34, 'mukesh@technovert.com');
var person7 = new person('Rehan Sharma', 32, 'rehan@technovert.com');
var person8 = new person('Raj Thakur', 29, 'raj@technovert.com');
//person3,person4,person5,person6,person7,person8
var IdentityArray = [person1, person2, person3, person4, person5, person6, person7, person8];
function addRow() {
    for (var i = 0; i < IdentityArray.length; i++) {
        var row_1 = myTable.insertRow();
        var cell1_1 = row_1.insertCell(0);
        var cell2_1 = row_1.insertCell(1);
        var cell3_1 = row_1.insertCell(2);
        var cell4_1 = row_1.insertCell(3);
        var cell5_1 = row_1.insertCell(4);
        //checkbox creation
        var Box = document.createElement('label');
        Box.setAttribute('class', 'checkbox_Container');
        cell1_1.appendChild(Box);
        var cBoxHide = document.createElement('input');
        cBoxHide.setAttribute('type', 'checkbox');
        cBoxHide.setAttribute('class', 'checklist');
        var cBoxShow = document.createElement('span');
        cBoxShow.setAttribute('class', 'showedChecklist');
        Box.appendChild(cBoxHide);
        Box.appendChild(cBoxShow);
        cell2_1.innerHTML = '<span class="content">' + IdentityArray[i].name + '</span>';
        cell3_1.innerHTML = '<span class="content">' + String(IdentityArray[i].score) + '</span>';
        cell4_1.innerHTML = '<span class="content">' + IdentityArray[i].email + '</span>';
    }
    var row = myTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.style.height = cell2.style.height = cell3.style.height = cell4.style.height = cell5.style.height = '100px';
    /*
    for (let i = 0; i < checkedbox.length; i++) {
       checkedbox[i].addEventListener("click", function() {
         IdentityArray[i].checked = true;
       });
   }
   */
}
function averageCount() {
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
    var checkedArray = IdentityArray.filter(function (person) { return person.checked; }).map(function (person) { return person.score; });
    var average = checkedArray.reduce(function (sum, value) { return sum + value; }, 0) / checkedArray.length || 0;
    document.getElementById('average').value = String(average.toFixed(2));
}
function maxCount() {
    /*
    let max = 0;
    for(let i =0;i<IdentityArray.length;i++){
        if(max<IdentityArray[i].score && IdentityArray[i].checked)
        {
            max = IdentityArray[i].score;
        }
    }
    */
    var checkedArray = IdentityArray.filter(function (person) { return person.checked; }).map(function (person) { return person.score; });
    var max = Math.max.apply(Math, checkedArray) || 0; //spread syntax or spread operator
    document.getElementById('max').value = String(max);
}
/*function for each checkbox*/
function rowCheckboxFunction() {
    var number = 0;
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            IdentityArray[i].checked = true;
            number += 1;
        }
        else {
            checkall.checked = false;
            IdentityArray[i].checked = false;
        }
    }
    if (number == IdentityArray.length) {
        checkall.checked = true;
    }
}
/* function for select all*/
function SelectAll() {
    if (checkall.checked) {
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = true;
        }
    }
    else {
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
    }
}
function searching() {
    var inputs = document.getElementById('search-box');
    var value = inputs.value;
    var names = document.querySelectorAll('.content');
    var regex = new RegExp(value, "gi");
    names.forEach(function (ele) {
        ele.innerHTML = (ele.innerText).replace(regex, "<mark>$&</mark>");
    });
}
