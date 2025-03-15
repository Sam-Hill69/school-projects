import javax.swing.JOptionPane;

public class milesPerGallon
{
    public static void main(String[] args)
    {
        int milesDriven, gallonsUsed, milesPerGallon;
        String inputString;
        // ask user for the number of miles driven
        inputString = JOptionPane.showInputDialog("How many miles have you driven?: ");
        milesDriven = Integer.parseInt(inputString);
        // ask user for the number of gallons used
        inputString = JOptionPane.showInputDialog("How many gallons did you consume?: ");
        gallonsUsed = Integer.parseInt(inputString); 
        // calculate mpg
        milesPerGallon = milesDriven / gallonsUsed;
        // display mpg
        JOptionPane.showMessageDialog(null, "Your average MPG was: " +
                                                                     milesPerGallon);
    }
}
// MPG = Miles driven/Gallons of gas used



