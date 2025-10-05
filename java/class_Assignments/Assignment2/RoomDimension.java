/*
 * Author: Samuel Hill
 * Date: 09/16/2025
 * Assignement: Assignment 2 RoomDimension.java
 * Desription: This program creates a class that stores the length and width of a room and calculate the area of the room
 */
public class RoomDimension
{
    private double length; 
    private double width; 

    public RoomDimension(double len, double w) 
    {
        // assigning the length
        this.length = len; 
        // assigning the width
        this.width = w; 
    }

    public double getArea() 
    {
        // calculate the area of the room
        double area = length * width; 
        double result = area;
        return result; 
    }

    public String toString()
    {
        //create a string variable to return
        String str = "\nLength: " + length + "\nWidth: " + width + "\nArea: " + getArea();
        return str; 
    }
}