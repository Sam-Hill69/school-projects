// this is a test sentence to make sure my github is working
/* Write a program that has variables to hold three test scores.
 * The program should ask the user to enter three test scores and then assign the values entered to the variables.
 * The program should display the average of the test scores and the letter grade that is assigned for the test score average.
 * Use the grading scheme in the following table */
import java.util.Scanner;

public class TestScoresAndAverage
{
    public static void main(String[] args)
    {
        int testScores = 0, totalTestScore = 0, average;
        Scanner keyboard = new Scanner(System.in);
        
        
        for (int i = 0; i <= 2; i++)
        {
            // ask the user for 5 test scores
            System.out.println("Please enter your test score: ");
            testScores = keyboard.nextInt();
            totalTestScore += testScores;
            // display a letter grade for each score and the average score
            determineGrade(testScores);
        }
        System.out.println("Your average test score is: " + calcAverage(totalTestScore));
        
    }
    // calcAverage accepts five test scores as arguments and returns the average scores    
    public static int calcAverage(int totalTestScore)
     {
       int average = 0;
       average = totalTestScore / 3;
       return average;
     }
    // determineGrade accepts a test score as an argument and returns a letter grade for the score base on the grading scale 
    public static void determineGrade(int testScores)
    {
         if (testScores >= 90)
         {
            System.out.println("You got an A");
         }
         else if (testScores >= 80 && testScores <= 89)
         {
            System.out.println("You got a B");
         }
         else if (testScores >= 70 && testScores <= 79)
         {
            System.out.println("You got a C");
         }
         else if (testScores >= 60 && testScores <=69)
         {
            System.out.println("You got a D");
         }
         else if (testScores <= 59)
         {
            System.out.println("You got a F");
         }
         
     }
}