/*
Author:         Samuel Hill
Date:           10-28-2025
Assignment:     Assignment 6 Assignemnt_6.java 
Desicription:   Takes an array as a argument and sorts the elements
*/
public class sort {
    
    public static int[] selectionSort(int[] array) {
        int startScan;
        int index;
        int minIndex;
        int minValue;
        //starts the scan at index 0 and checks to see if the index is less than the last index
        for (startScan = 0; startScan < (array.length-1); startScan++){
            //assigns the minIndex to startScan 
            minIndex = startScan;
            //assigns minValue to array[index that startscan is assigned to]
            minValue = array[startScan];
            //this for loop scans the next index
            for (index = startScan + 1; index < array.length; index++){ 
                //compares the current index value to the minValue 
                if (array[index] < minValue){
                    minValue = array[index];
                    minIndex = index;
                }
            }
            //rearranges the array
            array[minIndex] = array[startScan];
            array[startScan] = minValue;
        }

        return array;
    }

}
