package com.revature;

public class Homework {

	public static void main(String[] args) {
		
		Home house=new Home();
		Home apartment=new Home(777,"Lady Luck","Wood",2);
		System.out.println(house);
		System.out.println(apartment);
		Boss.reset(house);
		System.out.println(house);
	}
		
}
