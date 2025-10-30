import javax.swing.JOptionPane;

public class spotlight_nested_decision_structures
{
    public static void main(String[] args)
    {
        String input;
        int score;
        char grade;

        input = JOptionPane.showInputDialog("Enter your test score:");
        score = Integer.parseInt(input);

        if (score < 60)
            grade = 'F';
        else if (score < 70)
            grade = 'D';
        else if (score < 80)
            grade = 'C';
        else if (score < 90)
            grade = 'B';
        else
            grade = 'A';

        JOptionPane.showMessageDialog(null, "Your grade is " + grade);
    }
}
// ask the user to enter a test score

// determine the grade in the following manner 

// if the scre is less than 60, the grade is F

// if the score is less than 70, the grade is D

// if the score is less than 80, the grade is C

// if the score is less than 90, the grade is B

// otherwise the grade is A