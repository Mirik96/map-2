let users = [
    { name: "Вася", surname: "Пупкин", id: 1 },
    { name: "Петя", surname: "Иванов", id: 2 },
    { name: "Маша", surname: "Петрова", id: 3 }
];


let user = users.map((el) => `${el.name} ${el.surname} ${el.id}`);
alert(user);

