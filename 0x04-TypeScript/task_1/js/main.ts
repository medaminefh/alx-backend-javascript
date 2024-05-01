export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

export interface Directors extends Teacher {
	numberOfReports: number;
}

export interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
}

export interface IStudentClass {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

export class StudentClass implements IStudentClass {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework() {
		return "Currently working";
	}
	displayName() {
		return this.firstName;
	}
}
