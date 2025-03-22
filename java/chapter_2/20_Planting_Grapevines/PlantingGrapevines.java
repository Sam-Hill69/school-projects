import java.util.Scanner;
public class PlantingGrapevines 
{
    public static void main(String[] args) 
    {
        Scanner keyboard = new Scanner(System.in);
        // ask user fo the length of the row in feet
        System.out.println("How long is your Grapevine row? ");
        Double length = keyboard.nextDouble();
        // ask the user the amount of space used by an end-post assembly in feet
        System.out.println("How much space do the end-post take up? ");
        Double endPosts = keyboard.nextDouble();
        // ask the user the amount of space between the vines in feet
        System.out.println("How much space is in between the vines? ");
        Double space = keyboard.nextDouble();
        // display the amount of grapevines that will fit in the row
        Double endPostsCalculation = endPosts * 2;
        Double topCalculation = length - endPostsCalculation;
        Double finalCalulation = topCalculation / space;
        System.out.println("You can plant " + finalCalulation + " Grapevines per row");




    }
    
}