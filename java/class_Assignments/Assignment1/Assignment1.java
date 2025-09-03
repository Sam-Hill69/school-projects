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
        largestElement(randomNumbers);
    }

    public static void displayArray(ArrayList<Integer> randomNumbers)
    {
        int x = 0;
        System.out.println("100 Elements in the ArrayList, Orginized by 10");
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

    public static void largestElement(ArrayList<Integer> randomNumbers)
    {
        int largest = randomNumbers.get(0);

        for (int i = 0; i < 99; i++)
        {
            if (randomNumbers.get(i) > largest)
            largest = randomNumbers.get(i);
        }

        System.out.println("\n\nThe largest element in the ArrayList is " + largest + " in index ");
    }
        

}

