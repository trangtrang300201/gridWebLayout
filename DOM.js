var listProduct = [];
var listOut = [];
function addRow(params) {
    var idOutput = document.getElementById('id').value;
    var nameOutput = document.getElementById('name').value;
    var costOutput = parseInt(document.getElementById('cost').value);
    var amountOutput = parseInt(document.getElementById('amount').value);

    var product = {
        id: idOutput,
        name: nameOutput,
        cost: costOutput,
        amount: amountOutput,
        output: 0,
    }

    listProduct.push(product);

    var tableIn = document.getElementById('tableStore');
    var stt = listProduct.length;
    var row = tableIn.insertRow(stt);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);

    cell0.innerHTML = stt;
    cell1.innerHTML = idOutput;
    cell2.innerHTML = nameOutput;
    cell3.innerHTML = costOutput;
    cell4.innerHTML = amountOutput;

    var x = document.getElementById("xuatkho");
    var option = document.createElement("option");
    option.text = idOutput;
    x.add(option);
}

function subRow() {
    var x = document.getElementById("xuatkho");
    var sluong = parseInt(document.getElementById('slmua').value);

    var value = x.options[x.selectedIndex].value;
    // console.log(value);
    // console.log(listProduct);
    var product = listProduct.find(x => {
        if (value === x.id) {
            x.output = sluong;
            return x;
        }
    });

    console.log(product);
    console.log(listOut);
    if (sluong > product.amount) { alert('Không đủ sản phẩm') }
    else {
        var checkProduct = false;
        listOut.forEach(x => {
            if (x.id === product.id) {
                console.log(x);
                console.log(product);
                x.output += product.output;
                checkProduct = true;
                return x;

            }
        });
        if (!checkProduct) {
            listOut.push(product);
        }

    }
    console.log(listOut);
}
