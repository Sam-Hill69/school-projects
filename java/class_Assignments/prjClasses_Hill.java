// Once you have written the class, write a separate program that

public class prjClasses_Hill 
{
    public static void main(String[] args) 
    {
        // creates three employee objects to hold the following data
        Employee emp1 = new Employee("Susan Meyers", 47899, "Accounting", "Vice President");
        Employee emp2 = new Employee("Mark Jones", 39119, "IT", "Programmer");
        Employee emp3 = new Employee("Joy Rogers", 81774, "Manufactoring", "Engineer");
        // display the data for each employee on the screen.
        displayEmployee(emp1);
        displayEmployee(emp2);
        displayEmployee(emp3);
    }

    public static void displayEmployee(Employee emp)
    {
        System.out.println("Name: " + emp.getName());
        System.out.println("ID Number: " + emp.getIdNumber());
        System.out.println("Department: " + emp.getDepartment());
        System.out.println("Position: " + emp.getPosition());
        System.out.println();
    }
    
}