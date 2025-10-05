/*
 * Author: Samuel Hill
 * Date: 09/16/2025
 * Assignement: Assignment 2 RoomCarpet.java
 * Desription: This program creates a class that takes the area from the RoomDimensions class and calculates the total price of carpet
 */
public class RoomCarpet 
{
    private RoomDimension roomDimension; 
    private double carpetCost; 

    // Constructor for the RoomCarpet class
    public RoomCarpet(RoomDimension dlm, double cost) 
    {
        // Assign the room dimension
        this.roomDimension = dlm; 
        // Assign the carpet cost
        this.carpetCost = cost;
    }

    // This method calculates the total cost of the carpet
    public double getTotalCost() 
    {
        // Get the area of the room
        double area = roomDimension.getArea(); 
        // Multiply the area by the carpet cost
        double totalCost = area * carpetCost; 
        // Return the total cost
        return totalCost;
    }
}
