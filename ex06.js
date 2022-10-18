// [ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: 
// - média do salário da população; 
// - média do número de filhos; 
// - maior salário; 
// - O final da leitura de dados se dará com a entrada de um salário negativo. 
// - Faça isso usando uma função!

const person = [
    {
        numberOfChildren:2,
        salary: 3000
    },
    {
        numberOfChildren:5,
        salary: 4000
    },
    {
        numberOfChildren:1,
        salary: 2000
    },
    {
        numberOfChildren:4,
        salary: 2200
    },
    {
        numberOfChildren:5,
        salary: 5000
    },
    {
        numberOfChildren:0,
        salary: -3000
    },
    
]

function findAverageAndHighestSalary(peopleInformation){
    i = 0;
    let avarageSalary =0
    let avaregeChildren = 0
    let highestSalary = 0
    

    // Usando For
    // for (let i = 0; i  < peopleInformation.length; i++){

    // const salary = peopleInformation[i].salary
    // const children = peopleInformation[i].numberOfChildren

    // if(salary > highestSalary)highestSalary =salary

    // if(salary < 0){
    //     console.log(`Media de Salário R$${(avarageSalary/ i).toFixed(0)}`)
    //     console.log(`Media de Filhos ${(avaregeChildren / i).toFixed(0)}`)
    //     console.log(`Maior Salario R$${highestSalary}`)
    //     break
    //     }else{
    //         avarageSalary = avarageSalary + salary;
    //         avaregeChildren += children
    //     }
    // }

        while(peopleInformation[i].salary > 0){
            avarageSalary = avarageSalary + peopleInformation[i].salary
            avaregeChildren = avaregeChildren + peopleInformation[i].numberOfChildren
            peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary
            i++
        }

        console.log(`Media de Salário R$${(avarageSalary/ i).toFixed(0)}`)
        console.log(`Media de Filhos ${(avaregeChildren / i).toFixed(0)}`)
        console.log(`Maior Salario R$${highestSalary}`)

}

findAverageAndHighestSalary(person)