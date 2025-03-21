// the class should have the following: 
// Write appropriate mutator methods that store values in these fields and accessor methods that return the values in thess fields.
public class employee 
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
    public employee(String name, int idNumber, String department, String position)
    {

    }

    // a constructor that accepts the following values as arguments and assigns them to the appropriate fields: employees name, employees ID number, departnemt, and position should be assigned to 
    // empty strings ("").
    public employeeSetToEmpty(String name, int idNumber, String department, String position)
    {
        name = " ";
        idNumber = " ";
        department = " ";
        position = " ";
    }
    // a no-arg constructor that assigns ampty strings to the name, department, and position fields, and a 0 to the idnumber
    public employeeNoArg()
    {
        " " = name;

    }
    
}