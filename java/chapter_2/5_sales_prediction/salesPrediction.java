// the East coast sales division of a company generates 62 percent of total sales. based on that percentage, write a program that will predict how much
//  the East coast division will generate if the company has $4.6 million in sales this year. Hint: use the value 0.62 to represent 62 percent
public class salesPrediction 
{
    public static void main(String[] args)
    {
        double totalSales = 4600000, eastCoastSales, calcSales;
        calcSales = totalSales * 0.62; 
        eastCoastSales = totalSales - calcSales;
        System.out.println(eastCoastSales);
    }
    
}