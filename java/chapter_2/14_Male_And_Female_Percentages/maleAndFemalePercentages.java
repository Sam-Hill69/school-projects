import java.util.Scanner;
public class maleAndFemalePercentages 
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);
        Double males, females, total;
        
        // write a program that asks the user for the number of males and the number of females registered in a class
        System.out.println("How many Males are in the class?: ");
        males = keyboard.nextDouble();
        System.out.println("How many females are in the class?: ");
        females = keyboard.nextDouble();
        // calculations
        total = males + females;
        Double malePercentage = males / total * 100;
        Double femalePercentage = females / total * 100;
        // the program should display the percentage of males and females in the class
        System.out.println("The percentage of males in this class is: " + malePercentage + 
                                "\nThe percentage of females in this class is: " + femalePercentage);
     }
    
}

