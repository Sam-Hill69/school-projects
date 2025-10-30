import java.util.Scanner;

public class stringManipulator 
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);
        // write a program that asks the user to enter the name of his or her favorite city.
        System.out.println("What is your favorite city?: ");
        // use the string variable to store the input.
        String favoriteCity = keyboard.nextLine();
        // the program should display the following:
        // the number of characters in the city name
        int length = favoriteCity.length();
        System.out.println(length);
        // the name of the city in all uppercase letters
        String upper = favoriteCity.toUpperCase();
        System.out.println(upper);
        // the name of the city in all lowercase letters
        String lower = favoriteCity.toLowerCase();
        System.out.println(lower);
        // the first character in the name of the city
        char firstCharacter = favoriteCity.charAt(0);
        System.out.println(firstCharacter);
    }
}
