const media = 7

const student = [
    {
        name: 'Thiago',
        lastName: 'Silva',
        score: 10,

    },
    {
        name: 'Douglas',
        lastName: 'Medeiros',
        score: 4,
    },
    {
        name: 'Gabriela',
        lastName: 'Santos',
        score: 7,
    },
    {
        name: 'Jefferson',
        lastName: 'Gomes',
        score: 5,
    },
]

const approvedStudents = student.filter(students => students.score >= media)

console.log(approvedStudents)