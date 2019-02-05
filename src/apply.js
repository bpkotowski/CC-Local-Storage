// construct object "serialize" to JSON sst item (' ', set to stringify)


const tyrion = {   //1  
    tvShow: 'Game of Thrones',
    ability: 'drinks and knows things',
    lastName: 'Lannister',
};

const serialize = JSON.stringify(tyrion); //2
// console.log(serialize); //3
window.localStorage.setItem('applicant', serialize);//4


 