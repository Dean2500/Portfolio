document.querySelector('#main > div:first-child').style.display = 'block';

 function changeContent(id) {
     var contents = document.querySelectorAll('#main > div');
     for (var i = 0; i < contents.length; i++) {
         contents[i].style.display = 'none';
     }
     document.getElementById(id).style.display = 'block';
 }
