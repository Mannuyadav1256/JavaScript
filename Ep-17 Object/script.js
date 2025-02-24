//object in javascript

const myIntro = {
    name: 'mannu ydava',
    gender: 'male',
    //you can use nested object
    adress: {
        place:'mahuar,dist-buxar, bihar',//dont forget comma between two variable
        home: 'ganaga kinare'
    }

}
//note- same object variable address are not same 
const myIntro1 = {
    name: 'mannu ydava',
    gender: 'male'

}
//empty object
const favourateFruit = {}
const favouratecolor =  {}
//in above two empty object but both of us variable addresss are not same

//but two empty string variable address are same
const name ='';
const color ='';
//

// Object.seal vs Object.freze

const user = {
    firstname:'mannu',
    lastname:'yadav',
    address:'mahuar'
}

//adding properties in object
user.mobile = 12345;

//delting properties in object
delete user.address;

Object.seal(user);
//in object.seal () you can't add properties and can't delete
//but youy can change exiting properties

Object.freeze(user);
//in object.freeze() you can't change anything
