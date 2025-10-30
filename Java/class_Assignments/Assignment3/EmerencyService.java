/*
 * Author:              Samuel Hill   
 * Date:                  10-01-2025  
 * Assignment:      Assignment 3  EmergencyService.java
 * Description:      This program is the subclass to the repair program, It does all the same things as repairservices
 *                   but adds an addition expense as an emergency fee      
 */
/*It inherits the functionality of super class RepairService, but also includes one data member that represents a rate that the company charges for the emergency service.
It includes constructors, getters, setters, and toString methods.
The emergency rate should be validated in the constructor and setter.
It should override method calculateCost() so that it returns the service charge by multiplying an emergency rate with the hour-based cost.
If the customer is qualified for a discount, give it to the customer based on discount rate.*/

public class EmerencyService extends RepairService {

   private double emergencyRate;

   public static void main(String[] args) {
      
   }

   public EmerencyService() {
      super(0, "", "", false, 0.0, 0.0, 0);
   }

   public EmerencyService(double emergencyRate, int invNum, String fName, String lName, boolean discStatus, double discRate, double hourlyRate, int hoursWorked) {
      super(invNum, fName, lName, discStatus, discRate, hourlyRate, hoursWorked);
      if (emergencyRate < 0) {
         throw new IllegalArgumentException("Emergency rate must be a positive number.");
      }
      this.emergencyRate = emergencyRate;
   }

   public double getEmergencyRate() {
      return emergencyRate;
   }

   public void setEmergencyRate(double emergencyRate) {
      if (emergencyRate < 0) {
         throw new IllegalArgumentException("Emergency rate must be a positive number.");
      }
      this.emergencyRate = emergencyRate;
   }

   @Override
   public double calculateCost() {
      double baseCost = getHoursWorked() * getHourlyRate(); 
      double cost = baseCost * emergencyRate;
      if (getDiscountStatus()) {
         cost *= (1 - getDiscountRate());
      }
      return cost;
   }

   @Override
   public String toString() {
      return super.toString() + ", Emergency Rate: " + emergencyRate;
   }
}
