import java.util.*;

public class Assignment1 {

    public static void main(String[] args) {
        
        // creates an array named randomIntergers and stores 100 elements
        int[] randomNumbers = new int[100];

        // creates the random number
        Random rand = new Random();

        // stores random intergers in the array
        for (int i=0; i<randomNumbers.length; i++)
        {
            randomNumbers[i] = rand.nextInt(100);
        }


    }
    
}
