/*
Author:         Samuel Hill
Date:           10-28-2025
Assignment:     Assignment 6 Assignemnt_6.java 
Desicription:   Takes an account number as a argument and uses a sequential search to check if its valid
*/
public class search {
   
    public static boolean sequentialSearch(int[] array, int value) { 

        int index;
        boolean found;

        index = 0;
        found = false;

        while (!found && index < array.length) {
            if (array[index] == value) {
                found = true;
            }
            index++;

        }
        return found;
    }

    public static boolean binarySearch(int[] array, int value){

        int first = 0;
        int last = array.length-1;
        int middle;
        boolean found = false;
        while (!found && first <= last) {
            middle = (first + last) / 2;

            if (array[middle] == value){
                found = true;
            }else if(array[middle] > value) {
                last = middle - 1;
            }else {
                first = middle + 1;
            }
        }
        return found;
    }
}
