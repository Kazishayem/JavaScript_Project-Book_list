let title = document.querySelector('#title');
let author = document.querySelector('#author');
let year = document.querySelector('#year');
let btn = document.querySelector('.btn');
let booklist = document.querySelector('#book-list');

btn.addEventListener('click' , Addbook);

function Addbook(e)
{
    e.preventDefault();

    if(title.value == '' && author.value == '' && year.value == '')
    {
        alert("Fillup the form");

    }
    else
    {
        let NewRow = document.createElement('tr');
        //console.log(NewRow);

        let NewTitle = document.createElement('th');

        NewTitle.innerHTML = title.value;
        //console.log(NewTitle);

        NewRow.appendChild(NewTitle);

        let NewAuthor = document.createElement('th');

        NewAuthor.innerHTML = author.value;
        

        NewRow.appendChild(NewAuthor);

        let NewYear = document.createElement('th');

        NewYear.innerHTML = year.value;
      

        NewRow.appendChild(NewYear);

        booklist.appendChild(NewRow);


    }

}