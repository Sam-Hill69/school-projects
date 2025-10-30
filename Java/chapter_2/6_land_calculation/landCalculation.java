// one acre of land is equivalant to 43560 square feet. Write a program that calculates the number of acres in a tract of land with 389767 
// square feet. Hint: divide the size of the tract of land by the size of an acre to get the number of acres.
public class landCalculation 
{
    public static void main(String[] args)
    {
        double acre = 43560, tract = 389767, totalAcres;
        totalAcres = tract / acre;
        System.out.println(totalAcres);
    }
    
}