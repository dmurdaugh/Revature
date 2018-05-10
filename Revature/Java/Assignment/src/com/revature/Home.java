package com.revature;

public class Home implements Enterface {

	private int address;
	private String streetName;
	String material;
	int floor;
	
	public Home(){
		address=123;
		streetName="Default St.";
		material="Brick";
		floor=1;
	}

	public Home(int address, String streetName, String material, int floor) {
		super();
		this.address = address;
		this.streetName = streetName;
		this.material = material;
		this.floor= floor;
	}

	public int getAddress() {
		return address;
	}

	public void setAddress(int address) {
		this.address = address;
	}

	public String getStreetName() {
		return streetName;
	}

	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}

	@Override
	public String toString() {
		return "Home [address=" + address + ", streetName=" + streetName + ", material=" + material + "]";
	}

	@Override
	public void addFloor() {
		this.floor+=1;
		
	}

	@Override
	public void renovate() {
		this.floor-=1;
	}
	
	
}
