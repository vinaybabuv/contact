module.exports = (id) => {
    let contacts = [
        {
            id: "1",
            name : "vinay" ,
            contact : 4694519964 ,
            type : "mobile"
        },
        {
            id: "2",
            name : "Surendra" ,
            contact : 4694519964 ,
            type : "Home"
        },
        {
            id: "3",
            name : "Mannam" ,
            contact : 4694519964 ,
            type : "mobile"
        },
        {
            id: "4",
            name : "siddu" ,
            contact : 4694519964 ,
            type : "mobile"
        },
        {
            id: "5",
            name : "Chaitanya" ,
            contact : 4694519964 ,
            type : "Home"
        }
    ];

    if (!id) {
        return contacts
    }
   return contacts.filter(contact => id === contact.id).pop()
};
