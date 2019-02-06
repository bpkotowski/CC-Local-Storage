// construct object "serialize" to JSON sst item (' ', set to stringify)


const applicantOne = { 
    name: 'Tryion',  //1  
    tvShow: 'GOT',
    ability: 'drinks and knows things',
    lastName: 'Lannister',
};


const applicantTwo = {
    name: 'Arya',
    lastName: 'Stark',
    tvShow: 'GOT',
    power: '100% baddass',
}

let applicants = [];
// const serialize = JSON.stringify(applicantOne); //2
// // console.log(serialize); //3
// window.localStorage.setItem('applicant', serialize);//4


// push first applicant into array
applicants.push(applicantOne);

//store array in local store (example)
const serializeOne = JSON.stringify(applicants);
window.localStorage.setItem('applicants', serializeOne);

// check if there are existing appplicants in the array
// preserve applicants without overwritinig


// implent this code in apply page
// array foe applicants (empty)

const jsonString = window.localStorage.getItem('applicants');

            // console.log('jsonString', jsonString);

if(jsonString) {
    applicants = JSON.parse(jsonString);
    
}

applicants.push(applicantTwo);

const serializeTwo = JSON.stringify(applicants);
window.localStorage.setItem('applicants', serializeTwo);

 