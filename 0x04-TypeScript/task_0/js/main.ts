interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Mohamed Amine",
	lastName: "Fh",
	age: 27,
	location: "Zeramdine",
};

const student2: Student = {
	firstName: "Haroun",
	lastName: "Fh",
	age: 26,
	location: "Jemmel",
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const tr = document.createElement("tr");
thead.appendChild(tr);

const th1 = document.createElement("th");
th1.textContent = "firstName";
tr.appendChild(th1);

const th2 = document.createElement("th");
th2.textContent = "lastName";
tr.appendChild(th2);

const th3 = document.createElement("th");
th3.textContent = "age";
tr.appendChild(th3);

const th4 = document.createElement("th");
th4.textContent = "location";
tr.appendChild(th4);

const tbody = document.createElement("tbody");
table.appendChild(tbody);
