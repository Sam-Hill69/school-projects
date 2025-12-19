/*
 * Author: Samuel Hill
 * Date: 11-5-2025
 * Assignment: Assignment 7 Pointdemo.java
 * Description: gathers the coordinates from the user and uses it to print out the point 
 */
public class PointDemo {
    
    public static void main(String[] args) {
        // Create points with different types
        Point<Integer> intPoint = new Point<>(10, 20);
        Point<Double> doublePoint = new Point<>(3.14, 2.718);
        Point<String> stringPoint = new Point<>("x", "y");

        // Print original points
        System.out.println("Original Points:");
        System.out.println("Integer Point: " + intPoint);
        System.out.println("Double Point: " + doublePoint);
        System.out.println("String Point: " + stringPoint);

        // Call swapCoordinates with different types
        System.out.println("\nPoints after swapping coordinates:");
        System.out.println("Swapped Integer Point: " + swapCoordinates(intPoint));
        System.out.println("Swapped Double Point: " + swapCoordinates(doublePoint));
        System.out.println("Swapped String Point: " + swapCoordinates(stringPoint));
    }

    // Generic method that swaps the coordinates of a Point
    public static <T> Point<T> swapCoordinates(Point<T> point) {
        // Create a new point with swapped coordinates
        return new Point<>(point.getY(), point.getX());
    }
}
