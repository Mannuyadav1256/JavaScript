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