//write a project that computes the tax and tip on a restaurant bill
import java.util.Scanner;
public class prjFundamentals
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);
        double mealCost, tax, tip, newTotal, finalTotal;
        //ask the user to enter the charge for the meal
        System.out.println("Enter the charge for the meal:");
        mealCost = keyboard.nextDouble();
        //add 6.75% on for the tax
        tax = mealCost * 0.0675;
        newTotal = mealCost + tax;
        System.out.printf("Your meal charge is $%.2f and the tax is $%.2f\n", mealCost, tax);
        //tip should be 20% of the total after adding the sales tax
        tip = newTotal * 0.20;
        finalTotal = newTotal + tip;
        System.out.printf("The tip is $%.2f\n", tip);
        //display the total bill amount on screen
        System.out.printf("The total for your meal with the tax and gratuity included is $%.2f\n", finalTotal);
    }
}