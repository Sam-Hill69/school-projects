import javax.swing.JOptionPane;

public class NameAndInitials 
{    
    public static void main(String[] args)
    {
        String firstName, middleName, lastName, firstInitial, middleInitial, lastInitial;

        firstName = JOptionPane.showInputDialog("What is your first name?: ");
        middleName = JOptionPane.showInputDialog("What is your middle name?: ");
        lastName = JOptionPane.showInputDialog("What is your last name?: ");
        firstInitial = String.valueOf(firstName.charAt(0));
        middleInitial = String.valueOf(middleName.charAt(0));
        lastInitial = String.valueOf(lastName.charAt(0));

        JOptionPane.showMessageDialog(null, firstName + " " + middleName + " " + lastName + " " +
                                                                firstInitial + " " + middleInitial + " " + lastInitial);

    }
}