import javax.swing.JOptionPane;
import java.util.Scanner;
public class prjDesicions1
{
    public static void main(String[] args)
    {
        int month, day, year, magicDate;
        
        
        Scanner keyboard = new Scanner(System.in);

        
        // ask the user to enter a month in numeric form 
        month = Integer.parseInt(JOptionPane.showInputDialog("Please give me a month in a numeric format"));
        // ask the user for a day 
        day = Integer.parseInt(JOptionPane.showInputDialog("Please give me a day"));
        // ask the user for a two digit year
        year = Integer.parseInt(JOptionPane.showInputDialog("And finally, Please give me the last two digits of a year"));
        // calculate the month * day 
        magicDate = month * day;
        // if month * day is equal to the year print a message 
        if (magicDate == year)
        {
            JOptionPane.showMessageDialog(null,
            String.format("The date that you have submitted is a magic date"));
        }
        // else print another message 
        else
        {
            JOptionPane.showMessageDialog(null,
            String.format("The date you have submitted is NOT a magic date"));
        }
    }
}