// สร้างอาเรย์พนักงานอย่างน้อย 3 คน
var employees = [
    { id: 1, name: "Alice", position: "Developer", salary: 30000 },
    { id: 2, name: "Bob", position: "Designer", salary: 28000 },
    { id: 3, name: "Charlie", position: "Manager", salary: 40000 }
];
// ฟังก์ชันค้นหาพนักงานตามชื่อ
function findEmployeeByName(name) {
    return employees.find(function (emp) { return emp.name.toLowerCase() === name.toLowerCase(); });
}
// แสดงผลข้อมูลพนักงานทั้งหมด
console.log("=== รายชื่อพนักงานทั้งหมด ===");
employees.forEach(function (emp) {
    console.log("ID: ".concat(emp.id, ", Name: ").concat(emp.name, ", Position: ").concat(emp.position, ", Salary: ").concat(emp.salary));
});
// ทดลองค้นหาพนักงาน
var searchName = "Bob";
var found = findEmployeeByName(searchName);
console.log("\n=== ผลการค้นหา ===");
if (found) {
    console.log("\u0E1E\u0E1A\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19: ID=".concat(found.id, ", Name=").concat(found.name, ", Position=").concat(found.position, ", Salary=").concat(found.salary));
}
else {
    console.log("\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E0A\u0E37\u0E48\u0E2D ".concat(searchName));
}
