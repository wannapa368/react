// ประกาศ Interface Employee
interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

// สร้างอาเรย์พนักงานอย่างน้อย 3 คน
const employees: Employee[] = [
  { id: 1, name: "Alice", position: "Developer", salary: 30000 },
  { id: 2, name: "Bob", position: "Designer", salary: 28000 },
  { id: 3, name: "Charlie", position: "Manager", salary: 40000 }
];

// ฟังก์ชันค้นหาพนักงานตามชื่อ
function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(
    (emp: Employee) => emp.name.toLowerCase() === name.toLowerCase()
  );
}

// แสดงผลข้อมูลพนักงานทั้งหมด
console.log("=== รายชื่อพนักงานทั้งหมด ===");
employees.forEach((emp: Employee) => {
  console.log(
    `ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`
  );
});

// ทดลองค้นหาพนักงาน
const searchName: string = "Bob";
const found: Employee | undefined = findEmployeeByName(searchName);

console.log("\n=== ผลการค้นหา ===");
if (found) {
  console.log(
    `พบพนักงาน: ID=${found.id}, Name=${found.name}, Position=${found.position}, Salary=${found.salary}`
  );
} else {
  console.log(`ไม่พบพนักงานชื่อ ${searchName}`);
}