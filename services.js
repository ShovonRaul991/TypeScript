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
var person3 = new person(null, null, null);
var person4 = new person(null, null, null);
var person5 = new person(null, null, null);
var person6 = new person(null, null, null);
var person7 = new person(null, null, null);
var person8 = new person(null, null, null);
var IdentityArray = [person1, person2, person3, person4, person5, person6, person7, person8];
function addRow() {
    for (var i = 0; i < IdentityArray.length; i++) {
        var row_1 = myTable.insertRow(-1);
        var cell1_1 = row_1.insertCell(0);
        var cell2_1 = row_1.insertCell(1);
        var cell3_1 = row_1.insertCell(2);
        var cell4_1 = row_1.insertCell(3);
        var cell5_1 = row_1.insertCell(4);
        //checkbox creation
        var cBox = document.createElement('input');
        cBox.setAttribute('type', 'checkbox');
        cBox.setAttribute('class', 'checklist');
        cell1_1.appendChild(cBox);
        cell2_1.innerHTML = IdentityArray[i].name;
        cell3_1.innerHTML = String(IdentityArray[i].score);
        cell4_1.innerHTML = IdentityArray[i].email;
    }
    var row = myTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.style.height = cell2.style.height = '122px';
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
    var average = total / count;
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
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            IdentityArray[i].checked = true;
        }
        else {
            checkall.checked = false;
        }
    }
}
function checking() {
    if (checkall.checked) {
        for (var tbls = document.getElementsByTagName("table"), i = tbls.length; i--;)
            for (var bxs = tbls[i].getElementsByTagName("input"), j = bxs.length; j--;)
                if (bxs[j].type == "checkbox")
                    bxs[j].checked = true;
    }
}
