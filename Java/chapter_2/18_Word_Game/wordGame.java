import java.util.Scanner;

public class wordGame 
{

    public static void main(String[] args) 
    {

        Scanner keyboard = new Scanner(System.in);
        System.out.println("Please give me your name: ");
        String usersName = keyboard.nextLine();
        System.out.println("Please give me your age: ");
        String usersAge = keyboard.nextLine();
        System.out.println("Please give me the name of a city: ");
        String usersCity = keyboard.nextLine();
        System.out.println("Please give me a profession: ");
        String usersProfession = keyboard.nextLine();
        System.out.println("Please give me a type of animal: ");
        String usersAnimal = keyboard.nextLine();
        System.out.println("Please give me a name for your pet: ");
        String usersPetName = keyboard.nextLine();
        System.out.println("Please give me the name of a college: ");
        String usersCollege = keyboard.nextLine();
        System.out.println("There once was a person named " + usersName + " who lived in " + usersCity + ". At the age of " + usersAge + 
                                ", " + usersName + " went to college at " + usersCollege + ". " + usersName + " graduated and went to work as a " 
                                    + usersProfession + ". Then " + usersName + " adopted a(n) " + usersAnimal + " named " + usersPetName +
                                         ". They both lived happily ever after.");

    }
}
// write a program that plays a word game with the user, The program should ask the user to enter the following:
// his or her name
// his or her age
// the name of a city
// the name of a college
// a profession
// a type of animal
// a pets name
// after the user has entered these items, the program should display the following story, inserting the users input into the appropriate location
// "There once was a person named NAME who lived in CITY. At the age of AGE, NAME went to college at COLLEGE. NAME graduated and went to work as
// a PROFESSION. Then NAME adopted a(n) ANIMAL named PETS NAME. They both lived happily ever after."