import java.util.Scanner;
public class CompoundInterest 
{
    public static void main(String[] args) 
    {
        Scanner keyboard = new Scanner(System.in);
        // ask user The amount of principle originally deposited into the account
        System.out.println("What was the amount that you deposited into your account? ");
        Double p = keyboard.nextDouble();
        // ask the user the annual interest rate paid by the account
        System.out.println("What is the APR of your account? ");
        Double apr = keyboard.nextDouble();
        Double r = apr / 100;
        // ask the user the number of times per year that the interest is compounded 
        System.out.println("How frequently is this account compounded? (Typically 12) ");
        Double n = keyboard.nextDouble();
        // ask the user the number of years the account will be left to earn interest
        System.out.println("How many years will you be leaving this money in this account? ");
        Double t = keyboard.nextDouble();
        // calculate 
        Double exponent = n * t;
        Double division = r / n;
        Double inside = 1 + division;
        Double rightSide = Math.pow(inside, exponent);
        Double compoundedValue = p * rightSide;
        // display the amount of money that will be in the account after the specified number of years
        System.out.println("The value of you account after " + t + " is $" + compoundedValue);
    }    
}
