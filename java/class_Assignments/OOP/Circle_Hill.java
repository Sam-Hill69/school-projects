import java.util.Scanner;

public class Circle_Hill
{
    private Double radius;
    final Double PI = 3.14159;

    public static void main(String[] args) 
    {
        Scanner keyboard = new Scanner(System.in);
        System.out.println("What is the circles radius? ");
        Double radius = keyboard.nextDouble();
        Circle c = new Circle(radius);
        System.out.println("The radius of your circle is: " + c.getRadius());
        System.out.println("The area of your circle is: " + c.area());
        System.out.println("The diameter of your circle is: " + c.diameter());
        System.out.println("The Circumfrence of your circle is: " + c.circumfrence());
    }
    

    public Circle_Hill(Double radius)
    {
        this.radius = radius;
    }

    public Circle_Hill()
    {
        this.radius = 0.0;
    }

    public void setRadius(Double radius)
    {
        this.radius = radius;
    }

    public Double getRadius()
    {
        return radius;
    }

    public Double area()
    {
        return PI * radius * radius;
    }

    public Double diameter()
    {
        return radius * 2;
    }

    public Double circumfrence()
    {
        return 2 * PI * radius;
    }
}
