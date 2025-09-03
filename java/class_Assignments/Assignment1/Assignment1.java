import java.util.*;

public class Assignment1 
{
    public static void main(String[] args) 
    {
        // creates an array named randomIntergers and stores 100 elements
        ArrayList<Integer> randomNumbers = new ArrayList<Integer>(99);

        // creates the random number generator
        Random rand = new Random();

        // stores random integers in the array
        for (int i = 0; i < 100; i++) 
        {
            randomNumbers.add(rand.nextInt(1000));
        }

        displayArray(randomNumbers);
    }

    public static void displayArray(ArrayList<Integer> randomNumbers)
    {
        int x = 0;
        for (int i = 0; i < 99; i++)
        {
            if (i == x )
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
                x = x + 10;
            }
            else if (i < 99)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
        }
            
    }
        

}

