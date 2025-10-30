/*
 * Author: Samuel Hill
 * Date: 10-28-2025
 * Assignment: Assignment 6 verifyAccountNumber.java
 * Description: creates the array and calls the searching methods
 */
import java.util.Scanner;
public class checkAccountNumber {
    public static void main(String[] args) {
        //creates the accountNumbers array with the provide account numbers from the assignment 
        int[] accountNumbers = {5658845, 4520125, 7895122,	8777541, 8451277, 1302850, 8080152,	4562555, 5552012, 5050552, 7825877,	1250255,
1005231, 6545231, 3852085, 7576651, 7881200, 4581002};
        //creates a new Scanner and assigns it to keyboard
        Scanner keyboard = new Scanner(System.in);
       
        //asks the user to enter the account number
        System.out.println("Please enter your Account Number: ");
        //collects the account number and stores it in customerNumber
        int customerNumber = keyboard.nextInt();
        //closes the keyboard
        keyboard.close();
        //calls the sequential search to find the users number
        if(search.sequentialSearch(accountNumbers, customerNumber) == true){
            System.out.println("The account number entered is valid");
        }else{
            System.out.println("The account number entered is invalid");
        }
        //sorts the accountNumbers array and return the sorted array and updates the accountNumbers variable 
        accountNumbers = sort.selectionSort(accountNumbers);
        //searches through the binary array to find the users account number 
        if(search.binarySearch(accountNumbers, customerNumber) == true){
            System.out.println("The account number entered is valid");
        }else{
            System.out.println("The account number entered is invalid");
        }
    }

}    
