/*
 * Author:              Samuel Hill   
 * Date:                  10-01-2025  
 * Assignment:      Assignment 3  main.java
 * Description:      This is the main portion of the project that brings everything together and runs the program
 *                        
 */
import java.util.Scanner;
import java.util.ArrayList;

public class Main {

  public static void main(String[] args) {

    Scanner keyboard = new Scanner(System.in);
    boolean running = true;
    ArrayList<Service> services = new ArrayList<>(); 

    while (running) {

      System.out.println("---------------------------------------");
      System.out.println("Welcome to Home Inspection & Repair Co.");
      System.out.println("---------------------------------------");
      System.out.println("1: Inspection Service - Add to ArrayList");
      System.out.println("2: Repair Service - Add to ArrayList");
      System.out.println("3: Emergency Service - Add to ArrayList");
      System.out.println("4: Process All Services");
      System.out.println("0: Exit");

      int serviceType = keyboard.nextInt();

      if (serviceType == 1) {
        InspectionService inspection = new InspectionService(
          gatherDouble("Enter inspection fee $: "),
          gatherInt("Enter invoice #: "),
          gatherString("Enter first name: "),
          gatherString("Enter last name: "),
          gatherBoolean("Is the customer qualified for a discount? (Y or N): "),
          gatherDouble("Enter discount rate (12 for 12%): ")
        );
        services.add(inspection); 
        System.out.println("Inspection Service added.");
      } else if (serviceType == 2) {
        RepairService repair = new RepairService(
          gatherInt("Enter hours worked: "),
          gatherDouble("Enter hourly rate: "),
          gatherInt("Enter invoice #: "),
          gatherString("Enter first name: "),
          gatherString("Enter last name: "),
          gatherBoolean("Is the customer qualified for a discount? (Y or N): "),
          gatherDouble("Enter discount rate (12 for 12%): ")
        );
        services.add(repair); 
        System.out.println("Repair Service added.");
      } else if (serviceType == 3) {
        EmerencyService emergency = new EmerencyService(
          gatherDouble("Enter emergency rate: "),
          gatherInt("Enter invoice #: "),
          gatherString("Enter first name: "),
          gatherString("Enter last name: "),
          gatherBoolean("Is the customer qualified for a discount? (Y or N): "),
          gatherDouble("Enter discount rate (12 for 12%): "),
          gatherDouble("Enter hourly rate: "),
          gatherInt("Enter hours worked: ")
        );
        services.add(emergency);
        System.out.println("Emergency Service added.");
      } else if (serviceType == 4) {
        System.out.println("\nProcessing all services...");
        for (Service service : services) {
          System.out.println(service.toString());
          System.out.println("Calculated Cost: $" + service.calculateCost());
        }
      } else if (serviceType == 0) {
        running = false;
      }
    }
  }

  public static String gatherString(String prompt) {
    System.out.print(prompt);
    return new Scanner(System.in).nextLine();
  }

  public static int gatherInt(String prompt) {
    System.out.print(prompt);
    return new Scanner(System.in).nextInt();
  }

  public static double gatherDouble(String prompt) {
    System.out.print(prompt);
    return new Scanner(System.in).nextDouble();
  }

  public static boolean gatherBoolean(String prompt) {
    System.out.print(prompt);
    return new Scanner(System.in).nextLine().equalsIgnoreCase("Y");
  }
}
