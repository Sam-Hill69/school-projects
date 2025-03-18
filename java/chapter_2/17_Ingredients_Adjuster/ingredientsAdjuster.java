import java.util.Scanner;
// a cookie recipe calls for the following ingredients:
// 1.5 cups of water
// 1 cup of butter
// 2.75 cups of flour
// the recipe produces 48 cookies with these amounts of the ingredients
// write a program that asks the user how many cookies he or she wants to make, and then displays the number of cups of each ingredient needed for the specific number of cookies
public class ingredientsAdjuster {

    public static void main(String[] args) {
        double water = 1.5, butter = 1.0, flour = 2.75, waterPerCookie, butterPerCookie, flourPerCookie;
        waterPerCookie = water / 48;
        butterPerCookie = butter / 48;
        flourPerCookie = flour / 48;
        Scanner keyboard = new Scanner(System.in);
        System.out.println("How many cookies would you like to make?: ");
        Double batchSize = keyboard.nextDouble();
        Double waterPerBatch = waterPerCookie * batchSize;
        Double butterPerBatch = butterPerCookie * batchSize;
        Double flourPerBatch = flourPerCookie * batchSize;
        System.out.println("In order to make " + batchSize + " you will need: \n" + waterPerBatch + " cup(s) of sugar.\n" + butterPerBatch + " cup(s) of butter.\nAnd " + flourPerBatch + 
                                    "cup(s) of flour.");
    }
}