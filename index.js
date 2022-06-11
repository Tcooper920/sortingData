const employeeList = 
{"employees":[  
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"},  
    {"name":"Jai", "email":"jai87@gmail.com"},
    {"name":"Thomas", "email":"thomas@gmail.com"},
    {"name":"Matt", "email":"matt@gmail.com"},
    {"name":"Justin", "email":"justin79@gmail.com"},
    {"name":"Mac", "email":"mac12@gmail.com"},
    {"name":"Katie", "email":"katie@gmail.com"},
    {"name":"Rich", "email":"rich70@gmail.com"},  
]};

const employeeListContainer = document.getElementById("employee-list-container");

const printEmployeesToPage = () => {
	employeeList.employees.forEach(element => {
		const newDiv = document.createElement("div");
		newDiv.innerText = `Name: ${element.name} Email: ${element.email}`;
		employeeListContainer.append(newDiv);
	});
}

printEmployeesToPage();

