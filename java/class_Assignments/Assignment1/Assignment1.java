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
        for (int i = 0; i < 99; i++)
        {
            if (i == 0)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
            }
            else if (i > 0 && i < 10)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
            else if (i == 10)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
            }
            else if (i > 10 && i < 20)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
            else if (i == 20)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
            }
            else if (i > 20 && i < 30)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
            else if (i == 30)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
            }
            else if (i > 30 && i < 40)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
            else if (i == 40)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
            }
            else if (i > 40 && i < 50)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
            else if (i == 50)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
            }
            else if (i > 50 && i < 60)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
            else if (i == 60)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
            }
            else if (i > 60 && i < 70)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
            else if (i == 70)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
            }
            else if (i > 70 && i < 80)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
            else if (i == 80)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
            }
            else if (i > 80 && i < 90)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
            else if (i == 90)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
            }
            else if (i > 90 && i < 99)
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
        }
            
    }
        

}

