// write a program that declares the following: 
// a String variable named name
// an int variable named age
// a double variable named annualPay
// store your age, name, and desired annual income as literals in these variables. The program should display these values on the screen in a manner 
// similar to the following
// My name is Joe Mahoney, My age is 26 and I hope to earn $100000.0 per year.
import javax.swing.JOptionPane;

public class NameAgeAnnualIncome 
{
    public static void main(String[] args)
    {
        String userName, inputString;
        int userAge;
        Double userIncome;
        userName = JOptionPane.showInputDialog("Enter your name: ");
        inputString = JOptionPane.showInputDialog("Enter your Age: ");
        userAge = Integer.parseInt(inputString);
        inputString = JOptionPane.showInputDialog("Enter your income: ");
        userIncome = Double.parseDouble(inputString);

        JOptionPane.showMessageDialog(null, "My name is " + userName + ". I am " + userAge + 
                                                                    " years old. I make $" + userIncome + " a year.");
    }
    
}