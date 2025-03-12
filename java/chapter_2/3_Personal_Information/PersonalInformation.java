import java.util.Scanner;
// Write a program that displays the following information, each on a separate line:
// Name
// Address, with city, state, and zip
// Phone #
// college major
// can only use one println but need to be on separate lines
public class PersonalInformation 
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);
        String name, address, phone, major;
        name = "Samuel Hill";
        address = "260 6th St SW, MN, 55964";
        phone = "507-993-3704";
        major = "Computer Science";
        System.out.println(name + "\n" + address + "\n" + phone + "\n" +  major);
    }
    
}