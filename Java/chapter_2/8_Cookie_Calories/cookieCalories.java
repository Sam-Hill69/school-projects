import java.util.Scanner;
// a bag can hold 40 cookies 
// 10 servings per bag = 300 calories per serving
public class cookieCalories
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);
        int cookies, calories;
        // user enters how many cookies the user actually ate
        System.out.println("How many cookies did you eat?: ");
        cookies = keyboard.nextInt();
        calories = cookies * 30;
        System.out.println("You ate " + calories + " calories. You fat fuck!");

    }
}

// report the # of calories consumed
