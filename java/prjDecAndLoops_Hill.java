import java.util.Scanner;

// use a loop to get the sum of all the integers from 1 up to the number

// 

public class prjDecAndLoops_Hill
{
    public static void main(String [] args)
    {
        int number, sum = 0, totalNumber = 0, counter = 0;

        Scanner keyboard = new Scanner(System.in);

        // ask user for a positive nonzero integer 
        System.out.println("Please give me a number " +
                                "that is greater than zero: ");
        number = keyboard.nextInt();

        if (number >= 1)
        {
            while (counter != number)
            {
                counter++;
                totalNumber += counter;
                sum = totalNumber;
                System.out.println(sum);
            }
        }
        else
        {
            System.out.println("You entered zero, Please try again.");
        }

    }
}