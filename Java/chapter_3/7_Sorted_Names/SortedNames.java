import java.util.Arrays;
import java.util.Scanner; 
public class SortedNames 
{
    public static void main(String[] args) 
    {
        Scanner keyboard = new Scanner(System.in);
        
        System.out.println("Please give me a name: ");
        String nameOne = keyboard.nextLine();
        System.out.println("Please give me a name: ");
        String nameTwo = keyboard.nextLine();
        System.out.println("Please give me a name: ");
        String nameThree = keyboard.nextLine();
        String[] strings = {nameOne, nameTwo, nameThree};

        Arrays.sort(strings);
        System.out.println(Arrays.toString(strings));
    }
    
}
// ask the user to enter three names and then display the names sorted in ascending order
