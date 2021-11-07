let employeeMap = {}

let findByName = (name = '', surname = '') => {
    let result = []
    for (let employee of DATA.employees) {
        if ((!name || employee.name === name) && (!surname || employee.surname === surname)) {
            result.push(employee)
        }
    }
    return result
}

let addEmloyee = (name, surname) => {
    if (!name || !surname) throw 'name or surname is not defined'
    let id = DATA.employees.reduce(function (a, b) {
        return a.id > b.id ? a : b
    }).id + 1
    DATA.employees.push({'id': id, 'name': name, 'surname': surname})
}

let removeEmployee = (id) => {
    if (!id) throw 'id not defined'
    for (let employee of DATA.employees) {
        if (employee.id === id) {
            let index = DATA.employees.indexOf(employee)
            DATA.employees.splice(index, 1)
            break
        }
    }
}

let showEmployee = (employee) => {
    let keys = Object.keys(employee)
    for (let key of keys) {
        console.log(key + '=' + employee[key])
    }
}

let showEmployees = () => {
    for (let employee of DATA.employees) {
        showEmployee(employee)
    }
}

let findById = (id) => {
    if (!id) throw 'id not defined'
    if (employeeMap[id]) return employeeMap[id]
    for (let employee of DATA.employees) {
        if (employee.id === id) {
            employeeMap[id] = employee
            return employee
        }
    }
}

//console.log(findByName())
addEmloyee('Andrew', 'Jackson')
removeEmployee(5)
console.log(findById(2))
console.log(findById(4))
console.log(findById(2))


//showEmployee(DATA.employees[1])
// findByName(null, null);
// findByName('James');
// findByName(null, 'Adams');
// findByName('James', 'Madison');