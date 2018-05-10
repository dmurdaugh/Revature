package com.revature;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.revature.pojo.Employee;

public class Driver {

	public static void main(String[] args) {

		// declare an array of integers
        int[] anArray;
        anArray = new int[10]; // put size of array instead of 10
        int i;
        int n=7; // this will be read from the argument
        int[] temp;// setup temporary array
        temp=new int[n];// set array size to be size of argument OR reasonably sized number
        
        //initialize array with numbers
        for(i=0;i<10;i++){
        	anArray[i]=i;
        	if(i<n){
        		temp[i]=anArray[i];
        	}
        }
        
        //debug print
        for (i = 0; i < 10; i++)
            System.out.print(anArray[i] + " ");
        
        //rotate array by n, saving the first numbers to be used later
        for(i=0;i<10-n;i++){

        	anArray[i]=anArray[i+n];
        }
        
        //debug print
        System.out.println();
        for (i = 0; i < 10; i++)
            System.out.print(anArray[i] + " ");
        
        //Place the numbers saved at the end of the array
        //NOTE: Everywhere you see '10' should be replaced by a variable so you can switch
        int j=0;
        for(i=10-n;i<10;i++){
        	anArray[i]=temp[j];
        	j++;
        }
        
        //debug print
        System.out.println();
        for (i = 0; i < 10; i++)
            System.out.print(anArray[i] + " ");
	}
	
	public static int addNumbers(Employee emp){
		//emp= new Employee(5,"new", "new")
		emp.setId(10);
		
		return emp.getId();
	}
	
	
	
	
	
	//Method for AutoBoxing, boxing ,unboxing , wrapper classes and info on COllections
	public static void boxing(){
		
	/*
	 * Boxing: Comparing primitives to their corresponding Object
	 * 		Every Primitive has a corresponding Object = "Wrapper Classes"
	 * 			e.g. int to Integer
	 * 				boolean to Boolean
	 * 				double to Double etc.
	 * Unboxing: Converting object back into a primitive
	 */
		int num1=5;
		Integer num2=5;//AutoBoxing...Introduced in Java 1.5
		
		Integer num3= new Integer(5); // syntax before autoboxing
				
		String number = "5";
		int newNumber = Integer.parseInt(number);
		double newDouble= Double.parseDouble(number);
		
		
		//Arrays = grouping of elements
		//Collections- dynamic arrays and other types of groupings of elements
		List<String> myList= new ArrayList<>();
		myList.add("String"); // AutoBoxing is needed for COllection since they don't allow primitives to be stored only Objects
		
	}
	
	public static void employee(){
	//Used for final keyword example
	Employee mark = new Employee(1,"Mark","Facebook");
	Employee tom = new Employee(2,"Tom","Myspace");
	
	System.out.println(tom + "tom");
	System.out.println(mark + "mark");
	
	System.out.println("Mark and Tom's company: "+Employee.getCompany());
	}
}
