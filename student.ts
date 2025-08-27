// Class สำหรับรายวิชา
class Course {
    name: string;
    grade: number;

    constructor(name: string, grade: number) {
        this.name = name;
        this.grade = grade;
    }
}

// Class สำหรับนักศึกษา
class Student {
    studentID: string;
    name: string;
    courses: Course[];

    constructor(studentID: string, name: string, courses: Course[] = []) {
        this.studentID = studentID;
        this.name = name;
        this.courses = courses;
    }

    // เพิ่มรายวิชาใหม่
    addCourse(course: Course) {
        this.courses.push(course);
    }

    // คำนวณเกรดเฉลี่ย
    getAverage(): number {
        if (this.courses.length === 0) return 0;
        const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
        return total / this.courses.length;
    }

    // แสดงข้อมูลนักศึกษา
    printInfo() {
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses:`);
        this.courses.forEach(c => console.log(`  - ${c.name}: ${c.grade}`));
        console.log(`Average Grade: ${this.getAverage().toFixed(2)}`);
        console.log('--------------------------');
    }
}

// ------------------ การใช้งาน ------------------

// สร้างนักศึกษา 3 คน คนละ 4 วิชา
const student1 = new Student("S001", "Alice", [
    new Course("Math", 80),
    new Course("Physics", 75),
    new Course("Chemistry", 85),
    new Course("English", 90)
]);

const student2 = new Student("S002", "Bob", [
    new Course("Math", 70),
    new Course("Physics", 65),
    new Course("Chemistry", 75),
    new Course("English", 80)
]);

const student3 = new Student("S003", "Charlie", [
    new Course("Math", 90),
    new Course("Physics", 85),
    new Course("Chemistry", 80),
    new Course("English", 95)
]);

// แสดงข้อมูลนักศึกษาทุกคนพร้อมเกรดเฉลี่ย
console.log("=== Initial Students ===");
[student1, student2, student3].forEach(s => s.printInfo());

// เพิ่มรายวิชาและเกรด คนละ 1 วิชา
student1.addCourse(new Course("Biology", 88));
student2.addCourse(new Course("Biology", 78));
student3.addCourse(new Course("Biology", 92));

// แสดงผลข้อมูลอีกครั้ง
console.log("=== After Adding a Course ===");
[student1, student2, student3].forEach(s => s.printInfo());