import java.util.Scanner; 
public class salesTax
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);
        Double purchasePrice, state, county, total, taxTotal;
        // ask user to enter the amount of purchase 
        System.out.println("Enter purchase price: ");
        purchasePrice = keyboard.nextDouble();
        // calculate state = 0.04 && county = 0.02
        state = purchasePrice * 0.04;
        county = purchasePrice * 0.02;
        taxTotal = state + county;
        total = purchasePrice + state + county;
        // display all the amounts
        System.out.println("\nYour purchase price was: " + purchasePrice + "\n State Tax:" + state + 
                                "\n County Tax: " + county + 
                                "\n The total tax you will be paying is: " + taxTotal
                                     + "\n Your total is: " + total);

    }








}
// 