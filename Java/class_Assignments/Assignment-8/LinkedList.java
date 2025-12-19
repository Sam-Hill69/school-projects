/*
* Author:       Samuel Hill
* Date:         11-12-2025
* Assignment:   Assignment 8 LinkedList.java
* Description:  Creates linked lists and inserts data into the list and displays the players in descending order
*/
public class LinkedList {

    class Node {
        String name;
        int score;
        Node next;

        Node(String player, int playerScore) {
            name = player;
            score = playerScore;
            next = null;
        }
    }

    Node head;
    int listSize = 0;
    int max = 10;

    public LinkedList() {
        head = null;
    }
   //implement a class that maintains a list of the top 10 performers in a video game. An entery on the list consists of a name and score, and list is kept sorted in descending order of scores.

   /*Here is an example of such a list when it has only four elements:
    * Spike         120
    * Whiz          105
    * G-Man         99
    * JediMaster    95
    */

    public void insert(String newName, int newScore) {
        Node newNode = new Node(newName, newScore);

        if (listSize == max) {
            Node temp = head;

            if (temp == null) {
                return;
            }

            while (temp.next != null) {
                temp = temp.next;
            }

            int minScore = temp.score;

            if (newScore <= minScore) {
        
                return;
            }
        }

        if (head == null || newScore > head.score) {
            newNode.next = head;
            head = newNode;
            listSize++;
        }else {
            Node current = head;

            while (current.next != null && current.next.score >= newScore) {
                current = current.next;
            }

            newNode.next = current.next;
            current.next = newNode;
            listSize++;
        }

        if (listSize > max) {
            Node current = head;

            for (int i = 0; i < max -1; i++) {
                current = current.next;
            }

            current.next = null;
            listSize = max;
        }
    }

    public void printList() {
        Node printPtr = head;
        System.out.println("\n--- TOP PERFORMERS ---");

        if (head == null) {
            System.out.println("List is empty for some reason.");

            return;
        }

        while (printPtr != null) {
            System.out.printf("%-15s %d%n", printPtr.name, printPtr.score);
            printPtr = printPtr.next;
        }

        System.out.println("---------------------------");

        System.out.println("Current Size: " + listSize);
    }

    public static void main(String[] args) {
        LinkedList gameScores = new LinkedList();

        System.out.println("Starting to add scores... ");

        gameScores.insert("Spike", 120);
        gameScores.insert("JediMaster", 95);
        gameScores.insert("Whiz", 105);
        gameScores.insert("G-Man", 99);

        gameScores.printList();

        gameScores.insert("P1",80);
        gameScores.insert("P2", 70);
        gameScores.insert("P3", 60);
        gameScores.insert("P4", 50);
        gameScores.insert("P5", 40);
        gameScores.insert("P6", 30);

        gameScores.printList();

        gameScores.insert("Newbie", 20);
        gameScores.insert("Ace", 110);

        gameScores.printList();
    }
    //use a class based on linked lists. The class should have a constructor that sets up an empty list, and a void insert(String name, int score) method that adds a name and a score pair to the list
    //The insert metod puts the entry in the proper position so that the list stays sored by score. 
    //The list should have a max size of 10.
    //after the list has 10 elements an attempt to add a name with a score that is less than or equal to the minimum score on the list is ignored, and adding a score that is greater than the min score couses an entry with the min score to be dropped from the list.
    //
}
