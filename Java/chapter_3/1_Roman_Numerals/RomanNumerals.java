/* Write a program that prompts the user to enter a number within hte range of 1 through 10.
 * The program should displau the roman numeral version of that number.
 * if the number is outside the range of 1 through 10, the program should display an error message */
import java.util.Scanner;

public class RomanNumerals
{
    public static void main(String[] args)
    {
        // create the scanner class
        Scanner keyboard = new Scanner(System.in);

        // ask user for a number between 1 and 10
        System.out.println("Please give me a number between 1 and 10: ");
        int usersNumber = keyboard.nextInt();

        if (usersNumber >= 1 || usersNumber <=10)
        {
            switch (usersNumber)
            {
                case 1:
                    System.out.println("I");
                    break;
                case 2:
                    System.out.println("II");
                    break;
                case 3:
                    System.out.println("III");
                    break;
                case 4:
                    System.out.println("IV");
                    break;
                case 5:
                    System.out.println("V");
                    break;
                case 6:
                    System.out.println("VI");
                    break;
                case 7:
                    System.out.println("VII");
                    break;
                case 8:
                    System.out.println("VIII");
                    break;
                case 9:
                    System.out.println("IX");
                    break;
                case 10:
                    System.out.println("X");
                    break;
            }
        }
        else;
        {
            System.out.println("EEROR: You did not enter a number between 1 and 10. Please try again.");
        }




    }
}