const jsonString = window.localStorage.getItem('applicants');
let applicants = [];

if(jsonString) {
    applicants = JSON.parse(jsonString);
}

// console.log('applicants', applicants);

const tbody = document.getElementById('applicants');
// console.log(tbody);

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];
    //  console.log(applicant);


    const tr = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = applicant.name;
    tr.appendChild(firstNameCell);


    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = applicant.lastName;
    tr.appendChild(lastNameCell);

    tbody.appendChild(tr);
    console.log(tr);
}
