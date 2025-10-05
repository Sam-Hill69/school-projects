/*
 * Author:              Samuel Hill   
 * Date:                  10-01-2025  
 * Assignment:      Assignment 3  Service.java
 * Description:       This is the super class for the other subclasses. It initializes all the information that 
 *                    gets gathered to do the calculations need for the invoice.
 */
//has private instance variables representing the service invoice number, 
//First and Last name of the customer, status of discount qualifications, 
//and discount rate -done
//
//it includes constructors, getters, setters, and toString methods. 
//The discound rate should be validating in the constructor and setters
//
//it also has a method calculatecost() that is supposed to return a double 
//indeicating the cost associated with the service. This method should return 
//0.0 in the superclass (it is up to the subclass how to implement it).
public abstract class Service { 

  private int invoiceNumber;
  private String firstName;
  private String lastName;
  private boolean discountStatus;
  private double discountRate;

  // create a constructor method
  public Service(int invNum, String fName, String lName, boolean discStatus, double discRate) {
    if (discRate < 0) {
      throw new IllegalArgumentException("Discount rate must be a positve number. ");
    }
    invoiceNumber = invNum;
    firstName = fName;
    lastName = lName;
    discountStatus = discStatus;
    discountRate = discRate;

  }

  // create a getter method
  public int getInvoiceNumber() {
    return invoiceNumber;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public boolean getDiscountStatus() {
    return discountStatus;
  }

  public double getDiscountRate() {
    if (discountRate < 0) {
      throw new IllegalArgumentException("Discount rate must be a positive number.");
    }
    return Math.min(discountRate / 100.0, 1.0);
  }

  // create a setter method
  public void setFirstName(String fName) {
    firstName = fName;
  }

  public void setLastName(String lName) {
    lastName = lName;
  }

  public void setDiscountStatus(boolean discStatus) {
    discountStatus = discStatus;
  }

  public void setDiscountRate(double discRate) {
    if (discRate < 0) {
      throw new IllegalArgumentException("Discount rate must be a positive number.");
    }
    discountRate = discRate;
  }

  // create a toString method
  @Override
  public String toString() {
    return "Invoice Number: " + invoiceNumber + ", Customer: " + firstName + " " + lastName +
           ", Discount Status: " + discountStatus + ", Discount Rate: " + discountRate;
  }

  // make calculateCost method abstract
  public abstract double calculateCost(); 
}
