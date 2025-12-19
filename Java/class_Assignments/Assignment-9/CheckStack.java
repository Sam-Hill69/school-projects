/*
*Author: Samuel Hill
*Date: 11-19-2025
*Assignment: Assignment 9 Stack.java
*Description: Uses a stacked data structure to compare data in parenthese 
*/
import java.util.*;
public class CheckStack {
  //write a client program that uses Stack data structure to determine whether parentheses in a formula are balanced.
  public static void main(String[] args) {
    //The program should input a formula such as ((x+6)*(y-3)/(z+8)) and then use a stack to match parentheses
    Scanner keyboard = new Scanner(System.in);

    System.out.println("Please enter a formula: ");

    String userFormula = keyboard.nextLine();

    String isTheFormulaBalanced = checkParentheses(userFormula);

   System.out.println("\n" + isTheFormulaBalanced);
    
    keyboard.close();
  }

  public static String checkParentheses(String formulaToExamine) {

    Stack<Character> parenthesesStack = new Stack<Character>();
    
    for (int i = 0; i < formulaToExamine.length(); i++) {

      char currentChar = formulaToExamine.charAt(i);
      //It is required to use the following algorithim:
      if (currentChar == '('){
        //Each time we encounter a left parenthesis, it is pushed to the stack S.
        parenthesesStack.push(currentChar);
      }//each time we encounter a closing parenthesis,
      else if (currentChar == ')'){
        //If the stack is empty, the parenthesis in the formula are not balanced.
        if (parenthesesStack.isEmpty()) {
          
          return "Unbalanced Parentheses: fewer 'left' than 'right' parentheses.";
        }
        else{
          //the top object is popped from the stack S if the stack is not empty.
          parenthesesStack.pop();
        }
      }
    }
    //If the stack S is empty after we have processed the entire formula,
    //the parentheses is in the formula are balanced,
    if (parenthesesStack.isEmpty()) {
      return "Balanced Parentheses!";
    }
    //otherwise, they are not balanced
    else{
      return "Unbalanced Parentheses: More 'left' than 'right' Parentheses.";
    }
  }
}