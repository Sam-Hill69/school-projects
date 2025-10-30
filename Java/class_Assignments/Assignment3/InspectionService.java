/*
 * Author:              Samuel Hill   
 * Date:                  10-01-2025  
 * Assignment:      Assignment 3  InspectionService.java
 * Description:      This subclass does all the calculations for the inspection invoices
 *                        
 */
//it inherits the functionality of superSERVICE, but also includes one data member that reprsents the service charge
//it includes constructors, getters, setters, and toString methods.
//the service charge should be validated in the constructor and setter.
//it should override calculateCost() method so that the service charge is returned.
//if the customer is qualified for a discount give it to the customer based on discount rate.
public class InspectionService extends Service {

  private double serviceCharge;


  // create a constructor method
  public InspectionService(double serCharge, int invNum, String fName, String lName, boolean discStatus, double discRate) {
    super(invNum,  fName, lName, discStatus, discRate);

    if (serCharge < 0) { 
      throw new IllegalAccessError("Service charge must be a number.");
    }
    
    serviceCharge = serCharge;   

  }

  // create a getter method
  public double getServiceCharge() {
    return serviceCharge;
  }

  // create a setter method
  public void setServiceCharge(double serCharge) {
    if (serCharge < 0) {
      throw new IllegalArgumentException("Service charge must be a positive number.");
    }
    serviceCharge = serCharge;
  }

  // override calculateCost method
  @Override
  public double calculateCost() {
    double cost = serviceCharge;
    if (getDiscountStatus()) {
      cost *= (1 - getDiscountRate());
    }
    return cost;
  }

  // create a toString method
  @Override
  public String toString() {
    return super.toString() + ", Service Charge: " + serviceCharge;
  }
}
