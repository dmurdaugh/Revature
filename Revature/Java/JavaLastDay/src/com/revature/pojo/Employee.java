package com.revature.pojo;

//final class -can't be extended
	//the String class is an example of a final class
public class Employee {
	
	private int id;
	private String name;
	private String job;
	
	
	private final static String COMPANY= "The World";
	
	
	public Employee(){}

	public Employee(int id, String name, String job) {
		super();
		this.id = id;
		this.name = name;
		this.job = job;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	//Once applied the final keyword, this method CAN be inherited but NOT overriden
	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	//Static getters and setter for the static company variable
		//once we changed company to"final", no longer can use a setter
	public static String getCompany() {
		return COMPANY;
	}

	
	
}
