import java.util.Scanner;
public class ShippingCharges 
{
    public static void main(String[] args) 
    {
        Scanner keyboard = new Scanner(System.in);
        // ask the user to enter the weight of a package
        System.out.println("How much does your package weighs? ");
        int weight = keyboard.nextInt(); 
        // display the shipping charges
        if (weight < 2)
        {
            System.out.println("The cost to ship this package is $1.10");
        }
        else if (weight > 2 && weight < 6)
        {
            System.out.println("The cost to ship this package is $2.20");
        }
        else if (weight > 6 && weight < 10)
        {
            System.out.println("The cost to ship this package is $3.70");
        }
        else if (weight > 10)
        {
            System.out.println("The cost to ship this package is $3.80");
        }
    }    
}
