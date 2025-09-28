const employees = [
    { name: "Alice", hourlyRate: 20.00, hoursWorked: 45 },
    { name: "Bob", hourlyRate: 15.00, hoursWorked: 40 },
    { name: "Charlie", hourlyRate: 30.00, hoursWorked: 50 },
    { name: "Diana", hourlyRate: 25.00, hoursWorked: 35 },
];

function calculateBasePay(rate, hours) {
    const baseHours = Math.min(hours, 40);
    return rate * baseHours;
}

function calculateOvertimePay(rate, hours) {
    if (hours <= 40) {
        return 0;
    }
    const overtimeHours = hours - 40;
    const overtimeRate = rate * 1.5;
    return overtimeHours * overtimeRate;
}

function calculateTaxes(grossPay) {
    const taxRate = 0.15;
    return grossPay * taxRate;
}

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);

    const grossPay = basePay + overtimePay;
    const taxDeduction = calculateTaxes(grossPay);


    const netPay = grossPay - taxDeduction;
    const round = (num) => parseFloat(num.toFixed(2));

    return {
        name: employee.name,
        basePay: round(basePay),
        overtimePay: round(overtimePay),
        grossPay: round(grossPay),
        netPay: round(netPay)
    };
}
console.log("--- Payroll Processing Report ---");
employees.forEach(employee => {
    const payrollReport = processPayroll(employee);
    
    console.log(`\nEmployee: ${payrollReport.name}`);
    console.log(payrollReport);
});