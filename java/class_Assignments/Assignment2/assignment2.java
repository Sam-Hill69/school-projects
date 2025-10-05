/*
 * Author: Samuel Hill
 * Date: 09/16/2025
 * Assignement: Assignment 2 assignment2.java
 * Desription: This program asks the user for the length and width of a room and the cost per square foot of carpeting. Then displays the total cost
 */

// Import Scanner class for user input
import java.util.Scanner; 

public class assignment2 
{
    public static void main(String[] args) 
    {
        // Create a Scanner object for input
        Scanner scanner = new Scanner(System.in);
        System.out.println("This program will display price to carpet a room."); // Print program purpose
        
        // Ask user for the length of the room
        System.out.print("Enter the length in feet: ");
        double roomLengthInFeet = scanner.nextDouble(); 
        
        // Ask user for the width of the room
        System.out.print("Enter the width in feet: ");
        double roomWidthInFeet = scanner.nextDouble(); 

        // Create a RoomDimension object
        RoomDimension roomDimension = new RoomDimension(roomLengthInFeet, roomWidthInFeet);

        // Print the room dimensions
        System.out.println("Room dimensions: " + roomDimension);
        
        // Ask user for the cost of carpet per square foot
        System.out.print("Enter the cost of carpet per square foot: ");
        double carpetCostPerSquareFoot = scanner.nextDouble(); 

        // Create a RoomCarpet object
        RoomCarpet roomCarpet = new RoomCarpet(roomDimension, carpetCostPerSquareFoot);
        
        // Print the total cost of the carpet
        System.out.println("Carpet cost: $" + roomCarpet.getTotalCost());
        
        scanner.close(); 
    }
}