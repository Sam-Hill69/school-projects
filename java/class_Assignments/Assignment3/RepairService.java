/*
 * Author:              Samuel Hill   
 * Date:                  10-01-2025  
 * Assignment:      Assignment 3  RepairService.java
 * Description:      This program is one of the subclasses and does all the calculations for the repair section of the program
 *                    
 */
//It inherits the functionality of super Service, but also includes two data members that represent the hours worked and the hourly rate.
//It includes constructors, getters, setters, and toString methods.
//The hours worked and hourly rate should be validated in the constructor and setter.
//It should override calculateCost() method so that it returns the hourly-based service charged.
//If the customer is qualified for a discount, give it to the customer based on discount rate.
public class RepairService extends Service {

  private int hoursWorked;
  private double hourlyRate;

  // create a constructor method
  public RepairService(int invNum, String fName, String lName, boolean discStatus, double discRate, double rate, int hours) {
    super(invNum, fName, lName, discStatus, discRate); 
    if (hours < 0 || rate < 0) {
      throw new IllegalArgumentException("Hours worked and hourly rate must be positive numbers."); 
    }
    hoursWorked = hours;
    hourlyRate = rate;
  }

  public RepairService(int hours, double rate, int invNum, String fName, String lName, boolean discStatus, double discRate) {
    super(invNum, fName, lName, discStatus, discRate);
    if (hours < 0 || rate < 0) {
      throw new IllegalArgumentException("Hours worked and hourly rate must be positive numbers.");
    }
    hoursWorked = hours;
    hourlyRate = rate;
  }

  public int getHoursWorked() {
    return hoursWorked;
  }

  public void setHoursWorked(int hours) {
    if (hours < 0) {
      throw new IllegalArgumentException("Hours worked must be a positive number.");
    }
    hoursWorked = hours;
  }

  public double getHourlyRate() {
    return hourlyRate;
  }

  public void setHourlyRate(double rate) {
    if (rate < 0) {
      throw new IllegalArgumentException("Hourly rate must be a positive number.");
    }
    hourlyRate = rate;
  }

  @Override
  public double calculateCost() {
    double cost = hoursWorked * hourlyRate;
    if (getDiscountStatus()) {
      cost *= (1 - getDiscountRate()); 
    }
    return cost;
  }

  @Override
  public String toString() {
    return super.toString() + ", Hours Worked: " + hoursWorked + ", Hourly Rate: " + hourlyRate;
  }
}
