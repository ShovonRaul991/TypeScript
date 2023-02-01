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
/*
let person3 = new person('Subhas Raju',24,'subhas@technovert.com');
let person4 = new person('Shekhar Chandra',35,'shekhar@technovert.com');
let person5 = new person('Ajit Maheshwari',30,'ajit@technovert.com');
let person6 = new person('Mukesh Roy',34,'mukesh@technovert.com');
let person7 = new person('Rehan Sharma',32,'rehan@technovert.com');
let person8 = new person(null,null,null);
person3,person4,person5,person6,person7,person8
*/
var IdentityArray = [person1, person2];
function addRow() {
    for (var i = 0; i < IdentityArray.length; i++) {
        var row_1 = myTable.insertRow(-1);
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
    var total = 0, count = 0;
    for (var i = 0; i < IdentityArray.length; i++) {
        if (IdentityArray[i].score != null && IdentityArray[i].checked === true) {
            total += IdentityArray[i].score;
            count += 1;
        }
    }
    var average = total / count || 0;
    document.getElementById('average').value = String(average);
}
function maxCount() {
    var max = 0;
    for (var i = 0; i < IdentityArray.length; i++) {
        if (max < IdentityArray[i].score && IdentityArray[i].checked === true) {
            max = IdentityArray[i].score;
        }
    }
    document.getElementById('max').value = String(max);
}
function checkcount() {
    var number = 0;
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
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
function checking() {
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
