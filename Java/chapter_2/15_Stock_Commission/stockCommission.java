import java.util.Scanner;
// Kathryn bought 600 shares of stock at a price of $21.77 per share.
// She must pay her stock broker a 2 percent commission for the transaction
public class stockCommission 
{

    public static void main(String[] args)
    {
        Double shares = 600.0, pricePerShare = 21.77, commission = 0.02, totalPrice, commissionPaid, total;

        // Write a program that calculates and displays the following:
        // The amount paid for the stock alone 
        totalPrice = shares * pricePerShare;
        System.out.println("Total price paid: $" + totalPrice);
        // The amount of the commission
        commissionPaid = totalPrice * commission;
        System.out.println("Commission amount paid: $" + commissionPaid);
        // the total amount paid
        total = totalPrice + commissionPaid;
        System.out.println("The total that will be deducted from your bank account is: $" + total);



    }
}
