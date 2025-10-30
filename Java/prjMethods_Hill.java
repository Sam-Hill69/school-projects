import java.util.Scanner;

public class prjMethods_Hill
{

    int testScores;
    public static void main(String[] args)
    {
        int testScores = 0, totalTestScore = 0, average;
        Scanner keyboard = new Scanner(System.in);
        
        
        for (int i = 0; i <= 4; i++)
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
       average = totalTestScore / 5;
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