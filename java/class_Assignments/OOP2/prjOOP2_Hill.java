import java.util.Scanner;

public class prjOOP2_Hill {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Create a RetailItem object
        System.out.print("Enter the item description: ");
        String description = scanner.nextLine();
        System.out.print("Enter the item price: ");
        double price = scanner.nextDouble();

        RetailItem item = new RetailItem(description, price);

        // Ask the user for the quantity of items being purchased
        System.out.print("Enter the quantity of items being purchased: ");
        int quantity = scanner.nextInt();

        // Create a CashRegister object
        CashRegister register = new CashRegister(item, quantity);

        // Display the sales subtotal, amount of sales tax, and total
        System.out.printf("Subtotal: $%.2f%n", register.getSubtotal());
        System.out.printf("Sales Tax: $%.2f%n", register.getTax());
        System.out.printf("Total: $%.2f%n", register.getTotal());

        scanner.close();
    }
}

class CashRegister {
    private RetailItem item;
    private int quantity;
    private static final double TAX_RATE = 0.06;

    public CashRegister(RetailItem item, int quantity) {
        this.item = item;
        this.quantity = quantity;
    }

    public double getSubtotal() {
        return quantity * item.getPrice();
    }

    public double getTax() {
        return getSubtotal() * TAX_RATE;
    }

    public double getTotal() {
        return getSubtotal() + getTax();
    }
}

// Define the RetailItem class
class RetailItem {
    private String description;
    private double price;

    public RetailItem(String description, double price) {
        this.description = description;
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }
}

