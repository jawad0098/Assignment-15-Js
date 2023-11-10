// !q1

let alertLink = document.getElementById('alertLink');
alertLink.addEventListener('click', function run() {
    alert('You clicked the link!');
});


// !q2
function show(image)
{
    alert("this picture is " + image)
}


// !q3
function deleteRow(button) {
    var row = button.parentNode.parentNode; 
    row.parentNode.removeChild(row); 
        
        }
//!q4
function imageChange(imageChange) {
    document.getElementById('image').src = imageChange;
}

//!q5
