// calculates the amount a person would earn over a period of time if his or her salary is one penny the first day, two pennies the second day, and 
// continuous to double each day. The program should displa a table showing the salary for each day, and then show the total pay at the end of the period.
// the output should be displayed in a dllar amount, not the numer of pennies 
// input validation: Do not accept a number less than 1 for the number of days worked

import java.util.Scanner;

public class prjLoops2_Hill
{
    public static void main(String[] args)
    {
        double salary = 0.01, paycheck = 0;
        int day = 0, counter = 0;
        Scanner keyboard = new Scanner(System.in);

        System.out.println("How many days did you work in this pay period?: ");
        day = keyboard.nextInt();
        

        while (day < 1)
        {
            System.out.println("You didn't work any days this pay period. Please enter a number that is greater than 1");
            day = keyboard.nextInt();
        }

        while (day == 1)
        {
            day--;
            paycheck = salary;
            System.out.printf("Day 1: %.2f\n", paycheck);
                
        }

        while (day > 0)
        {
            day--;
            counter++;
            System.out.printf("Day %d: $%.2f\n", counter, salary);
            paycheck = salary *= 2;
            
        }

        System.out.printf("The total for your paycheck is: $%.2f", paycheck);
    }    

        
}