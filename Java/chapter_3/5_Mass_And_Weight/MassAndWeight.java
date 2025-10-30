import java.util.Scanner;
public class MassAndWeight 
{
    public static void main(String[] args) 
    {
        Scanner keyboard = new Scanner(System.in);
        // ask user to enter an objects mass, and then calculate its weight.
        System.out.println("Please enter the weight of an object: ");
        Double weight = keyboard.nextDouble();
        // calculate
        Double newton = weight * 9.8;
        // if the objects weight is more than 1,000 newtons, display a message indicating that it is too heavy. 
        if (newton >= 1000)
        {
            System.out.println("This weight of this object is to great is to great ");
        }
        else if (newton < 1000 && newton > 10)
        {
            System.out.printf("The weight of your object in newtons is: %.2f", newton);
        }
        // If the objects weighs less than 10 newtons, display a meesage indicating that the object is too light 
        else
        {
            System.out.println("The weight of this object to light");
        }
    }    
}
