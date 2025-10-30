import java.util.Scanner;

public class testAverage
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);
        double firstTestScore, secondTestScore, thirdTestScore, averageTestScore, sumTestScore;
        // ask user to enter 3 test scores
        System.out.println("Enter your first test score: ");
        firstTestScore = keyboard.nextDouble();
        System.out.println("Enter your second test score: ");
        secondTestScore = keyboard.nextDouble();
        System.out.println("Enter your third test score: ");
        thirdTestScore = keyboard.nextDouble();
        // get the average 
        sumTestScore = firstTestScore + secondTestScore + thirdTestScore;
        averageTestScore = sumTestScore / 3;
        System.out.println("Test score number 1: " + firstTestScore + 
                            "\nTest score number 2: " + secondTestScore +
                            "\nTest score number 3: " + thirdTestScore +
                            "\nYour test score average is: " + averageTestScore);
    }
}