/*
 * Author: Samuel Hill
 * Date: 11-5-2025
 * Assignment: Assignment 7 Point.java
 * Description: creates a point class that has a generic type
 */
//create a generic class Point<T>
public class Point<T> {
   // fields private T x, y
   private T x;
   private T y;

    public Point(T x, T y) {
        this.x = x;
        this.y = y;
    }

    public T getX() {
        return x;
    }

    public T getY() {
        return y;
    }

    @Override
    public String toString() {
        return "Point<" + x + ", " + y + ">";
    }
}
