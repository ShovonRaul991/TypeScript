var person = /** @class */ (function () {
    function person(name, score, email) {
        this.name = name;
        this.email = email;
        this.score = score;
    }
    return person;
}());
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
    var myTable = document.getElementById("service-table");
    for (var i = 0; i < IdentityArray.length; i++) {
        var row = myTable.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        //checkbox creation
        var cBox = document.createElement('input');
        cBox.setAttribute('type', 'checkbox');
        cell1.appendChild(cBox);
        cell2.innerHTML = IdentityArray[i].name;
        cell3.innerHTML = String(IdentityArray[i].score);
        cell4.innerHTML = IdentityArray[i].email;
    }
}
