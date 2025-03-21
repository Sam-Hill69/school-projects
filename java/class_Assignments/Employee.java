// the class should have the following: 
public class Employee 
{
    // write a class named Employee that has the following fields:
    // name: String
    private String name;
    // idNumber: int
    private int idNumber;
    // department: String
    private String department;
    // Position: String
    private String position;

    // a constructor that accepts the following values as arguments and assigns them to the appropriate fields: employees name, employees id number, department, and position.
    public Employee(String employeesName, int employeesIdNumber, String employeesDepartment, String employeesPosition)
    {
        name = employeesName;
        idNumber = employeesIdNumber;
        department = employeesDepartment;
        position = employeesPosition;
    }

    // a constructor that accepts the following values as arguments and assigns them to the appropriate fields: employees name, employees ID number. The departnemt and position should be assigned to 
    // empty strings ("").
    public Employee(String employeeName, int idNumber)
    {
        name = employeeName;
        this.idNumber = idNumber;
        department = " ";
        position = " ";
    }
    // a no-arg constructor that assigns ampty strings to the name, department, and position fields, and a 0 to the idnumber
    public Employee()
    {
        name = " ";
        idNumber = 0;
        department = " ";
        position = " ";

    }
    // Write appropriate mutator methods that store values in these fields
    public void setName(String name)
    {
        this.name = name;
    }

    public void setIdNumber(int idNumber)
    {
        this.idNumber = idNumber;
    }

    public void setDepartment(String department)
    {
        this.department = department;
    }

    public void setPosition(String position)
    {
        this.position = position;
    }
    //  and accessor methods that return the values in thess fields.
    public String getName()
    {
        return name;
    }

    public int getIdNumber()
    {
        return idNumber;
    }

    public String getDepartment()
    {
        return department;
    }

    public String getPosition()
    {
        return position;
    }

}