/* 
 * Author: Samuel Hill
 * Date: 10-21-2025
 * Assignment: Assignment 5 Languages.java
 * Desription: Calculates how many different combinations can be made with 
 *             any given two numbers.
*/


import java.util.Scanner;

public class Languages 
{
    static Scanner keyboard = new Scanner(System.in);
        public static void main(String[] args) 
        {
        System.out.print("Enter how many programming languages are available to learn: ");
        int n = keyboard.nextInt();

        System.out.print("Enter how many programming languages that you must learn: ");
        int x = keyboard.nextInt();

        System.out.print("Combinations: " + function(n, x));
        }

        public static int function(int n, int x)
        {
            if (x < 0 || x > n)
            {
                return 0;
            }
            else if (x == 0)
            {
                return 1;
            }
            else if (x == n)
            {
                return 1;
            }

            return function(n-1, x) + function(n - 1, x - 1);
           
        }
}
