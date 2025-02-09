import java.util.Scanner;
import javax.swing.JOptionPane;

public class prjDecisions2_Hill
{
    public static void main(String[] args)
    {
        double weight, height, bmi;

        Scanner keyboard = new Scanner(System.in);
        // calculate BMI and determine if the user is underweight, normal, overweight, or obese

        // ask the user to enter their weight in pounds
        weight = Double.parseDouble(JOptionPane.showInputDialog("Please enter your weight in pounds"));
        // ask the user to enter their height in inches
        height = Double.parseDouble(JOptionPane.showInputDialog("Please enter your height in inches"));
        // calculate the BMI
        bmi = weight * 703 / (height * height);
        if (bmi < 18.5)
        {
            JOptionPane.showMessageDialog(null,
            String.format("Your BMI is %.2f, which means you are underweight", bmi));
        }
        else if (bmi < 25)
        {
            JOptionPane.showMessageDialog(null,
            String.format("Your BMI is %.2f, which means you are normal", bmi));
        }
        else if (bmi < 30)
        {
            JOptionPane.showMessageDialog(null,
            String.format("Your BMI is %.2f, which means you are overweight", bmi));
        }
        else
        {
            JOptionPane.showMessageDialog(null,
            String.format("Your BMI is %.2f, which means you are obese", bmi));
        }
    }
}