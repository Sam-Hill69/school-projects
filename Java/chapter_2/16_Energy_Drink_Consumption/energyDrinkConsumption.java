// a soft drink company recently surveyed 12,467 of its customers and found that approximately 14 percent of thse surveyed purchase one or more energy drinks per week.
// Of those customers who purchase energy drinks, approximately 64 percent of them prefer citrus flavored energy drinks.

public class energyDrinkConsumption 
{
    public static void main(String[] args) 
    {
        double totalSurveyed = 14467.0, customers, citrusCustomers;
        // Write a program that displays the following:
        // the approcimate number of customers in the survey who purchase one or more energy drinks a week
        customers = totalSurveyed * 0.14;
        System.out.println("The approximate number of customers that purchase energy drinks one or more times per week: " + customers);
        // The approximate number of customers in the survey who prefer citrus flavored energy drinks        
        citrusCustomers = customers * 0.64;
        System.out.println("The approx. number of those customers that prefer citrus flavored drinks is: " + citrusCustomers);



    }
    
}
