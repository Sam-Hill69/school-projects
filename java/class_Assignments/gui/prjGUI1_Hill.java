import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;

public class prjGUI1_Hill {
    public static void main(String[] args) {
        // Create the main frame
        JFrame frame = new JFrame("Latin to English Translator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);
        frame.setLayout(new FlowLayout());

        // Create buttons for Latin words
        JButton sinisterButton = new JButton("Sinister");
        JButton dexterButton = new JButton("Dexter");
        JButton mediumButton = new JButton("Medium");

        // Add action listeners to display translations using JOptionPane
        sinisterButton.addActionListener((ActionEvent e) -> 
            JOptionPane.showMessageDialog(frame, "Left", "Translation", JOptionPane.INFORMATION_MESSAGE));
        dexterButton.addActionListener((ActionEvent e) -> 
            JOptionPane.showMessageDialog(frame, "Right", "Translation", JOptionPane.INFORMATION_MESSAGE));
        mediumButton.addActionListener((ActionEvent e) -> 
            JOptionPane.showMessageDialog(frame, "Center", "Translation", JOptionPane.INFORMATION_MESSAGE));

        // Add buttons to the frame
        frame.add(sinisterButton);
        frame.add(dexterButton);
        frame.add(mediumButton);

        // Make the frame visible
        frame.setVisible(true);
    }
}
