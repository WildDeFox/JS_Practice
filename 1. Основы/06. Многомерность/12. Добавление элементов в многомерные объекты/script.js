let affairs = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}

// Добавьте еще одно дело в дату '2019-12-29'.
affairs['2019-12-29'].push('data24');

// Добавьте еще два дела в дату '2019-12-31'.
affairs['2019-12-31'] = [];
affairs['2019-12-31'].push('data41', 'data42');
console.log(affairs)


let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

// Добавьте нового студента в подгруппу 'subgroup11'.
students.group1.subgroup11.push('student114');

// Добавьте в первую группу еще одну подгруппу.
students.group1.subgroup23 = [];

// Сделайте четвертую группу, 
// в ней сделайте подгруппу и добавьте в нее двух новых студентов.
students.group4 = {};
students.group4.subgroup33 = [];
students.group4.subgroup33.push('student331', 'student332')

console.log(students)