/*
 * Author: Samuel Hill
 * Date: 10-21-2025
 * Assignement: Assignment 5 exponentCalc
 * Description: asks the user to enter a number and it gets inputed as the exponent
 *              and in the other method calculates the sum of all positive intergers 
 *              from 1 up to the number passed as the argument.
 */
import javax.swing.JOptionPane;
 /*The main method, call these methods with user input and display the results */
public class exponentCalc 
{

    public static void main(String[] args) 
    {
        String input;
        int num;
        //get the number from the user 
        input = JOptionPane.showInputDialog("Enter a positive number that is greater than 0: ");
        num = Integer.parseInt(input);

        //call the two methods with num
        JOptionPane.showMessageDialog(null, "2 to the power of " + num + " is: " + calculateExponent(num));
        JOptionPane.showMessageDialog(null, "The sum of all the numbers all the way up to " + num + " is: " + calculateSum(num));

        
    }

 /*The first method calculates and returns the value of 2^n for n>=1. for example
  *, if the user enters 5, then 2^5 = 32*/
    public static int calculateExponent(int num)
    {

        if (num == 1)
        {
            return 2;
        }
        else
        {
            return 2 * calculateExponent(num - 1);
        }
    
    }
  /* The second method calculates and reurns the sum of all positive intergers
   * 1 up to the number passed as the argument. for example, if 5 is passed as the 
   * argument, the method will return the sum of 1,2,3,4, and 5*/
  public static int calculateSum(int num)
  {
    int i = 0;
    if (num == 1)
    {
        return num;
    }
    else
    { 
        int sum = i + num;
        i++;
        return sum + calculateSum(num - 1);
    }
  }
}