let $ = (id) => {
    return document.getElementById(id)
}

const PLACEHOLDER = 'employeesPlaceholder'

clearEmployeesPlaceholder = () => {
    document.getElementById(PLACEHOLDER).innerHTML = '';
}

showEmployees = (employees) => {
    clearEmployeesPlaceholder();
    $(PLACEHOLDER).innerHTML = '<ul>'
    for (let employee of employees) {
        $(PLACEHOLDER).innerHTML += '<li>' + employee.name + ' ' + employee.surname + '</li>'
    }
    $(PLACEHOLDER).innerHTML += '</ul>'
}
runUi=(employees)=>{
    showEmployees(employees)
}
