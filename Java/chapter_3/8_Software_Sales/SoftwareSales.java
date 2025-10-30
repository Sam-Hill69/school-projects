import java.util.Scanner;
public class SoftwareSales 
{
    public static void main(String[] args) 
    {
        Scanner keyboard = new Scanner(System.in);
        // ask the user to enter the number of packages purchased
        System.out.println("How many packages did you purchase? ");
        Double packages = keyboard.nextDouble();
        Double purchasePrice = packages * 99;
        
        if (packages < 10)
        {
            System.out.println("Sorry you didnt buy enough packages to get a discount. Your total is $" + purchasePrice);
        }
        else if (packages >= 10 && packages < 20)
        {
            Double discount = purchasePrice * 0.8;
            System.out.println("You got a 20% discount on your purchase. Your total is $" + discount);
        }
        else if (packages >= 20 && packages < 50)
        {
            Double discount = purchasePrice * 0.7;
            System.out.println("You got a 30% discount on your purchase. Your total is $" + discount);
        }
        else if (packages >= 50 && packages < 100)
        {
            Double discount = purchasePrice * 0.6;
            System.out.println("You got a 40% discount on your purchase. Your total is $" + discount);
        }
        else if (packages >= 100)
        {
            Double discount = purchasePrice * 0.5;
            System.out.println("You got a 50% discount on your purchase. Your total is $" + discount);
        }
        // display the amount of the discount (if any) and the total amount of the purchase after the discount 

    }   
}
