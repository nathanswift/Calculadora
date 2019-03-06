// call all the buttons
// insert the text of button to input
// save that input
// add as many button presses as desired
// ac is reset
// take the string of the input on equal button and use math function to give result 
// function myFunction() {
//     var y = document.getElementById("txt1").value;
//     var z = document.getElementById("txt2").value;
//     var x = y + z;
//     document.getElementById("demo").innerHTML = x;
//   }


var numButt = document.getElementsByTagName('button')
var actButt = document.getElementsByClassName('action')
var functButt = document.getElementsByClassName('function')
var num1 = []

function callButt() {
    var outPut = document.getElementById('output')
    for (i = 0; i < numButt.length; i++) {
        numButt[i].addEventListener('click', function(){
        outPut.innerHTML = this.innerHTML
        num1.push(this.innerText)
        outPut.innerText = num1.join('')
        if (this.innerHTML == 'AC') {
            outPut.innerHTML = ''
            num1 = []
            location.reload();
        } else if (this.innerHTML == '=') {
            num1.pop();
            num1 = num1.join('');
            test = eval(num1);
            outPut.innerHTML = test
            setTimeout( function(){
                location.reload();
            }, 3000);
        }   
    })
}
}
callButt();




//if (this.id != null) {
    //     console.log('you did it')
    // } else if (this.className != null) {
    //     // continue inputting the text
    //     console.log('class grass ass or cash');
    // }

// var blankButt = document.getElementsByClassName('blank')
// var count = 0
// var blankButts = false

// function callButton() {
//     for (i = 0; i < blankButt.length; i++) {
//         blankButt[i].addEventListener('click', buttPress)
//     }
// }
// callButton();

// function buttPress() {
//     blankButts = !blankButts
//     if (blankButts) {
//         this.children[0].src = './assets/images/x.png';
//     } else {
//         this.children[0].src = './assets/images/o.png';
//     }
// }