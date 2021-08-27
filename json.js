const user = {
    Student_Id:06,
    name: "Mastura Mohenee",
    dept: "CSE"
}
const userJSON= JSON.stringify(user)
const userFromJson = JSON.parse(userJSON)
console.log(userFromJson)
console.log(userJSON) 