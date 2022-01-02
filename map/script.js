

const student = [
    {
        name: 'Thiago',
        lastName: 'Silva',

    },
    {
        name: 'Douglas',
        lastName: 'Medeiros',

    },
    {
        name: 'Gabriela',
        lastName: 'Santos',

    },
    {
        name: 'Jefferson',
        lastName: 'Gomes',
    },
]

const studentsFinalMap = student.map(students => students.name + ' ' + students.lastName)

console.log(studentsFinalMap)