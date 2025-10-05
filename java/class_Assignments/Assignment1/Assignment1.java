/*
 * Author: Samuel Hill
 * Date: Sep 9 2025
 * Assignment #1 Assignment1.java
 * Description: This program creates an arraylist, displays: the arraylist the mean of the list and standard deviation of the list, the largest number and the smallest number.
 *              it then removes the largest number and replaces the smallest number with -99 then displays the updated arraylist
 */

import java.util.*;
import java.lang.Math;

public class Assignment1 
{
    public static void main(String[] args) 
    {
        ArrayList<Integer> randomNumbers = createArray();

        // displays the arrayList orginized by 10 
        displayArray(randomNumbers);

        // adds all the numbers together and divides it by 100
        double mean = mean(randomNumbers);

        // calculates the standard deviation 
        double sd = standardDeviation(mean, randomNumbers);

        // goes through the arrayList and finds the highest number
        int largest = largestElement(randomNumbers);

        // removes the largest number from the arrayList
        randomNumbers.remove(Integer.valueOf(largest));

        // goes through the arrayList and finds the smallest number
        int smallest = smallestElement(randomNumbers);

        // replaces the smallest number with -99
        int smallestIndex = randomNumbers.indexOf(smallest);
        randomNumbers.set(smallestIndex, -99);

        System.out.println("\nAfter removing the largest element and replacing the smallest value with -99");

        // displays the new array
        displayArray(randomNumbers);
    }

    public static ArrayList<Integer> createArray()
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
        // returns the arraylist to main
        return randomNumbers;
    }

    public static void displayArray(ArrayList<Integer> randomNumbers)
    {
        int x = 0;
        System.out.println("100 Elements in the ArrayList, Orginized by 10");

        // displays the arraylist elements and evey 10 goes to a new line
        for (int i = 0; i < randomNumbers.size(); i++)
        {
            if (i == x)
            {
                System.out.print("\n" + randomNumbers.get(i) + " ");
                x = x + 10;
            }
            else
            {
                System.out.print(randomNumbers.get(i) + " ");
            }
        }  
    }

    public static int largestElement(ArrayList<Integer> randomNumbers)
    {
        int largest = randomNumbers.get(0);
        int index = 0;
        // searches through the arraylist and finds the largest number
        for (int i = 0; i < randomNumbers.size(); i++)
        {
            if (randomNumbers.get(i) > largest)
            {
                largest = randomNumbers.get(i);
                index = i;
            }
        }

        System.out.println("The largest element in the ArrayList is " + largest + " at index " + index);

        return largest;
    }

    public static int smallestElement(ArrayList<Integer> randomNumbers)
    {
        int smallest = randomNumbers.get(0);
        int index = 0;
        // searches through the arraylist and finds the smallest number
        for (int i = 0; i < randomNumbers.size(); i++)
        {
            if (randomNumbers.get(i) < smallest)
            {
                smallest = randomNumbers.get(i);
                index = i;
            }
        }

        System.out.println("The smallest element in the ArrayList is " + smallest + " at index " + index);

        return smallest; 
    }

    public static double mean(ArrayList<Integer> randomNumbers)
    {
        double totalNumber = 0;
        double addNumbers = 0;
        // adds two elements together and then adds that to totalNumber to keep a running count
        for (int i = 0; i < 99; i++)
        {
            addNumbers = randomNumbers.get(i) + randomNumbers.get(i+1);
            totalNumber = totalNumber + addNumbers;
        }
        // divides the totalNumber by 100 to get the mean
        double mean = totalNumber /100;
        System.out.println("\n\nMean: " + mean);

        return mean;
    }

    public static double standardDeviation(double mean, ArrayList<Integer> randomNumbers)
    {
        double newNumber = 0;
        // subtracts the element by the mean from the previous method then multiplies it by itself to get the square of that number
        for (int i = 0; i < 99; i++)
        {

            double subtractNumbers = randomNumbers.get(i) - mean;
            double squareNumbers = subtractNumbers * subtractNumbers;
            newNumber = newNumber + squareNumbers;
        }
        // divides the total by 100 and takes the square root of it to get the standard deviation
        double divideNumber = newNumber / 100;
        double rootNumber = Math.sqrt(divideNumber);

        System.out.println("Standard Deviation: " + rootNumber);

        return rootNumber; 
    }
        

}

