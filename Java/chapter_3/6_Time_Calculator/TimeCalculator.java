import java.util.Scanner;
public class TimeCalculator 
{
    public static void main(String[] args) 
    {
        Scanner keyboard = new Scanner(System.in);
        // ask the user to enter a number of seconds
        System.out.println("Please enter any number of seconds you would like: ");
        Double seconds = keyboard.nextDouble();
        if (seconds < 60)
        {
            System.out.printf("The number of seconds you entered is: %f", seconds);
        }
        // if the seconds is greater than 60 its 1 minutes + left over seconds 
        else if (seconds >= 60 && seconds < 3600)
        {
            Double minute = seconds / 60;
            System.out.printf("The number of minutes you entered is: %.0f", minute);
        }
        // if over 3600 its 1 hour + extra
        else if (seconds >= 3600 && seconds < 86400)
        {
            Double hour = seconds / 3600;
            System.out.printf("The number of hours you entered is: %.0f", hour);
        }
        // if over 86400 its 1 day 
        else
        {
            Double day = seconds / 86400;
            System.out.printf("The number of days you enetered is: %.0f", day);
        }
    }
}
