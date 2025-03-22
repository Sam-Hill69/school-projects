// here are the details of the purchase:
// the number of shares that joe purchased was 1000.
// when joe purchased the stock, he paid $32.87 per share
// joe paid his stockbroker a commission that amounted to 2% of the amount he paid for the stock
// two weeks later joe sold the stock. here are the details of the sale:
// the number of shares that joe sold was 1000
// he sold the stock for $33.92 per share
// he paid his stickbroker another commission that amounted to 2% of the amount he recieved for the stock

public class StockTransactionProgram 
{
    public static void main(String[] args) 
    {
        Double shares = 1000.0, orignalPrice = 32.87, newPrice = 33.92, commmission = 0.02;
        // write a program that displays the following information:
        // the amount of money joe paid for the stock
        Double orignalPaid = shares * orignalPrice;
        System.out.println("Joe originally paid $" + orignalPaid + " for the stocks");
        // the amount of commission joe paid his broker when he bought the stock
        Double commissionPaid = orignalPaid * commmission;
        System.out.println("Joe paid $" + commissionPaid + " to the stock broker");
        Double orignalTotal = orignalPaid + commissionPaid;
        // the amount joe sold the stock for
        Double soldPrice = newPrice * shares;
        System.out.println("Joe sold his shares for $" + soldPrice);
        // the amount of commission joe paid his broker when he sold the stock
        Double newCommissionPaid = soldPrice * commmission;
        System.out.println("Joe paid $" + newCommissionPaid + " to his stock broker");
        Double newTotal = soldPrice + newCommissionPaid;
        // display the amount of profit that joe made after selling his stock and paying the two commissions to his broker. (if the amount of profit that your program displays is a negative number, then 
        // joe lost money on the transaction)
        Double profit = newTotal - orignalTotal;
        System.out.println("Joe made a profit of $" + profit);
        

    }    
}
