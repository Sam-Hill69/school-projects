import java.util.Scanner;
// an electonics company sells circuit boards at a 40 percent profit. If you know the retail price of a circuit board, you can calculate its profit
// with the following formula:
// profit = retail price * 0.4
public class circuitBoardProfit
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);
        double retailPrice, profit;
        // write a program that asks the user for the retail price of a circuit board
        System.out.println("What is the reatil price for this circuit board?: ");
        retailPrice = keyboard.nextDouble();
        // calculations the amount of profit earned for that product
        profit = retailPrice * 0.4;      
        // displays the results on the screen
        System.out.println("The cost of the circuit board is: " + retailPrice + "\nYour profit on this board is: " + profit);
    }
}
